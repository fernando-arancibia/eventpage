'use client';

import { useState } from 'react';
import { X, Trash2 } from 'lucide-react';
import { SalonData }from '../interfaces/ISalonData';
import { Service }from '../interfaces/IService';
import { Package }from '../interfaces/IPackage';
import { Testimonial }from '../interfaces/ITestimonial';


interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: SalonData;
  onSave: (data: SalonData) => void;
}

type TabType = 'info' | 'gallery' | 'services' | 'packages' | 'testimonials';

export default function AdminPanel({ isOpen, onClose, data, onSave }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [formData, setFormData] = useState<SalonData>(data);

  // New item states
  const [newImage, setNewImage] = useState('');
  const [newService, setNewService] = useState<Service>({
    category: '',
    name: '',
    desc: '',
    features: [],
    image: '',
  });
  const [newFeature, setNewFeature] = useState('');
  const [newPackage, setNewPackage] = useState<Package>({ name: '', price: '', desc: '' });
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({ author: '', text: '' });

  const handleSaveInfo = () => {
    onSave(formData);
    alert('Información guardada exitosamente');
  };

  const handleAddImage = () => {
    if (!newImage.trim()) {
      alert('Por favor ingresa una URL');
      return;
    }
    setFormData({
      ...formData,
      gallery: [...formData.gallery, newImage.trim()],
    });
    setNewImage('');
    onSave({ ...formData, gallery: [...formData.gallery, newImage.trim()] });
  };

  const handleDeleteImage = (index: number) => {
    if (confirm('¿Eliminar esta imagen?')) {
      const newGallery = formData.gallery.filter((_, i) => i !== index);
      setFormData({ ...formData, gallery: newGallery });
      onSave({ ...formData, gallery: newGallery });
    }
  };

  const handleAddService = () => {
    if (!newService.category || !newService.name || !newService.desc || !newService.image || newService.features.length === 0) {
      alert('Por favor completa todos los campos incluyendo al menos una característica');
      return;
    }
    const updated = {
      ...formData,
      services: [...formData.services, newService],
    };
    setFormData(updated);
    setNewService({ category: '', name: '', desc: '', features: [], image: '' });
    onSave(updated);
  };

  const handleAddFeature = () => {
    if (!newFeature.trim()) {
      alert('Por favor ingresa una característica');
      return;
    }
    setNewService({
      ...newService,
      features: [...newService.features, newFeature.trim()],
    });
    setNewFeature('');
  };

  const handleRemoveFeature = (index: number) => {
    setNewService({
      ...newService,
      features: newService.features.filter((_, i) => i !== index),
    });
  };

  const handleDeleteService = (index: number) => {
    if (confirm('¿Eliminar este servicio?')) {
      const newServices = formData.services.filter((_, i) => i !== index);
      const updated = { ...formData, services: newServices };
      setFormData(updated);
      onSave(updated);
    }
  };

  const handleAddPackage = () => {
    if (!newPackage.name || !newPackage.price || !newPackage.desc) {
      alert('Por favor completa todos los campos');
      return;
    }
    const updated = {
      ...formData,
      packages: [...formData.packages, newPackage],
    };
    setFormData(updated);
    setNewPackage({ name: '', price: '', desc: '' });
    onSave(updated);
  };

  const handleDeletePackage = (index: number) => {
    if (confirm('¿Eliminar este paquete?')) {
      const newPackages = formData.packages.filter((_, i) => i !== index);
      const updated = { ...formData, packages: newPackages };
      setFormData(updated);
      onSave(updated);
    }
  };

  const handleAddTestimonial = () => {
    if (!newTestimonial.author || !newTestimonial.text) {
      alert('Por favor completa todos los campos');
      return;
    }
    const updated = {
      ...formData,
      testimonials: [...formData.testimonials, newTestimonial],
    };
    setFormData(updated);
    setNewTestimonial({ author: '', text: '' });
    onSave(updated);
  };

  const handleDeleteTestimonial = (index: number) => {
    if (confirm('¿Eliminar este testimonio?')) {
      const newTestimonials = formData.testimonials.filter((_, i) => i !== index);
      const updated = { ...formData, testimonials: newTestimonials };
      setFormData(updated);
      onSave(updated);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-100 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
      <div className="bg-white rounded-2xl w-full max-w-4xl my-8 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-secondary">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
            Panel de Administración
          </h2>
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 p-6 border-b border-gray-200">
          {[
            { id: 'info', label: 'Info General' },
            { id: 'gallery', label: 'Galería' },
            { id: 'services', label: 'Servicios' },
            { id: 'packages', label: 'Paquetes' },
            { id: 'testimonials', label: 'Testimonios' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-secondary text-primary'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-primary mb-2">Nombre del Sitio</label>
                <input
                  type="text"
                  value={formData.siteName}
                  onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Título Principal</label>
                <input
                  type="text"
                  value={formData.heroTitle}
                  onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Subtítulo</label>
                <textarea
                  value={formData.heroSubtitle}
                  onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none min-h-25"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Teléfono</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Dirección</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Horario</label>
                <input
                  type="text"
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <button
                onClick={handleSaveInfo}
                className="w-full bg-secondary text-primary py-3 rounded-lg font-bold hover:bg-accent transition-colors"
              >
                Guardar Información
              </button>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-primary mb-2">URL de la Imagen</label>
                <input
                  type="text"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <button
                onClick={handleAddImage}
                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Agregar Imagen
              </button>
              <div className="border-2 border-gray-300 rounded-lg p-4 space-y-2">
                {formData.gallery.map((img, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <span className="text-sm truncate flex-1">{img}</span>
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-primary mb-2">Categoría</label>
                <input
                  type="text"
                  value={newService.category}
                  onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  placeholder="EXPERIENCIAS PERFECTAS"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Nombre del Servicio</label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  placeholder="Catering"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Descripción</label>
                <textarea
                  value={newService.desc}
                  onChange={(e) => setNewService({ ...newService, desc: e.target.value })}
                  placeholder="Servicio de comida gourmet..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none min-h-25"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Imagen URL</label>
                <input
                  type="text"
                  value={newService.image}
                  onChange={(e) => setNewService({ ...newService, image: e.target.value })}
                  placeholder="/foto2.jpg"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Características</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Agregar característica..."
                    className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddFeature()}
                  />
                  <button
                    onClick={handleAddFeature}
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Agregar
                  </button>
                </div>
                {newService.features.length > 0 && (
                  <div className="space-y-2">
                    {newService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                        <span className="text-sm">{feature}</span>
                        <button
                          onClick={() => handleRemoveFeature(idx)}
                          type="button"
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={handleAddService}
                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Agregar Servicio
              </button>
              <div className="border-2 border-gray-300 rounded-lg p-4 space-y-2">
                {formData.services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.category}</div>
                    </div>
                    <button
                      onClick={() => handleDeleteService(index)}
                      className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Packages Tab */}
          {activeTab === 'packages' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-primary mb-2">Nombre del Paquete</label>
                <input
                  type="text"
                  value={newPackage.name}
                  onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                  placeholder="Paquete Básico"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Precio</label>
                <input
                  type="text"
                  value={newPackage.price}
                  onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                  placeholder="$5,000"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Descripción</label>
                <textarea
                  value={newPackage.desc}
                  onChange={(e) => setNewPackage({ ...newPackage, desc: e.target.value })}
                  placeholder="Incluye: salón por 4 horas, mesas y sillas..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none min-h-25"
                />
              </div>
              <button
                onClick={handleAddPackage}
                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Agregar Paquete
              </button>
              <div className="border-2 border-gray-300 rounded-lg p-4 space-y-2">
                {formData.packages.map((pkg, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <span className="text-sm">
                      {pkg.name} - {pkg.price}
                    </span>
                    <button
                      onClick={() => handleDeletePackage(index)}
                      className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-primary mb-2">Nombre del Cliente</label>
                <input
                  type="text"
                  value={newTestimonial.author}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, author: e.target.value })}
                  placeholder="María González"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-primary mb-2">Testimonio</label>
                <textarea
                  value={newTestimonial.text}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
                  placeholder="Excelente servicio, superó nuestras expectativas..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none min-h-25"
                />
              </div>
              <button
                onClick={handleAddTestimonial}
                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Agregar Testimonio
              </button>
              <div className="border-2 border-gray-300 rounded-lg p-4 space-y-2">
                {formData.testimonials.map((testimonial, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <span className="text-sm">{testimonial.author}</span>
                    <button
                      onClick={() => handleDeleteTestimonial(index)}
                      className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
