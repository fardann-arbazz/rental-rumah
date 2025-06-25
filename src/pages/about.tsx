import { motion } from "framer-motion";
import {
  Users,
  Building,
  HeartHandshake,
  Home,
  ArrowRight,
  Globe,
  BarChart2,
} from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px_300px] opacity-10"></div>
        <motion.div
          className="text-center px-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <Home className="w-16 h-16 mx-auto text-emerald-300" />
          </motion.div>
          <h1 className="text-2xl md:text-6xl font-bold mb-6 leading-tight">
            Membangun <span className="text-emerald-300">Masa Depan</span>{" "}
            <br />
            Tempat Tinggal Anda
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 text-emerald-100">
            Platform revolusioner untuk menemukan rumah impian dengan pengalaman
            yang mudah dan menyenangkan.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white cursor-pointer text-emerald-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto"
          >
            Jelajahi Properti <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white px-6 md:px-16 -mt-12 relative z-20">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              value: "10K+",
              label: "Properti Tersedia",
              icon: <Home className="w-6 h-6" />,
            },
            {
              value: "50K+",
              label: "Pengguna Aktif",
              icon: <Users className="w-6 h-6" />,
            },
            {
              value: "100+",
              label: "Lokasi Kota",
              icon: <Globe className="w-6 h-6" />,
            },
            {
              value: "98%",
              label: "Kepuasan Pengguna",
              icon: <BarChart2 className="w-6 h-6" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-emerald-500 mx-auto mb-3 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tentang Platform */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Lebih Dari Sekedar{" "}
                <span className="text-emerald-600">Platform Properti</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kami membangun ekosistem yang menghubungkan pencari rumah dengan
                properti ideal mereka. Dengan teknologi canggih dan desain yang
                intuitif, kami menyederhanakan proses pencarian properti.
              </p>
              <ul className="space-y-3">
                {[
                  "Pencarian cerdas dengan filter tingkat lanjut",
                  "Verifikasi properti dan pemilik terjamin",
                  "Proses transaksi yang aman dan transparan",
                  "Dukungan ahli properti 24/7",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="py-20 bg-white px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-500 font-semibold">
              Visi & Misi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Mengubah Cara Anda Menemukan Rumah
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Users className="w-10 h-10 mb-6 text-emerald-500 mx-auto" />
                ),
                title: "Komunitas Terpercaya",
                description:
                  "Membangun ekosistem properti berbasis kepercayaan dengan verifikasi multi-tahap untuk semua anggota.",
                color: "bg-emerald-50",
              },
              {
                icon: (
                  <Building className="w-10 h-10 mb-6 text-emerald-500 mx-auto" />
                ),
                title: "Properti Berkualitas",
                description:
                  "Kurasi properti premium dengan standar tinggi, memastikan setiap listing memenuhi kriteria kualitas kami.",
                color: "bg-emerald-100",
              },
              {
                icon: (
                  <HeartHandshake className="w-10 h-10 mb-6 text-emerald-500 mx-auto" />
                ),
                title: "Pengalaman Pengguna",
                description:
                  "Memberikan dukungan penuh dengan tim ahli yang siap membantu 24/7 melalui berbagai saluran komunikasi.",
                color: "bg-emerald-50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`${item.color} p-8 rounded-2xl shadow-sm transition-all duration-300`}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-2xl mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Properti Anda?
          </h2>
          <p className="text-base sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan orang yang telah menemukan rumah impian
            mereka melalui platform kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white cursor-pointer text-emerald-700 px-8 py-3 rounded-full font-semibold"
            >
              Daftar Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent cursor-pointer border-2 border-white px-8 py-3 rounded-full font-semibold"
            >
              Hubungi Kami
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
