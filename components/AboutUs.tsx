export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En <span className="text-[#d4af37] font-semibold">Tekoha Mate</span>, creemos que el mate es más que una
              bebida: es un ritual que conecta personas, momentos y tradiciones.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Desde hace más de 10 años, trabajamos con artesanos locales para crear productos únicos que respetan la
              tradición mientras abrazan la innovación.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#d4af37] mb-2">10+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#d4af37] mb-2">5000+</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#d4af37] mb-2">100%</div>
                <div className="text-sm text-gray-600">Artesanal</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Artesano trabajando"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
