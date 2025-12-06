import { CreditCard, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PaymentScheme {
  type: string;
  discount?: string;
  price: string;
  originalPrice: string;
  downPayment?: string;
  installment10?: string;
  installment15?: string;
  installment20?: string;
  benefits: string[];
  badge: string;
  badgeColor: string;
  details?: string[];
}

const schemes: PaymentScheme[] = [
  {
    type: "Cash Keras (Subsidi)",
    discount: "Harga Subsidi",
    price: "Rp 173 Juta",
    originalPrice: "Estimasi Subsidi PUPR",
    downPayment: "Tanda Jadi: Rp 500.000",
    benefits: [
      "Harga paling murah",
      "Syarat sesuai PUPR 689/KTPS/M/2023",
      "Biaya sumur bor included",
      "KWH 900 Watt",
      "PBG included",
    ],
    badge: "Harga Subsidi PUPR",
    badgeColor: "bg-green-600",
    details: [
      "Pembayaran uang tanda jadi: Rp 500.000",
      "Pembayaran uang tanda sudah",
      "Termasuk uang muka sesuai ketentuan bank",
    ],
  },
  {
    type: "KPR Reguler",
    price: "Mulai Rp 167 Juta",
    originalPrice: "Luas 36/72",
    downPayment: "Tanda Jadi: Rp 500.000",
    installment10: "Rp 1.805.200",
    installment15: "Rp 1.343.000",
    installment20: "Rp 1.118.600",
    benefits: [
      "Cicilan fleksibel 10-20 tahun",
      "Bunga 5% tergantung DP & bank",
      "Dibantu proses KPR sampai akad",
      "Biaya-biaya termasuk: DP, BPHTB, PPH, KPR Bank",
      "Asuransi jiwa & kebakaran",
    ],
    badge: "Paling Populer",
    badgeColor: "bg-primary",
    details: [
      "Down Payment (DP) sesuai ketentuan bank",
      "BPHTB, PPH, KPR Bank included",
      "Ilustrasi bunga 5% terkait jumlah DP",
    ],
  },
];

const requirements = {
  payment: [
    "Pembayaran uang tanda jadi: Rp 500.000",
    "Pembayaran uang tanda sudah",
    "Termasuk uang muka",
  ],
  included: [
    "Biaya sumur bor",
    "KWH 900 Watt",
    "PBG (Persetujuan Bangunan Gedung)",
  ],
  documents: [
    "Foto copy KTP suami/istri",
    "Foto copy NPWP",
    "Foto copy kartu keluarga",
    "Slip gaji terakhir",
    "SK pengangkatan terakhir",
    "Pas foto (3x4 = 2 lembar)",
    "Buku nikah",
    "Rekening koran 6 bulan",
  ],
  business: [
    "Foto copy surat izin usaha",
    "Foto copy laporan pengembangan usaha",
    "Foto copy surat keterangan usaha",
  ],
};

export default function PaymentScheme() {
  const [selectedScheme, setSelectedScheme] = useState(1);

  return (
    <section
      id="payment"
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skema Pembayaran & KPR
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Pilih cara bayar yang paling sesuai dengan kondisi keuangan Anda
          </p>
          <p className="text-sm text-gray-500">
            Jalan Sungai Limboto Kelurahan Ta Kecamatan Tanete Riattang
          </p>
        </motion.div>

        {/* Pricing Table */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
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
                className={`absolute -top-4 left-1/2 -translate-x-1/2 ${scheme.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}
              >
                {scheme.badge}
              </div>

              {/* Header */}
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {scheme.type}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {scheme.originalPrice}
                </p>
                <p className="text-4xl font-bold text-primary mb-2">
                  {scheme.price}
                </p>
                {scheme.downPayment && (
                  <p className="text-sm text-gray-600 font-semibold bg-yellow-100 inline-block px-4 py-2 rounded-lg">
                    {scheme.downPayment}
                  </p>
                )}
              </div>

              {/* KPR Installments */}
              {scheme.installment10 && (
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 mb-6 space-y-2">
                  <p className="text-xs text-gray-600 font-semibold mb-3">
                    ILUSTRASI ANGSURAN DP:
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">10 Tahun</span>
                    <span className="font-bold text-primary">
                      {scheme.installment10}/bln
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">15 Tahun</span>
                    <span className="font-bold text-primary">
                      {scheme.installment15}/bln
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">20 Tahun</span>
                    <span className="font-bold text-primary">
                      {scheme.installment20}/bln
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *Ilustrasi bunga 5% terkait jumlah DP & ketentuan bank
                  </p>
                </div>
              )}

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {scheme.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Details */}
              {scheme.details && (
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold text-gray-700 mb-2">
                    BIAYA-BIAYA TERMASUK:
                  </p>
                  <ul className="space-y-1">
                    {scheme.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <a
                href={`https://wa.me/6282304524230?text=Halo%20saya%20tertarik%20dengan%20skema%20${encodeURIComponent(scheme.type)}%20Menara%20Limboto`}
                className="block w-full bg-gradient-to-r from-primary to-cyan-600 hover:from-cyan-600 hover:to-primary text-white text-center py-3 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                Pilih Skema Ini
              </a>
            </motion.div>
          ))}
        </div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Payment Process */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              Cara Pembayaran
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-800 mb-2">
                  Biaya-Biaya Termasuk:
                </p>
                <ul className="space-y-2">
                  {requirements.payment.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-800 mb-2">
                  Harga Jual Termasuk:
                </p>
                <ul className="space-y-2">
                  {requirements.included.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Documents Required */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Khusus Wiraswasta/Pengusaha
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-800 mb-2">
                  Dokumen untuk Pegawai:
                </p>
                <ul className="space-y-2">
                  {requirements.documents.slice(0, 4).map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-800 mb-2">
                  Dokumen untuk Wiraswasta:
                </p>
                <ul className="space-y-2">
                  {requirements.business.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-8"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-lg">
                Catatan Penting:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Harga rumah sewaktu-waktu dapat berubah sesuai dengan
                  ketentuan pemerintah tentang rumah subsidi
                </li>
                <li>
                  • Jika terjadi pembatalan sepihak dari user dengan alasan
                  apapun, maka seluruh biaya yang masuk hangus
                </li>
                <li>
                  • User wajib mengumpulkan berkas dalam waktu 7 (tujuh) hari
                  setelah UTJ, jika lewat dari itu maka dianggap mengundurkan
                  diri
                </li>
                <li>
                  • Harga jual estimasi subsidi berdasarkan Keputusan Menteri
                  Pekerjaan Umum dan Perumahan Rakyat (PUPR) nomor
                  689/KTPS/M/2023
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-white rounded-2xl p-6 shadow-xl border-4 border-primary">
            <p className="text-gray-600 mb-2">Info Marketing:</p>
            <a
              href="https://wa.me/6282304524230?text=Halo%20saya%20ingin%20konsultasi%20KPR%20Menara%20Limboto"
              className="text-3xl font-bold text-primary hover:text-cyan-600 transition-colors"
            >
              082304524230
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
