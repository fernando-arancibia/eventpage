import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  heroImage?: string;
}

export default function Hero({ title, subtitle, heroImage = '/foto1.jpg' }: HeroProps) {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 text-white animate-fadeInUp">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-white/90 animate-fadeInUp-delay">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
