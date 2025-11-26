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
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About Devonity Technologies
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Passionate innovators delivering excellence in every project
            </p>
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
      <section className="py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-8 text-center"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: 'Latest', label: 'Tech Stack' },
              { number: 'Agile', label: 'Methodology' },
            ].map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card p-12" data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive growth, 
                enhance efficiency, and create lasting value. We are committed to delivering excellence 
                in every project while building meaningful partnerships with our clients.
              </p>
            </div>
            <div className="card p-12" data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in digital transformation, recognized for our innovation, 
                quality, and commitment to client success. We envision a future where technology 
                seamlessly integrates with business to unlock unlimited potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
