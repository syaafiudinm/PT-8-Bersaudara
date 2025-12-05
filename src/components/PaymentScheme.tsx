import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { FC } from "react";

interface Scheme {
  type: string;
  discount: string;
  price: string;
  originalPrice: string;
  benefits: string[];
  badge: string;
  badgeColor: string;
  downPayment?: string;
  installment?: string;
  tenor?: string;
}

const schemes: Scheme[] = [
  {
    type: "Cash Keras",
    discount: "15%",
    price: "Rp 242 Juta",
    originalPrice: "Rp 285 Juta",
    benefits: [
      "Hemat Rp 43 Juta",
      "Gratis biaya notaris",
      "Gratis balik nama",
      "Proses cepat 1 bulan",
    ],
    badge: "Paling Hemat",
    badgeColor: "bg-green-600",
  },
  {
    type: "Cash Bertahap",
    discount: "10%",
    price: "Rp 256.5 Juta",
    originalPrice: "Rp 285 Juta",
    downPayment: "DP 30% + Cicilan 12 bulan",
    installment: "Rp 4.8 juta/bulan",
    benefits: [
      "DP Rp 85 Juta",
      "Cicilan 0% bunga",
      "Gratis biaya admin",
      "Tanpa BI Checking",
    ],
    badge: "Paling Populer",
    badgeColor: "bg-primary",
  },
  {
    type: "KPR Bank",
    discount: "5%",
    price: "Rp 270 Juta",
    originalPrice: "Rp 285 Juta",
    downPayment: "DP 20%",
    installment: "Rp 2.8 juta/bulan",
    tenor: "15 tahun",
    benefits: [
      "DP mulai Rp 57 Juta",
      "Bunga kompetitif",
      "Tenor hingga 20 tahun",
      "Dibantu proses KPR",
    ],
    badge: "Cicilan Ringan",
    badgeColor: "bg-amber-600",
  },
];

const PaymentScheme: FC = () => {
  const [selectedScheme, setSelectedScheme] = useState<number>(1);

  return (
    <section
      id="payment"
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50"
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
            Skema Pembayaran Fleksibel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih cara bayar yang paling sesuai dengan kondisi keuangan Anda
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {schemes.map((scheme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setSelectedScheme(idx)}
              className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer ${
                selectedScheme === idx
                  ? "ring-4 ring-primary transform scale-105"
                  : ""
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 ${scheme.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
              >
                {scheme.badge}
              </div>

              {/* Header Info */}
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {scheme.type}
                </h3>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-sm text-gray-500 line-through">
                    {scheme.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                    Hemat {scheme.discount}
                  </span>
                </div>

                <p className="text-4xl font-bold text-primary mb-2">
                  {scheme.price}
                </p>

                {scheme.installment && (
                  <p className="text-lg text-gray-600">
                    atau{" "}
                    <span className="font-bold text-secondary">
                      {scheme.installment}
                    </span>
                  </p>
                )}
              </div>

              {/* DP & Tenor */}
              {scheme.downPayment && (
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-1">Skema</p>
                  <p className="font-bold text-gray-800">
                    {scheme.downPayment}
                  </p>
                  {scheme.tenor && (
                    <p className="text-sm text-gray-600 mt-1">
                      Tenor: {scheme.tenor}
                    </p>
                  )}
                </div>
              )}

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {scheme.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6282187654321?text=Halo%20saya%20tertarik%20dengan%20skema%20${scheme.type}`}
                className="block w-full bg-gradient-to-r from-primary to-cyan-600 hover:from-cyan-600 hover:to-primary text-white text-center py-3 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                Pilih Skema Ini
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentScheme;
