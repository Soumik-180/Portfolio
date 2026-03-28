import React from 'react';
import { motion } from 'framer-motion';

const PhotoGallery = ({ photos, onPhotoClick }) => {
  return (
    <div className="w-full max-h-[60vh] overflow-y-auto pr-2 md:pr-4 pb-4 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 w-full">
        {photos.map((photo, index) => (
          <motion.button
          key={photo.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPhotoClick(photo.id)}
          className="relative overflow-hidden group rounded-lg md:rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-gray-200 dark:bg-gray-800 aspect-square lg:aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label={`View ${photo.title}`}
        >
          <picture>
            <source
              srcSet={`${import.meta.env.BASE_URL}assets/Photography/${photo.filename}.webp`}
              type="image/webp"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/Photography/${photo.filename}-optimized.jpeg`}
              alt={photo.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform-gpu transition-transform duration-500 group-hover:scale-110"
            />
          </picture>

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

          {/* Featured badge */}
          {photo.featured && (
            <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs md:text-sm font-bold"
              >
                ⭐
              </motion.div>
            </div>
          )}

          {/* Title overlay on hover (mobile friendly) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 md:p-4 pointer-events-none"
          >
            <p className="text-white font-semibold text-sm md:text-base line-clamp-2">
              {photo.title}
            </p>
          </motion.div>
        </motion.button>
      ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
