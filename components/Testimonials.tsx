import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Excelente calidad! El mate llegó perfectamente curado y el diseño es hermoso. Lo recomiendo 100%.",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "La bombilla de acero inoxidable es increíble. No se oxida y el sabor del mate es perfecto.",
    },
    {
      id: 3,
      name: "Ana Martínez",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Compré el set completo y quedé fascinada. La atención al cliente es excelente también.",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600">Miles de personas ya disfrutan de nuestros productos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">"</span>
              </div>
              <div className="flex items-center mb-6 mt-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-[#d4af37]/20"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
