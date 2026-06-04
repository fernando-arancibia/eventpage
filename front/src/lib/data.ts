import { SalonData } from "@/interfaces/ISalonData";

export const defaultData: SalonData = {
  siteName: "/subterra2.jpg",
  heroTitle: 'TU ESPACIO PERFECTO',
  heroSubtitle: 'Creamos experiencias únicas que superan las expectativas',
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
    {
      category: 'EXPERIENCIAS PERFECTAS',
      name: 'Eventos Corporativos',
      desc: 'Lanzamientos de productos de alto impacto a almuerzos galardonados, brindamos los ingredientes logísticos más altos para representar su marca con estilo y manejar cada detalle con la confianza de un socio financiero de confianza.',
      features: [
        'Gran Capacidad de asistente',
        'Gestión estratégica avanzada del evento',
        'Catering de calidad gourmet con opciones de dieta',
      ],
      image: '/foto2.jpg',
    },
    {
      category: 'BODAS BOUTIQUE',
      name: 'Bodas',
      desc: 'Para las parejas que buscan una boda excepcional en una ubicación o patio único, ofrecemos coordinación logística de primer nivel con una superposición impecable para la celebración que has soñado en tu lugar ideal.',
      features: [
        'Diseño de eventos a medida e innovador',
        'Lugares únicos para eventos al aire libre',
        'Coordinación integral del día',
      ],
      image: '/foto5.jpg',
    },
    {
      category: 'CELEBRACIONES EXCEPCIONALES',
      name: 'Fiestas Privadas',
      desc: 'Ya sea un cumpleaños especial, aniversario o una pequeña fiesta festiva, aseguramos que su evento se desarrolle sin problemas y sea sobre las personas presentes.',
      features: [
        'Experiencias de entretenimiento seleccionadas',
        'Diseño de iluminación ambiental y sonido',
        'Estilo exclusivo de eventos de principio a fin',
      ],
      image: '/foto4.jpg',
    },
    {
      category: 'EFICIENCIA OPERATIVA',
      name: 'Galas y Recaudaciones',
      desc: 'Para organizaciones que necesitan hacer una declaración, manejamos la preparación completa de eventos a gran escala, recaudaciones de fondos, subasta silenciosa y gestión de invitados. Todo administrado de manera eficiente y memorable.',
      features: [
        'Gestión de donantes y recaudación',
        'Fotografía de eventos de alta gama y marketing',
        'Apoyo acreditado para subasta silenciosa',
      ],
      image: '/foto6.jpg',
    },
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