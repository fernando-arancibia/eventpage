import { Service }from '../interfaces/IService';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-white">
          Servicios
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                {service.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
