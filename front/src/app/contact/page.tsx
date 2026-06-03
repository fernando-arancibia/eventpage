'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          eventType: '',
          eventDate: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Header siteName="/subterra2.jpg" onOpenAdmin={() => {}} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-100 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/foto1.jpg"
              alt="Contact Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
                Creando Experiencias Inolvidables
              </h1>
              <p className="text-lg sm:text-xl opacity-90">
                Contacta a nuestro equipo experto para comenzar a planificar tu próximo evento de lujo.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Contact Form */}
            <div className="lg:col-span-8 bg-white border border-gray-200 p-8 lg:p-12 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">
                Solicitar Consulta
              </h2>
              <p className="text-gray-600 mb-10">
                Completa el formulario y un especialista se contactará contigo en 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-xs tracking-widest text-gray-500 uppercase mb-2 font-semibold">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border-b border-gray-300 py-2 px-0 focus:border-secondary focus:outline-none transition-all"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-xs tracking-widest text-gray-500 uppercase mb-2 font-semibold">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-transparent border-b border-gray-300 py-2 px-0 focus:border-secondary focus:outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col">
                    <label className="text-xs tracking-widest text-gray-500 uppercase mb-2 font-semibold">
                      Tipo de Evento
                    </label>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="bg-transparent border-b border-gray-300 py-2 px-0 focus:border-secondary focus:outline-none transition-all"
                    >
                      <option value="">Selecciona un tipo...</option>
                      <option value="corporate">Evento Corporativo</option>
                      <option value="wedding">Boda</option>
                      <option value="social">Celebración Social</option>
                      <option value="gala">Gala / Recaudación</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="flex flex-col">
                    <label className="text-xs tracking-widest text-gray-500 uppercase mb-2 font-semibold">
                      Fecha del Evento
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="bg-transparent border-b border-gray-300 py-2 px-0 focus:border-secondary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-xs tracking-widest text-gray-500 uppercase mb-2 font-semibold">
                    Tu Visión
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-b border-gray-300 py-2 px-0 focus:border-secondary focus:outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre los requisitos de tu evento..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`px-12 py-4 text-sm tracking-wider uppercase font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isSuccess
                        ? 'bg-green-600 text-white'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting && (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    )}
                    {isSuccess ? '✓ Consulta Recibida' : isSubmitting ? 'Enviando...' : 'Enviar Consulta →'}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Contact Info Card */}
              <div className="bg-white border border-gray-200 p-8 shadow-lg">
                <div className="w-12 h-12 bg-secondary/20 flex items-center justify-center rounded-full mb-6">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  Nuestro Salón
                </h3>
                <address className="not-italic text-gray-600 space-y-2 mb-8">
                  <p>Calle Principal #123</p>
                  <p>Iquique, Chile</p>
                </address>

                <div className="pt-8 border-t border-gray-200 space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <p className="text-primary font-semibold text-sm">947425842 / 995454155</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                    <p className="text-primary font-semibold text-sm">info@salonevento.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-secondary shrink-0" />
                    <p className="text-primary font-semibold text-sm">Lun-Dom: 9:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Image */}
              <div className="relative h-64 overflow-hidden border border-gray-200 group">
                <Image
                  src="/foto2.jpg"
                  alt="Location Map"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                  <a
                    href="#"
                    className="text-white font-bold underline underline-offset-4 hover:text-secondary transition-colors"
                  >
                    Ver Ubicación
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-primary p-8 text-white">
                <h4 className="text-xs tracking-widest uppercase mb-6 text-white/70">
                  Síguenos
                </h4>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-secondary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-secondary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-secondary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-4">
                Planificación de Precisión
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Nuestro enfoque sistemático asegura que cada detalle se ejecute con absoluta perfección.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-300 -translate-y-1/2 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-gray-50 mb-6 transition-all group-hover:scale-125"></div>
                <h4 className="font-bold text-primary mb-2">Descubrimiento</h4>
                <p className="text-sm text-gray-600">
                  Comprendemos tus objetivos principales y requisitos visuales.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-gray-50 mb-6 transition-all group-hover:scale-125"></div>
                <h4 className="font-bold text-primary mb-2">Estrategia</h4>
                <p className="text-sm text-gray-600">
                  Planeación logística y fase de curación de proveedores.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-gray-50 mb-6 transition-all group-hover:scale-125"></div>
                <h4 className="font-bold text-primary mb-2">Ejecución</h4>
                <p className="text-sm text-gray-600">
                  Gestión en sitio y producción con tiempos precisos.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-gray-50 mb-6 transition-all group-hover:scale-125"></div>
                <h4 className="font-bold text-primary mb-2">Post-Evento</h4>
                <p className="text-sm text-gray-600">
                  Reportes detallados y cierre logístico completo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer siteName="/subterra2.jpg" />
    </>
  );
}
