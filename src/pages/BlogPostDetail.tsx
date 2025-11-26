import { motion } from 'framer-motion';
import { FiUser, FiCalendar, FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { BlogPost } from '../types/blog';
import { getPostBySlug, getRelatedPosts, getRecentPosts } from '../lib/sanityQueries';
import { urlFor } from '../lib/sanity';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recommendedPosts, setRecommendedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  const loadPost = async (postSlug: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const fetchedPost = await getPostBySlug(postSlug);
      setPost(fetchedPost);

      if (!fetchedPost) return;

      // Load recommended posts (use manual selection if available, otherwise related posts)
      if (fetchedPost.recommendedPosts && fetchedPost.recommendedPosts.length > 0) {
        setRecommendedPosts(fetchedPost.recommendedPosts);
      } else if (fetchedPost.categories && fetchedPost.categories.length > 0) {
        const categorySlugs = fetchedPost.categories.map(cat => cat.slug.current);
        const related = await getRelatedPosts(fetchedPost._id, categorySlugs, 5);
        setRecommendedPosts(related);
      } else {
        const recent = await getRecentPosts(5);
        setRecommendedPosts(recent);
      }
    } catch (err) {
      console.error('Error loading post:', err);
      setError('Failed to load blog post. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const portableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <div className="my-8">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog post image'}
            className="rounded-lg w-full shadow-md"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-600 mt-2">{value.caption}</p>
          )}
        </div>
      ),
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h4>,
      normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 italic text-gray-700 bg-gray-50">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">{children}</ol>,
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => <code className="bg-gray-100 px-2 py-1 rounded text-primary-600 font-mono text-sm">{children}</code>,
      link: ({ children, value }: any) => (
        <a href={value.href} className="text-primary-600 hover:text-primary-700 underline font-medium" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6">
            <p className="font-semibold">Error</p>
            <p>{error || 'Post not found'}</p>
          </div>
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
            <FiArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-semibold">
          <FiArrowLeft className="mr-2" />
          Back to Blog
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            {post.mainImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg"
              >
                <img
                  src={urlFor(post.mainImage).width(1200).url()}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Post Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <span
                      key={category._id}
                      className="px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xs font-semibold"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm pb-6 border-b border-gray-200">
                {post.author && (
                  <div className="flex items-center space-x-2">
                    <FiUser />
                    <span>{post.author.name}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <FiCalendar />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <button
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                  className="flex items-center space-x-2 hover:text-primary-600 transition-colors"
                >
                  <FiShare2 />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>

            {/* Post Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <PortableText value={post.body} components={portableTextComponents} />
            </motion.div>

            {/* Author Bio */}
            {post.author && post.author.bio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 bg-gradient-to-r from-gray-50 to-primary-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  {post.author.image && (
                    <img
                      src={urlFor(post.author.image).width(80).height(80).url()}
                      alt={post.author.name}
                      className="w-20 h-20 rounded-full"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author.name}</h3>
                    <p className="text-gray-700">{post.author.bio}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Recommended Posts */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Posts</h3>
              <div className="space-y-4">
                {recommendedPosts.map((recommendedPost, index) => (
                  <Link key={recommendedPost._id} to={`/blog/${recommendedPost.slug.current}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary-300 transition-all group"
                    >
                      {recommendedPost.mainImage && (
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={urlFor(recommendedPost.mainImage).width(400).url()}
                            alt={recommendedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-3">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-2 text-sm">
                          {recommendedPost.title}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          {recommendedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          {recommendedPost.author && (
                            <div className="flex items-center space-x-1">
                              <FiUser size={10} />
                              <span>{recommendedPost.author.name}</span>
                            </div>
                          )}
                          <span>{formatDate(recommendedPost.publishedAt)}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
