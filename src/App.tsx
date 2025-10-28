import { useState } from 'react'
import {  Menu, X, Star, Sparkles, Phone, Home, Package, MessageCircle, Mail, Instagram } from 'lucide-react'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-white">
      <FloatingHearts />
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
              <a href="#inicio" className="flex items-center gap-2 text-gray-800 hover:text-fucsia transition">
                <Home className="h-5 w-5" />
                Inicio
              </a>
              <a href="#coleccion" className="flex items-center gap-2 text-gray-800 hover:text-fucsia transition">
                <Package className="h-5 w-5" />
                Colección
              </a>
              <a href="#contacto" className="flex items-center gap-2 text-gray-800 hover:text-fucsia transition">
                <MessageCircle className="h-5 w-5" />
                Contacto
              </a>
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
              <a href="#inicio" className="flex items-center gap-2 text-gray-800 hover:text-fucsia">
                <Home className="h-5 w-5" />
                Inicio
              </a>
              <a href="#coleccion" className="flex items-center gap-2 text-gray-800 hover:text-fucsia">
                <Package className="h-5 w-5" />
                Colección
              </a>
              <a href="#contacto" className="flex items-center gap-2 text-gray-800 hover:text-fucsia">
                <MessageCircle className="h-5 w-5" />
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* About Section - Hero */}
      <section id="inicio" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 overflow-hidden">
        {/* Estrellas de fondo */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-250"></div>
          <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-40 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-fucsia/30 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="./foto.png" 
                  alt="Ivana Blanco"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-fucsia-light text-xl font-semibold tracking-widest">
                  Diseñadora de Alta Costura
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Hola, Soy
                  <span className="block mt-2">
                    <span className="text-fucsia">Ivana</span> <span className="text-fucsia-light">Blanco</span>
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Siempre en constante aprendizaje. Soy apasionada por crear diseños exclusivos de alta costura 
                  utilizando las mejores telas, técnicas artesanales y atención al detalle para crear piezas 
                  funcionales y visualmente impresionantes.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Soy una gran fanática de la moda y el arte, lo que me inspira a mantener una mente abierta 
                  y creativa. Disfruto combinando la lógica de los patrones con la imaginación que despierta 
                  la narrativa, creando soluciones innovadoras que marcan la diferencia.
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://wa.me/584141449767?text=Hola%20Ivana,%20me%20interesa%20conocer%20más%20sobre%20tus%20diseños%20de%20alta%20costura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20BA5A] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5 mr-2 fill-current" />
                  Contáctame por WhatsApp
                </a>
                <a 
                  href="#coleccion"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-fucsia hover:bg-fucsia hover:border-fucsia transition"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Ver Colección
                </a>
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
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Columna 1: Marca */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-fucsia" />
                <h3 className="text-xl font-bold font-serif">IK Ponte Guapa</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Alta costura exclusiva creada con pasión y dedicación. 
                Transformando sueños en realidad, una puntada a la vez.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-fucsia transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-fucsia transition">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-fucsia transition">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#coleccion" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Colección
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Vestidos de Novia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Alta Costura
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Diseño Personalizado
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-fucsia transition text-sm">
                    Ajustes y Arreglos
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">
                  <span className="block font-semibold text-white mb-1">Teléfono</span>
                  +1 (555) 123-4567
                </li>
                <li className="text-gray-400 text-sm">
                  <span className="block font-semibold text-white mb-1">Email</span>
                  info@ikponteguapa.com
                </li>
                <li className="text-gray-400 text-sm">
                  <span className="block font-semibold text-white mb-1">Horario</span>
                  Lun - Sáb: 10:00 - 18:00
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2025 IK Ponte Guapa. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-fucsia transition">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-500 hover:text-fucsia transition">
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
