"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { products } from "@/data/products"
import { Plus } from "lucide-react"
import mate3 from "../public/mate3.jpg"
import mate4 from "../public/mate4.jpg"
import mate5 from "../public/mate5.jpg"
import bombilla from "../public/bombilla1.jpg"


export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const { addToCart } = useCart()

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "mates", name: "Mates" },
    { id: "bombillas", name: "Bombillas" },
    { id: "termos", name: "Termos" },
    { id: "accesorios", name: "Accesorios" },
  ]

  // Array de productos con las imágenes importadas
  const localProducts = [
    {
      id: 1,
      name: "Mate Premium Calabaza",
      description: "Mate tradicional de calabaza curada, perfecto para los amantes del mate clásico",
      price: 8500,
      category: "mates",
      image: mate3.src
    },
    {
      id: 2,
      name: "Mate Artesanal de Madera",
      description: "Mate tallado a mano en madera de algarrobo, con diseños únicos",
      price: 12000,
      category: "mates",
      image: mate4.src
    },
    {
      id: 3,
      name: "Mate de Cerámica Decorado",
      description: "Elegante mate de cerámica con motivos tradicionales argentinos",
      price: 9500,
      category: "mates",
      image: mate5.src
    },
    {
      id: 4,
      name: "Bombilla de Alpaca Premium",
      description: "Bombilla de alpaca con filtro de acero inoxidable, diseño clásico",
      price: 4500,
      category: "bombillas",
      image: bombilla.src
    }
  ]

  // Usar localProducts en lugar de products del contexto
  const filteredProducts =
    selectedCategory === "todos" ? localProducts : localProducts.filter((product) => product.category === selectedCategory)

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubrí nuestra selección de productos artesanales para el mate perfecto
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={
                selectedCategory === category.id
                  ? "bg-gray-900 hover:bg-black text-white border border-[#d4af37]"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#d4af37]"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold border border-[#d4af37]">
                  {product.category}
                </div>
                <div className="absolute top-4 left-4 bg-[#d4af37] text-white px-2 py-1 rounded-full text-xs font-bold">
                  ★ Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toLocaleString()}</span>
                  <Button
                    onClick={() => addToCart(product)}
                    className="bg-gray-900 hover:bg-black text-white border border-[#d4af37] hover:border-[#b8941f]"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Agregar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}