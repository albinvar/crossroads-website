import React, { Suspense, useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import apiService from '../../../api/apiService';
import Banner from '../../../components/Banner';
import PropTypes from 'prop-types';
import Icons, { ArrowRight } from '../../../components/Icons';
import ContactInformation from '../../../components/UiComponents/ContactInformation';

const BlogDetail = () => {
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCopied, setIsCopied] = useState(false);
    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        instagram: '',
        linkedin: '',
        youtube: '',
        whatsapp: '',
    });
    const [headings, setHeadings] = useState([]);
    const [activeHeading, setActiveHeading] = useState('');
    const { link } = useParams();
    const navigate = useNavigate();
    const contentRef = useRef(null);
    const sidebarRef = useRef(null);
    const sectionRefs = useRef([]);
    const scrollRef = useRef(null);
    const [thumbTop, setThumbTop] = useState(0);
    const [thumbHeight, setThumbHeight] = useState(20);

    const extractHeadings = useCallback((content) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const h3Elements = doc.querySelectorAll('h3');
        const headingsArray = Array.from(h3Elements).map((h3, index) => ({
            id: `heading-${index}`,
            text: h3.textContent.trim(),
        }));
        return headingsArray;
    }, []);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                setLoading(true);
                const response = await apiService.getBlogPostByLink(link);
                const fetchedPost = response.data;
                setPost(fetchedPost);
                const extractedHeadings = extractHeadings(fetchedPost.content);
                setHeadings(extractedHeadings);
                if (extractedHeadings.length > 0) {
                    setActiveHeading(extractedHeadings[0].text);
                }
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
                const currentIndex = allPosts.findIndex((p) => p.link === link);

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

                const indices = [];
                for (let i = 1; i <= 3; i++) {
                    const nextIndex = (currentIndex + i) % totalPosts;
                    if (nextIndex !== currentIndex) {
                        indices.push(nextIndex);
                    }
                }

                let additionalIndex = 0;
                while (indices.length < 3 && additionalIndex < totalPosts) {
                    if (additionalIndex !== currentIndex && !indices.includes(additionalIndex)) {
                        indices.push(additionalIndex);
                    }
                    additionalIndex++;
                }

                const selectedIndices = indices.slice(0, 3);
                const selectedPosts = selectedIndices.map((index) => allPosts[index]);
                setRecentPosts(selectedPosts);
            } catch (err) {
                console.error('Error fetching recent posts:', err);
                setRecentPosts([]);
            }
        };

        const fetchSocialMediaLinks = () => {
            apiService
                .getSocialMediaLinks()
                .then((response) => {
                    const data = response.data[0];
                    setSocialLinks({
                        facebook: data.facebook,
                        instagram: data.instagram,
                        linkedin: data.linkedin,
                        youtube: data.youtube,
                        whatsapp: data.whatsapp,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching social media links:', error);
                    setSocialLinks({
                        facebook: '',
                        instagram: '',
                        linkedin: '',
                        youtube: '',
                        whatsapp: '',
                    });
                });
        };

        fetchBlogPost();
        fetchRecentPosts();
        fetchSocialMediaLinks();
    }, [link, navigate, extractHeadings]);

    const updateThumbPosition = useCallback(
        (activeIndex) => {
            const container = scrollRef.current;
            if (!container) return;

            const itemHeight = 28;
            const thumbSize = 27;
            const thumbOffset = activeIndex * itemHeight + (itemHeight - thumbSize) / 3;
            setThumbTop(thumbOffset);
            setThumbHeight(thumbSize);
        },
        []
    );

    const scrollToSection = useCallback(
        (headingText, index) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content, 'text/html');
            const h3Elements = doc.querySelectorAll('h3');
            const targetH3 = Array.from(h3Elements)[index];
            if (targetH3) {
                const sectionId = `heading-${index}`;
                const element = document.getElementById(sectionId);
                if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    setActiveHeading(headingText);
                    updateThumbPosition(index);
                }
            }
        },
        [post, updateThumbPosition]
    );

    const handleStickySidebar = useCallback(() => {
        const sidebar = sidebarRef.current;
        if (!sidebar) return;

        sidebar.style.position = 'sticky';
        sidebar.style.top = '200px';
    }, []);

    useEffect(() => {
        if (!post || headings.length === 0) return;

        sectionRefs.current = Array(headings.length)
            .fill()
            .map((_, i) => sectionRefs.current[i] || null);

        let currentActiveIndex = 0;

        const observers = headings.map((heading, index) => {
            const section = sectionRefs.current[index];
            if (section) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            const sectionTop = entry.boundingClientRect.top;
                            if (sectionTop >= 0 && sectionTop < window.innerHeight * 0.4) {
                                currentActiveIndex = index;
                                setActiveHeading(heading.text);
                                updateThumbPosition(index);
                            }
                        }
                    },
                    {
                        root: null,
                        threshold: 0.1,
                        rootMargin: '-80px 0px -60% 0px',
                    }
                );
                observer.observe(section);
                return observer;
            }
            return null;
        });

        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingUp = currentScrollY < lastScrollY;
            const content = contentRef.current;
            if (!content) return;

            const contentRect = content.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (contentRect.bottom <= windowHeight + 80) {
                const lastSectionIndex = headings.length - 1;
                const lastSectionTitle = headings[lastSectionIndex].text;
                if (currentActiveIndex !== lastSectionIndex) {
                    setActiveHeading(lastSectionTitle);
                    updateThumbPosition(lastSectionIndex);
                    currentActiveIndex = lastSectionIndex;
                }
                return;
            }
            if (scrollingUp) {
                let topmostSection = null;
                let topmostIndex = 0;
                sectionRefs.current.forEach((section, index) => {
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
                            if (!topmostSection || rect.top < topmostSection.getBoundingClientRect().top) {
                                topmostSection = section;
                                topmostIndex = index;
                            }
                        }
                    }
                });
                if (topmostSection && topmostIndex !== currentActiveIndex) {
                    const sectionTitle = headings[topmostIndex].text;
                    setActiveHeading(sectionTitle);
                    updateThumbPosition(topmostIndex);
                    currentActiveIndex = topmostIndex;
                }
            } else {
                let visibleSection = null;
                let visibleIndex = 0;
                sectionRefs.current.forEach((section, index) => {
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        if (rect.top >= 0 && rect.top < window.innerHeight * 0.3) {
                            if (!visibleSection || rect.top < visibleSection.getBoundingClientRect().top) {
                                visibleSection = section;
                                visibleIndex = index;
                            }
                        }
                    }
                });
                if (visibleSection && visibleIndex !== currentActiveIndex) {
                    const sectionTitle = headings[visibleIndex].text;
                    setActiveHeading(sectionTitle);
                    updateThumbPosition(visibleIndex);
                    currentActiveIndex = visibleIndex;
                }
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleStickySidebar);

        updateThumbPosition(0);

        return () => {
            observers.forEach((observer) => observer?.disconnect());
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleStickySidebar);
        };
    }, [post, headings, updateThumbPosition, handleStickySidebar]);

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
            <div className="px-4 sm:px-6 lg:px-28 my-14 mx-auto">
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
                {socialLinks.instagram && (
                    <SocialButton url={socialLinks.instagram} label="Instagram">
                        <Icons.Instagram />
                    </SocialButton>
                )}
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
                {socialLinks.linkedin && (
                    <SocialButton url={socialLinks.linkedin} label="LinkedIn">
                        <Icons.LinkedIn />
                    </SocialButton>
                )}
                {socialLinks.facebook && (
                    <SocialButton url={socialLinks.facebook} label="Facebook">
                        <Icons.Facebook />
                    </SocialButton>
                )}
            </div>
        </div>
    );

    const renderContentSections = () => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content, 'text/html');
        const h3Elements = doc.querySelectorAll('h3');
        const sections = [];
        let currentSection = { heading: '', content: '' };
        let sectionIndex = 0;

        Array.from(doc.body.childNodes).forEach((node) => {
            if (node.tagName === 'H3') {
                if (currentSection.content || currentSection.heading) {
                    sections.push({ ...currentSection, id: `heading-${sectionIndex}` });
                    sectionIndex++;
                }
                currentSection = { heading: node.outerHTML, content: '', id: `heading-${sectionIndex}` };
            } else {
                currentSection.content += node.outerHTML || node.textContent;
            }
        });

        if (currentSection.content || currentSection.heading) {
            sections.push({ ...currentSection, id: `heading-${sectionIndex}` });
        }

        return sections.map((section, index) => (
            <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
            >
                <div dangerouslySetInnerHTML={{ __html: section.heading }} />
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
        ));
    };

    return (
        <>
            <div className="relative">
                <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center">Loading banner...</div>}>
                    <Banner {...bannerProps} />
                </Suspense>

                <section className="px-4 sm:px-6 lg:px-28 mb-8 sm:mb-8 lg:mb-16 mt-14 sm:mt-14 lg:mt-26 mx-auto">
                    <div className="flex flex-col lg:flex-row lg:gap-x-6 mx-auto">
                        {/* Left Sidebar */}
                        <div
                            ref={sidebarRef}
                            className="hidden lg:block lg:w-1/4 h-full relative top-6 self-start"
                            style={{ zIndex: 10 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative">
                                    <div className="absolute top-0 left-0 h-full w-[4px] bg-[#fbe3c3] rounded-full z-10" />
                                    <motion.div
                                        className="absolute left-0 w-[4px] bg-[#F9920A] rounded-full z-20"
                                        animate={{ top: thumbTop, height: thumbHeight }}
                                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                                    />
                                    <div ref={scrollRef} className="max-h-auto">
                                        <ul className="space-y-2">
                                            {headings.map((heading, index) => (
                                                <li key={heading.id}>
                                                    <a
                                                        href={`#${heading.id}`}
                                                        className={`block text-sm md:text-base pl-3 py-1 transition-colors ${
                                                            activeHeading === heading.text
                                                                ? 'text-[#F9920A] font-semibold'
                                                                : 'border-transparent text-gray-600 hover:text-[#e07a00]'
                                                        }`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            scrollToSection(heading.text, index);
                                                        }}
                                                    >
                                                        {heading.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <SocialShareButtons />
                            </motion.div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-3/4">
                            <div className="bg-white h-auto rounded-lg shadow-sm">
                                <div
                                    ref={contentRef}
                                    className="lg:pr-4 scrollbar-visible-custom lg:pb-16 prose prose-lg max-w-none"
                                >
                                    <motion.p
                                        className="text-gray-700 mb-14 mt-4 text-base md:text-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        dangerouslySetInnerHTML={{ __html: post.description }}
                                    />
                                    {renderContentSections()}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                    <button
                                        onClick={handleEnquireClick}
                                        className="inline-block bg-[#F9920A] text-white font-medium py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
                                    >
                                        Enquire Now
                                    </button>
                                    <Link
                                        to="/Blogs"
                                        className="group inline-flex items-center text-[#F9920A] group-hover:text-primary-dark font-medium transition-colors duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" className='fill-primary-orange group-hover:fill-primary-dark'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg> <span className='ml-2 text-primary-orange group-hover:text-primary-dark'>Back to Blog</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Posts Section */}
                <div className="bg-primary-dark w-full px-4 sm:px-6 lg:px-28 py-8 sm:py-8 lg:py-16 mx-auto">
                    <h2 className="text-2xl font-medium text-gray-200 pb-8">You Might Also Like</h2>
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
                            <div className="blog-secondary-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-12">
                                {recentPosts.slice(1, 3).map((post, index) => (
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
                        <p className="text-gray-400">No recent posts available.</p>
                    )}
                </div>
            </div>
        <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20'>
          <ContactInformation />
        </div>
        </>
    );
};

const SocialButton = ({ url, label, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`}>
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