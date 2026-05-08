import { useState } from 'react';
import { galleryImages } from '../data';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', 'livestock', 'facility', 'farm', 'process'];
  const categoryLabels = {
    all: 'Semua',
    livestock: 'Ternak',
    facility: 'Fasilitas',
    farm: 'Pertanian',
    process: 'Proses'
  };

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Placeholder image generator (using placeholder service)
  const getPlaceholderImage = (id) => {
    const colors = ['2ecc71', 'f1c40f', '3498db', 'e74c3c', '9b59b6', '1abc9c'];
    const color = colors[id % colors.length];
    return `https://via.placeholder.com/400x300/${color}/FFFFFF?text=Galeri+${id}`;
  };

  return (
    <div className="flex-grow">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primaryDark py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeri
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Koleksi foto-foto aktivitas, fasilitas, dan hasil kerja Koperasi Tani Makmur Nambangan
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden bg-gray-300 aspect-square">
                  <img
                    src={image.image ?? getPlaceholderImage(image.id)}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedImage(null)}>
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                      <p className="text-gray-600 mt-1">{selectedImage.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <img
                    src={selectedImage.image ?? getPlaceholderImage(selectedImage.id)}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dokumentasi Aktivitas Kami
            </h3>
            <p className="text-gray-700 mb-4">
              Galeri kami menampilkan berbagai aspek operasional Koperasi Tani Makmur Nambangan Sejahtera Bersama, mulai dari koleksi sapi potong berkualitas tinggi, fasilitas peternakan modern, hingga proses pemeliharaan yang profesional. Setiap foto mencerminkan komitmen kami terhadap kualitas, kesejahteraan hewan, dan keberlanjutan lingkungan.
            </p>
            <p className="text-gray-700">
              Kami bangga dengan transparansi dalam menunjukkan kepada pelanggan dan mitra bisnis tentang standar kualitas dan profesionalisme yang kami terapkan dalam setiap aspek bisnis peternakan kami.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
