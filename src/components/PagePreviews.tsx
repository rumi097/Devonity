import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiInfo, 
  FiGrid, 
  FiBriefcase, 
  FiBook, 
  FiMail
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
            Quick Navigation
          </motion.h2>
          <p className="text-sm text-gray-600">Explore more sections</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {filteredPages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
            >
              <Link to={page.path} className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.08 }}
                  animate={{ 
                    boxShadow: [
                      `0 4px 20px ${page.shadowColor}`,
                      `0 8px 30px ${page.shadowColorHover}`,
                      `0 4px 20px ${page.shadowColor}`,
                    ],
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                    hover: { duration: 0.3 }
                  }}
                  className={`bg-white rounded-2xl p-5 text-center relative overflow-hidden border ${page.borderColor} backdrop-blur-sm`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${page.bgGradient}`}
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${page.gradient} rounded-xl flex items-center justify-center shadow-lg`}
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
                        <page.icon className="text-white" size={24} />
                      </motion.div>
                    </motion.div>
                    <h3 className={`text-sm font-bold mb-1 group-hover:text-${page.color}-600 transition-colors`}>
                      {page.label}
                    </h3>
                    <p className="text-xs text-gray-500">{page.subtitle}</p>
                  </div>
                  <motion.div
                    className={`absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br ${page.bgGradient} rounded-tl-full`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PagePreviews;
