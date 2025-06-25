import { Instagram, Facebook, Twitter, MessageCircle, MapPin, Phone, Mail } from "lucide-react"
import logo from "../public/logo.jpg"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
            
              src="/logo.jpg?height=40&width=120"
              alt="Tekoha Mate"
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Productos artesanales para el mate perfecto. Tradición, calidad y estilo en cada pieza.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-2"></span>
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#d4af37] transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-300 hover:text-[#d4af37] transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-[#d4af37] transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#d4af37] transition-colors flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-2"></span>
              Contacto
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#d4af37]" />
                Av. Corrientes 1234
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2"></span>
                CABA, Argentina
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#d4af37]" />
                +54 11 2345-6789
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#d4af37]" />
                info@tekohamate.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Tekoha Mate. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
