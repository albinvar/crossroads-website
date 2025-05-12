import React, { Suspense, useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import apiService from '../../../api/apiService';
import Banner from '../../../components/Banner';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

const SOCIAL_MEDIA_URLS = {
    instagram: 'https://www.instagram.com/crossroads_ge/',
    linkedIn: 'https://www.linkedin.com/company/crossroads-career-consultants-pvt-ltd/',
    facebook: 'https://www.facebook.com/CrossroadsOverseasEducation'
};

const BlogDetail = () => {
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCopied, setIsCopied] = useState(false);
    const { link } = useParams();
    const navigate = useNavigate();
    const contentRef = useRef(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                setLoading(true);
                const response = await apiService.getBlogPostByLink(link);
                setPost(response.data);
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError('Failed to load blog post. Please try again later.');
                navigate('/Blogs', { replace: true });
            } finally {
                setLoading(false);
            }
        };

        const fetchRecentPosts = async () => {
            try {
                const response = await apiService.getBlogPosts();
                const allPosts = response.data;
                const currentIndex = allPosts.findIndex(p => p.link === link);

                if (currentIndex === -1) {
                    console.error('Current post not found');
                    setRecentPosts([]);
                    return;
                }

                const totalPosts = allPosts.length;
                if (totalPosts <= 1) {
                    setRecentPosts([]);
                    return;
                }

                const getNextIndex = (current, max) => (current + 1) % max;
                const getPrevIndex = (current, max) => (current - 1 + max) % max;

                let indices = [];
                const next = getNextIndex(currentIndex, totalPosts);
                const prev = getPrevIndex(currentIndex, totalPosts);

                if (next !== currentIndex) indices.push(next);
                if (prev !== currentIndex && !indices.includes(prev)) indices.push(prev);

                const nextPlusOne = getNextIndex(next, totalPosts);
                if (nextPlusOne !== currentIndex && !indices.includes(nextPlusOne) && indices.length < 3) {
                    indices.push(nextPlusOne);
                }

                for (let i = 0; indices.length < 3 && i < totalPosts; i++) {
                    if (i !== currentIndex && !indices.includes(i)) {
                        indices.push(i);
                    }
                }

                indices = indices.slice(0, 3);
                const selectedPosts = indices.map(index => allPosts[index]);
                setRecentPosts(selectedPosts);
            } catch (err) {
                console.error('Error fetching recent posts:', err);
                setRecentPosts([]);
            }
        };

        fetchBlogPost();
        fetchRecentPosts();
    }, [link, navigate]);

    const copyToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy URL:', err);
            alert('Failed to copy URL. Please copy it manually.');
        }
    }, []);

    const handleEnquireClick = () => {
        console.log('Enquire now clicked');
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F9920A]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="px-4 sm:px-6 lg:px-20 my-14 mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-4">Error</h2>
                <p className="text-gray-700">{error}</p>
                <Link to="/Blogs" className="text-[#F9920A] hover:text-[#e07a00] font-medium">
                    Back to Blog
                </Link>
            </div>
        );
    }

    if (!post) {
        return null;
    }

    const bannerProps = {
        backgroundImage: post.image,
        title: post.dedicated_page_title,
        className: 'px-1 relative',
        classNameTitle: 'relative -top-center text-services-title',
        backgroundPosition: 'center',
        showDateTime: false,
        showSocialMedia: false,
        showCounter: false,
        counterPosition: 'overlay',
    };

    const SocialShareButtons = () => (
        <div className="flex flex-col items-center space-y-2 mt-8">
            <h3 className="text-lg font-semibold text-gray-800 pb-4">Share This Article</h3>
            <div className="flex space-x-4">
                <SocialButton url={SOCIAL_MEDIA_URLS.instagram} label="Instagram">
                    <Icons.Instagram />
                </SocialButton>
                <button
                    onClick={copyToClipboard}
                    aria-label="Copy page URL"
                    className="focus:outline-none relative"
                >
                    <Icons.Copy />
                    {isCopied && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                            Copied!
                        </span>
                    )}
                </button>
                <SocialButton url={SOCIAL_MEDIA_URLS.linkedIn} label="LinkedIn">
                    <Icons.LinkedIn />
                </SocialButton>
                <SocialButton url={SOCIAL_MEDIA_URLS.facebook} label="Facebook">
                    <Icons.Facebook />
                </SocialButton>
            </div>
        </div>
    );

    return (
        <>
            <div className="relative">
                <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center">Loading banner...</div>}>
                    <Banner {...bannerProps} />
                </Suspense>

                <section className="px-4 sm:px-6 lg:px-20 my-6 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="w-full">
                            <div className="bg-white p-4 md:p-6 h-full rounded-lg shadow-sm">
                                <div
                                    ref={contentRef}
                                    className="lg:pr-4 mb-8 scrollbar-visible-custom lg:pb-16 prose prose-lg max-w-none"
                                >
                                    <div dangerouslySetInnerHTML={{ __html: post.description }} className="text-gray-600" />
                                    <div className="my-6" />
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                                <SocialShareButtons />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                    <button
                                        onClick={handleEnquireClick}
                                        className="inline-block bg-[#F9920A] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#e07a00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9920A] focus:ring-opacity-50"
                                    >
                                        Enquire Now
                                    </button>
                                    <Link
                                        to="/Blogs"
                                        className="inline-flex items-center text-[#F9920A] hover:text-[#e07a00] font-medium transition-colors"
                                    >
                                        ← Back to Blog
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-20 my-10 mx-auto max-w-6xl">
                <h2 className="text-2xl font-medium text-gray-950 my-10">Recent Updates</h2>
                {recentPosts.length > 0 ? (
                    <>
                        {recentPosts[0] && (
                            <div className="blog-container w-full bg-gray-50 shadow-md hover:shadow-xl duration-300 transition-all">
                                <Link to={`/blogs/${recentPosts[0].link}`}>
                                    <div className="card-recent-update">
                                        <img src={recentPosts[0].image} alt={recentPosts[0].title} />
                                        <div className="p-4 space-y-4">
                                            <div dangerouslySetInnerHTML={{ __html: recentPosts[0].title }} />
                                            <div dangerouslySetInnerHTML={{ __html: recentPosts[0].date_manual }} />
                                            <div dangerouslySetInnerHTML={{ __html: recentPosts[0].description }} />
                                            <div className="link group">
                                                <Link
                                                    to={`/blogs/${recentPosts[0].link}`}
                                                    className="text-sm text-[#F9920A] group-hover:text-[#e07a00] flex items-center justify-start duration-300 transition-all gap-x-2"
                                                >
                                                    Continue Reading
                                                    <span className="text-[#F9920A] group-hover:text-[#e07a00] text-sm">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                        <div className="blog-secondary-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                            {recentPosts.slice(1).map((post, index) => (
                                <Link
                                    to={`/blogs/${post.link}`}
                                    key={index}
                                    className="bg-gray-50 shadow-md hover:shadow-xl duration-300 transition-all"
                                >
                                    <div className="card-recent-update">
                                        <img src={post.image} alt={post.title} />
                                        <div className="p-4 space-y-4">
                                            <div dangerouslySetInnerHTML={{ __html: post.title }} />
                                            <div dangerouslySetInnerHTML={{ __html: post.date_manual }} />
                                            <div dangerouslySetInnerHTML={{ __html: post.description }} />
                                            <div className="link group">
                                                <Link
                                                    to={`/blogs/${post.link}`}
                                                    className="text-sm text-[#F9920A] group-hover:text-[#e07a00] flex items-center justify-start duration-300 transition-all gap-x-2"
                                                >
                                                    Continue Reading
                                                    <span className="text-[#F9920A] group-hover:text-[#e07a00] text-sm">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-700">No recent posts available.</p>
                )}
            </div>
        </>
    );
};

const SocialButton = ({ url, label, children }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share on ${label}`}
    >
        {children}
    </a>
);

SocialButton.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

BlogDetail.propTypes = {
    link: PropTypes.string,
};

export default BlogDetail;