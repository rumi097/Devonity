import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiInfo, 
  FiGrid, 
  FiBriefcase, 
  FiBook, 
  FiMail,
  FiAward
} from 'react-icons/fi';

const PagePreviews = () => {
  const location = useLocation();

  const pages = [
    { 
      path: '/about', 
      icon: FiInfo, 
      label: 'About', 
      subtitle: 'Our Story',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-100',
      bgGradient: 'from-purple-500/5 to-purple-600/5',
      shadowColor: 'rgba(168, 85, 247, 0.2)',
      shadowColorHover: 'rgba(168, 85, 247, 0.3)',
      delay: 0.1
    },
    { 
      path: '/services', 
      icon: FiGrid, 
      label: 'Services', 
      subtitle: 'What We Do',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      borderColor: 'border-green-100',
      bgGradient: 'from-green-500/5 to-green-600/5',
      shadowColor: 'rgba(34, 197, 94, 0.2)',
      shadowColorHover: 'rgba(34, 197, 94, 0.3)',
      delay: 0.15
    },
    { 
      path: '/portfolio', 
      icon: FiBriefcase, 
      label: 'Portfolio', 
      subtitle: 'Our Work',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-100',
      bgGradient: 'from-orange-500/5 to-orange-600/5',
      shadowColor: 'rgba(249, 115, 22, 0.2)',
      shadowColorHover: 'rgba(249, 115, 22, 0.3)',
      delay: 0.2
    },
    { 
      path: '/blog', 
      icon: FiBook, 
      label: 'Blog', 
      subtitle: 'Insights',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600',
      borderColor: 'border-pink-100',
      bgGradient: 'from-pink-500/5 to-pink-600/5',
      shadowColor: 'rgba(236, 72, 153, 0.2)',
      shadowColorHover: 'rgba(236, 72, 153, 0.3)',
      delay: 0.25
    },
    { 
      path: '/contact', 
      icon: FiMail, 
      label: 'Contact', 
      subtitle: 'Get Quote',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      borderColor: 'border-red-100',
      bgGradient: 'from-red-500/5 to-red-600/5',
      shadowColor: 'rgba(239, 68, 68, 0.2)',
      shadowColorHover: 'rgba(239, 68, 68, 0.3)',
      delay: 0.3
    },
  ];

  // Filter out current page
  const filteredPages = pages.filter(page => page.path !== location.pathname);

  return (
    <section className="py-6 sm:py-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-xl sm:text-2xl font-display font-bold mb-1 text-gradient">
            Quick Navigation
          </h2>
          <p className="text-xs text-gray-600">Explore more sections</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {filteredPages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={page.path} className="group block">
                <motion.div
                  whileHover={{ y: -4, scale: 1.05 }}
                  animate={{ 
                    boxShadow: [
                      `0 4px 15px ${page.shadowColor}`,
                      `0 6px 20px ${page.shadowColorHover}`,
                      `0 4px 15px ${page.shadowColor}`,
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, delay: page.delay * 2 },
                    hover: { duration: 0.2 }
                  }}
                  className={`bg-white rounded-xl p-3 text-center relative overflow-hidden border ${page.borderColor}`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${page.bgGradient}`}
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: page.delay }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-br ${page.gradient} rounded-lg flex items-center justify-center`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: page.delay * 3 }}
                    >
                      <page.icon className="text-white" size={18} />
                    </motion.div>
                    <h3 className={`text-xs font-bold mb-1 group-hover:text-${page.color}-600 transition-colors`}>
                      {page.label}
                    </h3>
                    <p className="text-[10px] text-gray-500">{page.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: filteredPages.length * 0.05 }}
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              animate={{ 
                boxShadow: [
                  '0 4px 15px rgba(99, 102, 241, 0.3)',
                  '0 6px 20px rgba(168, 85, 247, 0.4)',
                  '0 4px 15px rgba(99, 102, 241, 0.3)',
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, delay: 1.5 },
                hover: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-3 text-center relative overflow-hidden cursor-default"
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FiAward className="text-white" size={18} />
                </motion.div>
                <h3 className="text-xs font-bold mb-1 text-white">Premium</h3>
                <p className="text-[10px] text-white/80">Quality</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PagePreviews;
