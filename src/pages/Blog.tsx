import { motion } from 'framer-motion';
import { FiClock, FiUser, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring emerging trends and technologies shaping the future of web development, from AI integration to serverless architectures.',
      author: 'Sarah Johnson',
      date: 'Nov 20, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
      title: 'Mobile-First Design: Best Practices',
      excerpt: 'Learn how to create exceptional mobile experiences with our comprehensive guide to mobile-first design principles.',
      author: 'Michael Chen',
      date: 'Nov 18, 2024',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    },
    {
      title: 'Cloud Migration Strategy Guide',
      excerpt: 'A step-by-step approach to successfully migrating your infrastructure to the cloud while minimizing downtime and costs.',
      author: 'Emily Rodriguez',
      date: 'Nov 15, 2024',
      readTime: '10 min read',
      category: 'Cloud',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    },
    {
      title: 'Microservices vs Monolithic Architecture',
      excerpt: 'Understanding the pros and cons of each architectural pattern to make informed decisions for your next project.',
      author: 'David Kim',
      date: 'Nov 12, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    },
    {
      title: 'Securing Your Web Applications',
      excerpt: 'Essential security practices every developer should implement to protect their applications from common vulnerabilities.',
      author: 'Sarah Johnson',
      date: 'Nov 10, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    },
    {
      title: 'The Rise of AI in Software Development',
      excerpt: 'How artificial intelligence is transforming the way we build and deploy software applications.',
      author: 'Michael Chen',
      date: 'Nov 8, 2024',
      readTime: '9 min read',
      category: 'AI & ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Insights, tutorials, and industry trends from our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600"></div>
          </div>

          <div className="card overflow-hidden grid md:grid-cols-2 gap-8" data-aos="fade-up">
            <div className="relative h-96 md:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 hover:text-primary-600 transition-colors cursor-pointer">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <FiUser />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock />
                  <span>{featuredPost.readTime}</span>
                </div>
                <span>{featuredPost.date}</span>
              </div>
              <Link to="#" className="text-primary-600 font-semibold inline-flex items-center hover:gap-2 transition-all">
                Read More <FiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-2">Recent Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <FiUser size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link to="#" className="text-primary-600 font-semibold text-sm inline-flex items-center group-hover:gap-2 transition-all">
                      Read <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
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
