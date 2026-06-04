'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';
import { GalleryItem } from '@/interfaces/IGalleryItem';

// Datos de ejemplo - después se pueden cargar desde localStorage o API
const galleryItems: GalleryItem[] = [
  {
    image: '/foto1.jpg',
    title: 'Sub Terra',
    location: 'Centro de Eventos',
    category: 'corporate',
    subtitle: '',
    size: 'large',
  },
  {
    image: '/foto2.jpg',
    title: 'Salon Sub Terra',
    location: 'Centro de Eventos',
    category: 'wedding',
    subtitle: '',
    size: 'medium',
  },
  {
    image: '/foto11.jpg',
    title: 'Terraza',
    location: '',
    category: 'social',
    subtitle: '',
    size: 'small',
  },
  {
    image: '/foto12.jpg',
    title: 'Terraza',
    location: 'Viñedo Valle',
    category: 'wedding',
    subtitle: '',
    size: 'large',
  },
  {
    image: '/foto6.jpg',
    title: 'Bar Sub Terra',
    location: 'Centro Empresarial',
    category: 'corporate',
    subtitle: '',
    size: 'medium',
  },
  {
    image: '/foto1.jpg',
    title: 'Gala de Beneficencia',
    location: 'Salón Principal',
    category: 'social',
    subtitle: 'Gala Social',
    size: 'medium',
  },
  {
    image: '/foto7.jpg',
    title: 'Evento Corporativo',
    location: 'Salón Principal',
    category: 'social',
    subtitle: '',
    size: 'medium',
  },
  {
    image: '/foto9.jpg',
    title: 'Fiesta Cumpleaños',
    location: 'Salón Principal',
    category: 'social',
    subtitle: '',
    size: 'medium',
  },
];

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-display text-primary">Cargando...</div>
      </div>
    );
  }

  return (
    <>
      <Header siteName="/subterra2.jpg" onOpenAdmin={() => {}} />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block mb-6 text-sm tracking-widest text-secondary hover:text-secondary/80 transition-colors uppercase font-semibold"
          >
            ← Volver al Inicio
          </Link>
          <span className="block text-xs sm:text-sm tracking-widest text-secondary uppercase mb-4">
            BIENVENIDO A NUESTRA GALERIA
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary mb-6">
            Nuestras Instalaciones y Eventos
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Un viaje visual sobre nuestaras instalaciones y algunos de nuestros eventos realizados con nuestros clientes.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Filters */}
      <GalleryGrid items={galleryItems} />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center border-2 border-gray-200 p-8 sm:p-16 bg-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-8 italic">
            ¿Listo para crear tu próximo evento?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/#contact"
              className="bg-primary text-white text-sm tracking-wider uppercase px-8 sm:px-10 py-4 hover:bg-primary/90 transition-all font-semibold"
            >
              Solicitar Consulta
            </Link>
            <Link
              href="/contact"
              className="border-2 border-secondary text-secondary text-sm tracking-wider uppercase px-8 sm:px-10 py-4 hover:bg-secondary hover:text-white transition-all font-semibold"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer siteName="facweb" />
    </>
  );
}
