import { Package } from '../interfaces/IPackage';

interface PackagesProps {
  packages: Package[];
}

export default function Packages({ packages }: PackagesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-primary">
          Paquetes
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className="bg-linear-to-br from-secondary to-accent p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-primary">{pkg.price}</div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">{pkg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
