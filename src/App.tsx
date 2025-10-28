import { useState } from 'react'
import { ShoppingBag, Menu, X, Heart, Star, Sparkles, Phone, Mail, Instagram } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cart, setCart] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: 'Vestido de Gala Elegance',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=700&fit=crop',
      category: 'Vestidos'
    },
    {
      id: 2,
      name: 'Traje Sastre Premium',
      price: 950,
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=700&fit=crop',
      category: 'Trajes'
    },
    {
      id: 3,
      name: 'Vestido Cóctel Rosé',
      price: 850,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=700&fit=crop',
      category: 'Vestidos'
    },
    {
      id: 4,
      name: 'Conjunto Alta Costura',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=700&fit=crop',
      category: 'Conjuntos'
    },
    {
      id: 5,
      name: 'Vestido Noche Estrellada',
      price: 1350,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=700&fit=crop',
      category: 'Vestidos'
    },
    {
      id: 6,
      name: 'Blazer Couture',
      price: 780,
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=700&fit=crop',
      category: 'Blazers'
    }
  ]

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-fucsia" />
              <span className="text-2xl font-bold font-serif">IK Ponte Guapa</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-800 hover:text-fucsia transition">Inicio</a>
              <a href="#coleccion" className="text-gray-800 hover:text-fucsia transition">Colección</a>
              <a href="#about" className="text-gray-800 hover:text-fucsia transition">Sobre Mí</a>
              <a href="#contacto" className="text-gray-800 hover:text-fucsia transition">Contacto</a>
              <button className="relative p-2">
                <ShoppingBag className="h-6 w-6 text-gray-800" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-fucsia text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#inicio" className="block text-gray-800 hover:text-fucsia">Inicio</a>
              <a href="#coleccion" className="block text-gray-800 hover:text-fucsia">Colección</a>
              <a href="#about" className="block text-gray-800 hover:text-fucsia">Sobre Mí</a>
              <a href="#contacto" className="block text-gray-800 hover:text-fucsia">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-white via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Elegancia en
                  <span className="block text-gradient">Alta Costura</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Diseños exclusivos que realzan tu belleza natural. Cada pieza es una obra de arte creada especialmente para ti.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#coleccion"
                  className="px-8 py-4 bg-fucsia text-white rounded-full font-semibold hover:bg-fucsia-dark transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Ver Colección
                </a>
                <a 
                  href="#about"
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition"
                >
                  Conocer Más
                </a>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-fucsia">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-fucsia">500+</div>
                  <div className="text-sm text-gray-600">Clientas Felices</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-fucsia">100%</div>
                  <div className="text-sm text-gray-600">Hecho a Mano</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-fucsia/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea1f1f57?w=800&h=1000&fit=crop" 
                alt="Alta Costura"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

           {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fucsia/20 to-transparent rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop" 
                alt="Ivana Blanco"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Sobre Mí
                </h2>
                <h3 className="text-2xl text-fucsia font-semibold mb-6">Ivana Blanco</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Con más de <span className="font-bold text-fucsia">15 años de experiencia</span> en el mundo de la alta costura, 
                  he dedicado mi vida a crear piezas únicas que realzan la belleza y personalidad de cada mujer.
                </p>
                <p className="text-lg">
                  Mi pasión por la moda comenzó desde muy joven, y con los años he perfeccionado mi técnica 
                  trabajando con las telas más finas y los diseños más exclusivos. Cada prenda que sale de mi 
                  atelier es una obra de arte única, creada con amor y dedicación.
                </p>
                <p className="text-lg">
                  En <span className="font-bold">IK Ponte Guapa</span>, no solo creamos ropa, creamos experiencias. 
                  Cada clienta recibe atención personalizada para asegurar que su prenda sea perfecta en cada detalle.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-fucsia">15+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-fucsia">500+</div>
                  <div className="text-gray-600">Diseños Creados</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-fucsia">100%</div>
                  <div className="text-gray-600">Satisfacción</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-fucsia">Premium</div>
                  <div className="text-gray-600">Calidad Garantizada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Collection Section */}
      <section id="coleccion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Colección
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Piezas únicas diseñadas con pasión y dedicación para las mujeres más exigentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="w-full bg-white text-gray-900 py-3 rounded-full font-semibold hover:bg-fucsia hover:text-white transition"
                      >
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
                    <Heart className="h-5 w-5 text-fucsia" />
                  </button>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-fucsia text-white text-sm font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-fucsia">${product.price}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-fucsia text-fucsia" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-300">
              Estamos aquí para hacer realidad tus sueños de moda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="inline-block p-4 bg-fucsia rounded-full">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Teléfono</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="text-center space-y-4 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="inline-block p-4 bg-fucsia rounded-full">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-300">info@ponteguapa.com</p>
            </div>
            <div className="text-center space-y-4 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="inline-block p-4 bg-fucsia rounded-full">
                <Instagram className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Instagram</h3>
              <p className="text-gray-300">@ponteguapa</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nombre"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-fucsia transition"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-fucsia transition"
                />
              </div>
              <textarea 
                placeholder="Mensaje"
                rows={6}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-3xl focus:outline-none focus:border-fucsia transition resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-fucsia text-white rounded-full font-semibold hover:bg-fucsia-dark transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-fucsia" />
              <span className="text-xl font-bold font-serif">IK Ponte Guapa</span>
            </div>
            <p className="text-gray-400">
              © 2024 IK Ponte Guapa. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-fucsia transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fucsia transition">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
