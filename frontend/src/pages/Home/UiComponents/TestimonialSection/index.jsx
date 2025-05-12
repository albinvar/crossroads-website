import React, { useRef, useState, useCallback, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import apiService from '../../../../api/apiService';

const TestimonialSection = () => {
    const leftSliderRef = useRef(null);
    const rightSliderRef = useRef(null);
    const mobileImageSliderRef = useRef(null);
    const mobileVideoSliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [testimonials, setTestimonials] = useState(null);
    const [testimonialsData, setTestimonialsData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchTestimonials = async () => {
            try {
                const [imagesResponse, videosResponse, titleResponse] = await Promise.all([
                    apiService.getTestimonialImages(),
                    apiService.getTestimonialVideos(),
                    apiService.getTestimonialTitle(),
                ]);

                const cleanHtml = (htmlString) => {
                    if (!htmlString) return '';
                    return htmlString;
                };

                const images = imagesResponse.data.map(item => ({
                    id: item.id,
                    name: cleanHtml(item.name),
                    flag: item.flag || '',
                    image: item.image || '',
                    rating: item.rating ? '★'.repeat(item.rating) : '★★★★★',
                    description: cleanHtml(item.description),
                }));

                const videos = videosResponse.data.map(item => ({
                    id: item.id,
                    name: cleanHtml(item.name),
                    flag: item.flag || '',
                    video: item.video,
                    thumbnail: item.thumbnail || '',
                    rating: item.rating ? '★'.repeat(item.rating) : '★★★★★',
                    description: cleanHtml(item.description),
                }));

                if (isMounted) {
                    setTestimonials({ images, videos });
                    setTestimonialsData({
                        testimonialTitle: titleResponse.data[0]?.title || '',
                        testimonialDescription: titleResponse.data[0]?.description || '',
                    });
                }
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                if (isMounted) {
                    setTestimonials({ images: [], videos: [] });
                    setTestimonialsData({
                        testimonialTitle: '',
                        testimonialDescription: '',
                    });
                }
            }
        };

        fetchTestimonials();

        return () => {
            isMounted = false;
        };
    }, []);

    const imageSliderSettings = {
        dots: false,
        infinite: testimonials?.images.length > 2,
        speed: 500,
        slidesToShow: Math.min(2, testimonials?.images.length || 1),
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        afterChange: (current) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const videoSliderSettings = {
        dots: false,
        infinite: testimonials?.videos.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        afterChange: (current) => setActiveSlide(current),
        vertical: true,
        verticalSwiping: true,
    };

    const mobileImageSliderSettings = {
        dots: true,
        infinite: testimonials?.images.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        afterChange: (current) => setActiveSlide(current),
    };

    const mobileVideoSliderSettings = {
        dots: true,
        infinite: testimonials?.videos.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        afterChange: (current) => setActiveSlide(current),
    };

    const handleDesktopNavigation = useCallback((direction) => {
        if (!leftSliderRef.current || !rightSliderRef.current) return;
        direction === 'prev'
            ? (leftSliderRef.current.slickPrev(), rightSliderRef.current.slickPrev())
            : (leftSliderRef.current.slickNext(), rightSliderRef.current.slickNext());
    }, []);

    const handleMobileNavigation = useCallback((direction, type) => {
        const sliderRef = type === 'image' ? mobileImageSliderRef.current : mobileVideoSliderRef.current;
        if (!sliderRef) return;
        direction === 'prev' ? sliderRef.slickPrev() : sliderRef.slickNext();
    }, []);

    const ImageTestimonialCard = React.memo(({ item }) => (
        <div className="p-4">
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={`${item.name}'s testimonial`}
                    className="w-full h-[300px] object-cover rounded-lg"
                    loading="lazy"
                />
                <div className="py-3">
                    <div className="flex items-center justify-between mb-4">
                        <div dangerouslySetInnerHTML={{ __html: item.name }} />
                        <div className="flex items-center text-yellow-400">
                            <img src={item.flag} alt="flag" className="w-5 h-5 mr-1" />
                            {item.rating}
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
            </div>
        </div>
    ));

    const VideoTestimonialCard = React.memo(({ item }) => (
        <div className="p-4">
            <div className="overflow-hidden">
                <video
                    src={item.video}
                    controls
                    muted
                    loop
                    className="w-full h-[300px] object-cover rounded-lg"
                    poster={item.thumbnail}
                />
                <div className="py-3">
                    <div className="flex items-center justify-between mb-4">
                        <div dangerouslySetInnerHTML={{ __html: item.name }} />
                        <div className="flex text-yellow-400 items-center">
                            <img src={item.flag} alt="flag" className="w-5 h-5 mr-1" />
                            {item.rating}
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
            </div>
        </div>
    ));

    if (!testimonials || !testimonialsData) {
        return null;
    }

    if (!testimonials.images.length && !testimonials.videos.length) {
        return (
            <div className="py-10 px-4 bg-white text-center text-gray-600">
                No testimonials available.
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-24 bg-white">
            <div className="hidden lg:block">
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                            <div className="relative shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-6 order-1">
                                <div className="absolute bg-white w-full h-6 -top-3 right-0" />
                                <div
                                    className="text-center md:text-end text-primary-dark text-lg font-semibold"
                                    dangerouslySetInnerHTML={{
                                        __html: testimonialsData.testimonialTitle,
                                    }}
                                />
                                <div className="absolute bg-white w-full h-6 -bottom-3 right-0" />
                            </div>
                            <div className="p-6 flex flex-col justify-center items-center md:items-start text-center md:text-start order-2">
                                <div
                                    className="mb-4 text-gray-600 text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: testimonialsData.testimonialDescription,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mx-auto flex flex-row gap-6">
                    <div className="w-1/2">
                        {testimonials.images.length > 0 && (
                            <Slider ref={leftSliderRef} {...imageSliderSettings}>
                                {testimonials.images.map((item) => (
                                    <ImageTestimonialCard key={item.id} item={item} />
                                ))}
                            </Slider>
                        )}
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        {testimonials.videos.length > 0 && (
                            <Slider ref={rightSliderRef} {...videoSliderSettings}>
                                {testimonials.videos.map((item) => (
                                    <VideoTestimonialCard key={item.id} item={item} />
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
                {(testimonials.images.length > 2 || testimonials.videos.length > 1) && (
                    <div className="flex justify-center gap-6 pt-6">
                        <button
                            onClick={() => handleDesktopNavigation('prev')}
                            aria-label="Previous Slide"
                            className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                        >
                            <FaChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => handleDesktopNavigation('next')}
                            aria-label="Next Slide"
                            className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                        >
                            <FaChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </div>
            <div className="block lg:hidden">
                <section className="py-2">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-4">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: testimonialsData.testimonialTitle,
                                    }}
                                />
                            </div>
                            <div className="p-4">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: testimonialsData.testimonialDescription,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mx-auto flex flex-col gap-6">
                    {testimonials.images.length > 0 && (
                        <div>
                            <Slider ref={mobileImageSliderRef} {...mobileImageSliderSettings}>
                                {testimonials.images.map((item) => (
                                    <ImageTestimonialCard key={item.id} item={item} />
                                ))}
                            </Slider>
                            {testimonials.images.length > 1 && (
                                <div className="flex justify-center gap-4 pt-4">
                                    <button
                                        onClick={() => handleMobileNavigation('prev', 'image')}
                                        aria-label="Previous Image Slide"
                                        className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                                    >
                                        <FaChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => handleMobileNavigation('next', 'image')}
                                        aria-label="Next Image Slide"
                                        className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                                    >
                                        <FaChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {testimonials.videos.length > 0 && (
                        <div>
                            <Slider ref={mobileVideoSliderRef} {...mobileVideoSliderSettings}>
                                {testimonials.videos.map((item) => (
                                    <VideoTestimonialCard key={item.id} item={item} />
                                ))}
                            </Slider>
                            {testimonials.videos.length > 1 && (
                                <div className="flex justify-center gap-4 pt-4">
                                    <button
                                        onClick={() => handleMobileNavigation('prev', 'video')}
                                        aria-label="Previous Video Slide"
                                        className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                                    >
                                        <FaChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => handleMobileNavigation('next', 'video')}
                                        aria-label="Next Video Slide"
                                        className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                                    >
                                        <FaChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;