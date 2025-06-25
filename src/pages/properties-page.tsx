import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Search,
  Filter,
  Star,
  ChevronDown,
  Home,
  Building,
  Castle,
  Layers,
} from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  period: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  featured: boolean;
  rating?: number;
  amenities?: string[];
};

const allProperties: Property[] = [
  {
    id: 1,
    title: "Villa Modern Mewah dengan Kolam Infinity",
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
    rating: 4.8,
    amenities: ["Kolam Renang", "Gym", "Parkir 3 Mobil", "Smart Home"],
  },
  {
    id: 2,
    title: "Apartemen Premium dengan View Kota",
    location: "Sudirman, Jakarta Pusat",
    price: "Rp 25.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 2,
    baths: 2,
    sqft: 120,
    type: "apartment",
    featured: true,
    rating: 4.7,
    amenities: ["Concierge", "Rooftop Pool", "Fitness Center"],
  },
  {
    id: 3,
    title: "Penthouse Eksklusif Tepi Pantai",
    location: "PIK, Jakarta Utara",
    price: "Rp 65.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 3,
    baths: 3,
    sqft: 300,
    type: "penthouse",
    featured: true,
    rating: 4.9,
    amenities: ["Private Beach Access", "Home Theater", "Chef's Kitchen"],
  },
  {
    id: 4,
    title: "Rumah Minimalis Jepang",
    location: "BSD, Tangerang Selatan",
    price: "Rp 18.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 2,
    sqft: 200,
    type: "house",
    featured: false,
    rating: 4.5,
    amenities: ["Taman", "Carport", "Solar Panel"],
  },
  {
    id: 5,
    title: "Studio Loft Desain Industrial",
    location: "Senopati, Jakarta Selatan",
    price: "Rp 12.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 1,
    baths: 1,
    sqft: 45,
    type: "apartment",
    featured: false,
    rating: 4.3,
    amenities: ["High Ceiling", "Open Kitchen", "Smart Lighting"],
  },
  {
    id: 6,
    title: "Townhouse Klasik Bergaya Kolonial",
    location: "Menteng, Jakarta Pusat",
    price: "Rp 35.000.000",
    period: "bulan",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 3,
    baths: 2,
    sqft: 180,
    type: "house",
    featured: false,
    rating: 4.6,
    amenities: ["Heritage Design", "Private Garden", "Wooden Floor"],
  },
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" || property.type === selectedType;
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" &&
        Number.parseInt(property.price.replace(/\D/g, "")) < 20000000) ||
      (priceRange === "medium" &&
        Number.parseInt(property.price.replace(/\D/g, "")) >= 20000000 &&
        Number.parseInt(property.price.replace(/\D/g, "")) < 40000000) ||
      (priceRange === "high" &&
        Number.parseInt(property.price.replace(/\D/g, "")) >= 40000000);

    return matchesSearch && matchesType && matchesPrice;
  });

  const propertyTypes = [
    { value: "all", label: "Semua Tipe", icon: <Home className="w-5 h-5" /> },
    {
      value: "apartment",
      label: "Apartemen",
      icon: <Building className="w-5 h-5" />,
    },
    { value: "house", label: "Rumah", icon: <Home className="w-5 h-5" /> },
    { value: "villa", label: "Villa", icon: <Castle className="w-5 h-5" /> },
    {
      value: "penthouse",
      label: "Penthouse",
      icon: <Layers className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px_300px] opacity-10"></div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Temukan Hunian Impian Anda
            </h1>
            <p className="text-base max-w-2xl mx-auto md:mx-0 text-emerald-100">
              Jelajahi koleksi properti premium kami yang dipilih khusus untuk
              memenuhi kebutuhan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Cari berdasarkan nama, lokasi, atau fasilitas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex cursor-pointer items-center justify-center px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Filter className="h-5 w-5 mr-2" />
                <span className="font-medium">Filter</span>
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                        <Home className="w-5 h-5 mr-2 text-emerald-600" />
                        Tipe Properti
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {propertyTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setSelectedType(type.value)}
                            className={`flex text-sm sm:text-base cursor-pointer items-center justify-center p-3 rounded-lg border transition-all ${
                              selectedType === type.value
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-gray-200 hover:border-emerald-300"
                            }`}
                          >
                            {type.icon}
                            <span className="ml-2">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-700 mb-3">
                        Rentang Harga
                      </h3>
                      <div className="space-y-3">
                        {[
                          { value: "all", label: "Semua Harga" },
                          { value: "low", label: "< Rp 20 Juta" },
                          { value: "medium", label: "Rp 20–40 Juta" },
                          { value: "high", label: "> Rp 40 Juta" },
                        ].map((price) => (
                          <button
                            key={price.value}
                            onClick={() => setPriceRange(price.value)}
                            className={`w-full cursor-pointer text-sm sm:text-base text-left p-3 rounded-lg border transition-all ${
                              priceRange === price.value
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-gray-200 hover:border-emerald-300"
                            }`}
                          >
                            {price.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-700 mb-3">
                        Tampilan
                      </h3>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setViewMode("grid")}
                          className={`flex-1 text-sm sm:text-base cursor-pointer p-3 rounded-lg border transition-all ${
                            viewMode === "grid"
                              ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                              : "border-gray-200 hover:border-emerald-300"
                          }`}
                        >
                          Grid View
                        </button>
                        <button
                          onClick={() => setViewMode("list")}
                          className={`flex-1 text-sm sm:text-base cursor-pointer p-3 rounded-lg border transition-all ${
                            viewMode === "list"
                              ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                              : "border-gray-200 hover:border-emerald-300"
                          }`}
                        >
                          List View
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Properti Tersedia
            <span className="text-gray-500 text-sm font-normal ml-2">
              ({filteredProperties.length} dari {allProperties.length} properti)
            </span>
          </h2>

          <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 cursor-pointer py-2 ${
                viewMode === "grid"
                  ? "bg-emerald-100 text-emerald-700"
                  : "text-gray-600"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 cursor-pointer py-2 ${
                viewMode === "list"
                  ? "bg-emerald-100 text-emerald-700"
                  : "text-gray-600"
              }`}
            >
              List
            </button>
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm"
          >
            <div className="max-w-md mx-auto">
              <svg
                className="w-24 h-24 mx-auto text-gray-300 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Tidak ada properti yang ditemukan
              </h3>
              <p className="text-gray-500 mb-6">
                Coba sesuaikan filter pencarian Anda atau
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setPriceRange("all");
                }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Reset Semua Filter
              </button>
            </div>
          </motion.div>
        ) : viewMode === "grid" ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                viewMode={viewMode}
                isExpanded={expandedCard === property.id}
                onExpand={() =>
                  setExpandedCard(
                    expandedCard === property.id ? null : property.id
                  )
                }
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                viewMode={viewMode}
                isExpanded={expandedCard === property.id}
                onExpand={() =>
                  setExpandedCard(
                    expandedCard === property.id ? null : property.id
                  )
                }
              />
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
}

interface PropertyCardProps {
  property: Property;
  viewMode: "grid" | "list";
  isExpanded: boolean;
  onExpand: () => void;
}

function PropertyCard({
  property,
  viewMode,
  isExpanded,
  onExpand,
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  if (viewMode === "grid") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
      >
        <div className="relative">
          <Link to={`/properties/${property.id}`}>
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
          <button
            className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all ${
              liked
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
          </button>
          {property.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Unggulan
            </div>
          )}
          {property.rating && (
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
              <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
              {property.rating}
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <Link
              to={`/properties/${property.id}`}
              className="hover:text-emerald-600 transition-colors"
            >
              <h3 className="text-xl font-bold line-clamp-1">
                {property.title}
              </h3>
            </Link>
            <div className="text-emerald-600 font-bold text-right whitespace-nowrap">
              {property.price}
              <span className="text-gray-500 text-sm font-normal">
                /{property.period}
              </span>
            </div>
          </div>

          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </div>

          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="flex justify-between">
              <div className="flex items-center text-gray-700">
                <Bed className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.beds} Kamar</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Bath className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.baths} Kamar Mandi</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Square className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.sqft} m²</span>
              </div>
            </div>
          </div>

          {property.amenities && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Fasilitas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {property.amenities.slice(0, 3).map((amenity, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {amenity}
                  </span>
                ))}
                {property.amenities.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    +{property.amenities.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
          isExpanded ? "border-2 border-emerald-500" : "border border-gray-100"
        }`}
      >
        <div
          className={`p-6 cursor-pointer ${isExpanded ? "pb-0" : ""}`}
          onClick={onExpand}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-shrink-0 w-full md:w-64 h-48 rounded-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <button
                className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all ${
                  liked
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
              </button>
              {property.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Unggulan
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>
                <div className="text-emerald-600 font-bold text-right whitespace-nowrap">
                  {property.price}
                  <span className="text-gray-500 text-sm font-normal">
                    /{property.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-1 rounded-full">
                  <Bed className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.beds} Kamar</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-1 rounded-full">
                  <Bath className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.baths} Kamar Mandi</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-1 rounded-full">
                  <Square className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.sqft} m²</span>
                </div>
                {property.rating && (
                  <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                    <span className="text-sm">{property.rating}</span>
                  </div>
                )}
              </div>

              {property.amenities && (
                <div className="flex flex-wrap gap-2">
                  {property.amenities.slice(0, 5).map((amenity, index) => (
                    <span
                      key={index}
                      className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <motion.button
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-emerald-600 cursor-pointer hover:text-emerald-700"
              onClick={(e) => {
                e.stopPropagation();
                onExpand();
              }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-gray-100">
                <h4 className="font-medium text-gray-800 mb-3">
                  Deskripsi Properti
                </h4>
                <p className="text-gray-600 mb-6">
                  {property.title} yang terletak di {property.location}{" "}
                  menawarkan pengalaman tinggal yang nyaman dan mewah. Properti
                  ini memiliki {property.beds} kamar tidur dan {property.baths}{" "}
                  kamar mandi dengan luas bangunan {property.sqft} m².
                </p>

                <h4 className="font-medium text-gray-800 mb-3">
                  Fasilitas Lengkap
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-emerald-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/properties/${property.id}`}
                    className="flex-1 text-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    Lihat Detail
                  </Link>
                  <button className="flex-1 cursor-pointer px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium">
                    Jadwalkan Kunjungan
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
}
