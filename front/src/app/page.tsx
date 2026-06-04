'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { SalonData }from '../interfaces/ISalonData';
import { defaultData } from '@/lib/data';

export default function Home() {
  const [data, setData] = useState<SalonData>(defaultData);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const stored = localStorage.getItem('salonData');
      if (stored) {
        const parsedData = JSON.parse(stored);
        // Validar si tiene la estructura antigua y migrar
        if (parsedData.services && parsedData.services.length > 0) {
          const firstService = parsedData.services[0];
          // Si tiene 'icon' en lugar de 'category', usar datos por defecto
          if ('icon' in firstService) {
            console.log('Migrando a nueva estructura de datos...');
            await saveData(defaultData);
            setData(defaultData);
          } else {
            setData(parsedData);
          }
        } else {
          setData(parsedData);
        }
      } else {
        await saveData(defaultData);
      }
    } catch (error) {
      console.log('Error cargando datos, usando defaults:', error);
      await saveData(defaultData);
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async (newData: SalonData) => {
    try {
      localStorage.setItem('salonData', JSON.stringify(newData));
      setData(newData);
      return true;
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error al guardar los datos');
      return false;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-display text-primary">Cargando...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header siteName={data.siteName} onOpenAdmin={() => setIsAdminOpen(true)} />
      <Hero title={data.heroTitle} subtitle={data.heroSubtitle} />
      <Services services={data.services} />
      <Footer siteName={data.siteName} />
    </main>
  );
}
