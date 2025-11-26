import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { 
  FiCode, FiSmartphone, FiCloud, FiZap, FiArrowRight, 
  FiCheckCircle, FiTrendingUp, FiMonitor,
  FiDatabase, FiShield, FiPieChart, FiUsers, FiMessageSquare
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
      starter: 'Starting from $500 for small business websites',
      professional: 'From $2,000 for custom web applications',
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
      starter: 'Starting from $500 for simple mobile apps',
      professional: 'From $2,000 for feature-rich applications',
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
      starter: 'Cloud consulting from $500',
      professional: 'Migration projects from $2,000',
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
      starter: 'Simple automation from $500',
      professional: 'Complex workflows from $2,000',
      enterprise: 'Enterprise RPA solutions - Custom pricing based on scope'
    }
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    icon: FiMonitor,
    title: 'UI/UX Design',
    tagline: 'Creating Intuitive Experiences Users Love',
    heroDescription: 'We design beautiful, user-friendly interfaces that combine aesthetics with functionality. Our design process is rooted in research and testing to ensure your users have the best possible experience.',
    fullDescription: 'Great design is invisible. Our UI/UX team creates interfaces that feel natural and intuitive, allowing users to accomplish their goals effortlessly. We combine data-driven insights with creative excellence to deliver designs that not only look stunning but also drive conversions and user satisfaction.',
    approach: [
      {
        title: 'User-Centered Design',
        description: 'We put your users at the center of every design decision. Through research and testing, we understand their needs, behaviors, and pain points.'
      },
      {
        title: 'Data-Driven Creativity',
        description: 'Our designs are informed by analytics, user testing, and industry best practices while maintaining creative excellence and brand identity.'
      },
      {
        title: 'Iterative Refinement',
        description: 'We continuously test and refine designs based on user feedback and performance metrics to ensure optimal results.'
      }
    ],
    whatWeOffer: [
      'User research and persona development',
      'Information architecture and user flow mapping',
      'Wireframing and interactive prototyping',
      'High-fidelity UI design and design systems',
      'Mobile-first and responsive design',
      'Usability testing and user feedback analysis',
      'Accessibility compliance (WCAG 2.1)',
      'Design handoff and developer collaboration',
      'Post-launch optimization and iteration'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Research & Discovery',
        description: 'Understanding your users, business goals, and competitive landscape.',
        deliverables: [
          'User research and interviews',
          'Persona development',
          'Competitive analysis',
          'User journey mapping',
          'Design requirements documentation'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Information Architecture',
        description: 'Structuring content and features for optimal user experience.',
        deliverables: [
          'Site maps and content hierarchy',
          'User flow diagrams',
          'Feature prioritization',
          'Navigation structure',
          'Content strategy'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Wireframing & Prototyping',
        description: 'Creating low and high-fidelity representations of the interface.',
        deliverables: [
          'Low-fidelity wireframes',
          'Interactive prototypes',
          'User testing sessions',
          'Iteration based on feedback',
          'Finalized wireframes'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Visual Design',
        description: 'Bringing wireframes to life with stunning visual design.',
        deliverables: [
          'Visual design exploration',
          'Design system creation',
          'High-fidelity mockups',
          'Responsive design variations',
          'Asset preparation'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Testing & Handoff',
        description: 'Ensuring design quality and smooth developer handoff.',
        deliverables: [
          'Usability testing',
          'Accessibility audit',
          'Design documentation',
          'Developer handoff',
          'Post-launch support'
        ]
      }
    ],
    technologies: [
      {
        category: 'Design Tools',
        items: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer']
      },
      {
        category: 'Prototyping',
        items: ['Figma', 'Protopie', 'Principle', 'After Effects', 'Lottie']
      },
      {
        category: 'Research',
        items: ['UserTesting', 'Hotjar', 'Google Analytics', 'Maze', 'Optimal Workshop']
      },
      {
        category: 'Collaboration',
        items: ['Figma', 'Miro', 'FigJam', 'Zeplin', 'Abstract']
      }
    ],
    benefits: [
      'Increased user satisfaction and engagement',
      'Higher conversion rates and ROI',
      'Reduced development time and costs',
      'Improved brand perception and loyalty',
      'Better accessibility and inclusivity',
      'Data-driven design decisions'
    ],
    caseStudy: {
      title: 'E-commerce Redesign Boosts Conversions by 145%',
      challenge: 'An online retailer was experiencing high bounce rates and low conversion rates despite significant traffic. Users found the checkout process confusing and abandoned their carts.',
      solution: 'We conducted extensive user research, redesigned the entire user experience with focus on simplified navigation and streamlined checkout, and implemented A/B testing to validate design decisions.',
      results: [
        '145% increase in conversion rate',
        '62% reduction in cart abandonment',
        '40% increase in average order value',
        '3.5x improvement in mobile conversions',
        '85% positive user feedback'
      ]
    },
    pricing: {
      starter: 'Landing page design from $500',
      professional: 'Full website/app design from $2,000',
      enterprise: 'Complex enterprise solutions - Custom pricing'
    }
  },
  'database-management': {
    slug: 'database-management',
    icon: FiDatabase,
    title: 'Database Design & Management',
    tagline: 'Building Robust Data Foundations',
    heroDescription: 'We design and manage efficient, scalable database solutions that ensure your data is secure, accessible, and optimized for performance. From schema design to query optimization, we handle it all.',
    fullDescription: 'Your database is the foundation of your application. We create robust database architectures that scale with your business, optimize queries for lightning-fast performance, and implement security measures to protect your valuable data.',
    approach: [
      {
        title: 'Performance-First Design',
        description: 'We design database schemas with performance in mind, using indexing strategies, normalization, and partitioning to ensure fast queries even with large datasets.'
      },
      {
        title: 'Security & Compliance',
        description: 'We implement industry-standard security practices including encryption, access controls, and regular audits to protect your data and maintain compliance.'
      },
      {
        title: 'Scalability Planning',
        description: 'Our database solutions are designed to grow with your business, with strategies for horizontal and vertical scaling built in from day one.'
      }
    ],
    whatWeOffer: [
      'Database architecture and schema design',
      'Query optimization and performance tuning',
      'Database migration and data transfer',
      'Backup and disaster recovery solutions',
      'Database security and compliance',
      'Replication and clustering setup',
      'Monitoring and maintenance',
      'Data modeling and normalization',
      'Database auditing and reporting'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Analysis & Planning',
        description: 'Understanding your data requirements and access patterns.',
        deliverables: [
          'Data requirement analysis',
          'Access pattern identification',
          'Scalability planning',
          'Technology selection',
          'Security requirements'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Schema Design',
        description: 'Creating efficient database structures.',
        deliverables: [
          'Entity-relationship diagrams',
          'Normalized schema design',
          'Index strategy',
          'Constraint definition',
          'Documentation'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Implementation',
        description: 'Setting up and configuring your database.',
        deliverables: [
          'Database installation',
          'Schema implementation',
          'Data migration',
          'Security configuration',
          'Performance tuning'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Optimization',
        description: 'Fine-tuning for optimal performance.',
        deliverables: [
          'Query optimization',
          'Index optimization',
          'Caching strategy',
          'Load testing',
          'Performance monitoring setup'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Maintenance & Support',
        description: 'Ongoing database management and optimization.',
        deliverables: [
          'Regular backups',
          'Performance monitoring',
          'Security updates',
          'Capacity planning',
          'Query optimization'
        ]
      }
    ],
    technologies: [
      {
        category: 'Relational',
        items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'Oracle']
      },
      {
        category: 'NoSQL',
        items: ['MongoDB', 'Cassandra', 'DynamoDB', 'Redis', 'Elasticsearch']
      },
      {
        category: 'Tools',
        items: ['pgAdmin', 'DataGrip', 'DBeaver', 'MongoDB Compass']
      },
      {
        category: 'Cloud',
        items: ['AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'Atlas MongoDB']
      }
    ],
    benefits: [
      'Faster query performance and response times',
      'Improved data integrity and consistency',
      'Enhanced security and compliance',
      'Reduced storage costs through optimization',
      'Better scalability as your data grows',
      'Automated backup and recovery'
    ],
    pricing: {
      starter: 'Small database setup from $500',
      professional: 'Enterprise database from $2,000',
      enterprise: 'Complex distributed systems - Custom pricing'
    }
  },
  'cybersecurity': {
    slug: 'cybersecurity',
    icon: FiShield,
    title: 'Cybersecurity Solutions',
    tagline: 'Protecting Your Digital Assets',
    heroDescription: 'Comprehensive security services to protect your applications, data, and infrastructure from cyber threats. We implement industry-leading security practices and provide ongoing monitoring to keep you safe.',
    fullDescription: 'In today\'s digital landscape, security is not optional. We provide end-to-end cybersecurity solutions that protect your business from evolving threats. From security audits to penetration testing, we help you identify vulnerabilities and implement robust defenses.',
    approach: [
      {
        title: 'Proactive Defense',
        description: 'We don\'t wait for attacks to happen. Our proactive approach identifies and fixes vulnerabilities before they can be exploited.'
      },
      {
        title: 'Compliance-Focused',
        description: 'We ensure your security measures meet industry standards and regulatory requirements including GDPR, HIPAA, and PCI DSS.'
      },
      {
        title: 'Continuous Monitoring',
        description: 'Security is an ongoing process. We provide 24/7 monitoring and rapid response to potential threats.'
      }
    ],
    whatWeOffer: [
      'Security audits and vulnerability assessments',
      'Penetration testing and ethical hacking',
      'SSL/TLS certificate implementation',
      'Firewall and network security configuration',
      'Authentication and authorization systems',
      'Data encryption and protection',
      'GDPR and compliance consulting',
      'Security training for your team',
      'Incident response and recovery'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Security Assessment',
        description: 'Comprehensive evaluation of your current security posture.',
        deliverables: [
          'Security audit report',
          'Vulnerability assessment',
          'Risk analysis',
          'Compliance gap analysis',
          'Prioritized recommendations'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Penetration Testing',
        description: 'Ethical hacking to identify exploitable vulnerabilities.',
        deliverables: [
          'Network penetration testing',
          'Web application testing',
          'API security testing',
          'Social engineering assessment',
          'Detailed findings report'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Implementation',
        description: 'Deploying security measures and fixes.',
        deliverables: [
          'Security patch deployment',
          'Firewall configuration',
          'Authentication system setup',
          'Encryption implementation',
          'Access control configuration'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Training & Documentation',
        description: 'Empowering your team with security knowledge.',
        deliverables: [
          'Security awareness training',
          'Best practices documentation',
          'Incident response procedures',
          'Security policy development',
          'Compliance documentation'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Monitoring & Maintenance',
        description: 'Ongoing security management and threat detection.',
        deliverables: [
          '24/7 security monitoring',
          'Regular security updates',
          'Quarterly security audits',
          'Incident response',
          'Compliance reporting'
        ]
      }
    ],
    technologies: [
      {
        category: 'Security Tools',
        items: ['OWASP ZAP', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark']
      },
      {
        category: 'Authentication',
        items: ['OAuth 2.0', 'JWT', 'Auth0', 'Okta', 'Keycloak']
      },
      {
        category: 'Encryption',
        items: ['AES', 'RSA', 'TLS/SSL', 'Let\'s Encrypt', 'HashiCorp Vault']
      },
      {
        category: 'Monitoring',
        items: ['Splunk', 'ELK Stack', 'Snort', 'Fail2ban', 'CloudFlare']
      }
    ],
    benefits: [
      'Protection from cyber attacks and data breaches',
      'Compliance with industry regulations',
      'Enhanced customer trust and confidence',
      'Reduced risk of financial losses',
      'Improved incident response capabilities',
      'Peace of mind for stakeholders'
    ],
    pricing: {
      starter: 'Security audit from $500',
      professional: 'Comprehensive security from $2,000',
      enterprise: 'Enterprise security solutions - Custom pricing'
    }
  },
  'performance-optimization': {
    slug: 'performance-optimization',
    icon: FiZap,
    title: 'Performance Optimization',
    tagline: 'Making Your Applications Lightning Fast',
    heroDescription: 'Speed is crucial for user experience and SEO. We optimize every aspect of your application to ensure fast load times, smooth interactions, and excellent performance across all devices.',
    fullDescription: 'Studies show that users abandon slow websites within seconds. We analyze and optimize your application\'s performance, from frontend loading times to backend query optimization, ensuring your users have a seamless experience.',
    approach: [
      {
        title: 'Holistic Optimization',
        description: 'We optimize every layer of your application - frontend, backend, database, and infrastructure - for maximum performance gains.'
      },
      {
        title: 'Data-Driven Improvements',
        description: 'Using real-world metrics and performance testing, we identify bottlenecks and prioritize optimizations for maximum impact.'
      },
      {
        title: 'Sustainable Performance',
        description: 'We implement monitoring and best practices to ensure your application stays fast as it grows and evolves.'
      }
    ],
    whatWeOffer: [
      'Frontend performance optimization',
      'Backend and API optimization',
      'Database query optimization',
      'CDN integration and configuration',
      'Caching strategy implementation',
      'Image and asset optimization',
      'Code splitting and lazy loading',
      'Load testing and stress testing',
      'Performance monitoring setup'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Performance Audit',
        description: 'Comprehensive analysis of current performance.',
        deliverables: [
          'Lighthouse audit report',
          'Load time analysis',
          'Backend profiling',
          'Database query analysis',
          'Bottleneck identification'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Frontend Optimization',
        description: 'Optimizing client-side performance.',
        deliverables: [
          'Code minification and bundling',
          'Image optimization',
          'Lazy loading implementation',
          'Critical CSS extraction',
          'Browser caching setup'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Backend Optimization',
        description: 'Improving server-side performance.',
        deliverables: [
          'API response optimization',
          'Database query optimization',
          'Server-side caching',
          'Resource pooling',
          'Load balancing setup'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Infrastructure Optimization',
        description: 'Optimizing hosting and delivery.',
        deliverables: [
          'CDN configuration',
          'Server optimization',
          'Compression setup',
          'HTTP/2 implementation',
          'SSL optimization'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Testing & Monitoring',
        description: 'Validating improvements and ongoing monitoring.',
        deliverables: [
          'Load testing',
          'Performance benchmarks',
          'Monitoring dashboard',
          'Alert configuration',
          'Documentation'
        ]
      }
    ],
    technologies: [
      {
        category: 'Frontend',
        items: ['Webpack', 'Vite', 'Next.js', 'React Query', 'Service Workers']
      },
      {
        category: 'Caching',
        items: ['Redis', 'Memcached', 'Varnish', 'CDN', 'Browser Cache']
      },
      {
        category: 'Testing',
        items: ['Lighthouse', 'GTmetrix', 'WebPageTest', 'JMeter', 'k6']
      },
      {
        category: 'Monitoring',
        items: ['New Relic', 'Datadog', 'Sentry', 'Google Analytics', 'CloudWatch']
      }
    ],
    benefits: [
      'Improved user experience and satisfaction',
      'Better SEO rankings and visibility',
      'Higher conversion rates',
      'Reduced server costs',
      'Faster page load times',
      'Better mobile performance'
    ],
    pricing: {
      starter: 'Basic optimization from $500',
      professional: 'Comprehensive optimization from $2,000',
      enterprise: 'Enterprise-scale optimization - Custom pricing'
    }
  },
  'analytics': {
    slug: 'analytics',
    icon: FiPieChart,
    title: 'Analytics & Business Intelligence',
    tagline: 'Data-Driven Insights for Better Decisions',
    heroDescription: 'Transform your data into actionable insights. We implement analytics solutions and create custom dashboards that help you understand your users, optimize performance, and drive growth.',
    fullDescription: 'Data is only valuable if you can understand and act on it. We help you collect, analyze, and visualize your data to uncover insights that drive better business decisions and improve user experiences.',
    approach: [
      {
        title: 'Goal-Oriented Analytics',
        description: 'We start with your business goals and design analytics solutions that provide the insights you need to achieve them.'
      },
      {
        title: 'Actionable Insights',
        description: 'We focus on metrics that matter and present data in ways that make it easy to identify opportunities and make decisions.'
      },
      {
        title: 'Privacy-Focused',
        description: 'We implement analytics in compliance with privacy regulations while still providing the insights you need.'
      }
    ],
    whatWeOffer: [
      'Google Analytics 4 setup and configuration',
      'Custom dashboard development',
      'Data visualization and reporting',
      'A/B testing implementation',
      'Conversion rate optimization',
      'User behavior tracking',
      'Event tracking setup',
      'E-commerce analytics',
      'Custom reporting and alerts'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Strategy & Planning',
        description: 'Defining what to measure and why.',
        deliverables: [
          'Analytics strategy document',
          'KPI definition',
          'Tracking plan',
          'Goal configuration',
          'Measurement framework'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Implementation',
        description: 'Setting up tracking and data collection.',
        deliverables: [
          'Analytics tool configuration',
          'Event tracking setup',
          'Conversion tracking',
          'E-commerce tracking',
          'Custom dimension setup'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Dashboard Creation',
        description: 'Building custom dashboards for your needs.',
        deliverables: [
          'Executive dashboard',
          'Marketing dashboard',
          'Product analytics',
          'Custom reports',
          'Automated reporting'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Optimization',
        description: 'Using data to improve performance.',
        deliverables: [
          'A/B test implementation',
          'Funnel analysis',
          'User journey optimization',
          'Conversion rate improvements',
          'Recommendations'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Training & Support',
        description: 'Empowering your team to use analytics.',
        deliverables: [
          'Team training sessions',
          'Documentation',
          'Best practices guide',
          'Ongoing support',
          'Monthly insights reports'
        ]
      }
    ],
    technologies: [
      {
        category: 'Analytics Platforms',
        items: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Segment', 'Heap']
      },
      {
        category: 'Visualization',
        items: ['Tableau', 'Power BI', 'Looker', 'D3.js', 'Chart.js']
      },
      {
        category: 'A/B Testing',
        items: ['Google Optimize', 'Optimizely', 'VWO', 'Statsig']
      },
      {
        category: 'Tools',
        items: ['Google Tag Manager', 'Hotjar', 'FullStory', 'Microsoft Clarity']
      }
    ],
    benefits: [
      'Better understanding of user behavior',
      'Data-driven decision making',
      'Improved conversion rates',
      'Faster identification of issues',
      'Better ROI tracking',
      'Competitive insights'
    ],
    pricing: {
      starter: 'Analytics setup from $500',
      professional: 'Custom analytics from $2,000',
      enterprise: 'Enterprise BI solutions - Custom pricing'
    }
  },
  'dedicated-teams': {
    slug: 'dedicated-teams',
    icon: FiUsers,
    title: 'Dedicated Development Teams',
    tagline: 'Your Extended Development Team',
    heroDescription: 'Scale your development capacity with our skilled developers who work as an extension of your in-house team. Get the expertise you need, when you need it, with full transparency and control.',
    fullDescription: 'Building a great product requires the right team. We provide dedicated developers who integrate seamlessly with your existing team, follow your processes, and are committed to your success. Whether you need a single specialist or an entire team, we have the talent you need.',
    approach: [
      {
        title: 'Seamless Integration',
        description: 'Our developers integrate directly with your team, using your tools, processes, and communication channels for smooth collaboration.'
      },
      {
        title: 'Full Transparency',
        description: 'You have complete visibility into what our developers are working on, with daily standups, regular reports, and direct communication.'
      },
      {
        title: 'Flexible Engagement',
        description: 'Scale up or down as needed, with flexible contracts that adapt to your changing requirements and project phases.'
      }
    ],
    whatWeOffer: [
      'Full-stack developers',
      'Frontend specialists (React, Vue, Angular)',
      'Backend developers (Node.js, Python, PHP)',
      'Mobile developers (iOS, Android, React Native)',
      'DevOps engineers',
      'UI/UX designers',
      'QA engineers and testers',
      'Project managers',
      'Technical architects'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Planning',
        description: 'Understanding your needs and finding the right fit.',
        deliverables: [
          'Requirements analysis',
          'Skill assessment',
          'Team composition planning',
          'Timeline and budget proposal',
          'Engagement model selection'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Team Assembly',
        description: 'Selecting and onboarding the right developers.',
        deliverables: [
          'Developer profiles and resumes',
          'Technical interviews',
          'Team selection',
          'Contract finalization',
          'Onboarding plan'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Onboarding',
        description: 'Getting your team up to speed.',
        deliverables: [
          'Access setup',
          'Process training',
          'Codebase familiarization',
          'Tool configuration',
          'Team introduction'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Development',
        description: 'Active development and collaboration.',
        deliverables: [
          'Sprint planning',
          'Daily standups',
          'Code development',
          'Code reviews',
          'Regular progress reports'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Ongoing Support',
        description: 'Continuous collaboration and optimization.',
        deliverables: [
          'Performance reviews',
          'Team optimization',
          'Knowledge transfer',
          'Process improvements',
          'Flexible scaling'
        ]
      }
    ],
    technologies: [
      {
        category: 'Frontend',
        items: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Python', 'PHP', 'Java', '.NET', 'Go']
      },
      {
        category: 'Mobile',
        items: ['React Native', 'Flutter', 'Swift', 'Kotlin']
      },
      {
        category: 'Tools',
        items: ['Git', 'Jira', 'Slack', 'Azure DevOps', 'GitHub']
      }
    ],
    benefits: [
      'Quick scaling without hiring overhead',
      'Access to specialized expertise',
      'Reduced development costs',
      'Faster time to market',
      'Flexible resource allocation',
      'Focus on core business activities'
    ],
    pricing: {
      starter: 'Junior developer from $500/month',
      professional: 'Senior developer from $2,000/month',
      enterprise: 'Full dedicated team - Custom pricing based on composition'
    }
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    icon: FiTrendingUp,
    title: 'Digital Marketing Tech',
    tagline: 'Technology Solutions for Marketing Success',
    heroDescription: 'Bridge the gap between technology and marketing. We implement technical solutions that power your digital marketing efforts, from SEO optimization to marketing automation.',
    fullDescription: 'Modern digital marketing requires technical expertise. We provide the technology infrastructure that enables effective marketing campaigns, from SEO-optimized websites to sophisticated marketing automation systems.',
    approach: [
      {
        title: 'Technical SEO Excellence',
        description: 'We optimize your technical infrastructure for search engines, ensuring fast load times, proper indexing, and schema markup.'
      },
      {
        title: 'Marketing Automation',
        description: 'We implement systems that automate repetitive marketing tasks, allowing your team to focus on strategy and creativity.'
      },
      {
        title: 'Data Integration',
        description: 'We connect your marketing tools with your CRM and analytics platforms for a complete view of your marketing performance.'
      }
    ],
    whatWeOffer: [
      'Technical SEO optimization',
      'Marketing automation setup',
      'CRM integration and customization',
      'Email marketing system implementation',
      'Landing page optimization',
      'Social media integration',
      'Conversion tracking setup',
      'Marketing dashboard creation',
      'Lead generation tools'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Marketing Tech Audit',
        description: 'Assessing your current marketing technology.',
        deliverables: [
          'Technology stack review',
          'SEO technical audit',
          'Integration assessment',
          'Gap analysis',
          'Recommendations'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'SEO Optimization',
        description: 'Implementing technical SEO improvements.',
        deliverables: [
          'Site speed optimization',
          'Mobile optimization',
          'Schema markup',
          'XML sitemap',
          'Robots.txt optimization'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Automation Setup',
        description: 'Implementing marketing automation tools.',
        deliverables: [
          'Email automation setup',
          'Workflow automation',
          'Lead scoring',
          'Campaign automation',
          'Integration setup'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'CRM Integration',
        description: 'Connecting your marketing tools with CRM.',
        deliverables: [
          'CRM configuration',
          'Data synchronization',
          'Custom fields setup',
          'Pipeline automation',
          'Reporting setup'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Training & Optimization',
        description: 'Empowering your team and optimizing performance.',
        deliverables: [
          'Team training',
          'Documentation',
          'Performance monitoring',
          'A/B testing setup',
          'Ongoing optimization'
        ]
      }
    ],
    technologies: [
      {
        category: 'SEO Tools',
        items: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog']
      },
      {
        category: 'Marketing Automation',
        items: ['HubSpot', 'Marketo', 'ActiveCampaign', 'Mailchimp', 'Klaviyo']
      },
      {
        category: 'CRM',
        items: ['Salesforce', 'HubSpot CRM', 'Pipedrive', 'Zoho CRM']
      },
      {
        category: 'Analytics',
        items: ['Google Analytics', 'Google Tag Manager', 'Hotjar', 'Mixpanel']
      }
    ],
    benefits: [
      'Improved search engine rankings',
      'Automated marketing workflows',
      'Better lead quality and conversion',
      'Integrated marketing and sales data',
      'Reduced manual marketing tasks',
      'Better ROI tracking'
    ],
    pricing: {
      starter: 'SEO optimization from $500',
      professional: 'Marketing automation from $2,000',
      enterprise: 'Complete marketing tech stack - Custom pricing'
    }
  },
  'support-maintenance': {
    slug: 'support-maintenance',
    icon: FiMessageSquare,
    title: 'Support & Maintenance',
    tagline: 'Always Here When You Need Us',
    heroDescription: 'Keep your applications running smoothly with our 24/7 technical support and maintenance services. We proactively monitor, update, and optimize your systems to prevent issues before they impact your users.',
    fullDescription: 'Launching your application is just the beginning. We provide ongoing support and maintenance to ensure your systems stay secure, performant, and up-to-date. Our team is available 24/7 to handle issues, implement updates, and keep everything running smoothly.',
    approach: [
      {
        title: 'Proactive Monitoring',
        description: 'We monitor your systems 24/7, identifying and fixing issues before they impact your users or business operations.'
      },
      {
        title: 'Rapid Response',
        description: 'When issues occur, our team responds immediately with clear communication and quick resolution to minimize downtime.'
      },
      {
        title: 'Continuous Improvement',
        description: 'We don\'t just maintain - we continuously optimize and improve your systems based on performance data and user feedback.'
      }
    ],
    whatWeOffer: [
      '24/7 technical support',
      'Proactive system monitoring',
      'Regular security updates and patches',
      'Performance monitoring and optimization',
      'Bug fixes and issue resolution',
      'Content updates and changes',
      'Backup and disaster recovery',
      'Server maintenance',
      'Uptime guarantees (SLA)'
    ],
    howWeWork: [
      {
        phase: 'Phase 1',
        title: 'Onboarding',
        description: 'Getting familiar with your systems.',
        deliverables: [
          'System documentation review',
          'Access setup',
          'Monitoring configuration',
          'SLA definition',
          'Communication protocols'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Monitoring Setup',
        description: 'Implementing comprehensive monitoring.',
        deliverables: [
          'Server monitoring',
          'Application monitoring',
          'Error tracking',
          'Performance monitoring',
          'Alert configuration'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Regular Maintenance',
        description: 'Scheduled maintenance and updates.',
        deliverables: [
          'Security patches',
          'Software updates',
          'Database optimization',
          'Backup verification',
          'Performance tuning'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Issue Resolution',
        description: 'Rapid response to incidents.',
        deliverables: [
          'Issue triage',
          'Root cause analysis',
          'Fix implementation',
          'Testing and verification',
          'Incident reports'
        ]
      },
      {
        phase: 'Phase 5',
        title: 'Optimization',
        description: 'Continuous improvement of systems.',
        deliverables: [
          'Performance analysis',
          'Optimization recommendations',
          'Capacity planning',
          'Monthly reports',
          'Strategy sessions'
        ]
      }
    ],
    technologies: [
      {
        category: 'Monitoring',
        items: ['New Relic', 'Datadog', 'Sentry', 'UptimeRobot', 'Pingdom']
      },
      {
        category: 'Ticketing',
        items: ['Jira Service Desk', 'Zendesk', 'Freshdesk', 'ServiceNow']
      },
      {
        category: 'Communication',
        items: ['Slack', 'PagerDuty', 'Microsoft Teams', 'Email']
      },
      {
        category: 'Tools',
        items: ['Git', 'Docker', 'CI/CD', 'Backup Solutions']
      }
    ],
    benefits: [
      'Maximum uptime and reliability',
      'Faster issue resolution',
      'Improved security posture',
      'Better performance over time',
      'Peace of mind',
      'Focus on your core business'
    ],
    pricing: {
      starter: 'Basic support from $500/month',
      professional: '24/7 support from $2,000/month',
      enterprise: 'Enterprise SLA packages - Custom pricing'
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 break-words">{service.title}</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-primary-100 break-words">{service.tagline}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">What We Offer</h2>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">How We Work</h2>
            <p className="text-xl text-gray-600">Our proven process for delivering excellence</p>
          </motion.div>

          <div className="space-y-6">
            {service.howWeWork.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="card p-6 relative overflow-hidden group"
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex flex-col items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
                      <span className="text-xs font-semibold opacity-80">Phase</span>
                      <span className="text-xl font-bold leading-none">{index + 1}</span>
                    </div>
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors">{phase.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-primary-600 rounded-full"
                            whileHover={{ scale: 1.5 }}
                          ></motion.div>
                          <span className="text-sm text-gray-700">{deliverable}</span>
                        </motion.div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">Technologies We Use</h2>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">Key Benefits</h2>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">Investment & Pricing</h2>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 break-words">Ready to Get Started?</h2>
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
