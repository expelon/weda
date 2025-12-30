import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ContactPage() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL has success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccessToast(true);
      // Remove success parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
      // Hide toast after 5 seconds
      setTimeout(() => setShowSuccessToast(false), 5000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2E4A9F] mb-6 mt-16">
              Register with WEDA
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our community of women entrepreneurs in North Karnataka. Register to access our programs, networking opportunities, and support services.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Registration Form</h2>
              
              <form 
                className="space-y-6"
                action="https://formsubmit.co/nkweda71@gmail.com"
                method="POST"
                onSubmit={(e) => {
                  // Add form submission handling
                  const form = e.currentTarget;
                  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = 'Submitting...';
                    
                    // Form will submit normally to FormSubmit.co
                    setTimeout(() => {
                      submitButton.disabled = false;
                      submitButton.textContent = 'Submit Registration';
                    }, 3000);
                  }
                }}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New WEDA Registration Form Submission"
                />
                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />
                <input
                  type="hidden"
                  name="_next"
                  value={window.location.href + "?success=true"}
                />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Business <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="business-type"
                    name="business-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select your business type</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="services">Services</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="handicrafts">Handicrafts</option>
                    <option value="food">Food & Beverages</option>
                    <option value="textiles">Textiles</option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your city"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Submit Registration
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        North Karnataka Women Entrepreneurs Development Association (WEDA)<br />
                        Flat No. 202, Pratima Residency<br />
                        Dr. Kabbur Road, Malmaddi<br />
                        Dharwad – 580007<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <a 
                        href="tel:+919448377717" 
                        className="text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        +91 9448377717
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919448377717" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        +91 94483 77717
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <a 
                        href="mailto:nkweda71@gmail.com" 
                        className="text-gray-600 hover:text-orange-600 transition-colors block"
                      >
                        nkweda71@gmail.com
                      </a>
                      <a 
                        href="mailto:rathi.creations.24@gmail.com" 
                        className="text-gray-600 hover:text-orange-600 transition-colors block"
                      >
                        rathi.creations.24@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-200/50">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Learn More About WEDA</h3>
                <p className="text-gray-600 mb-4">
                  Discover our journey, values, and the dedicated team behind our mission. Learn more about what drives us.
                </p>
                <a href="/about" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                  Explore About Us →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Toast Notification */}
      {showSuccessToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white border-l-4 border-green-500 rounded-lg shadow-2xl backdrop-blur-lg bg-opacity-95 min-w-[320px] max-w-md"
          >
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mr-3">
                <h4 className="text-gray-900 font-semibold text-sm mb-1">Registration Successful!</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Your registration has been submitted successfully. We'll get back to you soon!</p>
              </div>
              <button
                onClick={() => setShowSuccessToast(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-gray-200 rounded-b-lg overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-green-500"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
