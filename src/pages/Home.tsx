import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiSmartphone, FiCloud, FiZap, FiUsers, FiAward } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';

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
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '100%', label: 'On-Time Delivery' },
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                Transform Your
                <span className="block text-gradient">Digital Future</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2 stat-number">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="card service-card p-8 group"
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

      {/* Why Choose Us */}
      <section className="py-24 gradient-bg">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
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
