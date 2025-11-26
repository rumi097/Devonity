import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheckCircle, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PagePreviews from '../components/PagePreviews';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  // Email validation function
  const validateEmail = async (email: string): Promise<boolean> => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return false;
    }

    // Extract domain from email
    const domain = email.split('@')[1];
    
    try {
      // Check if domain has MX records using a DNS lookup service
      const response = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
      const data = await response.json();
      
      if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
        return true; // Email domain exists
      } else {
        setErrorMessage('Email domain does not exist or cannot receive emails');
        return false;
      }
    } catch (error) {
      // If DNS check fails, allow the email (to avoid blocking legitimate emails due to API issues)
      console.warn('DNS check failed, proceeding with email:', error);
      return true;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(false);
    setErrorMessage('');
    
    try {
      // Validate email before sending
      const isEmailValid = await validateEmail(data.email);
      if (!isEmailValid) {
        setSubmitError(true);
        setTimeout(() => {
          setSubmitError(false);
          setErrorMessage('');
        }, 5000);
        setIsSubmitting(false);
        return;
      }

      // EmailJS configuration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        company: data.company || 'Not provided',
        service: data.service,
        budget: data.budget || 'Not specified',
        message: data.message,
        to_email: 'devonitytechnologiesltd@gmail.com',
      };

      await emailjs.send(
        'service_12x6ced',  // Your EmailJS service ID
        'template_qbahmen', // Your EmailJS template ID
        templateParams,
        'NYHtf7E7B-veTphWj'   // Your EmailJS public key
      );

      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Failed to send message. Please try again.');
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: ['devonitytechnologiesltd@gmail.com'],
      link: 'mailto:devonitytechnologiesltd@gmail.com',
    },
    // {
    //   icon: FiPhone,
    //   title: 'Call Us',
    //   details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    //   link: 'tel:+15551234567',
    // },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: ['Rajshahi, Bangladesh'],
      link: 'https://maps.app.goo.gl/QpJQNRX1gCb3fPUk7',
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: ['24/7 Support Available'],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Animated communication waves */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.circle cx="50%" cy="50%" r="50" fill="none" stroke="white" strokeWidth="2" animate={{ r: [50, 200], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="50%" cy="50%" r="50" fill="none" stroke="white" strokeWidth="2" animate={{ r: [50, 200], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
          <motion.circle cx="50%" cy="50%" r="50" fill="none" stroke="white" strokeWidth="2" animate={{ r: [50, 200], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
        </svg>
        
        {/* Floating contact icons */}
        <motion.div className="absolute top-20 left-16" animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <FiMail className="text-white opacity-20" size={50} />
        </motion.div>
        <motion.div className="absolute top-16 right-20" animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
          <FiPhone className="text-white opacity-20" size={45} />
        </motion.div>
        <motion.div className="absolute bottom-24 left-1/4" animate={{ y: [-20, 20, -20], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }}>
          <FiMapPin className="text-white opacity-15" size={55} />
        </motion.div>
        <motion.div className="absolute bottom-20 right-1/4" animate={{ y: [18, -18, 18], rotate: [0, 8, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
          <FiSend className="text-white opacity-20" size={48} />
        </motion.div>
        
        {/* Message bubbles */}
        <motion.div className="absolute top-1/3 left-10 w-12 h-12 bg-white opacity-10 rounded-full" animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/3 right-12 w-16 h-16 bg-white opacity-10 rounded-full" animate={{ y: [12, -12, 12], x: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3 } 
                }}
                className="card p-6 text-center group hover:shadow-2xl relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"
                />
                
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg"
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.6 }}
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(99, 102, 241, 0.3)",
                      "0 10px 40px rgba(168, 85, 247, 0.4)",
                      "0 10px 30px rgba(99, 102, 241, 0.3)",
                    ]
                  }}
                  style={{ transition: "box-shadow 2s ease-in-out" }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -2, 0],
                      rotate: [0, 3, -3, 0] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <item.icon className="text-white" size={24} />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-lg font-bold mb-3 relative z-10 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                
                  <div className="relative z-10">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600 group-hover:text-gray-900 mb-1 transition-colors break-words">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.title === 'Visit Us' ? '_blank' : undefined}
                          rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                          className="hover:text-primary-600 transition-all duration-300 inline-block hover:scale-105 font-medium"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>

                {/* Decorative corner elements */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary-400 rounded-tr-lg opacity-0 group-hover:opacity-30"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent-400 rounded-bl-lg opacity-0 group-hover:opacity-30"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {/* Success Popup */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="mb-6 relative"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                      {/* Animated background elements */}
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full"
                        animate={{ scale: [1, 1.5, 1], x: [0, 20, 0], y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full"
                        animate={{ scale: [1, 1.3, 1], x: [0, -10, 0], y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="flex-shrink-0"
                        >
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <FiCheckCircle className="text-green-600" size={28} />
                          </div>
                        </motion.div>
                        
                        <div className="flex-1">
                          <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl font-bold mb-2"
                          >
                            🎉 Awesome! Message Sent Successfully!
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-green-50"
                          >
                            We're thrilled to hear from you! Our team will get back to you within 24 hours. Get ready for something amazing! ✨
                          </motion.p>
                        </div>
                        
                        <button
                          onClick={() => setSubmitSuccess(false)}
                          className="flex-shrink-0 text-white hover:text-green-100 transition-colors"
                        >
                          <FiX size={24} />
                        </button>
                      </div>
                      
                      {/* Animated progress bar */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-white"
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Popup */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="mb-6"
                  >
                    <div className="bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiX className="text-red-600" size={24} />
                        <div>
                          <p className="font-semibold">
                            {errorMessage || 'Oops! Something went wrong.'}
                          </p>
                          <p className="text-sm">
                            {errorMessage ? 'Please check your email address and try again.' : 'Please try again or email us directly.'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSubmitError(false);
                          setErrorMessage('');
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FiX size={20} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="input-field"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="input-field"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      className="input-field"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      {...register('company')}
                      className="input-field"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className="input-field"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="automation">Business Automation</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select {...register('budget')} className="input-field">
                      <option value="">Select budget range</option>
                      <option value="$500 - $2,000">$500 - $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 and above">$25,000+</option>
                      <option value="Custom Budget (Client will specify details in message)">Custom Budget (Please specify in message)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend className="inline ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Visit Our Office</h2>
              <div className="mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115553.37502187604!2d88.54649987160678!3d24.365843400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sRajshahi%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1732612345678"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-2xl shadow-lg"
                ></iframe>
              </div>
              <a 
                href="https://maps.app.goo.gl/QpJQNRX1gCb3fPUk7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-600 font-semibold transition-colors mb-8"
              >
                <FiMapPin size={20} />
                Open in Google Maps
              </a>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected and get the latest updates on our social media channels
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. A typical web application takes 8-12 weeks, while mobile apps range from 12-16 weeks. We provide detailed timelines during the discovery phase.',
              },
              {
                q: 'Do you offer ongoing support and maintenance?',
                a: 'Yes! We offer comprehensive support packages including 24/7 monitoring, regular updates, bug fixes, and feature enhancements to ensure your application runs smoothly.',
              },
              {
                q: 'What is your development process?',
                a: 'We follow an agile methodology with regular sprints, continuous client communication, and iterative development. This ensures transparency and allows for flexibility throughout the project.',
              },
              {
                q: 'Can you work with our existing team?',
                a: 'Absolutely! We offer flexible engagement models including dedicated teams, staff augmentation, and collaborative development to seamlessly integrate with your existing processes.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="card p-4 sm:p-6 md:p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Previews */}
      <PagePreviews />
    </div>
  );
};

export default Contact;
