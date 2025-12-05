import { motion } from "framer-motion";
import { MapPin, Home, TrendingDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full font-semibold text-sm text-gray-900">
              <TrendingDown className="w-4 h-4" />
              Gratis Biaya & Lain-Lain
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              PERUMAHAN
              <br />
              <span className="text-secondary">MENARA LIMBOTO</span>
            </h1>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6 text-secondary" />
                <p className="text-2xl font-semibold">TYPE BANGUNAN 36</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary" />
                <p className="text-lg">Lokasi Strategis - Dekat Pusat Kota</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">36</p>
                <p className="text-sm opacity-90">Luas Bangunan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">2</p>
                <p className="text-sm opacity-90">Kamar Tidur</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">1</p>
                <p className="text-sm opacity-90">Kamar Mandi</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#form"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-xl text-center"
              >
                Booking Sekarang - Rp 500rb
              </a>
              <a
                href="https://wa.me/6282187654321?text=Halo%20saya%20ingin%20survey%20lokasi"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all text-center"
              >
                Survey Lokasi Gratis
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
              </div>
              <div>
                <p className="font-semibold">50+ Keluarga</p>
                <p className="text-sm opacity-90">Sudah Menempati</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
              <img
                src="/hero-house.png"
                alt="Menara Limboto Type 36"
                className="w-full rounded-2xl shadow-xl"
              />

              {/* Floating Price Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <p className="text-gray-600 text-sm mb-1">Harga Mulai Dari</p>
                <p className="text-3xl font-bold text-primary mb-2">
                  Rp 285 Juta
                </p>
                <p className="text-sm text-gray-600">
                  Cicilan mulai{" "}
                  <span className="font-bold text-secondary">
                    2.8 juta/bulan
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
