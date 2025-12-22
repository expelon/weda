import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const GalleryPage = () => {
  const galleryImages = [
    { id: 1, src: '/about.webp', alt: 'Annual Exhibition', category: 'Events' },
    { id: 2, src: '/about2.webp', alt: 'Leadership Summit', category: 'Events' },
    { id: 3, src: '/about3.webp', alt: 'Recognition Awards', category: 'Awards' },
    { id: 4, src: '/impact.webp', alt: 'Workshop Series', category: 'Events' },
    { id: 5, src: '/about.webp', alt: 'Community Fair', category: 'Events' },
    { id: 6, src: '/about2.webp', alt: 'Achievement Ceremony', category: 'Awards' },
    { id: 7, src: '/about3.webp', alt: 'Women Entrepreneur Meet', category: 'Events' },
    { id: 8, src: '/impact.webp', alt: 'Excellence Awards 2023', category: 'Awards' },
    { id: 9, src: '/about.webp', alt: 'Skill Development Workshop', category: 'Events' },
  ];

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 mt-12">
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
            {galleryImages.map((image, index) => (
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
