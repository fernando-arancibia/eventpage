'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AdminPanel from '../components/AdminPanel';
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
        setData(JSON.parse(stored));
      } else {
        await saveData(defaultData);
      }
    } catch (error) {
      console.log('No previous data found, using defaults');
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
      <Gallery images={data.gallery} />
      <Services services={data.services} />
      <Testimonials testimonials={data.testimonials} />
      <Contact
        phone={data.phone}
        email={data.email}
        address={data.address}
        hours={data.hours}
      />
      <Footer siteName={data.siteName} />
      
      {/*<AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        data={data}
        onSave={saveData}
      /> */}
    </main>
  );
}
