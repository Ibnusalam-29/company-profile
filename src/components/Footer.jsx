import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img src="/assets/logo.png" alt="Logo Koperasi" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-white">Kelompok Tani Makmur Nambangan Sejahtera Bersama</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Spesialis peternakan sapi potong berkualitas tinggi dengan komitmen terhadap kelestarian lingkungan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition">Beranda</Link></li>
              <li><Link to="/tentang-kami" className="text-gray-400 hover:text-primary transition">Tentang Kami</Link></li>
              <li><Link to="/galeri" className="text-gray-400 hover:text-primary transition">Galeri</Link></li>
              <li><Link to="/produk" className="text-gray-400 hover:text-primary transition">Produk</Link></li>
              <li><Link to="/kontak" className="text-gray-400 hover:text-primary transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Penjualan Sapi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Konsultasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Pengiriman</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Pelatihan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Nambangan, Jawa Timur</li>
              <li>📞 +62-XXX-XXXX-XXXX</li>
              <li>📧 info@koperasirotani.id</li>
              <li>🕒 Senin-Jumat: 08:00-17:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Koperasi Tani Makmur Nambangan Sejahtera Bersama. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
