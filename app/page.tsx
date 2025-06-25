import Topbar from "@/components/Topbar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import CarruselLogos from "@/components/CarruselLogos"
import ProductHighlight from "@/components/ProductHighlight"
import ProductsSection from "@/components/ProductsSection"
import Testimonials from "@/components/Testimonials"
import AboutUs from "@/components/AboutUs"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Topbar />
      <Navbar />
      <Hero />
      <CarruselLogos />
      <ProductHighlight />
      <ProductsSection />
      <Testimonials />
      <AboutUs />
      <ContactForm />
      <Footer />
    </main>
  )
}
