import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salón de Eventos - El Espacio Perfecto',
  description: 'Celebra momentos inolvidables en un ambiente elegante y sofisticado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
