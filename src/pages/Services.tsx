import { motion } from 'framer-motion';
import { 
  FiCode, FiSmartphone, FiCloud, FiMonitor, FiPieChart, 
  FiSettings, FiDatabase, FiShield, FiZap, FiUsers,
  FiTrendingUp, FiMessageSquare, FiArrowRight 
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Custom Web Development',
      description: 'We craft bespoke web applications tailored to your unique business requirements. Using cutting-edge technologies like React, Vue, Angular, and modern backend frameworks, we build scalable, performant solutions that drive results.',
      features: [
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'Content Management Systems',
        'Enterprise Web Applications',
        'API Development & Integration',
      ],
      technologies: ['React', 'Node.js', 'Python', 'PHP', 'Laravel', 'Django'],
      slug: 'web-development',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We leverage React Native, Flutter, and native technologies to deliver exceptional mobile experiences that engage users and drive business growth.',
      features: [
        'Native iOS Development (Swift)',
        'Native Android Development (Kotlin)',
        'Cross-platform with React Native',
        'Flutter App Development',
        'App Store Optimization',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      slug: 'mobile-apps',
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Comprehensive cloud infrastructure services and DevOps solutions. We help you migrate to the cloud, optimize your infrastructure, and implement CI/CD pipelines for seamless deployment and scaling.',
      features: [
        'AWS, Azure & Google Cloud Setup',
        'Cloud Migration Services',
        'Infrastructure as Code (IaC)',
        'Kubernetes & Docker Containerization',
        'CI/CD Pipeline Implementation',
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      slug: 'cloud-solutions',
    },
    {
      icon: FiMonitor,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality. Our expert designers create intuitive interfaces and engaging user experiences that captivate your audience and enhance conversion rates.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interactive Design Systems',
        'Mobile-First Design',
        'Usability Testing',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      slug: 'ui-ux-design',
    },
    {
      icon: FiSettings,
      title: 'Business Automation',
      description: 'Intelligent automation solutions that streamline your operations and boost productivity. We implement custom workflows, integrate systems, and automate repetitive tasks to save time and reduce costs.',
      features: [
        'Workflow Automation',
        'Business Process Optimization',
        'RPA (Robotic Process Automation)',
        'Integration with Third-party Tools',
        'Custom Business Logic',
      ],
      technologies: ['Zapier', 'Make', 'Power Automate', 'Python', 'Node.js'],
      slug: 'automation',
    },
    {
      icon: FiDatabase,
      title: 'Database Design & Management',
      description: 'Robust database architecture and management services. We design efficient database schemas, optimize queries, and ensure data integrity for your mission-critical applications.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Database Security',
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
      slug: 'database-management',
    },
    {
      icon: FiShield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets. From security audits to penetration testing, we help you identify vulnerabilities and implement robust security measures.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'SSL/TLS Implementation',
        'GDPR & Compliance',
        'Security Training',
      ],
      technologies: ['OAuth', 'JWT', 'Encryption', 'Firewall', 'VPN'],
      slug: 'cybersecurity',
    },
    {
      icon: FiZap,
      title: 'Performance Optimization',
      description: 'Speed matters. We optimize your applications for peak performance, ensuring fast load times, smooth interactions, and excellent user experience across all devices.',
      features: [
        'Frontend Performance Tuning',
        'Backend Optimization',
        'CDN Integration',
        'Caching Strategies',
        'Load Testing',
      ],
      technologies: ['Redis', 'Varnish', 'CloudFlare', 'New Relic', 'GTmetrix'],
      slug: 'performance-optimization',
    },
    {
      icon: FiPieChart,
      title: 'Analytics & Business Intelligence',
      description: 'Data-driven insights to power your business decisions. We implement analytics solutions and create custom dashboards that help you understand your users and optimize performance.',
      features: [
        'Google Analytics Setup',
        'Custom Dashboard Development',
        'Data Visualization',
        'A/B Testing',
        'Conversion Rate Optimization',
      ],
      technologies: ['Google Analytics', 'Mixpanel', 'Tableau', 'Power BI', 'D3.js'],
      slug: 'analytics',
    },
    {
      icon: FiUsers,
      title: 'Dedicated Development Teams',
      description: 'Extend your team with our skilled developers. We provide dedicated resources that work as an extension of your in-house team, following your processes and culture.',
      features: [
        'Full-stack Developers',
        'Specialized Tech Experts',
        'Agile Development Process',
        'Direct Communication',
        'Flexible Engagement Models',
      ],
      technologies: ['All Modern Stacks', 'Agile', 'Scrum', 'Jira', 'Slack'],
      slug: 'dedicated-teams',
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing Tech',
      description: 'Technology solutions for digital marketing success. SEO optimization, marketing automation, and tools that help you reach and convert your target audience effectively.',
      features: [
        'SEO & Technical Optimization',
        'Marketing Automation Tools',
        'CRM Integration',
        'Email Marketing Systems',
        'Social Media Integration',
      ],
      technologies: ['SEO Tools', 'HubSpot', 'Mailchimp', 'Salesforce', 'Google Ads'],
      slug: 'digital-marketing',
    },
    {
      icon: FiMessageSquare,
      title: 'Support & Maintenance',
      description: '24/7 technical support and ongoing maintenance services. We ensure your applications run smoothly with proactive monitoring, regular updates, and rapid issue resolution.',
      features: [
        '24/7 Technical Support',
        'Proactive Monitoring',
        'Regular Updates & Patches',
        'Performance Monitoring',
        'SLA-based Support Plans',
      ],
      technologies: ['Monitoring Tools', 'Ticketing Systems', 'Logging', 'Analytics'],
      slug: 'support-maintenance',
    },
  ];

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 relative overflow-hidden">
        {/* Animated service icons background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div className="absolute top-10 left-10" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <FiCode size={60} />
          </motion.div>
          <motion.div className="absolute top-20 right-20" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <FiCloud size={50} />
          </motion.div>
          <motion.div className="absolute bottom-20 left-1/4" animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            <FiSettings size={70} />
          </motion.div>
          <motion.div className="absolute bottom-10 right-1/3" animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
            <FiSmartphone size={55} />
          </motion.div>
          <motion.div className="absolute top-1/2 left-1/2" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            <FiDatabase size={65} />
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <motion.div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full" animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full" animate={{ y: [20, -20, 20], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full" animate={{ y: [-15, 15, -15], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 3.5, repeat: Infinity }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 break-words"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Premium Services
            </motion.h1>
            <motion.p 
              className="text-lg text-primary-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Comprehensive technology solutions designed to transform your business and drive sustainable growth
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
                }}
                className="card service-card p-6 group relative overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="text-white" size={28} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-gray-600 text-xs flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-primary-600 mr-2 font-bold">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-xs italic">+{service.features.length - 4} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium hover:bg-primary-100 transition-colors duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.03 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{service.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="text-primary-600 font-semibold text-sm inline-flex items-center hover:text-primary-700 group-hover:gap-2 transition-all"
                    >
                      Learn More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
              { number: '02', title: 'Design', description: 'Creating user-centric designs and prototypes' },
              { number: '03', title: 'Development', description: 'Building with best practices and modern tech' },
              { number: '04', title: 'Deployment', description: 'Launching and ongoing support' },
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="card p-6 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Animated background on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.4 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl font-bold text-gradient mb-3"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Let's discuss your project and create something amazing together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
