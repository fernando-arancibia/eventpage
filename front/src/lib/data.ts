import { SalonData } from "@/interfaces/ISalonData";

export const defaultData: SalonData = {
  siteName: '/subterra.jpg',
  heroTitle: 'El Espacio Perfecto para tu Evento',
  heroSubtitle: 'Celebra momentos inolvidables en un ambiente elegante y sofisticado',
  phone: '947425842 / 995454155 / 995444870',
  email: 'info@salonevento.com',
  address: 'Calle Principal #123, Iquique',
  hours: 'Lun-Dom: 9:00 AM - 11:00 PM',
  gallery: [
    '/foto1.jpg',
    '/foto2.jpg',
    '/foto5.jpg',
    '/foto4.jpg',
    '/foto6.jpg',
  ],
  services: [
    { icon: '🍽️', name: 'Catering Premium', desc: 'Menús personalizados con chef profesional' },
    { icon: '🎵', name: 'Audio y Música', desc: 'Sistema de sonido profesional y DJ' },
    { icon: '💡', name: 'Iluminación', desc: 'Diseño de iluminación ambiental personalizada' },
    { icon: '📸', name: 'Fotografía', desc: 'Servicio fotográfico profesional incluido' },
    { icon: '🎨', name: 'Decoración', desc: 'Ambientación temática a tu gusto' },
    { icon: '🎨', name: 'Animacion', desc: 'Servicio  de animacion' },
  ],
  packages: [
    { 
      name: 'Básico', 
      price: '$5,000', 
      desc: 'Salón 4 horas, mesas y sillas para 50 personas, decoración básica, servicio de meseros' 
    },
    { 
      name: 'Premium', 
      price: '$12,000', 
      desc: 'Salón 6 horas, catering completo, DJ, decoración elegante, fotografía básica, hasta 100 personas' 
    },
    { 
      name: 'Luxury', 
      price: '$25,000', 
      desc: 'Salón ilimitado, catering gourmet, banda en vivo, fotografía y video 4K, decoración de lujo, hasta 200 personas' 
    },
  ],
  testimonials: [
    { 
      author: 'María González', 
      text: 'Celebramos nuestra boda aquí y fue perfecto. El servicio excepcional y las instalaciones hermosas. ¡Totalmente recomendado!' 
    },
    { 
      author: 'Carlos Rodríguez', 
      text: 'Excelente para eventos corporativos. Muy profesionales y atentos a cada detalle. La comida estuvo increíble.' 
    },
    { 
      author: 'Ana Martínez', 
      text: 'Realizamos los XV años de mi hija y superó nuestras expectativas. El equipo hizo que todo fluyera perfectamente.' 
    },
  ],
};