'use client';

import Image from 'next/image';

interface HeaderProps {
  siteName: string;
  onOpenAdmin: () => void;
}

export default function Header({ siteName, onOpenAdmin }: HeaderProps) {
  return (
    <header className="bg-gradient-to-br from-primary to-primary/90 text-white sticky top-0 z-50">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center">
          <div className="relative h-32 w-80 sm:h-64 sm:w-90">
            <Image
              src={siteName}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/*<button
            onClick={onOpenAdmin}
            className="bg-secondary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base"
          >
            Panel Admin
          </button>*/}
        </div>
      </div>
    </header>
  );
}
