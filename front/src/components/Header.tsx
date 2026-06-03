'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  siteName: string;
  onOpenAdmin: () => void;
}

export default function Header({ siteName, onOpenAdmin }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="relative h-24 w-60 sm:h-24 sm:w-72 shrink-0">
          <Image
            src={siteName}
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8 h-full">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-gray-600'
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/gallery"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/gallery' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-gray-600'
            }`}
          >
            Galería
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/contact' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-gray-600'
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onOpenAdmin}
          className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase font-semibold hover:bg-primary/90 transition-all duration-300 shrink-0"
        >
          Consulta
        </button>
      </div>
    </header>
  );
}
