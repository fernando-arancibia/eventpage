import { Package } from "./IPackage";
import { Service } from "./IService";
import { Testimonial } from "./ITestimonial";

export interface SalonData {
  siteName: string; // Ruta del logo (ej: '/logo.jpg')
  heroTitle: string;
  heroSubtitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  gallery: string[];
  services: Service[];
  packages: Package[];
  testimonials: Testimonial[];
}