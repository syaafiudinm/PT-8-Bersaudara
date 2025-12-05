import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="PT 8 Bersaudara" className="w-12 h-12" />
            <div>
              <h1 className="font-bold text-xl text-gray-800">
                PT 8 BERSAUDARA
              </h1>
              <p className="text-xs text-gray-600">Menara Limboto</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#specs"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Spesifikasi
            </a>
            <a
              href="#location"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Lokasi
            </a>
            <a
              href="#payment"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Cicilan
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Gallery
            </a>
            <a
              href="https://wa.me/6282187654321?text=Halo%20saya%20tertarik%20dengan%20Menara%20Limboto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2"
          >
            {mobileMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#specs"
              className="block text-gray-700 hover:text-primary font-medium"
            >
              Spesifikasi
            </a>
            <a
              href="#location"
              className="block text-gray-700 hover:text-primary font-medium"
            >
              Lokasi
            </a>
            <a
              href="#payment"
              className="block text-gray-700 hover:text-primary font-medium"
            >
              Cicilan
            </a>
            <a
              href="#gallery"
              className="block text-gray-700 hover:text-primary font-medium"
            >
              Gallery
            </a>
            <a
              href="https://wa.me/6282187654321"
              className="block bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-center"
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
