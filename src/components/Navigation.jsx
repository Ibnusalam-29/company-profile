import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/produk', label: 'Produk' },
    { path: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-primaryDark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img src="/assets/logo.jpg" alt="Logo Koperasi" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block pt-3">
                <h1 className="text-white text-center font-bold text-lg">Kelompok Tani Makmur Nambangan Sejahtera Bersama</h1>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded font-semibold transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-secondary text-gray-900'
                    : 'text-white hover:bg-primaryLight'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
