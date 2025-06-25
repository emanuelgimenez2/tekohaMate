import { Button } from "@/components/ui/button"
import { ShoppingBag, Truck, Shield, Award } from "lucide-react"
import mate1 from "../public/mate1.jpg"

export default function Hero() {
  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Viví el ritual del <span className="text-[#d4af37]">mate</span> con estilo
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubrí nuestra colección de mates, bombillas y termos artesanales. Cada pieza está diseñada para
              acompañarte en los mejores momentos.
            </p>
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-black text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#d4af37] hover:border-[#b8941f]"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Ver productos
            </Button>
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-2 text-[#d4af37]" />
                Envío gratis
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-[#d4af37]" />
                Garantía
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-[#d4af37]" />
                Artesanal
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="/mate1.jpg?height=500&width=500"
                alt="Mate artesanal premium"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[#d4af37] text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              Premium
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
