'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Carousel = ({ items, className = '', autoPlay = false, autoPlayInterval = 3000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Preload all images on component mount
  useEffect(() => {
    items.forEach((item) => {
      const img = new window.Image();
      img.onload = () => handleImageLoad(item.src);
      img.src = item.src;
    });
  }, [items]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  };

  // Auto-play functionality
  if (autoPlay) {
    setTimeout(nextSlide, autoPlayInterval);
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main image container */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {/* Fallback gradient background while loading */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-400 transition-opacity duration-500 ${
                  loadedImages.has(items[currentIndex].src) ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              {/* Actual image */}
              <Image
                src={items[currentIndex].src}
                alt={items[currentIndex].alt}
                fill
                loading="eager"
                priority={currentIndex === 0}
                className={`object-cover transition-all duration-300 ${
                  loadedImages.has(items[currentIndex].src) ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(items[currentIndex].src)}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="p-4 bg-white">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm text-slate-600 text-center"
        >
          {items[currentIndex].caption}
        </motion.p>
      </div>

      {/* Dots indicator */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 pb-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-emerald-600 scale-125' 
                  : 'bg-emerald-300 hover:bg-emerald-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
