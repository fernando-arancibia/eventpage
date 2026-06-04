interface FooterProps {
  siteName: string;
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} DeliverWeb. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
