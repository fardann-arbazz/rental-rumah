import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import type { Property } from "../types/property";

// Property data
const properties: Property[] = [
  {
    id: 1,
    title: "Villa Modern Mewah",
    location: "Kemang, Jakarta Selatan",
    price: "Rp 45.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 3,
    sqft: 250,
    type: "villa",
    featured: true,
  },
  {
    id: 2,
    title: "Apartemen Downtown",
    location: "Sudirman, Jakarta Pusat",
    price: "Rp 25.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 2,
    sqft: 120,
    type: "apartment",
    featured: true,
  },
  {
    id: 3,
    title: "Penthouse Tepi Laut",
    location: "PIK, Jakarta Utara",
    price: "Rp 65.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 3,
    sqft: 300,
    type: "penthouse",
    featured: true,
  },
  {
    id: 4,
    title: "Rumah Suburban",
    location: "BSD, Tangerang Selatan",
    price: "Rp 18.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 2,
    sqft: 200,
    type: "house",
    featured: false,
  },
  {
    id: 5,
    title: "Studio Loft Minimalis",
    location: "Senopati, Jakarta Selatan",
    price: "Rp 12.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    beds: 1,
    baths: 1,
    sqft: 45,
    type: "apartment",
    featured: false,
  },
  {
    id: 6,
    title: "Townhouse Bersejarah",
    location: "Menteng, Jakarta Pusat",
    price: "Rp 35.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 2,
    sqft: 180,
    type: "house",
    featured: false,
  },
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState("all");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredProperties =
    activeTab === "all"
      ? properties
      : properties.filter((property) => property.type === activeTab);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Properti Unggulan
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Temukan pilihan properti rental premium terbaik kami di
            lokasi-lokasi strategis
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {["all", "apartment", "house", "villa", "penthouse"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 cursor-pointer rounded-md font-medium transition-all ${
                  activeTab === tab
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {tab === "all"
                  ? "Semua"
                  : tab === "apartment"
                  ? "Apartemen"
                  : tab === "house"
                  ? "Rumah"
                  : tab === "villa"
                  ? "Villa"
                  : "Penthouse"}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-block bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Lihat Semua Properti
          </Link>
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <Link to={`/properties/${property.id}`}>
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button
          className={`absolute cursor-pointer top-4 right-4 p-2 rounded-full transition-all ${
            liked
              ? "bg-red-500 text-white"
              : "bg-white text-gray-600 hover:bg-red-50"
          }`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
        </button>
        {property.featured && (
          <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Unggulan
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link
            to={`/properties/${property.id}`}
            className="hover:text-emerald-600 transition-colors"
          >
            <h3 className="text-xl font-bold">{property.title}</h3>
          </Link>
          <div className="text-emerald-600 font-bold text-right">
            {property.price}
            <span className="text-gray-500 text-sm font-normal">
              /{property.period}
            </span>
          </div>
        </div>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex justify-between">
            <div className="flex items-center text-gray-700">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.beds} KT</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.baths} KM</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.sqft} m²</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
