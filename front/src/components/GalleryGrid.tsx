'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/interfaces/IGalleryItem';

interface GalleryGridProps {
  items: GalleryItem[];
}

type FilterType = 'all' | 'corporate' | 'wedding' | 'social';

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const getGridClass = (size: string, index: number) => {
    // Patrón masonry similar al HTML de ejemplo
    if (size === 'large') {
      return 'md:col-span-8';
    } else if (size === 'medium') {
      return 'md:col-span-6';
    } else {
      return 'md:col-span-4';
    }
  };

  const getHeightClass = (size: string) => {
    if (size === 'large') {
      return 'h-[400px] sm:h-[500px]';
    } else if (size === 'medium') {
      return 'h-[350px] sm:h-[450px]';
    } else {
      return 'h-[300px] sm:h-[400px]';
    }
  };

  return (
    <>
      {/* Sticky Filter Bar */}
      <section className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all pb-1 ${
                activeFilter === 'all'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-gray-500 hover:text-secondary'
              }`}
            >
              Todos los Eventos
            </button>
            <button
              onClick={() => setActiveFilter('corporate')}
              className={`text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all pb-1 ${
                activeFilter === 'corporate'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-gray-500 hover:text-secondary'
              }`}
            >
              Corporativos
            </button>
            <button
              onClick={() => setActiveFilter('wedding')}
              className={`text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all pb-1 ${
                activeFilter === 'wedding'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-gray-500 hover:text-secondary'
              }`}
            >
              Bodas
            </button>
            <button
              onClick={() => setActiveFilter('social')}
              className={`text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all pb-1 ${
                activeFilter === 'social'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-gray-500 hover:text-secondary'
              }`}
            >
              Sociales
            </button>
          </div>
          <div className="flex items-center text-gray-500 text-xs tracking-widest uppercase">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            Orden Cronológico
          </div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`${getGridClass(item.size, index)} group relative overflow-hidden bg-gray-100 border border-gray-200 transition-all duration-300`}
              >
                {/* Image */}
                <div className={`relative ${getHeightClass(item.size)} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-12">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 mb-4">
                      {item.location}
                    </p>
                    <span className="text-xs tracking-widest text-secondary uppercase font-semibold">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                No se encontraron eventos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
