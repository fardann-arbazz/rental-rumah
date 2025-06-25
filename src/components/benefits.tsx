import { motion } from "framer-motion";
import { Shield, Clock, Sparkles, Zap, CheckCircle2, Home } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Properti Terverifikasi",
      description:
        "Semua listing kami telah diverifikasi secara menyeluruh untuk kualitas dan keaslian.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Dukungan 24/7",
      description:
        "Tim layanan pelanggan kami tersedia sepanjang waktu untuk membantu Anda.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Fasilitas Premium",
      description:
        "Nikmati fitur dan fasilitas mewah di semua properti rental kami.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Proses Cepat",
      description:
        "Pemrosesan aplikasi dan persetujuan yang cepat untuk pengalaman yang lancar.",
    },
  ];

  const features = [
    "Kontrak sewa fleksibel",
    "Tur virtual tersedia",
    "Pembayaran online aman",
    "Sistem permintaan maintenance",
    "Opsi ramah hewan peliharaan",
    "Properti furnished tersedia",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mengapa Memilih HomeHaven?
            </h2>
            <p className="text-gray-600 mb-8">
              Kami berkomitmen memberikan pengalaman rental yang luar biasa dari
              pencarian hingga pindah dan seterusnya. Platform kami menawarkan
              keunggulan unik yang membuat mencari rumah berikutnya menjadi
              menyenangkan.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-emerald-600 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Fitur Tambahan</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full z-0"></div>

            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Luxury apartment interior"
                className="rounded-xl shadow-xl"
              />

              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-emerald-600 text-white p-3 rounded-lg mr-4">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mulai dari</p>
                    <p className="text-xl font-bold">Rp 12.000.000/bulan</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
