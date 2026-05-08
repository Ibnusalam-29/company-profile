import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primaryLight to-secondary py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kelompok Tani Makmur Nambangan Sejahtera Bersama
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Kami adalah produsen sapi potong berkualitas tinggi yang berkomitmen untuk memberikan produk terbaik dengan standar internasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tentang-kami" className="btn-primary bg-white text-primary hover:bg-secondary">
              Pelajari Lebih Lanjut
            </Link>
            <Link to="/kontak" className="btn-secondary bg-gray-900 text-white hover:bg-gray-800">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Keunggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H3a1 1 0 000 2h4.586L7.293 9.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3A1 1 0 107.293 2.293L8.586 3.586H4a1 1 0 100 2h2V5a1 1 0 010 2V5zm12 5a1 1 0 100 2h1.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L17.586 10H17a1 1 0 000 2zm0 5a1 1 0 100 2h1.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L17.586 15H17a1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kualitas Premium</h3>
              <p className="text-gray-600">
                Sapi potong pilihan dengan genetik unggul dan pemeliharaan profesional untuk hasil terbaik.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.727a1 1 0 01-.956.997h-15.93a1 1 0 01-.956-.997v-6.727a3.066 3.066 0 012.812-3.062zm6.375 7.983H3.028v2.572a1 1 0 001 1h12.144a1 1 0 001-1v-2.572z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Harga Kompetitif</h3>
              <p className="text-gray-600">
                Kami menawarkan harga terbaik tanpa mengorbankan kualitas produk sapi potong kami.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pengalaman 20+ Tahun</h3>
              <p className="text-gray-600">
                Dengan pengalaman lebih dari dua dekade, kami memahami kebutuhan pasar dengan sempurna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-primaryDark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bermitra Bersama Kami?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Hubungi kami hari ini untuk mendiskusikan kebutuhan sapi potong berkualitas Anda.
          </p>
          <Link to="/kontak" className="inline-block btn-secondary">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
