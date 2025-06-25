import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px_300px] opacity-10"></div>
        <motion.div
          className="text-center px-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2 sm:mb-6 leading-tight">
            Hubungi <span className="text-emerald-300">Tim Kami</span>
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto text-emerald-100">
            Kami siap membantu Anda menemukan solusi properti terbaik. Tim kami
            akan merespons dalam waktu 24 jam.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">Informasi Kontak</h2>
                <p className="text-gray-600 mb-8">
                  Hubungi kami melalui berbagai saluran yang tersedia. Tim
                  dukungan kami siap membantu Anda dari Senin hingga Jumat,
                  pukul 08:00 - 17:00.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-emerald-500" />,
                    title: "Email Kami",
                    content: "hello@propertiideal.com",
                    link: "mailto:hello@propertiideal.com",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-emerald-500" />,
                    title: "Telepon Kami",
                    content: "+62 812 3456 7890",
                    link: "tel:+6281234567890",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-emerald-500" />,
                    title: "Kantor Kami",
                    content: "Jl. Properti No. 123, Jakarta Selatan, Indonesia",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-emerald-500" />,
                    title: "Jam Operasional",
                    content:
                      "Senin - Jumat: 08:00 - 17:00\nSabtu: 09:00 - 14:00",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-emerald-600 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <h2 className="text-3xl font-bold mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Isi formulir berikut dan kami akan segera menghubungi Anda.
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Alamat Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nomor Telepon
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pesan Anda
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Tulis pesan Anda..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  Kirim Pesan <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08080557821!2d106.71967777845659!3d-6.283929464441418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1749750119482!5m2!1sid!2sid"
              width="900"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Butuh Bantuan Cepat?
          </h2>
          <p className="text-sm sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Hubungi nomor darurat kami untuk pertanyaan mendesak terkait
            properti.
          </p>
          <motion.a
            href="tel:+6281234567890"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg"
          >
            <Phone className="w-6 h-6 mr-2" /> +62 812 3456 7890
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
