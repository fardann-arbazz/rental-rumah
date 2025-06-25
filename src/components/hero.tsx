import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, HomeIcon, Calendar } from "lucide-react";

export default function Hero() {
  const [searchType, setSearchType] = useState("rent");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [moveInDate, setMoveInDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Modern home interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto sm:mt-0 mt-20 px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Temukan Rumah Impian Anda
          </h1>
          <p className="text-base sm:text-xl text-gray-200 mb-8">
            Jelajahi properti rental terbaik di lokasi premium dengan segala
            kenyamanan yang Anda butuhkan
          </p>

          {/* Search Box */}
          <motion.div
            className="bg-white rounded-xl sm:mb-0 mb-16 p-4 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Toggle */}
            <div className="flex rounded-lg bg-gray-100 p-1 mb-4">
              <button
                className={`flex-1 cursor-pointer py-2 rounded-md text-sm font-medium transition-all ${
                  searchType === "rent"
                    ? "bg-white shadow-sm text-emerald-600"
                    : "text-gray-500"
                }`}
                onClick={() => setSearchType("rent")}
              >
                Sewa
              </button>
              <button
                className={`flex-1 py-2 cursor-pointer rounded-md text-sm font-medium transition-all ${
                  searchType === "buy"
                    ? "bg-white shadow-sm text-emerald-600"
                    : "text-gray-500"
                }`}
                onClick={() => setSearchType("buy")}
              >
                Beli
              </button>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Lokasi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="relative">
                <HomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                >
                  <option value="">Tipe Properti</option>
                  <option value="apartment">Apartemen</option>
                  <option value="house">Rumah</option>
                  <option value="villa">Villa</option>
                  <option value="condo">Kondominium</option>
                </select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  placeholder="Tanggal Masuk"
                  value={moveInDate}
                  onChange={(e) => setMoveInDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Search className="h-4 w-4 mr-2" />
                Cari
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute sm:mt-0 mt-20 bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="sm:w-8 h-8 w-6 sm:h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
