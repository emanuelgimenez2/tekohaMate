import { Search, User } from "lucide-react"

export default function Topbar() {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex-1 text-center">
          <span className="font-medium">ENVÍO GRATIS EN COMPRAS SUPERIORES A $15.000</span>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-4 h-4 cursor-pointer hover:text-[#d4af37] transition-colors" />
          <User className="w-4 h-4 cursor-pointer hover:text-[#d4af37] transition-colors" />
        </div>
      </div>
    </div>
  )
}
