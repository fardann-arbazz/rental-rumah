import { Link } from "react-router-dom";
import { Home, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Home className="h-6 w-6 text-emerald-500" />
              <span className="font-bold text-xl text-white">HomeHaven</span>
            </div>
            <p className="mb-6 text-gray-400">
              Menemukan rumah rental sempurna Anda tidak pernah semudah ini.
              Jelajahi pilihan properti premium kami.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Properti
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Tipe Properti</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/properties?type=apartment"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apartemen
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=house"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rumah
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=villa"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Villa
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=penthouse"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Penthouse
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=studio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Studio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>support@homehaven.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-start">
                <Home className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>
                  Jl. Sudirman No. 123, Suite 101
                  <br />
                  Jakarta Pusat, DKI Jakarta 10220
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HomeHaven. Semua hak dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Syarat Layanan
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              to="/faq"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
