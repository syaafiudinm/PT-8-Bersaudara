import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  unit: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    avatar: "/avatar1.jpg",
    rating: 5,
    text: "Alhamdulillah sudah 6 bulan menempati rumah di Menara Limboto. Lokasi strategis, dekat sekolah anak-anak. Proses KPR juga dibantu sampai tuntas. Recommended!",
    date: "September 2024",
    unit: "Blok A-12",
  },
  {
    name: "Siti Rahmawati",
    role: "Guru SD",
    avatar: "/avatar2.jpg",
    rating: 5,
    text: "Desain rumahnya bagus, material berkualitas. Yang paling saya suka, developer sangat responsif dan amanah. Tidak ada biaya tersembunyi. Terima kasih PT 8 Bersaudara!",
    date: "Agustus 2024",
    unit: "Blok B-7",
  },
  {
    name: "Dewi Lestari",
    role: "PNS",
    avatar: "/avatar4.jpg",
    rating: 5,
    text: "Survey 3 perumahan, akhirnya pilih Menara Limboto karena harga paling kompetitif dengan spesifikasi yang bagus. Fasilitas lengkap, akses mudah. Sangat puas!",
    date: "Oktober 2024",
    unit: "Blok A-23",
  },
  {
    name: "Rizki Ramadhan",
    role: "Pegawai Bank",
    avatar: "/avatar5.jpg",
    rating: 5,
    text: "Bangunannya kokoh, sesuai spesifikasi yang dijanjikan. Developer juga fast response kalau ada pertanyaan. Senang bisa punya rumah sendiri di lokasi yang strategis ini.",
    date: "November 2024",
    unit: "Blok B-19",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kata Penghuni Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            50+ keluarga sudah mempercayakan hunian mereka di Menara Limboto
          </p>
        </motion.div>
        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <span>{testimonial.unit}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
