import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function AboutPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return { ref, isVisible };
  };

  // Scroll animation hook for Mission & Vision section
  const { ref: missionVisionRef, isVisible: missionVisionVisible } = useScrollAnimation();

  // Scroll animation hook for Objectives section
  const { ref: objectivesRef, isVisible: objectivesVisible } = useScrollAnimation();

  // Scroll animation hook for What WEDA Needs section
  const { ref: needsRef, isVisible: needsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      {/* Hero Section with About Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about.webp')" }}
        />
        
        {/* Gradient Overlay - Same as Home Page */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-orange-600/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              About WEDA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering Women Entrepreneurs of <span className="text-orange-400">North Karnataka</span> Since 2009
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={missionVisionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: missionVisionVisible ? 1 : 0, y: missionVisionVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2E4A9F] mb-6 mt-16">
              Our Mission & Vision
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              North Karnataka Women Entrepreneurs Development Association (WEDA) is a charitable organization established in 2009 and registered under Charitable Acts of 1960/17, Government of Karnataka.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              WEDA functions as a common platform for women to develop entrepreneurial capabilities, access training, adopt improved technologies, and gain exposure to markets. Our goal is to make women socially and economically self-reliant.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower women entrepreneurs through skill development, technology support, financial linkages, and access to national and global markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To emerge as a strong platform for women entrepreneurs with shared objectives, enabling sustainable growth and economic independence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Established 2009
              </h3>
              <p className="text-gray-600">
                For over a decade, we've been supporting women entrepreneurs with training, product development, and market exposure at national and international levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives of WEDA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={objectivesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2E4A9F] mb-4">Objectives of WEDA</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive objectives guide our mission to empower women entrepreneurs across Karnataka
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Promote entrepreneurship among women</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve socio-economic conditions</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support development of marketable products</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Encourage technology adoption and innovation</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Provide job-oriented and computer training</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: objectivesVisible ? 1 : 0, y: objectivesVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strengthen supply chain and marketing networks</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What WEDA Needs (Support & Collaboration) Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/40 to-amber-50/30 relative overflow-hidden">
        {/* Premium Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-indigo-200/35 rounded-full blur-3xl"></div>
        
        {/* Additional Premium Accents */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-tr from-purple-200/20 to-pink-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-bl from-cyan-200/25 to-teal-200/35 rounded-full blur-xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={needsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: needsVisible ? 1 : 0, y: needsVisible ? 0 : 40 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center"
          >
            {/* Left Side - Content */}
            <div className="lg:order-1 order-2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-[#2E4A9F] mb-6">What WEDA Needs (Support & Collaboration)</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To expand our impact and reach more women entrepreneurs, WEDA seeks strategic support and collaboration partnerships that will enable us to scale our programs and create sustainable change.
              </p>

              {/* Support Items List */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Affiliation with Ministry of Skill Development & Entrepreneurship</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Financial assistance to establish a Common Facility Centre (CFC)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Permanent exhibition and marketing hubs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Support for exhibitions across Karnataka</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Scholarship grants for skill training seekers</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Empanelment with government agencies</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: needsVisible ? 1 : 0, y: needsVisible ? 0 : 40 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative lg:order-2 order-1"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-lg h-96">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: "url('/about2.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision of WEDA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative lg:order-1 order-2">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-lg h-96">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: "url('/about3.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:order-2 order-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-[#2E4A9F] mb-6">Future Vision of WEDA</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our ambitious vision for the future focuses on creating comprehensive digital platforms and expanding our reach to empower more women entrepreneurs across Karnataka and beyond.
              </p>

              {/* Vision Items List */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Establish a unified platform for women entrepreneurs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Launch myweda.com – E-commerce platform (Web & Mobile)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Connect women with micro-finance institutions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Build strong demand–supply chains for Indian & global buyers</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Empower 1,000 women every year</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Organize exhibitions at district and taluka levels</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-left">Involve SHGs at village level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Achievements (Till Now) Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2E4A9F] mb-6 leading-tight">
              Conducted Major Training Programs & Workshops for Women
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full origin-top"
            ></motion.div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2009 */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Maa Mart initiative with UAS, Dharwad</p>
                    <div className="flex items-center justify-end">
                      <span className="text-orange-600 font-semibold text-sm">2009</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2010 */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Millet product awareness programs</p>
                    <div className="flex items-center">
                      <span className="text-orange-600 font-semibold text-sm">2010</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2011 */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Fashion designing training with UAS</p>
                    <div className="flex items-center justify-end">
                      <span className="text-orange-600 font-semibold text-sm">2011</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2012 */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Eco-friendly paper bag training with KCCI</p>
                    <div className="flex items-center">
                      <span className="text-orange-600 font-semibold text-sm">2012</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2013 */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Millets food competitions</p>
                    <div className="flex items-center justify-end">
                      <span className="text-orange-600 font-semibold text-sm">2013</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2014 */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Village Vajood exhibition cum sale</p>
                    <div className="flex items-center">
                      <span className="text-orange-600 font-semibold text-sm">2014</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2015 */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Apparel designing training with DIC & NIFT</p>
                    <div className="flex items-center justify-end">
                      <span className="text-orange-600 font-semibold text-sm">2015</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2016 */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.45, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">INCOMIX participation & seminars</p>
                    <div className="flex items-center">
                      <span className="text-orange-600 font-semibold text-sm">2016</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2017 */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Participation in Elevate 100 ITBT & national forums</p>
                    <div className="flex items-center justify-end">
                      <span className="text-orange-600 font-semibold text-sm">2017</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2020–24 */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-center group"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.55, type: "spring", stiffness: 150, damping: 10 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-orange-400 shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="p-4">
                    <p className="text-gray-700 font-bold text-lg mb-2">Annual Yashodharshini Exhibition cum Sale</p>
                    <div className="flex items-center">
                      <span className="text-orange-600 font-semibold text-sm">2020–24</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E4A9F] mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated women leading WEDA and empowering our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Mrs. Rathi Shrinivasan", role: "President" },
              { name: "Mrs. Renu Mudholkar", role: "Vice President" },
              { name: "Mrs. Jyothi Hiremath", role: "Secretary" },
              { name: "Mrs. Bharathi Upadhya", role: "Joint Secretary" },
              { name: "Mrs. Rajeshwari Navale", role: "Treasurer" },
              { name: "Mrs. Kamala Deshpande", role: "EC Member" },
              { name: "Mrs. Rekha Porwale", role: "EC Member" },
              { name: "Mrs. Roopa Rashinkar", role: "Co-ordinator" },
              { name: "Mrs. Uma Ugalat", role: "Co-ordinator" },
              { name: "Mrs. Raksha Hubballi", role: "Co-ordinator" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.08, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-center" style={{ color: 'rgba(46, 74, 159, 0.9)' }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
