"use client"

import { MessageCircle, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre sus productos de mate.")
    window.open(`https://wa.me/5491123456789?text=${message}`, "_blank")
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/tekohamate", "_blank")
  }

  const handleFacebook = () => {
    window.open("https://facebook.com/tekohamate", "_blank")
  }

  const handleTwitter = () => {
    window.open("https://twitter.com/tekohamate", "_blank")
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conectá con <span className="text-[#d4af37]">Tekoha Mate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seguinos en nuestras redes sociales y mantente al día con las últimas novedades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Social Media & Contact */}
          <div className="space-y-8">
            {/* WhatsApp destacado */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Hablemos por WhatsApp!</h3>
                <p className="text-gray-600 mb-6">La forma más rápida de resolver tus dudas y hacer tu pedido</p>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar ahora
                </Button>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                <Heart className="w-5 h-5 inline mr-2 text-[#d4af37]" />
                Seguinos en redes
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={handleInstagram}
                  className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Instagram className="w-8 h-8 mb-2" />
                  <span className="text-sm font-semibold">Instagram</span>
                </button>
                <button
                  onClick={handleFacebook}
                  className="flex flex-col items-center p-4 rounded-2xl bg-blue-600 text-white hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Facebook className="w-8 h-8 mb-2" />
                  <span className="text-sm font-semibold">Facebook</span>
                </button>
                <button
                  onClick={handleTwitter}
                  className="flex flex-col items-center p-4 rounded-2xl bg-gray-900 text-white hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Twitter className="w-8 h-8 mb-2" />
                  <span className="text-sm font-semibold">Twitter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nuestra ubicación</h4>
                    <p className="text-gray-600">Av. Corrientes 1234, CABA</p>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+54 11 2345-6789</p>
                    <p className="text-sm text-gray-500">Lun a Vie: 9:00 - 18:00hs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@tekohamate.com</p>
                    <p className="text-sm text-gray-500">Respondemos en 24hs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-[#d4af37]/5 to-[#d4af37]/10 rounded-3xl p-8 border border-[#d4af37]/20">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[#d4af37] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Horarios de atención</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-semibold">9:00 - 18:00hs</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-semibold">10:00 - 16:00hs</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-semibold text-gray-500">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#d4af37]/10 rounded-full border border-[#d4af37]/30">
            <Heart className="w-5 h-5 text-[#d4af37] mr-2" />
            <span className="text-gray-700 font-medium">¡Gracias por elegir Tekoha Mate!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
