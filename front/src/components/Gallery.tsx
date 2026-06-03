'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-primary">
          Nuestras Instalaciones
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
        
        {/* Carrusel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Imagen principal */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images[currentIndex]}
              alt={`Galería ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-secondary w-8'
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-center mt-4 text-primary/80 font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
}
