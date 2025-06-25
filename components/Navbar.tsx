"use client"

import { useState } from "react"
import { ShoppingCart, Menu, X, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { useAuth } from "@/context/AuthContext"
import logo from "../public/logo.jpg"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const { user, login, logout } = useAuth()

  const menuItems = ["Inicio", "Productos", "Testimonios", "Nosotros", "Contacto"]

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.jpg?height=40&width=120" alt="Tekoha Mate" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#d4af37] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Cart and Auth */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-[#d4af37] cursor-pointer transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d4af37] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                  {totalItems}
                </span>
              )}
            </div>

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Hola, {user.email}</span>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Salir
                </Button>
              </div>
            ) : (
              <Button
                onClick={login}
                className="bg-gray-900 hover:bg-black text-white border border-[#d4af37]"
                size="sm"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Ingresar
              </Button>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#d4af37] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#d4af37] block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
