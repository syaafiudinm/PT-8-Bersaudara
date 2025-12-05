import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="PT 8 Bersaudara"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-bold text-xl">PT 8 BERSAUDARA</h3>
                <p className="text-sm text-gray-400">Menara Limboto</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Developer perumahan terpercaya dengan komitmen memberikan hunian
              berkualitas untuk keluarga Indonesia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#specs"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Spesifikasi Rumah
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Lokasi Strategis
                </a>
              </li>
              <li>
                <a
                  href="#payment"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Skema Pembayaran
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Galeri & Site Plan
                </a>
              </li>
              <li>
                <a
                  href="#form"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Booking Sekarang
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">
                    Jl. Menara Limboto, Kec. Limboto
                    <br />
                    Kab. Gorontalo, Gorontalo
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+6282187654321"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +62 821-8765-4321
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@pt8bersaudara.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@pt8bersaudara.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Jam Operasional</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="font-semibold text-white">Senin - Jumat</span>
                <br />
                08:00 - 17:00 WITA
              </li>
              <li>
                <span className="font-semibold text-white">Sabtu</span>
                <br />
                08:00 - 15:00 WITA
              </li>
              <li>
                <span className="font-semibold text-white">Minggu & Libur</span>
                <br />
                Tutup (By Appointment)
              </li>
            </ul>
            <div className="mt-6 bg-primary/10 border border-primary/30 rounded-xl p-4">
              <p className="text-sm text-primary font-semibold mb-2">
                💬 Chat Available 24/7
              </p>
              <a
                href="https://wa.me/6282187654321"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                WhatsApp Customer Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 PT 8 Bersaudara. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
