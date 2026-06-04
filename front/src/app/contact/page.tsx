'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [siteName, setSiteName] = useState('/logo.png');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [email, setEmail] = useState('eventos@elite.com');
  const [address, setAddress] = useState('123 Event Plaza, Ciudad');
  const [hours, setHours] = useState('Lun - Vie: 9:00 - 18:00 | Sáb: 10:00 - 14:00');

  useEffect(() => {
    // Load data from localStorage
    try {
      const stored = localStorage.getItem('salonData');
      if (stored) {
        const parsedData = JSON.parse(stored);
        if (parsedData.siteName) setSiteName(parsedData.siteName);
        if (parsedData.phone) setPhone(parsedData.phone);
        if (parsedData.email) setEmail(parsedData.email);
        if (parsedData.address) setAddress(parsedData.address);
        if (parsedData.hours) setHours(parsedData.hours);
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  }, []);

  const handleWhatsAppClick = () => {
    // Número de WhatsApp (reemplazar con el número real)
    const phoneNumber = '15551234567'; // Formato internacional sin + ni espacios
    const message = encodeURIComponent('Hola, me gustaría consultar sobre sus servicios para eventos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Header siteName={siteName} onOpenAdmin={() => {}} />
      
      {/* Hero Section */}
      <section className="relative h-100 flex items-center justify-center">
        <Image
          src="/foto3.jpg"
          alt="Contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
            Hablemos de tu Evento
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transformamos tu visión en una experiencia inolvidable
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-4">Información de Contacto</h2>
            <div className="w-20 h-px bg-black mx-auto mb-6"></div>
            <p className="text-black text-lg">
              Estamos aquí para hacer realidad tu evento perfecto
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="mb-12 text-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white text-lg font-medium rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </button>
            {/*<p className="mt-4 text-sm text-gray-600">
              Respuesta inmediata • Disponible 24/7
            </p>*/}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <Contact phone={phone} email={email} address={address} hours={hours} />

      {/* CTA Section */}
      

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Nuestro Proceso</h2>
            <div className="w-20 h-px bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Desde la primera consulta hasta el día del evento, te acompañamos en cada paso
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Consulta Inicial', desc: 'Conversamos sobre tu visión y necesidades' },
              { num: '02', title: 'Propuesta', desc: 'Diseñamos un plan personalizado para tu evento' },
              { num: '03', title: 'Planificación', desc: 'Coordinamos cada detalle con precisión' },
              { num: '04', title: 'Ejecución', desc: 'Hacemos realidad tu evento perfecto' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-serif text-secondary mb-4">{step.num}</div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer siteName={siteName} />
    </>
  );
}
