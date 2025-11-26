import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced inventory management',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app for health and fitness tracking',
      image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      title: 'Cloud Infrastructure',
      category: 'cloud',
      description: 'Enterprise cloud migration and optimization project',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      link: '#',
    },
    {
      title: 'Banking Dashboard',
      category: 'web',
      description: 'Secure banking dashboard with real-time analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      link: '#',
    },
    {
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Full-featured food delivery platform for iOS and Android',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps'],
      link: '#',
    },
    {
      title: 'SaaS Platform',
      category: 'web',
      description: 'Multi-tenant SaaS application for project management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      link: '#',
    },
    {
      title: 'IoT Dashboard',
      category: 'automation',
      description: 'Real-time monitoring dashboard for IoT devices',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800',
      technologies: ['Angular', 'MQTT', 'InfluxDB', 'Grafana'],
      link: '#',
    },
    {
      title: 'Social Media Platform',
      category: 'web',
      description: 'Modern social networking platform with live chat',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
      link: '#',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'automation', label: 'Automation' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Showcasing successful projects that have transformed businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 flex gap-4">
                      <a
                        href={project.link}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        <FiExternalLink />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Build Your Success Story
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our growing list of satisfied clients
          </p>
          <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
