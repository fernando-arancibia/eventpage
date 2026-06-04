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
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-0 py-3 md:py-2 md:h-20 lg:h-36 max-w-7xl md:gap-0">
        {/* Logo */}
        <Link href="/" className="relative h-14 w-56 sm:h-16 sm:w-64 lg:h-32 lg:w-64">
          <Image
            src={siteName}
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation - Now visible on mobile */}
        <nav className="flex items-center space-x-4 sm:space-x-8 h-full">
          <Link
            href="/"
            className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-gray-600'
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/gallery"
            className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/gallery' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-gray-600'
            }`}
          >
            Galería
          </Link>
          <Link
            href="/contact"
            className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/contact' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-gray-600'
            }`}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
