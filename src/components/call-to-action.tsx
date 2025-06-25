import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Implement email submission logic
    setEmail("");
    alert("Terima kasih! Kami akan menghubungi Anda segera.");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Menemukan Rumah Rental Sempurna Anda?
            </h2>
            <p className="text-emerald-50 mb-8 text-lg">
              Bergabunglah dengan ribuan penyewa yang puas yang menemukan rumah
              ideal mereka melalui HomeHaven. Daftar sekarang untuk mendapatkan
              notifikasi tentang properti baru yang sesuai dengan preferensi
              Anda.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-1 rounded-lg flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors sm:flex-shrink-0"
              >
                Mulai Sekarang
              </button>
            </form>

            <p className="text-xs mt-3 text-emerald-50">
              Dengan mendaftar, Anda menyetujui Syarat Layanan dan Kebijakan
              Privasi kami.
            </p>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-emerald-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-400 rounded-full opacity-20"></div>

            <div className="bg-white rounded-xl p-6 shadow-xl transform rotate-3">
              <img
                src="https://i.pinimg.com/736x/d7/19/0f/d7190f6e4ddd35a69374e5003faea39e.jpg"
                alt="Happy family in new home"
                className="rounded-lg h-96 w-full object-cover"
              />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-xl absolute -bottom-10 -left-10 transform -rotate-3 w-64">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  🏠
                </div>
                <div>
                  <p className="font-bold text-gray-900">Notifikasi Properti</p>
                  <p className="text-xs text-gray-500">Baru saja</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Apartemen mewah baru yang sesuai pencarian Anda tersedia
                sekarang!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
