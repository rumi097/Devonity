import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: FiAward,
      title: 'Quality Excellence',
      description: 'Quality is non-negotiable. We follow best practices and maintain high standards in every project we undertake.',
    },
    {
      icon: FiUsers,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships by truly understanding and exceeding your expectations.',
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Growth',
      description: 'We invest in our team\'s development and embrace learning to provide the best solutions for our clients.',
    },
  ];

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white py-32 relative overflow-hidden">
        {/* Animated particles background */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 3 + 1}
              fill="rgba(255,255,255,0.4)"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-4 border-primary-400 opacity-20 rounded-lg"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 border-4 border-accent-400 opacity-20"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-blue-400 opacity-20 rounded-full"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 break-words"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                background: "linear-gradient(90deg, #fff, #60a5fa, #c084fc, #fff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Devonity Technologies
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Passionate innovators delivering excellence in every project
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Devonity Technologies Limited was born from a passion for creating exceptional digital solutions. Our mission is simple yet powerful: to help businesses leverage cutting-edge technology for growth and success.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We're a focused team of skilled developers, designers, and cloud engineers who bring specialized expertise to every project. Our agile approach ensures rapid development, transparent communication, and solutions that truly work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just build software – we create solutions that transform businesses, enhance user experiences, and deliver real results. Every project gets our full attention and commitment to excellence.
              </p>
            </div>
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-primary-100">Quality Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-4 sm:p-6 md:p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence in every aspect of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled developers, designers, and engineers passionate about delivering excellence',
                icon: '👨‍💻',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Modern Technology',
                description: 'We use cutting-edge tech stacks to build fast, secure, and scalable solutions',
                icon: '⚡',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Agile Development',
                description: 'Rapid iterations, transparent communication, and flexible project management',
                icon: '🚀',
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Client-Focused',
                description: 'Your success is our priority. We listen, understand, and deliver exactly what you need',
                icon: '🎯',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: '24/7 Support',
                description: 'We\'re always here when you need us. Round-the-clock support and maintenance',
                icon: '💬',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                title: 'Quality Assured',
                description: 'Rigorous testing, code reviews, and best practices ensure top-notch quality',
                icon: '✨',
                color: 'from-pink-500 to-rose-500'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 } 
                }}
                className="card p-8 text-center relative overflow-hidden group"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Animated icon */}
                <motion.div
                  className="text-7xl mb-4 inline-block"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {item.description}
                </p>

                {/* Pulse effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-20`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: '24/7', label: 'Support Available', icon: '🔄' },
              { number: 'Latest', label: 'Tech Stack', icon: '⚡' },
              { number: 'Agile', label: 'Methodology', icon: '🚀' },
              { number: '100+', label: 'Projects Delivered', icon: '✨' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 group-hover:border-primary-400 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl transition-all duration-500">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-3xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🎯
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent break-words">
                    Our Mission
                  </h3>
                </motion.div>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  To empower businesses worldwide with innovative technology solutions that drive growth, 
                  enhance efficiency, and create lasting value. We are committed to delivering excellence 
                  in every project while building meaningful partnerships with our clients.
                </motion.p>
                
                {/* Animated corner accents */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-primary-400 rounded-tr-3xl opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-accent-400 rounded-bl-3xl opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-accent-600 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
              />
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 group-hover:border-accent-400 rounded-3xl p-12 shadow-xl transition-all duration-500">
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl flex items-center justify-center text-3xl"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🌟
                  </motion.div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </motion.div>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  To be the global leader in digital transformation, recognized for our innovation, 
                  quality, and commitment to client success. We envision a future where technology 
                  seamlessly integrates with business to unlock unlimited potential.
                </motion.p>

                {/* Animated corner accents */}
                <motion.div
                  className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-accent-400 rounded-tl-3xl opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-primary-400 rounded-br-3xl opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
