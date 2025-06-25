import { Leaf, Award, Truck, Shield } from "lucide-react"

export default function CarruselLogos() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Hecho a mano",
      description: "Artesanía tradicional",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Acero inoxidable",
      description: "Máxima durabilidad",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envío gratis",
      description: "En compras +$15.000",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía",
      description: "12 meses de garantía",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 text-gray-700 group-hover:text-[#d4af37] group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
