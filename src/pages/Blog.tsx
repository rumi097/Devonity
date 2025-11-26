import { motion } from 'framer-motion';
import { FiUser, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogPost, BlogCategory } from '../types/blog';
import { getAllPosts, getAllCategories, getPostsByCategory } from '../lib/sanityQueries';
import { urlFor } from '../lib/sanity';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      const fetchedCategories = await getAllCategories();
      setCategories(fetchedCategories);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedPosts = selectedCategory === 'all' 
        ? await getAllPosts()
        : await getPostsByCategory(selectedCategory);
      setPosts(fetchedPosts);
    } catch (err) {
      console.error('Error loading posts:', err);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const recentPosts = posts.filter(p => p._id !== featuredPost?._id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="page-transition pt-20">
      {/* Hero Section with Animated Background */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Animated floating text elements */}
        <div className="absolute inset-0 opacity-10 font-mono text-xs overflow-hidden">
          <motion.div className="absolute top-10 left-10" animate={{ y: [-100, 100], opacity: [0, 0.5, 0] }} transition={{ duration: 10, repeat: Infinity }}>
            const blog = {'{ }'}
          </motion.div>
          <motion.div className="absolute top-20 right-20" animate={{ y: [100, -100], opacity: [0, 0.6, 0] }} transition={{ duration: 12, repeat: Infinity, delay: 1 }}>
            function write() {'{ }'}
          </motion.div>
          <motion.div className="absolute bottom-10 left-1/4" animate={{ y: [-80, 120], opacity: [0, 0.4, 0] }} transition={{ duration: 11, repeat: Infinity, delay: 2 }}>
            &lt;article&gt;&lt;/article&gt;
          </motion.div>
        </div>
        
        {/* Floating document icons */}
        <motion.div className="absolute top-16 left-20 text-white opacity-20" animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity }}>
          <svg width="40" height="50" fill="currentColor">
            <rect x="5" y="0" width="30" height="45" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="26" x2="25" y2="26" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
        <motion.div className="absolute bottom-20 right-16 text-white opacity-15" animate={{ y: [20, -20, 20], rotate: [5, -5, 5] }} transition={{ duration: 4.5, repeat: Infinity }}>
          <FiUser size={50} />
        </motion.div>
        <motion.div className="absolute top-1/2 left-10 text-white opacity-20" animate={{ y: [-15, 15, -15], rotate: [-3, 3, -3] }} transition={{ duration: 5.5, repeat: Infinity }}>
          <FiArrowRight size={45} />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 break-words">
              Our Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Insights, tutorials, and industry trends from our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.slug.current)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.slug.current
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {!loading && !error && featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600"></div>
            </div>

            <Link to={`/blog/${featuredPost.slug.current}`}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card overflow-hidden grid md:grid-cols-5 gap-6 hover:shadow-xl transition-all"
                data-aos="fade-up"
              >
                <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                  {featuredPost.mainImage && (
                    <img
                      src={urlFor(featuredPost.mainImage).width(600).url()}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {featuredPost.categories && featuredPost.categories.length > 0 && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xs font-semibold">
                        {featuredPost.categories[0].title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:col-span-3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    {featuredPost.author && (
                      <div className="flex items-center space-x-2">
                        <FiUser size={14} />
                        <span>{featuredPost.author.name}</span>
                      </div>
                    )}
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  <div className="text-primary-600 font-semibold inline-flex items-center hover:gap-2 transition-all">
                    Read More <FiArrowRight className="ml-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {!loading && !error && recentPosts.length > 0 && (
        <section className="py-12 sm:py-16 md:py-24 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-2">
                {selectedCategory === 'all' ? 'Recent Articles' : 'Articles'}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recentPosts.map((post, index) => (
                <Link key={post._id} to={`/blog/${post.slug.current}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="card overflow-hidden group h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      {post.mainImage && (
                        <img
                          src={urlFor(post.mainImage).width(600).url()}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {post.categories && post.categories.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xs font-semibold">
                            {post.categories[0].title}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                        {post.author && (
                          <div className="flex items-center space-x-2">
                            <FiUser size={14} />
                            <span>{post.author.name}</span>
                          </div>
                        )}
                        <span className="text-xs">{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-primary-600 font-semibold text-sm inline-flex items-center group-hover:gap-2 transition-all">
                          Read <FiArrowRight className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xl text-gray-600">No posts found in this category.</p>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get the latest articles and insights delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
