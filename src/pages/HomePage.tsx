import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Preload image and set loaded state
    const img = new Image();
    img.src = '/home1.webp';
    img.onload = () => setImageLoaded(true);
    
    // If image is already cached, set loaded immediately
    if (img.complete) {
      setImageLoaded(true);
    }

    // Check if mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleBrochureClick = () => {
    if (isMobile) {
      // Download on mobile
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'WEDA-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Open in new tab on desktop
      window.open('/brochure.pdf', '_blank');
    }
  };
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: "url('/home1.webp')" }}
        />
        {/* Fallback gradient while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-orange-600/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-5xl mx-auto">
              <motion.h1 
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.1
                }}
              >
                Empowering Women Entrepreneurs of <span className="text-orange-400">North Karnataka</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-sm sm:text-base lg:text-lg text-white/90 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.6
                }}
              >
                North Karnataka Women Entrepreneur's Development Association (WEDA) is a charitable organization established in 2009 with a mission to empower women through entrepreneurship. We support women in becoming socially and economically self-reliant by providing skill development, training, product development, and market exposure at national and international levels.
              </motion.p>
              <div className="mt-8 flex flex-row gap-4 justify-center items-center flex-wrap">
                <motion.button 
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.9
                  }}
                  onClick={handleBrochureClick}
                >
                  View Brochure
                </motion.button>
                <motion.button 
                  className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 1.1
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50/30 py-16 overflow-hidden relative">
        {/* Decorative Blurred Elements (match Sectors We Support) */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-lg h-64 lg:h-[32rem] overflow-hidden lg:order-first order-first relative"
            >
              <img 
                src="/who.webp" 
                alt="WEDA team working with women entrepreneurs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>

            <div
              className="text-center lg:text-left lg:order-last order-last"
            >
              <h2 
                className="text-3xl sm:text-4xl font-bold text-[#2E4A9F] mb-6"
              >
                Who We Are
              </h2>
              <p 
                className="text-lg text-gray-600"
              >
                WEDA is a platform dedicated to supporting women entrepreneurs by enhancing their skills, confidence, and economic independence. We provide structured training, product development support, and marketing assistance to help women successfully enter local, national, and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact So Far Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="lg:order-1 order-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-[#2E4A9F] mb-6">Our Impact So Far</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2009, WEDA has been actively empowering women entrepreneurs through continuous skill development programs. We organize exhibitions, workshops, and awareness initiatives, create market platforms for women-led businesses, and support the development of eco-friendly and traditional products—enabling sustainable growth and economic independence.
              </p>

              {/* Target */}
              <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-left">
                <div className="flex items-center justify-start">
                  <div className="w-16 h-16 bg-[#2E4A9F] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2E4A9F]">Our Target</h3>
                    <p className="text-gray-600">5000+ women in the next 5 years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative lg:order-2 order-2">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-lg h-96">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: "url('/impact.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E4A9F] mb-4">Key Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive programs empower women entrepreneurs with the skills and exposure needed for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skill Development & Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 sector-card">
              <div className="w-16 h-16 bg-[#2E4A9F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skill Development & Training</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive training tailored to women</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Product design and development from concept to creation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Practical, market-oriented skill building</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Confidence building for quality product creation</span>
                </li>
              </ul>
            </div>

            {/* Marketing & Global Exposure */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 sector-card">
              <div className="w-16 h-16 bg-[#2E4A9F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing & Global Exposure</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Marketing support for product promotion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Exposure to national and international markets</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Support to meet diverse market demands</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Access to new customer bases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events and Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E4A9F] mb-4">
              Events & Awards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our achievements and showcasing the vibrant events that empower our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event/Award Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/15.webp" 
                alt="Annual Exhibition" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Event/Award Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/30.webp" 
                alt="Leadership Summit" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Event/Award Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/13.webp" 
                alt="Recognition Awards" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Event/Award Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/1.webp" 
                alt="Workshop Series" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Event/Award Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/26.webp" 
                alt="Community Fair" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Event/Award Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/about.webp" 
                alt="Achievement Ceremony" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors We Support Section */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50/30 py-16 overflow-hidden relative">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E4A9F] mb-4">
              Sectors We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We empower women entrepreneurs across diverse sectors with comprehensive support and resources
            </p>
          </div>

          {/* Scrolling sectors container */}
          <div className="relative">
            <div className="flex animate-scroll-x space-x-6">
              {/* First set of sectors */}
              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Handicrafts</h3>
                <p className="text-gray-600 text-sm">Traditional and contemporary handcrafted products with modern design appeal</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Textiles & Fashion Designing</h3>
                <p className="text-gray-600 text-sm">Modern textile design and fashion entrepreneurship with sustainable practices</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jute Products</h3>
                <p className="text-gray-600 text-sm">Eco-friendly jute products and sustainable packaging solutions</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Products</h3>
                <p className="text-gray-600 text-sm">Traditional and innovative food products with quality standards</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bags & Accessories</h3>
                <p className="text-gray-600 text-sm">Stylish bags and fashion accessories with unique designs</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jewelry</h3>
                <p className="text-gray-600 text-sm">Handcrafted jewelry with traditional and contemporary designs</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Art & Painting</h3>
                <p className="text-gray-600 text-sm">Traditional and modern art forms with creative expression</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Management</h3>
                <p className="text-gray-600 text-sm">Professional event planning and management services</p>
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Handicrafts</h3>
                <p className="text-gray-600 text-sm">Traditional and contemporary handcrafted products with modern design appeal</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Textiles & Fashion Designing</h3>
                <p className="text-gray-600 text-sm">Modern textile design and fashion entrepreneurship with sustainable practices</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jute Products</h3>
                <p className="text-gray-600 text-sm">Eco-friendly jute products and sustainable packaging solutions</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Products</h3>
                <p className="text-gray-600 text-sm">Traditional and innovative food products with quality standards</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bags & Accessories</h3>
                <p className="text-gray-600 text-sm">Stylish bags and fashion accessories with unique designs</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jewelry</h3>
                <p className="text-gray-600 text-sm">Handcrafted jewelry with traditional and contemporary designs</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Art & Painting</h3>
                <p className="text-gray-600 text-sm">Traditional and modern art forms with creative expression</p>
              </div>

              <div className="flex-none w-64 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 sector-card">
                <div className="w-12 h-12 bg-[#2E4A9F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Management</h3>
                <p className="text-gray-600 text-sm">Professional event planning and management services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E4A9F] mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated women leading WEDA and empowering our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Mrs. Rathi Shrinivasan", role: "President" },
              { name: "Mrs. Renu Mudholkar", role: "Vice President" },
              { name: "Mrs. Jyothi Hiremath", role: "Secretary" },
              { name: "Mrs. Bharathi Upadhya", role: "Joint Secretary" },
              { name: "Mrs. Rajeshwari Navale", role: "Treasurer" },
              { name: "Mrs. Kamala Deshpande", role: "EC Member" }
            ].map((member, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Add CSS for scrolling animation */}
      <style type="text/css">{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x 40s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll-x:hover {
          animation-play-state: running;
        }
        
        /* Optimize for smaller screens */
        @media (max-width: 768px) {
          .animate-scroll-x {
            animation: scroll-x 60s linear infinite;
          }
        }
        
        @media (max-width: 640px) {
          .animate-scroll-x {
            animation: scroll-x 80s linear infinite;
          }
        }
        
        .sector-card {
          position: relative;
          overflow: hidden;
        }
        
        .sector-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, rgba(46, 74, 159, 0.18), rgba(255, 255, 255, 0.06), rgba(46, 74, 159, 0.18));
          background-size: 200% 200%;
          animation: premium-shimmer 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        
        .sector-card::after {
          content: "";
          position: absolute;
          top: -20%;
          left: -20%;
          width: 70%;
          height: 70%;
          background: radial-gradient(closest-side, rgba(46, 74, 159, 0.25), transparent 70%);
          filter: blur(18px);
          transform: rotate(15deg);
          z-index: 0;
          pointer-events: none;
        }
        
        .sector-card:hover::after {
          top: -20%;
          left: -20%;
          width: 70%;
          height: 70%;
        }
        
        .sector-card > * {
          position: relative;
          z-index: 1;
        }
        
        @keyframes premium-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes premium-orbital {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translate(30%, 30%) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        /* Disable complex animations on small screens for better performance */
        @media (max-width: 640px) {
          .sector-card::before,
          .sector-card::after {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
