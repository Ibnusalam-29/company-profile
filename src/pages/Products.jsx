import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Sapi Potong Premium Grade A',
      price: 'Rp 25.000.000 - Rp 35.000.000',
      description: 'Sapi potong pilihan dengan bobot optimal 400-500 kg, genetik unggulan, daging berkualitas premium.',
      features: [
        'Bobot badan ideal untuk pasar premium',
        'Genetik Simmental dan Brahman unggulan',
        'Kondisi kesehatan optimal',
        'Sertifikat kesehatan lengkap',
        'Siap panen dalam 6-8 bulan'
      ],
      category: 'premium'
    },
    {
      id: 2,
      name: 'Sapi Potong Standard Grade B',
      price: 'Rp 15.000.000 - Rp 20.000.000',
      description: 'Sapi potong untuk pasar massal dengan kualitas terjamin, bobot 300-400 kg.',
      features: [
        'Bobot badan 300-400 kg',
        'Genetik pilihan lokal berkualitas',
        'Kondisi fisik prima',
        'Harga terjangkau untuk skala besar',
        'Pengiriman tersedia ke seluruh Indonesia'
      ],
      category: 'standard'
    },
    {
      id: 3,
      name: 'Sapi Induk Berkualitas',
      price: 'Rp 20.000.000 - Rp 30.000.000',
      description: 'Sapi betina untuk tujuan breeding, berusia 3-5 tahun dengan riwayat reproduksi baik.',
      features: [
        'Usia reproduksi optimal',
        'Telah memiliki keturunan berkualitas',
        'Kondisi kesehatan terjamin',
        'Ideal untuk program breeding',
        'Konsultasi gratis untuk pemeliharaan'
      ],
      category: 'breeding'
    },
    {
      id: 4,
      name: 'Sapi Jantan Bibit Unggul',
      price: 'Rp 18.000.000 - Rp 28.000.000',
      description: 'Sapi jantan untuk meningkatkan kualitas genetik ternak Anda, terbukti produktif.',
      features: [
        'Genetik terpilih untuk breeding',
        'Ukuran tubuh ideal untuk pejantan',
        'Libido dan fertilitas tinggi',
        'Hasil keturunan berkualitas premium',
        'Program monitoring kesehatan berkelanjutan'
      ],
      category: 'breeding'
    },
    {
      id: 5,
      name: 'Paket Konsultasi Peternakan',
      price: 'Rp 5.000.000 - Rp 10.000.000',
      description: 'Layanan konsultasi profesional untuk optimalisasi peternakan sapi potong Anda.',
      features: [
        'Analisis kondisi peternakan existing',
        'Program nutrisi optimal',
        'Manajemen kesehatan hewan',
        'Strategi pemasaran dan penjualan',
        'Pelatihan tenaga kerja peternakan'
      ],
      category: 'service'
    },
    {
      id: 6,
      name: 'Layanan Pengiriman & Logistik',
      price: 'Hubungi kami untuk penawaran',
      description: 'Layanan pengiriman sapi ke seluruh Indonesia dengan standar kesejahteraan hewan.',
      features: [
        'Kendaraan khusus berpendingin',
        'Penanganan hewan profesional',
        'Asuransi pengiriman lengkap',
        'Tracking realtime',
        'Garansi hewan selamat sampai tujuan'
      ],
      category: 'service'
    }
  ];

  const categories = ['all', 'premium', 'standard', 'breeding', 'service'];
  const categoryLabels = {
    all: 'Semua',
    premium: 'Premium',
    standard: 'Standard',
    breeding: 'Breeding',
    service: 'Layanan'
  };

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex-grow">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primaryDark py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Produk Kami
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Koleksi lengkap sapi potong berkualitas tinggi dan layanan peternakan profesional
          </p>
        </div>
      </section>

      {/* Products Content */}
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="mb-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {categoryLabels[product.category]}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-3">
                    {product.price}
                  </p>
                </div>

                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Fitur Unggulan:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/kontak" className="w-full btn-primary block text-center">
                  Dapatkan Informasi
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih Produk Kami?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">Kualitas Terjamin</h3>
                <p className="text-gray-700">
                  Setiap sapi melalui seleksi ketat dan pemeriksaan kesehatan menyeluruh sebelum dijual kepada pelanggan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">Harga Kompetitif</h3>
                <p className="text-gray-700">
                  Kami menawarkan harga terbaik di pasaran tanpa mengorbankan kualitas produk yang kami berikan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">Dukungan Purna Jual</h3>
                <p className="text-gray-700">
                  Tim kami siap memberikan konsultasi dan dukungan teknis untuk kesuksesan usaha Anda.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primaryDark rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tertarik dengan Produk Kami?
            </h3>
            <p className="text-gray-100 mb-6">
              Hubungi kami untuk konsultasi gratis dan penawaran khusus untuk pembelian dalam jumlah besar.
            </p>
            <Link to="/kontak" className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-secondary transition">
              Hubungi Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Import React hooks
import React from 'react';
