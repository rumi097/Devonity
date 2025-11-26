import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { 
  FiCode, FiSmartphone, FiCloud, FiZap, FiArrowRight, 
  FiCheckCircle, FiTrendingUp
} from 'react-icons/fi';

interface ServiceData {
  slug: string;
  icon: any;
  title: string;
  tagline: string;
  heroDescription: string;
  fullDescription: string;
  approach: {
    title: string;
    description: string;
  }[];
  whatWeOffer: string[];
  howWeWork: {
    phase: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  technologies: {
    category: string;
    items: string[];
  }[];
  benefits: string[];
  caseStudy?: {
    title: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
}

const servicesData: Record<string, ServiceData> = {
  'web-development': {
    slug: 'web-development',
    icon: FiCode,
    title: 'Custom Web Development',
    tagline: 'Crafting Digital Experiences That Drive Results',
    heroDescription: 'We build high-performance, scalable web applications that transform your business vision into reality. Our expert team combines cutting-edge technology with user-centric design to deliver solutions that exceed expectations.',
    fullDescription: 'At Devonity Technologies, web development is more than just writing code—it\'s about creating digital experiences that engage users and drive business growth. We leverage the latest technologies and best practices to build web applications that are fast, secure, and scalable. Whether you need a corporate website, e-commerce platform, or complex web application, we have the expertise to deliver exceptional results.',
    approach: [
      {
        title: 'Client-Centric Philosophy',
        description: 'We start by deeply understanding your business goals, target audience, and unique challenges. Every decision we make is guided by your success metrics and user needs.'
      },
      {
        title: 'Agile Development',
        description: 'Our iterative approach ensures flexibility and transparency. You\'ll see progress every sprint, with opportunities to provide feedback and adjust priorities as needed.'
      },
      {
        title: 'Quality-First Mindset',
        description: 'We implement rigorous testing, code reviews, and performance optimization at every stage. Your application will be robust, secure, and maintainable from day one.'
      }
    ],
    whatWeOffer: [
      'Progressive Web Applications (PWA) that work seamlessly across all devices',
      'E-commerce platforms with secure payment integration and inventory management',
      'Custom Content Management Systems (CMS) tailored to your workflow',
      'Enterprise web applications with complex business logic and integrations',
      'RESTful and GraphQL API development for seamless data exchange',
      'Responsive designs that deliver exceptional experiences on any screen size',
      'Performance optimization for lightning-fast load times and smooth interactions',
      'SEO optimization to boost your online visibility and organic traffic',
      'Ongoing maintenance and support to keep your application running smoothly'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Planning',
        description: 'We begin with comprehensive research and strategic planning to ensure project success.',
        deliverables: [
          'Detailed requirements analysis and documentation',
          'User personas and journey mapping',
          'Technical architecture design',
          'Project timeline and resource allocation',
          'Risk assessment and mitigation strategies'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Design & Prototyping',
        description: 'Our designers create intuitive, visually stunning interfaces that users love.',
        deliverables: [
          'Wireframes and information architecture',
          'High-fidelity mockups and design systems',
          'Interactive prototypes for user testing',
          'Responsive design for all device sizes',
          'Brand-aligned visual identity'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Development & Testing',
        description: 'Our developers bring designs to life with clean, efficient, and scalable code.',
        deliverables: [
          'Frontend development with React, Vue, or Angular',
          'Backend development with Node.js, Python, or PHP',
          'Database design and optimization',
          'Third-party API integrations',
          'Comprehensive testing (unit, integration, E2E)',
          'Performance optimization and security hardening'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Deployment & Launch',
        description: 'We ensure a smooth launch with minimal downtime and maximum impact.',
        deliverables: [
          'Production environment setup',
          'CI/CD pipeline configuration',
          'Load testing and performance tuning',
          'Security audits and SSL implementation',
          'Training and documentation',
          'Launch strategy and monitoring'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Support & Growth',
        description: 'Our partnership doesn\'t end at launch. We\'re committed to your long-term success.',
        deliverables: [
          '24/7 technical support and monitoring',
          'Regular updates and security patches',
          'Performance analytics and optimization',
          'Feature enhancements based on user feedback',
          'Scalability planning as your business grows'
        ]
      }
    ],
    technologies: [
      {
        category: 'Frontend',
        items: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Python/Django', 'PHP/Laravel', 'Express.js', 'NestJS', 'FastAPI']
      },
      {
        category: 'Database',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
      },
      {
        category: 'Cloud & DevOps',
        items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions']
      }
    ],
    benefits: [
      'Faster time-to-market with agile development methodology',
      'Scalable architecture that grows with your business',
      'Enhanced user experience leading to higher conversion rates',
      'Improved SEO rankings and online visibility',
      'Reduced maintenance costs with clean, documented code',
      'Better security with industry best practices',
      'Mobile-responsive design for maximum reach',
      'Analytics integration for data-driven decisions'
    ],
    caseStudy: {
      title: 'E-Commerce Platform for Global Retailer',
      challenge: 'A growing retail company needed to migrate from their legacy system to a modern, scalable e-commerce platform that could handle 10,000+ concurrent users and integrate with their existing ERP system.',
      solution: 'We built a custom e-commerce platform using React and Node.js with microservices architecture. The solution included real-time inventory management, AI-powered product recommendations, and seamless ERP integration.',
      results: [
        '300% increase in conversion rate',
        '99.9% uptime during peak shopping seasons',
        '50% reduction in page load times',
        'Successful handling of 15,000+ concurrent users',
        'ROI achieved within 6 months of launch'
      ]
    },
    pricing: {
      starter: 'Starting from $5,000 for small business websites',
      professional: 'From $15,000 for custom web applications',
      enterprise: 'Custom pricing for enterprise solutions - Contact us for a quote'
    }
  },
  'mobile-apps': {
    slug: 'mobile-apps',
    icon: FiSmartphone,
    title: 'Mobile App Development',
    tagline: 'Building Mobile Experiences Users Love',
    heroDescription: 'We create powerful, intuitive mobile applications for iOS and Android that engage users and drive business growth. From concept to launch, we deliver apps that stand out in the crowded app marketplace.',
    fullDescription: 'Mobile-first is no longer optional—it\'s essential. Our mobile development team specializes in creating native and cross-platform applications that deliver exceptional user experiences. We combine technical excellence with creative design to build apps that users love and businesses depend on.',
    approach: [
      {
        title: 'User-First Design',
        description: 'Every feature, animation, and interaction is designed with the end user in mind. We create intuitive experiences that feel natural and effortless.'
      },
      {
        title: 'Platform Optimization',
        description: 'Whether iOS, Android, or cross-platform, we optimize for each platform\'s unique characteristics and user expectations.'
      },
      {
        title: 'Performance Excellence',
        description: 'We obsess over performance—fast load times, smooth animations, and efficient battery usage are non-negotiable.'
      }
    ],
    whatWeOffer: [
      'Native iOS development with Swift for optimal performance',
      'Native Android development with Kotlin for rich user experiences',
      'Cross-platform apps with React Native and Flutter',
      'Real-time features with WebSocket and push notifications',
      'Offline-first architecture for uninterrupted functionality',
      'Integration with device features (camera, GPS, biometrics)',
      'Backend development and API integration',
      'App Store and Google Play submission and optimization',
      'Post-launch support and continuous improvement'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Strategy & Research',
        description: 'We start by understanding your target audience and competitive landscape.',
        deliverables: [
          'Market research and competitor analysis',
          'User personas and behavioral insights',
          'Feature prioritization and MVP definition',
          'Platform selection (iOS, Android, or both)',
          'Monetization strategy development'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'UX/UI Design',
        description: 'Creating pixel-perfect designs that follow platform guidelines while maintaining your brand identity.',
        deliverables: [
          'User flow diagrams and wireframes',
          'Interactive prototypes',
          'High-fidelity UI designs',
          'Design system and component library',
          'User testing and iteration'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Development',
        description: 'Building your app with clean, maintainable code and robust architecture.',
        deliverables: [
          'Native or cross-platform development',
          'Backend API development',
          'Database design and implementation',
          'Third-party service integration',
          'Automated testing implementation',
          'Performance optimization'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Testing & QA',
        description: 'Rigorous testing across devices, OS versions, and scenarios.',
        deliverables: [
          'Functional and regression testing',
          'Performance and load testing',
          'Security testing and vulnerability assessment',
          'Device compatibility testing',
          'Beta testing program management'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Launch & Scale',
        description: 'Strategic app launch and ongoing optimization for growth.',
        deliverables: [
          'App Store optimization (ASO)',
          'Submission and approval process',
          'Launch marketing support',
          'Analytics integration',
          'User feedback monitoring',
          'Continuous feature updates'
        ]
      }
    ],
    technologies: [
      {
        category: 'iOS Development',
        items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Combine', 'Xcode']
      },
      {
        category: 'Android Development',
        items: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room', 'Retrofit', 'Android Studio']
      },
      {
        category: 'Cross-Platform',
        items: ['React Native', 'Flutter', 'Expo', 'Dart', 'TypeScript']
      },
      {
        category: 'Backend & Services',
        items: ['Firebase', 'AWS Amplify', 'Node.js', 'GraphQL', 'Socket.io', 'OneSignal']
      }
    ],
    benefits: [
      'Reach millions of users on iOS and Android',
      'Enhanced brand presence and customer engagement',
      'Direct communication channel via push notifications',
      'Offline functionality for uninterrupted user experience',
      'Access to device features for rich functionality',
      'Higher user retention with native performance',
      'Revenue opportunities through in-app purchases',
      'Valuable user insights through analytics'
    ],
    caseStudy: {
      title: 'Fitness Tracking App with 500K+ Users',
      challenge: 'A fitness startup needed a cross-platform mobile app with real-time workout tracking, social features, and wearable device integration, all while maintaining smooth performance.',
      solution: 'We developed a Flutter-based app with Firebase backend, implementing real-time sync, social feeds, and integration with popular fitness wearables. The app features offline workout tracking and seamless cloud sync.',
      results: [
        '500,000+ downloads in first year',
        '4.8-star rating on both app stores',
        '65% daily active user rate',
        '40% reduction in development cost vs native',
        'Featured by Apple in Health & Fitness category'
      ]
    },
    pricing: {
      starter: 'Starting from $8,000 for simple mobile apps',
      professional: 'From $25,000 for feature-rich applications',
      enterprise: 'Custom pricing for enterprise apps - Contact us for consultation'
    }
  },
  'cloud-solutions': {
    slug: 'cloud-solutions',
    icon: FiCloud,
    title: 'Cloud Solutions & DevOps',
    tagline: 'Empowering Your Business with Cloud Technology',
    heroDescription: 'Transform your infrastructure with scalable, secure, and cost-effective cloud solutions. We help businesses migrate to the cloud, optimize their infrastructure, and implement DevOps practices for continuous delivery.',
    fullDescription: 'The cloud has revolutionized how businesses operate. Our cloud experts help you harness its full potential—from initial migration to ongoing optimization. We work with AWS, Google Cloud, and Azure to design infrastructure that\'s scalable, secure, and cost-efficient.',
    approach: [
      {
        title: 'Cloud-Native Architecture',
        description: 'We design solutions that leverage cloud capabilities from the ground up—auto-scaling, managed services, and distributed systems.'
      },
      {
        title: 'Cost Optimization',
        description: 'Our experts ensure you\'re only paying for what you need, with right-sized resources and intelligent scaling strategies.'
      },
      {
        title: 'Security First',
        description: 'Security is built into every layer—from network design to access controls, encryption, and compliance.'
      }
    ],
    whatWeOffer: [
      'Cloud migration strategy and execution (AWS, Azure, Google Cloud)',
      'Infrastructure as Code (IaC) with Terraform and CloudFormation',
      'Kubernetes and container orchestration',
      'CI/CD pipeline setup with automated testing and deployment',
      'Microservices architecture design and implementation',
      'Serverless computing with Lambda, Cloud Functions',
      'Database migration and optimization',
      'Cloud security audits and compliance',
      '24/7 monitoring, logging, and alerting',
      'Disaster recovery and backup solutions'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Assessment & Planning',
        description: 'Understanding your current infrastructure and defining cloud strategy.',
        deliverables: [
          'Current infrastructure audit',
          'Cloud readiness assessment',
          'Cost-benefit analysis',
          'Migration roadmap and timeline',
          'Risk assessment and mitigation plan'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Architecture Design',
        description: 'Designing cloud infrastructure that meets your requirements.',
        deliverables: [
          'Cloud architecture diagrams',
          'Security and compliance framework',
          'High availability and disaster recovery design',
          'Cost optimization strategy',
          'Technology stack recommendations'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Migration & Implementation',
        description: 'Executing migration with minimal disruption to your business.',
        deliverables: [
          'Infrastructure provisioning',
          'Data migration with validation',
          'Application deployment and testing',
          'Security configuration',
          'Performance tuning'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'DevOps Setup',
        description: 'Implementing automation for continuous delivery.',
        deliverables: [
          'CI/CD pipeline configuration',
          'Automated testing framework',
          'Infrastructure as Code implementation',
          'Monitoring and alerting setup',
          'Documentation and training'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Optimization & Support',
        description: 'Ongoing management and continuous improvement.',
        deliverables: [
          'Performance monitoring and optimization',
          'Cost analysis and reduction recommendations',
          'Security updates and patches',
          'Capacity planning',
          '24/7 technical support'
        ]
      }
    ],
    technologies: [
      {
        category: 'Cloud Platforms',
        items: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'DigitalOcean']
      },
      {
        category: 'Containers & Orchestration',
        items: ['Docker', 'Kubernetes', 'ECS', 'GKE', 'AKS', 'Helm']
      },
      {
        category: 'Infrastructure as Code',
        items: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi']
      },
      {
        category: 'CI/CD & Monitoring',
        items: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack']
      }
    ],
    benefits: [
      'Reduced infrastructure costs through optimization',
      'Improved scalability with auto-scaling',
      'Enhanced security and compliance',
      'Faster deployment with CI/CD automation',
      'Better disaster recovery capabilities',
      'Global reach with CDN and multi-region deployment',
      'Reduced maintenance overhead',
      'Pay-as-you-go pricing model'
    ],
    caseStudy: {
      title: 'Enterprise Cloud Migration for Financial Services',
      challenge: 'A financial services company needed to migrate their legacy on-premise infrastructure to the cloud while maintaining strict security and compliance requirements.',
      solution: 'We designed and executed a phased AWS migration using Infrastructure as Code, implementing multi-region deployment, automated backups, and comprehensive security controls. The solution included CI/CD pipelines and real-time monitoring.',
      results: [
        '60% reduction in infrastructure costs',
        '99.99% uptime achieved',
        '80% faster deployment cycles',
        'Full SOC 2 and PCI DSS compliance',
        'Zero security incidents post-migration'
      ]
    },
    pricing: {
      starter: 'Cloud consulting from $3,000',
      professional: 'Migration projects from $20,000',
      enterprise: 'Enterprise cloud solutions - Custom pricing based on infrastructure size'
    }
  },
  'automation': {
    slug: 'automation',
    icon: FiZap,
    title: 'Business Automation Solutions',
    tagline: 'Streamline Operations, Maximize Efficiency',
    heroDescription: 'Automate repetitive tasks, streamline workflows, and boost productivity with intelligent automation solutions. We help businesses save time and reduce costs through smart automation.',
    fullDescription: 'In today\'s fast-paced business environment, automation isn\'t just a luxury—it\'s a necessity. Our automation experts identify opportunities to streamline your operations, reduce manual work, and eliminate errors. From simple workflow automation to complex business process automation, we deliver solutions that free your team to focus on what matters most.',
    approach: [
      {
        title: 'Process Analysis',
        description: 'We start by mapping your current workflows to identify bottlenecks, inefficiencies, and automation opportunities.'
      },
      {
        title: 'Custom Solutions',
        description: 'Every business is unique. We design automation solutions tailored to your specific processes and goals.'
      },
      {
        title: 'Seamless Integration',
        description: 'Our automations work harmoniously with your existing tools and systems, requiring minimal disruption.'
      }
    ],
    whatWeOffer: [
      'Workflow automation for repetitive business processes',
      'Data entry and processing automation',
      'Email and communication automation',
      'Report generation and distribution',
      'Integration between multiple systems and tools',
      'RPA (Robotic Process Automation) implementation',
      'Custom business logic automation',
      'Scheduled tasks and batch processing',
      'Alert and notification systems',
      'Data synchronization across platforms'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Process Discovery',
        description: 'Understanding your workflows and identifying automation opportunities.',
        deliverables: [
          'Current process documentation',
          'Bottleneck identification',
          'ROI analysis for automation',
          'Priority automation opportunities',
          'Success metrics definition'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Solution Design',
        description: 'Designing automation workflows that optimize your operations.',
        deliverables: [
          'Automated workflow diagrams',
          'Tool and platform selection',
          'Integration architecture',
          'Error handling strategies',
          'User interface designs (if applicable)'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Development & Testing',
        description: 'Building and testing automation solutions.',
        deliverables: [
          'Automation script development',
          'Integration implementation',
          'Error handling and logging',
          'Testing across scenarios',
          'Performance optimization'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Deployment & Training',
        description: 'Rolling out automation and training your team.',
        deliverables: [
          'Production deployment',
          'User training and documentation',
          'Monitoring setup',
          'Backup and recovery procedures',
          'Support handoff'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Optimization',
        description: 'Continuous improvement based on real-world usage.',
        deliverables: [
          'Performance monitoring',
          'Efficiency reports',
          'Process refinements',
          'Additional automation opportunities',
          'Ongoing support and maintenance'
        ]
      }
    ],
    technologies: [
      {
        category: 'Automation Platforms',
        items: ['Zapier', 'Make (Integromat)', 'Microsoft Power Automate', 'n8n']
      },
      {
        category: 'Programming & Scripts',
        items: ['Python', 'Node.js', 'PowerShell', 'Bash', 'JavaScript']
      },
      {
        category: 'RPA Tools',
        items: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Selenium']
      },
      {
        category: 'Integration',
        items: ['REST APIs', 'GraphQL', 'Webhooks', 'Message Queues', 'Database Connectors']
      }
    ],
    benefits: [
      'Save 20-40 hours per week on manual tasks',
      'Reduce human errors by up to 90%',
      'Improve process consistency and reliability',
      'Free employees for strategic work',
      'Faster turnaround times',
      '24/7 automated operations',
      'Better data accuracy and compliance',
      'Significant cost savings over time'
    ],
    caseStudy: {
      title: 'Marketing Automation for SaaS Company',
      challenge: 'A growing SaaS company was spending 30+ hours weekly on manual data entry, report generation, and customer onboarding tasks across multiple platforms.',
      solution: 'We implemented comprehensive automation using Zapier, custom Python scripts, and API integrations. The solution automated lead processing, customer onboarding emails, weekly report generation, and CRM updates.',
      results: [
        '35 hours per week saved',
        '95% reduction in data entry errors',
        'Customer onboarding time reduced by 70%',
        'ROI achieved in 3 months',
        'Team satisfaction increased significantly'
      ]
    },
    pricing: {
      starter: 'Simple automation from $2,000',
      professional: 'Complex workflows from $8,000',
      enterprise: 'Enterprise RPA solutions - Custom pricing based on scope'
    }
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[slug];
  const ServiceIcon = service.icon;

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link to="/services" className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors">
              ← Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <ServiceIcon className="text-white" size={40} />
              </motion.div>
              <div>
                <h1 className="text-5xl font-display font-bold mb-2">{service.title}</h1>
                <p className="text-2xl text-primary-100">{service.tagline}</p>
              </div>
            </div>
            
            <p className="text-xl text-primary-50 leading-relaxed">
              {service.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our {service.title}?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {service.approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="font-bold text-lg mb-2 text-primary-700">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whatWeOffer.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-4 flex items-start gap-3 hover:shadow-lg transition-shadow"
              >
                <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">{offering}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our proven process for delivering excellence</p>
          </motion.div>

          <div className="space-y-8">
            {service.howWeWork.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {phase.phase}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-bold text-lg mb-4 text-primary-700">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">Value delivered to your business</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiTrendingUp className="text-white" size={24} />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {service.caseStudy && (
        <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Success Story</h2>
              <p className="text-xl text-primary-100">Real results from real clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card bg-white text-gray-900 p-8 md:p-12"
            >
              <h3 className="text-3xl font-bold mb-6 text-gradient">{service.caseStudy.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary-700">The Challenge</h4>
                  <p className="text-gray-600">{service.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary-700">Our Solution</h4>
                  <p className="text-gray-600">{service.caseStudy.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-primary-700">Results Achieved</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.caseStudy.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg"
                    >
                      <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Investment & Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for quality service</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <h3 className="font-bold text-xl mb-4">Starter</h3>
              <p className="text-gray-600">{service.pricing.starter}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 text-center border-2 border-primary-600 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="font-bold text-xl mb-4">Professional</h3>
              <p className="text-gray-600">{service.pricing.professional}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8 text-center"
            >
              <h3 className="font-bold text-xl mb-4">Enterprise</h3>
              <p className="text-gray-600">{service.pricing.enterprise}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Start Your Project <FiArrowRight className="inline ml-2" />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetail;
