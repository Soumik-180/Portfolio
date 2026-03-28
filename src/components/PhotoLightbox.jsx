import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PhotoLightbox = ({ isOpen, photos, currentPhotoId, onClose, onPrevious, onNext }) => {
  const currentIndex = photos.findIndex(p => p.id === currentPhotoId);
  const photo = photos[currentIndex];

  useEffect(() => {
    const handleKeydown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          onPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 z-[99]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={onClose}
          >
            {/* Modal Content */}
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
                aria-label="Close gallery"
              >
                <X size={24} />
              </motion.button>

              {/* Image Container */}
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full bg-black rounded-lg overflow-hidden"
              >
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}assets/Photography/${photo.filename}.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}assets/Photography/${photo.filename}-optimized.jpeg`}
                    alt={photo.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </motion.div>

              {/* Photo Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mt-6 text-white"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                  {photo.title}
                </h3>
                {photo.description && (
                  <p className="text-gray-300 text-lg mb-4">{photo.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    {photo.category}
                  </span>
                  <span className="text-sm font-mono text-gray-400">
                    {currentIndex + 1} / {photos.length}
                  </span>
                </div>
              </motion.div>

              {/* Navigation Instructions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-4 text-center text-xs md:text-sm text-gray-400"
              >
                <p>Use ← → or click arrows to navigate • Press ESC to close</p>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-2 md:px-4">
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onPrevious}
                  className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-colors duration-200 backdrop-blur-sm"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={24} className="md:w-8 md:h-8" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNext}
                  className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-colors duration-200 backdrop-blur-sm"
                  aria-label="Next photo"
                >
                  <ChevronRight size={24} className="md:w-8 md:h-8" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PhotoLightbox;
