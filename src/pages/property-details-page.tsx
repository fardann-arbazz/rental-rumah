"use client";

import type React from "react";

import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Home,
  Wifi,
  Car,
  Utensils,
  Tv,
  Wind,
  ChevronLeft,
  Heart,
  Share2,
} from "lucide-react";

import type { Property } from "../types/property";
import { useEffect, useState } from "react";

// dummy data
const properties: Property[] = [
  {
    id: 1,
    title: "Villa Modern Mewah",
    description:
      "Villa modern yang menakjubkan ini menawarkan perpaduan sempurna antara kemewahan dan kenyamanan. Menampilkan denah terbuka dengan langit-langit tinggi dan jendela dari lantai ke langit-langit, rumah ini dipenuhi cahaya alami dan menawarkan pemandangan menakjubkan dari lanskap sekitarnya. Dapur gourmet dilengkapi dengan peralatan terbaik dan terbuka ke area ruang tamu yang luas, sempurna untuk menghibur. Suite utama termasuk kamar mandi seperti spa dan balkon pribadi.",
    location: "Kemang, Jakarta Selatan",
    address: "Jl. Kemang Raya No. 123, Kemang, Jakarta Selatan 12560",
    price: "Rp 45.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    beds: 4,
    baths: 3,
    sqft: 250,
    type: "villa",
    featured: true,
    amenities: [
      "Kolam Renang",
      "Kantor Rumah",
      "Parkir Garasi",
      "Dapur Gourmet",
      "Sistem Smart Home",
      "AC",
      "Dapur Outdoor",
      "Ruang Media",
      "Internet Kecepatan Tinggi",
      "Sistem Keamanan",
    ],
    availableFrom: "2024-08-15",
  },
];

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const propertyId = Number(id);
  const property = properties.find((p) => p.id === propertyId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Properti Tidak Ditemukan</h1>
          <Link
            to="/properties"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Kembali ke Properti
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-emerald-600">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <Link to="/properties" className="hover:text-emerald-600">
                Properti
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">
                {property.title}
              </span>
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <PropertyGallery
          images={property.images || [property.image]}
          title={property.title}
        />

        {/* Property Details */}
        <section className="container mx-auto px-4 py-4 sm:py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                      {property.title}
                    </h1>
                    <div className="flex sm:items-center text-gray-500">
                      <MapPin className="sm:h-4 h-6 w-6 sm:w-4 mr-1" />
                      <span className="text-sm sm:text-base">
                        {property.address}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <div className="sm:text-2xl text-xl font-bold text-emerald-600">
                      {property.price}
                      <span className="text-gray-500 text-base font-normal">
                        /{property.period}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Bed className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="font-bold">{property.beds}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Kamar Tidur</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Bath className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="font-bold">{property.baths}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Kamar Mandi</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Square className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="font-bold">{property.sqft}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Meter Persegi</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Deskripsi</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Detail Properti</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-emerald-600 mr-3" />
                      <div>
                        <p className="text-gray-500 text-sm">Tipe Properti</p>
                        <p className="font-medium capitalize">
                          {property.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-emerald-600 mr-3" />
                      <div>
                        <p className="text-gray-500 text-sm">Tersedia Mulai</p>
                        <p className="font-medium">
                          {property.availableFrom &&
                            new Date(property.availableFrom).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Fasilitas</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities?.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        {getAmenityIcon(amenity)}
                        <span className="ml-2">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <ContactForm propertyTitle={property.title} />

                <div className="bg-emerald-50 rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-lg mb-4">Jadwalkan Viewing</h3>
                  <p className="text-gray-600 mb-4">
                    Ingin melihat properti ini secara langsung? Jadwalkan
                    viewing sesuai kenyamanan Anda.
                  </p>
                  <button className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    Pesan Tur
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Properties */}
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/properties"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Kembali ke Semua Properti
          </Link>
        </div>
      </main>
    </div>
  );
}

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images[0] || "/placeholder.svg"
  );
  const thumbnails = images.slice(1, 5);
  const remainingCount = images.length - 5;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 relative">
        {/* Main Preview Image */}
        <div className="md:col-span-2">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <img
              src={selectedImage}
              alt={`${title} - Preview`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="flex gap-2">
          {thumbnails.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group aspect-[8/6] sm:aspect-[2/1] rounded-lg overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - Thumbnail ${index + 2}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
              {index === 3 && remainingCount > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    +{remainingCount} lainnya
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ContactFormProps {
  propertyTitle: string;
}

function ContactForm({ propertyTitle }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah dikirim! Kami akan menghubungi Anda segera.");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-bold text-lg mb-4">Hubungi Agen</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telepon
          </label>
          <input
            type="tel"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pesan
          </label>
          <textarea
            rows={4}
            defaultValue={`Saya tertarik dengan ${propertyTitle}. Mohon hubungi saya untuk informasi lebih lanjut.`}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

function getAmenityIcon(amenity: string) {
  const amenityLower = amenity.toLowerCase();

  if (amenityLower.includes("wifi") || amenityLower.includes("internet")) {
    return <Wifi className="h-5 w-5 text-emerald-600" />;
  } else if (
    amenityLower.includes("parkir") ||
    amenityLower.includes("garasi")
  ) {
    return <Car className="h-5 w-5 text-emerald-600" />;
  } else if (amenityLower.includes("dapur")) {
    return <Utensils className="h-5 w-5 text-emerald-600" />;
  } else if (amenityLower.includes("tv") || amenityLower.includes("media")) {
    return <Tv className="h-5 w-5 text-emerald-600" />;
  } else if (amenityLower.includes("ac") || amenityLower.includes("udara")) {
    return <Wind className="h-5 w-5 text-emerald-600" />;
  } else {
    return <Home className="h-5 w-5 text-emerald-600" />;
  }
}
