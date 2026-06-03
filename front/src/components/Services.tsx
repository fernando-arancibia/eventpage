import Image from 'next/image';
import { Service } from '../interfaces/IService';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  // Validación: si services no existe o está vacío, no renderizar nada
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div
            key={index}
            className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${
              index > 0 ? 'border-t border-gray-100' : ''
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Text Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase mb-3">
                    {service.category}
                  </p>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
                    {service.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-secondary mr-3 mt-0.5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-primary text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300">
                    Solicitar Cotización
                  </button>
                </div>

                {/* Image */}
                <div className={`relative h-64 sm:h-80 lg:h-96 ${isEven ? '' : 'lg:col-start-1'}}`}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
