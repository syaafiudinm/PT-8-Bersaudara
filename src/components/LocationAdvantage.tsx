import {
  MapPin,
  School,
  ShoppingCart,
  Building2,
  Hospital,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import type { FC } from "react";

interface LocationItem {
  icon: FC<{ className?: string }>;
  name: string;
  distance: string;
  time: string;
  color: string;
}

const locations: LocationItem[] = [
  {
    icon: School,
    name: "SD Negeri 1 Limboto",
    distance: "800m",
    time: "3 menit",
    color: "text-blue-600",
  },
  {
    icon: ShoppingCart,
    name: "Pasar Sentral Limboto",
    distance: "1.2km",
    time: "5 menit",
    color: "text-green-600",
  },
  {
    icon: Hospital,
    name: "Puskesmas Limboto",
    distance: "1.5km",
    time: "7 menit",
    color: "text-red-600",
  },
  {
    icon: Plus,
    name: "Masjid Agung Limboto",
    distance: "600m",
    time: "2 menit",
    color: "text-emerald-600",
  },
  {
    icon: Building2,
    name: "Kantor Kecamatan",
    distance: "2km",
    time: "8 menit",
    color: "text-purple-600",
  },
  {
    icon: ShoppingCart,
    name: "Minimarket (Indomaret)",
    distance: "400m",
    time: "1 menit",
    color: "text-orange-600",
  },
];

const LocationAdvantage: FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lokasi Super Strategis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dekat dengan semua fasilitas penting untuk kenyamanan keluarga Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((loc, idx) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform ${loc.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-2">{loc.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {loc.distance}
                      </span>

                      <span className="text-primary font-semibold">
                        {loc.time}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Alamat Lokasi Perumahan
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              PERUMAHAN MENARA LIMBOTO, TA, Kec. Tanete Riattang, Kabupaten
              Bone, Sulawesi Selatan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/dir//-4.533337,120.342575/@-5.2214236,119.4991688,15z?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Buka Google Maps
              </a>

              <a
                href="https://wa.me/6282187654321?text=Halo%20saya%20ingin%20survey%20lokasi%20Menara%20Limboto"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                Jadwalkan Survey Lokasi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
