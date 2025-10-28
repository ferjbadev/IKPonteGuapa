import { X } from 'lucide-react'

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
}

const categories = {
  'Hombres': [
    { name: 'Trajes Formales', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop' },
    { name: 'Camisas', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop' },
    { name: 'Casual', image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=500&fit=crop' },
    { name: 'Blazers', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=500&fit=crop' },
    { name: 'Pantalones', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop' },
    { name: 'Accesorios', image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=400&h=500&fit=crop' }
  ],
  'Mujeres': [
    { name: 'Vestidos de Gala', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop' },
    { name: 'Vestidos Casuales', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop' },
    { name: 'Trajes Sastre', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop' },
    { name: 'Blusas', image: 'https://images.unsplash.com/photo-1564257577-d18b7c3a5b63?w=400&h=500&fit=crop' },
    { name: 'Faldas', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop' },
    { name: 'Accesorios', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=500&fit=crop' }
  ],
  'Niños y Niñas': [
    { name: 'Vestidos Infantiles', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop' },
    { name: 'Trajes Formales', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop' },
    { name: 'Ropa Casual', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=500&fit=crop' },
    { name: 'Conjuntos', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=500&fit=crop' },
    { name: 'Ropa de Fiesta', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=500&fit=crop' },
    { name: 'Accesorios', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop' }
  ]
}

export default function CategoryModal({ isOpen, onClose, category }: CategoryModalProps) {
  if (!isOpen) return null

  const items = categories[category as keyof typeof categories] || []

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-fucsia to-fucsia-dark p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-3xl font-bold text-white">{category}</h2>
            <p className="text-white/80 mt-1">Selecciona una categoría</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <div className="flex items-center text-fucsia-light text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-800/95 backdrop-blur-sm p-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              ¿No encuentras lo que buscas? <a href="https://wa.me/584141449767" className="text-fucsia hover:underline">Contáctanos</a>
            </p>
            <button
              onClick={onClose}
              className="w-full md:w-auto px-6 py-3 bg-fucsia hover:bg-fucsia-dark text-white rounded-full font-semibold transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
