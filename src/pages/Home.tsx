import { motion, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiSmartphone, FiCloud, FiZap, FiUsers, FiAward, FiInfo, FiGrid, FiBriefcase, FiBook, FiMail } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import { useEffect, useRef } from 'react';

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      onUpdate(latestValue) {
        node.textContent = Math.floor(latestValue).toString() + suffix;
      }
    });

    return () => controls.stop();
  }, [value, suffix]);

  return <div ref={nodeRef} />;
};

const Home = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies',
      slug: 'web-development',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS & Android',
      slug: 'mobile-apps',
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      slug: 'cloud-solutions',
    },
    {
      icon: FiZap,
      title: 'Automation',
      description: 'Intelligent automation systems to streamline your operations',
      slug: 'automation',
    },
  ];

  const stats = [
    { number: '100%', label: 'Client Satisfaction', value: 100, suffix: '%' },
    { number: '24/7', label: 'Support Available', value: 24, suffix: '/7' },
    { number: '99.9%', label: 'Uptime Guarantee', value: 99.9, suffix: '%' },
    { number: '100%', label: 'On-Time Delivery', value: 100, suffix: '%' },
  ];

  const features = [
    'Agile Development Process',
    '24/7 Customer Support',
    'Scalable Solutions',
    'Quality Assurance',
    'On-Time Delivery',
    'Competitive Pricing',
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated network grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated network nodes and connections */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          {/* Animated connection lines */}
          <motion.line
            x1="10%" y1="20%" x2="30%" y2="60%"
            stroke="url(#gradient1)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="30%" y1="60%" x2="60%" y2="40%"
            stroke="url(#gradient1)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="60%" y1="40%" x2="85%" y2="70%"
            stroke="url(#gradient1)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="85%" y1="30%" x2="60%" y2="40%"
            stroke="url(#gradient2)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 3.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="40%" y1="15%" x2="60%" y2="40%"
            stroke="url(#gradient2)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 3.8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="10%" y1="80%" x2="30%" y2="60%"
            stroke="url(#gradient1)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 4.2, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated nodes/dots */}
          <motion.circle
            cx="10%" cy="20%" r="6"
            fill="#0ea5e9"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="30%" cy="60%" r="8"
            fill="#8b5cf6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="60%" cy="40%" r="10"
            fill="#0ea5e9"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="85%" cy="70%" r="7"
            fill="#8b5cf6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="85%" cy="30%" r="8"
            fill="#0ea5e9"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="40%" cy="15%" r="6"
            fill="#8b5cf6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="10%" cy="80%" r="7"
            fill="#0ea5e9"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 2, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Gradient definitions for lines */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Floating code brackets */}
          <motion.text
            x="15%" y="35%"
            fill="#0ea5e9"
            fontSize="32"
            fontFamily="monospace"
            fontWeight="bold"
            opacity="0.5"
            animate={{ y: ["35%", "33%", "35%"], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {'</>'}
          </motion.text>
          <motion.text
            x="75%" y="55%"
            fill="#8b5cf6"
            fontSize="28"
            fontFamily="monospace"
            fontWeight="bold"
            opacity="0.5"
            animate={{ y: ["55%", "53%", "55%"], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 3.5, delay: 0.5, repeat: Infinity }}
          >
            {'{ }'}
          </motion.text>
          <motion.text
            x="25%" y="75%"
            fill="#0ea5e9"
            fontSize="26"
            fontFamily="monospace"
            fontWeight="bold"
            opacity="0.5"
            animate={{ y: ["75%", "73%", "75%"], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
          >
            {'[ ]'}
          </motion.text>
          <motion.text
            x="70%" y="20%"
            fill="#8b5cf6"
            fontSize="30"
            fontFamily="monospace"
            fontWeight="bold"
            opacity="0.5"
            animate={{ y: ["20%", "18%", "20%"], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 3.2, delay: 0.7, repeat: Infinity }}
          >
            {'<>'}
          </motion.text>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight break-words">
                Transform Your
                <span className="block text-gradient">Digital Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed break-words">
                Empowering businesses with innovative technology solutions. We deliver premium web, mobile, and cloud services that drive growth and success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started <FiArrowRight className="inline ml-2" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative w-full h-96 md:h-[500px]">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl opacity-20"
                  animate={{ 
                    rotate: [6, 8, 6],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Glass container with continuous rotation */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl p-8 backdrop-blur-sm bg-white/10 border border-white/20"
                  animate={{ 
                    rotate: [-3, -2, -3],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-2xl border border-gray-700 relative overflow-hidden group"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 2, 0, -2, 0],
                          }}
                          transition={{
                            duration: 3 + index * 0.5,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                          }}
                        >
                          {/* Animated gradient overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"
                            animate={{
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          />
                          
                          {/* Animated icon container */}
                          <motion.div
                            className="relative z-10"
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.25
                            }}
                          >
                            <service.icon className="text-primary-400 mb-3" size={36} />
                          </motion.div>
                          
                          <h3 className="font-semibold text-sm text-white relative z-10">
                            {service.title}
                          </h3>
                          
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-accent-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center text-white"
                animate={{
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 stat-number">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="card service-card p-4 sm:p-6 md:p-8 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More <FiArrowRight className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/services" className="btn-primary">
              View All Services <FiArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
              Our Recent Work
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and case studies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                description: 'Modern online shopping experience with real-time inventory',
                image: 'bg-gradient-to-br from-blue-500 to-purple-600',
                icon: FiCode,
              },
              {
                title: 'Mobile Banking App',
                category: 'Mobile Development',
                description: 'Secure and intuitive banking application for iOS & Android',
                image: 'bg-gradient-to-br from-green-500 to-teal-600',
                icon: FiSmartphone,
              },
              {
                title: 'Cloud Infrastructure',
                category: 'Cloud Solutions',
                description: 'Scalable AWS deployment with auto-scaling capabilities',
                image: 'bg-gradient-to-br from-orange-500 to-red-600',
                icon: FiCloud,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <Link to="/portfolio" className="group block">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card overflow-hidden h-full"
                  >
                    {/* Project Image/Icon */}
                    <div className={`relative h-48 sm:h-56 ${project.image} flex items-center justify-center overflow-hidden`}>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-white/90"
                      >
                        <project.icon size={64} />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                        initial={false}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {project.category}
                      </motion.span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <motion.div
                        className="flex items-center text-primary-600 font-semibold text-sm"
                        whileHover={{ x: 5 }}
                      >
                        View Details <FiArrowRight className="ml-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio" className="btn-primary">
              View All Projects <FiArrowRight className="inline ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
              Latest Insights
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tutorials, and industry news
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'The Future of Web Development in 2025',
                category: 'Web Development',
                excerpt: 'Exploring emerging technologies and frameworks shaping the web',
                date: 'Nov 20, 2025',
                readTime: '5 min read',
                color: 'from-blue-500 to-blue-600',
              },
              {
                title: 'Building Scalable Cloud Applications',
                category: 'Cloud Computing',
                excerpt: 'Best practices for designing and deploying cloud-native apps',
                date: 'Nov 15, 2025',
                readTime: '7 min read',
                color: 'from-purple-500 to-purple-600',
              },
              {
                title: 'Mobile-First Development Strategy',
                category: 'Mobile Development',
                excerpt: 'Why mobile-first approach is crucial for modern applications',
                date: 'Nov 10, 2025',
                readTime: '6 min read',
                color: 'from-pink-500 to-pink-600',
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <Link to="/blog" className="group block h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card h-full overflow-hidden"
                  >
                    {/* Blog Header with animated gradient */}
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${post.color}`}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{ backgroundSize: '200% 200%' }}
                    />

                    <div className="p-6">
                      {/* Category Badge */}
                      <motion.span
                        className={`inline-block px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs font-semibold rounded-full mb-4`}
                        animate={{ 
                          boxShadow: [
                            '0 0 0 0 rgba(99, 102, 241, 0)',
                            '0 0 0 8px rgba(99, 102, 241, 0)',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {post.category}
                      </motion.span>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span className="flex items-center">
                          <FiBook className="mr-1" />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      {/* Read More Link */}
                      <motion.div
                        className="flex items-center text-primary-600 font-semibold text-sm"
                        whileHover={{ x: 5 }}
                      >
                        Read Article <FiArrowRight className="ml-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/blog" className="btn-primary">
              View All Articles <FiArrowRight className="inline ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title mb-6">Why Choose Devonity?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that truly make a difference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <HiCheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  About Us <FiArrowRight className="inline ml-2" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
              <div className="card p-6 text-center">
                <FiUsers className="mx-auto text-primary-600 mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">Expert Team</h4>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
              <div className="card p-6 text-center mt-8">
                <FiAward className="mx-auto text-primary-600 mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">Proven Track Record</h4>
                <p className="text-gray-600">500+ successful projects delivered</p>
              </div>
              <div className="card p-6 text-center">
                <FiZap className="mx-auto text-primary-600 mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">Fast Delivery</h4>
                <p className="text-gray-600">Agile methodology for rapid deployment</p>
              </div>
              <div className="card p-6 text-center mt-8">
                <FiCloud className="mx-auto text-primary-600 mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">Modern Stack</h4>
                <p className="text-gray-600">Latest technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Previews Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-display font-bold mb-2 text-gradient"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Explore Our Services
            </motion.h2>
            <p className="text-sm text-gray-600">Quick access to everything we offer</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {/* About Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, type: "spring", stiffness: 200 }}
            >
              <Link to="/about" className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  animate={{ 
                    boxShadow: [
                      '0 4px 20px rgba(168, 85, 247, 0.15)',
                      '0 8px 30px rgba(168, 85, 247, 0.25)',
                      '0 4px 20px rgba(168, 85, 247, 0.15)',
                    ],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    hover: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-4 text-center relative overflow-hidden border border-purple-100/50 backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-purple-500/5 to-transparent"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <FiInfo className="text-white" size={20} />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-sm font-bold mb-1 group-hover:text-purple-600 transition-colors">About</h3>
                    <p className="text-[10px] text-gray-500">Our Story</p>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-16 h-16 bg-purple-500/5 rounded-tl-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <Link to="/services" className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  animate={{ 
                    boxShadow: [
                      '0 4px 20px rgba(34, 197, 94, 0.15)',
                      '0 8px 30px rgba(34, 197, 94, 0.25)',
                      '0 4px 20px rgba(34, 197, 94, 0.15)',
                    ],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                    hover: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-4 text-center relative overflow-hidden border border-green-100/50 backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-green-500/5 to-transparent"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, -8, 8, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiGrid className="text-white" size={20} />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-sm font-bold mb-1 group-hover:text-green-600 transition-colors">Services</h3>
                    <p className="text-[10px] text-gray-500">What We Do</p>
                  </div>
                  <motion.div
                    className="absolute -top-1 -left-1 w-16 h-16 bg-green-500/5 rounded-br-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Portfolio Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            >
              <Link to="/portfolio" className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  animate={{ 
                    boxShadow: [
                      '0 4px 20px rgba(249, 115, 22, 0.15)',
                      '0 8px 30px rgba(249, 115, 22, 0.25)',
                      '0 4px 20px rgba(249, 115, 22, 0.15)',
                    ],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                    hover: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-4 text-center relative overflow-hidden border border-orange-100/50 backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-orange-500/5 to-transparent"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -3, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiBriefcase className="text-white" size={20} />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-sm font-bold mb-1 group-hover:text-orange-600 transition-colors">Portfolio</h3>
                    <p className="text-[10px] text-gray-500">Our Work</p>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-16 h-16 bg-orange-500/5 rounded-tr-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Blog Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Link to="/blog" className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  animate={{ 
                    boxShadow: [
                      '0 4px 20px rgba(236, 72, 153, 0.15)',
                      '0 8px 30px rgba(236, 72, 153, 0.25)',
                      '0 4px 20px rgba(236, 72, 153, 0.15)',
                    ],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                    hover: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-4 text-center relative overflow-hidden border border-pink-100/50 backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-pink-500/5 to-transparent"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.9 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, -8, 8, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                    >
                      <motion.div
                        animate={{ 
                          rotateY: [0, 180, 360]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <FiBook className="text-white" size={20} />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-sm font-bold mb-1 group-hover:text-pink-600 transition-colors">Blog</h3>
                    <p className="text-[10px] text-gray-500">Insights</p>
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-16 h-16 bg-pink-500/5 rounded-bl-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Contact Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
            >
              <Link to="/contact" className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  animate={{ 
                    boxShadow: [
                      '0 4px 20px rgba(239, 68, 68, 0.15)',
                      '0 8px 30px rgba(239, 68, 68, 0.25)',
                      '0 4px 20px rgba(239, 68, 68, 0.15)',
                    ],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    hover: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-4 text-center relative overflow-hidden border border-red-100/50 backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-400/10 via-red-500/5 to-transparent"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 15, -15, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <FiMail className="text-white" size={20} />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-sm font-bold mb-1 group-hover:text-red-600 transition-colors">Contact</h3>
                    <p className="text-[10px] text-gray-500">Get Quote</p>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-16 h-16 bg-red-500/5 rounded-tl-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can help transform your business with technology
          </p>
          <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Contact Us Today <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
