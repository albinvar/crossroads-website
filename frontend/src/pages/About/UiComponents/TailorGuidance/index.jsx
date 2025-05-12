import React, { useState, useEffect } from 'react';
import apiService from '../../../../api/apiService';

const TailorGuidance = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiService.getAboutTailorGuidance()
            .then((response) => {
                const guidanceData = response.data[0]; 
                setData({
                    title: guidanceData?.title || '',
                    description: guidanceData?.description || '',
                });
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching tailor guidance data:', err);
                setError('Failed to load guidance information.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-gray-500 py-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-4">{error}</div>;
    }

    if (!data) {
        return <div className="text-center text-gray-500 py-4">No guidance data available.</div>;
    }

    return (
        <div className="space-y-8 text-center">
            <div
                dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <div
                dangerouslySetInnerHTML={{ __html: data.description }}
            />
        </div>
    );
};

export default TailorGuidance;