import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export const GalleryPage = () => {
  const allImages = [
    { id: 1, src: '/1.webp', alt: 'Event 1', category: 'Events' },
    { id: 2, src: '/2.webp', alt: 'Event 2', category: 'Events' },
    { id: 3, src: '/3.webp', alt: 'Event 3', category: 'Events' },
    { id: 4, src: '/4.webp', alt: 'Event 4', category: 'Events' },
    { id: 5, src: '/5.webp', alt: 'Event 5', category: 'Events' },
    { id: 6, src: '/6.webp', alt: 'Event 6', category: 'Events' },
    { id: 7, src: '/7.webp', alt: 'Event 7', category: 'Events' },
    { id: 8, src: '/8.webp', alt: 'Event 8', category: 'Events' },
    { id: 9, src: '/9.webp', alt: 'Event 9', category: 'Events' },
    { id: 10, src: '/10.webp', alt: 'Event 10', category: 'Events' },
    { id: 11, src: '/11.webp', alt: 'Event 11', category: 'Events' },
    { id: 12, src: '/12.webp', alt: 'Event 12', category: 'Events' },
    { id: 13, src: '/13.webp', alt: 'Event 13', category: 'Events' },
    { id: 14, src: '/14.webp', alt: 'Event 14', category: 'Events' },
    { id: 15, src: '/15.webp', alt: 'Event 15', category: 'Events' },
    { id: 16, src: '/16.webp', alt: 'Event 16', category: 'Events' },
    { id: 17, src: '/17.webp', alt: 'Event 17', category: 'Events' },
    { id: 18, src: '/18.webp', alt: 'Event 18', category: 'Events' },
    { id: 19, src: '/19.webp', alt: 'Event 19', category: 'Events' },
    { id: 20, src: '/20.webp', alt: 'Event 20', category: 'Events' },
    { id: 21, src: '/21.webp', alt: 'Event 21', category: 'Events' },
    { id: 22, src: '/22.webp', alt: 'Event 22', category: 'Events' },
    { id: 23, src: '/23.webp', alt: 'Event 23', category: 'Events' },
    { id: 24, src: '/24.webp', alt: 'Event 24', category: 'Events' },
    { id: 25, src: '/25.webp', alt: 'Event 25', category: 'Events' },
    { id: 26, src: '/26.webp', alt: 'Event 26', category: 'Events' },
    { id: 27, src: '/27.webp', alt: 'Event 27', category: 'Events' },
    { id: 28, src: '/28.webp', alt: 'Event 28', category: 'Events' },
    { id: 29, src: '/29.webp', alt: 'Event 29', category: 'Events' },
    { id: 30, src: '/30.webp', alt: 'Event 30', category: 'Events' },
    { id: 31, src: '/home1.webp', alt: 'Home Event', category: 'Events' },
    { id: 32, src: '/who.webp', alt: 'Who We Are', category: 'Events' },
    { id: 33, src: '/impact.webp', alt: 'Impact', category: 'Awards' },
    { id: 34, src: '/about.webp', alt: 'About Us', category: 'Awards' },
    { id: 35, src: '/about2.webp', alt: 'About Us 2', category: 'Awards' },
    { id: 36, src: '/about3.webp', alt: 'About Us 3', category: 'Awards' },
    { id: 37, src: '/31.webp', alt: 'Event 31', category: 'Events' },
    { id: 38, src: '/32.webp', alt: 'Event 32', category: 'Events' },
    { id: 39, src: '/33.webp', alt: 'Event 33', category: 'Events' },
    { id: 40, src: '/34.webp', alt: 'Event 34', category: 'Events' },
    { id: 41, src: '/35.webp', alt: 'Event 35', category: 'Events' },
    { id: 42, src: '/36.webp', alt: 'Event 36', category: 'Events' },
    { id: 43, src: '/37.webp', alt: 'Event 37', category: 'Events' },
  ];

  // Shuffle the images array
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const galleryImages = useMemo(() => shuffleArray(allImages), []);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2E4A9F] mb-6 mt-12">
              Events & Achievements
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our journey through memorable events and prestigious awards that celebrate the achievements of women entrepreneurs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gray-200">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-gray-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-orange-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-gray-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-gray-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
