import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../../../components/Icons';
import apiService from '../../../../api/apiService';

const BlogPost = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiService.getBlogPosts()
            .then(response => {
                setPosts(response.data);
            })
            .catch(err => {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts.');
            });
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (posts.length === 0) {
        return <div>Loading...</div>;
    }

    const primaryPost = posts[0];
    const secondaryPosts = posts.slice(1, 4);

    return (
        <div className='w-full'>
            <h2 className='text-2xl font-medium text-gray-950 my-10'>Recent Updates</h2>

            <div className='blog-container w-full bg-gray-50 shadow-md hover:shadow-xl duration-300 transition-all'>
                <Link to={`/blogs/${primaryPost.link}`}>
                    <div className='card-recent-update'>
                        <img src={primaryPost.image} alt={primaryPost.title} />
                        <div className='p-4 space-y-4'>
                            <div dangerouslySetInnerHTML={{ __html: primaryPost.title }} />
                            <div dangerouslySetInnerHTML={{ __html: primaryPost.date_manual }} />
                            <div dangerouslySetInnerHTML={{ __html: primaryPost.description }} />
                            <div className='link group'>
                                <Link to={`/blogs/${primaryPost.link}`} className='text-sm text-primary-orange group-hover:text-primary-dark flex items-center justify-start duration-300 transition-all gap-x-2'>
                                    Continue Reading <ArrowRight className="fill-primary-orange group-hover:fill-primary-dark duration-300 transition-all text-sm" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='blog-secondary-container grid grid-cols-3 gap-6 my-12'>
                {secondaryPosts.map((post, index) => (
                    <Link to={`/blogs/${post.link}`} key={index} className='bg-gray-50 shadow-md hover:shadow-xl duration-300 transition-all'>
                        <div className='card-recent-update'>
                            <img src={post.image} alt={post.title} />
                            <div className='p-4 space-y-4'>
                                <div dangerouslySetInnerHTML={{ __html: post.title }} />
                                <div dangerouslySetInnerHTML={{ __html: post.date_manual }} />
                                <div dangerouslySetInnerHTML={{ __html: post.description }} />
                                <div className='link group'>
                                    <Link to={`/blogs/${post.link}`} className='text-sm text-primary-orange group-hover:text-primary-dark flex items-center justify-start duration-300 transition-all gap-x-2'>
                                        Continue Reading <ArrowRight className="text-primary-orange group-hover:fill-primary-dark duration-300 transition-all text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;