import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Get Started', path: '/contact' },
    ],
    services: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'Mobile Apps', path: '/services/mobile-apps' },
      { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
      { label: 'UI/UX Design', path: '/services/uiux-design' },
    ],
    resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'Case Studies', path: '/portfolio' },
      { label: 'Contact', path: '/contact' },
      { label: 'Support', path: 'mailto:devonitytechnologiesltd@gmail.com', isExternal: true },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Devonity</h3>
                <p className="text-xs text-gray-400">Technologies Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions. We deliver premium web, mobile, and cloud services that drive growth and success.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiMail className="text-primary-500 flex-shrink-0" size={20} />
                <a href="mailto:devonitytechnologiesltd@gmail.com" className="hover:text-primary-400 transition-colors break-all text-sm sm:text-base">
                  devonitytechnologiesltd@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="text-primary-500" size={20} />
                <a 
                  href="https://maps.app.goo.gl/QpJQNRX1gCb3fPUk7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Rajshahi, Bangladesh
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a href={link.path} className="hover:text-primary-400 transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="hover:text-primary-400 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Devonity Technologies Limited. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
