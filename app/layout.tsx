import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import { AuthProvider } from "@/context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tekoha Mate - Productos Artesanales para el Mate Perfecto",
  description:
    "Descubrí nuestra colección de mates, bombillas, termos y accesorios artesanales. Tradición, calidad y estilo en cada pieza.",
  keywords: "mate, bombilla, termo, artesanal, argentina, calabaza, acero inoxidable",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
