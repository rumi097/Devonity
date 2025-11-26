import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiInfo, 
  FiGrid, 
  FiBriefcase, 
  FiBook, 
  FiMail,
  FiMenu,
  FiX
} from 'react-icons/fi';

const QuickLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', icon: FiHome, label: 'Home', color: 'from-blue-500 to-blue-600' },
    { path: '/about', icon: FiInfo, label: 'About', color: 'from-purple-500 to-purple-600' },
    { path: '/services', icon: FiGrid, label: 'Services', color: 'from-green-500 to-green-600' },
    { path: '/portfolio', icon: FiBriefcase, label: 'Portfolio', color: 'from-orange-500 to-orange-600' },
    { path: '/blog', icon: FiBook, label: 'Blog', color: 'from-pink-500 to-pink-600' },
    { path: '/contact', icon: FiMail, label: 'Contact', color: 'from-red-500 to-red-600' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50">
      {/* Quick Links Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2"
          >
            {links.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none shadow-lg"
                    >
                      {link.label}
                      <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </motion.div>

                    {/* Icon Button */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${link.color} 
                        flex items-center justify-center shadow-lg cursor-pointer
                        ${isActive ? 'ring-2 ring-white ring-offset-2' : ''}
                        transition-all duration-300`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <link.icon className="text-white" size={18} />
                      </motion.div>
                    </motion.div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeQuickLink"
                        className="absolute inset-0 rounded-full bg-white/20"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 
          flex items-center justify-center shadow-xl cursor-pointer relative overflow-hidden
          ${isOpen ? 'ring-4 ring-white/30' : ''}`}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-600 to-primary-600"
          animate={{
            scale: isOpen ? 1 : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Pulsing Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {isOpen ? (
            <FiX className="text-white" size={24} />
          ) : (
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <FiMenu className="text-white" size={24} />
            </motion.div>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default QuickLinks;
