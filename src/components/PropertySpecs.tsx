import { Home, Car, Bath, Bed, TreePine, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SpecItem {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

const specs: SpecItem[] = [
  {
    icon: Bed,
    label: "2 Kamar Tidur",
    value: "3x3 meter",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bath,
    label: "Kamar Mandi",
    value: "Dalam + WC",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Home,
    label: "Ruang Tamu",
    value: "3x4 meter",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Car,
    label: "Garasi Mobil",
    value: "1 Unit",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TreePine,
    label: "Halaman",
    value: "Depan & Belakang",
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: Zap,
    label: "Daya Listrik",
    value: "900 Watt",
    color: "from-amber-500 to-orange-500",
  },
];

const features: string[] = [
  "Pondasi Batu Kali/Bangunan Kuat",
  "Konstruksi Beton Bertulang",
  "Dinding Batu Plester Bata Diplester dan Dicat",
  "Atap Spandek Berkualitas",
  "Rangka Baja Ringan Anti Karat",
  "Lantai Keramik 40x60 Premium",
  "KM/WC Jongkok, Keramik 40x60",
  "Kusen/Pintu Kayu Kelas II",
  "Instalasi Listrik 900 Watt",
  "Air Bersih Sumur Bor",
];

export default function PropertySpecs() {
  return (
    <section
      id="specs"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Spesifikasi Premium
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rumah Type 36 dengan material berkualitas tinggi dan desain modern
            yang cocok untuk keluarga Indonesia
          </p>
        </motion.div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {specs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${spec.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-gray-800 mb-1">{spec.label}</p>
                <p className="text-sm text-gray-600">{spec.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Material & Kualitas Bangunan
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-white font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Inside Box */}
            <div className="mt-8 text-center">
              <a
                href="#form"
                className="inline-block bg-secondary hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Booking Fee Hanya Rp 500.000
              </a>
              <p className="text-white/80 text-sm mt-3">
                *Gratis biaya balik nama & administrasi
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
