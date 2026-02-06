import { Testimonial }from '../interfaces/ITestimonial';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-primary">
          Testimonios
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light p-8 rounded-2xl shadow-lg border-l-4 border-secondary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-gray-600 italic mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-semibold text-primary">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
