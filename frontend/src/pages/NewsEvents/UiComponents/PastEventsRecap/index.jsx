import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import apiService from '../../../../api/apiService';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.5, 
            delay: 0.4,
            when: 'beforeChildren',
            staggerChildren: 0.2 
        } 
    },
};

const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.4, 
            ease: 'easeOut' 
        } 
    },
};

const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.4, 
            when: 'beforeChildren', 
            staggerChildren: 0.1 
        } 
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.3, 
            ease: 'easeOut' 
        } 
    },
    hover: { 
        scale: 1.05, 
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
        transition: { 
            duration: 0.2 
        } 
    },
};

const PastEventsRecap = ({ eventId }) => {
    const [groupedRecaps, setGroupedRecaps] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stripTags = (html) => {
        if (typeof html !== 'string' || !html) {
            console.log('Invalid title:', html);
            return 'Untitled Event';
        }
        const div = document.createElement('div');
        div.innerHTML = html;
        const text = div.textContent || div.innerText || '';
        console.log('Cleaned title:', text);
        return text.trim();
    };

    useEffect(() => {
        const fetchRecaps = async () => {
            setIsLoading(true);
            try {
                const response = await apiService.getNewsEventsRecap();
                console.log('Recaps API response:', response.data);
                const recaps = response.data;
                const today = new Date();
                const filteredRecaps = recaps.filter((recap) => {
                    if (!recap.event__date) {
                        console.warn(`Recap ID ${recap.id}: Missing event__date, assuming past if eventId matches`);
                        return eventId ? recap.event === eventId : true;
                    }
                    try {
                        const eventDate = new Date(recap.event__date);
                        const isPast = eventDate < today;
                        console.log(`Recap ID ${recap.id}: Event ${recap.event}, Date ${recap.event__date}, IsPast: ${isPast}`);
                        return isPast;
                    } catch (e) {
                        console.warn(`Recap ID ${recap.id}: Invalid event__date ${recap.event__date}, assuming past if eventId matches`);
                        return eventId ? recap.event === eventId : true;
                    }
                });
                const grouped = filteredRecaps.reduce((acc, recap) => {
                    const recapEventId = recap.event;
                    if (!acc[recapEventId]) {
                        acc[recapEventId] = {
                            title: stripTags(recap.event_title),
                            recaps: [],
                        };
                    }
                    acc[recapEventId].recaps.push(recap);
                    return acc;
                }, {});
                if (eventId) {
                    const filtered = {};
                    if (grouped[eventId]) {
                        filtered[eventId] = grouped[eventId];
                    }
                    console.log('Filtered grouped recaps:', filtered);
                    setGroupedRecaps(filtered);
                } else {
                    console.log('All grouped recaps:', grouped);
                    setGroupedRecaps(grouped);
                }
                setError(null);
            } catch (error) {
                console.error('Error fetching event recaps:', error);
                setError('Failed to load event recaps. Please try again later.');
                setGroupedRecaps({});
            } finally {
                setIsLoading(false);
            }
        };
        fetchRecaps();
    }, [eventId]);

    if (isLoading) {
        return (
            <motion.div
                className="text-center text-gray-500 py-8"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                Loading event recaps...
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                className="text-center text-red-500 py-8"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                {error}
            </motion.div>
        );
    }

    return (
        <motion.section
            className="mx-auto px-4 sm:px-6 md:px-12 lg:px-28"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2
                className="font-bold pb-8 sm:pb-8 lg:pb-16 text-center"
                variants={titleVariants}
            >
                <span className="text-primary-dark">Past Events</span>{' '}
                <span className="text-primary-orange">Recap</span>
            </motion.h2>
            {Object.keys(groupedRecaps).length > 0 ? (
                Object.entries(groupedRecaps).map(([eventId, { title, recaps }]) => (
                    <motion.div
                        key={eventId}
                        className="mb-8 sm:mb-8 lg:mb-16"
                        variants={groupVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {recaps.map((recap, index) => (
                                <motion.div
                                    key={recap.id}
                                    className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg"
                                    variants={imageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                >
                                    <img
                                        src={recap.image || 'https://via.placeholder.com/600x500?text=No+Image'}
                                        alt={`${title} Recap ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/600x500?text=Image+Not+Found';
                                            console.error(`Failed to load image: ${recap.image}`);
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))
            ) : (
                <motion.p
                    className="text-gray-600 text-center text-lg"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    No past event recaps available.
                </motion.p>
            )}
        </motion.section>
    );
};

export default PastEventsRecap;