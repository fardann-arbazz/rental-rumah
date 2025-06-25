import { motion } from "framer-motion";
import { Search, Home, Key, ThumbsUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Cari Properti",
      description:
        "Jelajahi koleksi lengkap properti rental premium kami di lokasi yang Anda inginkan.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Jadwalkan Viewing",
      description:
        "Pesan tur virtual atau langsung untuk properti favorit Anda sesuai kenyamanan Anda.",
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Amankan Rumah Anda",
      description:
        "Lengkapi proses aplikasi online dan tanda tangani kontrak sewa secara digital.",
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Pindah & Nikmati",
      description:
        "Terima kunci Anda dan mulai menikmati rumah baru dengan dukungan berkelanjutan kami.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Cara Kerjanya
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Menemukan dan mengamankan rumah rental sempurna Anda tidak pernah
            semudah ini
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Butuh Bantuan Menemukan Rumah Sempurna?
                </h3>
                <p className="text-gray-600 mb-6">
                  Ahli rental kami siap membantu Anda menemukan properti
                  sempurna yang memenuhi semua kebutuhan Anda.
                </p>
                <motion.button
                  className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Jadwalkan Konsultasi
                </motion.button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://i.pinimg.com/736x/ec/de/c2/ecdec25d6c8bdb9628a8428bc9300c16.jpg"
                  alt="Customer service representative"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
