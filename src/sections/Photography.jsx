import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from '../components/PhotoGallery';
import PhotoLightbox from '../components/PhotoLightbox';
import photoData from '../assets/photos.json';

const Photography = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoId, setCurrentPhotoId] = useState(null);
  const { photos } = photoData;

  const handlePhotoClick = (photoId) => { setCurrentPhotoId(photoId); setIsLightboxOpen(true); };
  const handlePrevious = () => {
    const currentIndex = photos.findIndex(p => p.id === currentPhotoId);
    setCurrentPhotoId(photos[currentIndex === 0 ? photos.length - 1 : currentIndex - 1].id);
  };
  const handleNext = () => {
    const currentIndex = photos.findIndex(p => p.id === currentPhotoId);
    setCurrentPhotoId(photos[currentIndex === photos.length - 1 ? 0 : currentIndex + 1].id);
  };

  return (
    <section id="photography" className="min-h-screen pt-20 pb-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#111] dark:text-white transition-all duration-500 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 cursor-default mb-6">
            Photography
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
            I see the world as data, but I paint with light. Photography is my way of exploring patterns, composition, and moments — skills that translate into how I approach problems.
          </p>
        </motion.div>

        <PhotoGallery photos={photos} onPhotoClick={handlePhotoClick} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 pt-10 border-t border-gray-200 dark:border-white/10"
        >
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-gray-900 dark:text-gray-200">Explore more of my work</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Follow my photography journey across these platforms for more moments painted with light.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-4">
              <a href="https://www.instagram.com/_ray_graphy_/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-medium shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95">Instagram</a>
              <a href="https://in.pinterest.com/skrsoumikray/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#E60023] text-white font-medium shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95">Pinterest</a>
              <a href="https://www.facebook.com/profile.php?id=61578165031613" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#1877F2] text-white font-medium shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95">Facebook</a>
            </div>
          </div>
        </motion.div>
      </div>

      <PhotoLightbox isOpen={isLightboxOpen} photos={photos} currentPhotoId={currentPhotoId} onClose={() => setIsLightboxOpen(false)} onPrevious={handlePrevious} onNext={handleNext} />
    </section>
  );
};

export default Photography;
