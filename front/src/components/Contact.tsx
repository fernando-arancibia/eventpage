import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export default function Contact({ phone, email, address, hours }: ContactProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-primary">
          Contacto
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary mb-1">Teléfono</p>
                <p className="text-gray-600">{phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary mb-1">Email</p>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary mb-1">Dirección</p>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary mb-1">Horario</p>
                <p className="text-gray-600">{hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
