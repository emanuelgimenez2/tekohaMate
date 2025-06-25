import { Check } from "lucide-react"
import mate2 from "../public/mate2.jpg"

interface Feature {
  text: string
}

interface ProductHighlightProps {
  title: string
  image: string
  featuresLeft: Feature[]
  featuresRight: Feature[]
}

export default function ProductHighlight({
  title = "El Mate Perfecto",
  image = "/mate2.jpg?height=400&width=400",
  featuresLeft = [
    { text: "Calabaza premium seleccionada" },
    { text: "Curado tradicional artesanal" },
    { text: "Resistente al uso diario" },
  ],
  featuresRight = [
    { text: "Diseño ergonómico único" },
    { text: "Acabado natural protegido" },
    { text: "Ideal para compartir" },
  ],
}: ProductHighlightProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">{title}</h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Features Left */}
          <div className="space-y-6">
            {featuresLeft.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Product Image */}
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Features Right */}
          <div className="space-y-6">
            {featuresRight.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
