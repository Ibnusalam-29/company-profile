import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex-grow">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primaryDark py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Mengenal lebih dekat perjalanan dan visi Koperasi Tani Makmur Nambangan Sejahtera Bersama
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Company History */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Perusahaan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Koperasi Tani Makmur Nambangan Sejahtera Bersama didirikan pada tahun 2004 dengan visi untuk menjadi produsen sapi potong terkemuka di Indonesia. Dimulai dari sebuah usaha kecil dengan beberapa ekor sapi, kami telah berkembang menjadi peternakan modern dengan sistem manajemen profesional.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Perjalanan kami dipenuhi dengan dedikasi untuk meningkatkan kualitas produk dan layanan. Melalui investasi dalam teknologi modern, pelatihan tenaga kerja, dan penelitian berkelanjutan, kami telah mencapai standar internasional dalam industri peternakan sapi potong.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hingga saat ini, kami terus berinovasi dan berkontribusi pada pembangunan ekonomi lokal sambil menjaga kelestarian lingkungan untuk generasi mendatang.
            </p>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
              <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
              <p className="text-gray-700">
                Menjadi koperasi peternakan sapi potong terkemuka di Asia Tenggara yang menghasilkan produk berkualitas tinggi dengan menerapkan praktik peternakan berkelanjutan dan ramah lingkungan.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-700">
                Menyediakan sapi potong berkualitas premium, memberikan nilai terbaik kepada pelanggan, memberdayakan anggota koperasi, dan berkontribusi pada ketahanan pangan nasional.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nilai-Nilai Inti Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Integritas', desc: 'Kami berkomitmen pada kejujuran dan transparansi dalam setiap aspek bisnis.' },
                { title: 'Kualitas', desc: 'Kualitas adalah prioritas utama dalam setiap produk dan layanan yang kami berikan.' },
                { title: 'Inovasi', desc: 'Kami terus berinovasi untuk menghadirkan solusi terbaik bagi pelanggan.' },
                { title: 'Keberlanjutan', desc: 'Kami berkomitmen menjaga lingkungan dan kesejahteraan hewan dengan standar tertinggi.' },
              ].map((value, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Keahlian Kami</h2>
            <div className="space-y-4">
              {[
                'Pemilihan genetik sapi potong unggul dengan sertifikasi internasional',
                'Sistem manajemen pemeliharaan yang modern dan terintegrasi',
                'Program nutrisi optimal untuk pertumbuhan dan kualitas daging maksimal',
                'Kesehatan hewan yang terjaga melalui protokol kesehatan ketat',
                'Logistik dan pengiriman yang efisien ke seluruh nusantara',
                'Tim profesional dengan sertifikasi bidang peternakan',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-primary to-primaryDark rounded-lg p-8 text-white mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">20+</h3>
                <p className="text-gray-100">Tahun Pengalaman</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-gray-100">Ekor Sapi Berkualitas</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">1000+</h3>
                <p className="text-gray-100">Pelanggan Puas</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-gray-100">Tingkat Kepuasan</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tertarik untuk Bermitra dengan Kami?
            </h3>
            <Link to="/kontak" className="btn-primary">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
