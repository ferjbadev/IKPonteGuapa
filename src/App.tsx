import { useState } from 'react'
import {  Menu, X, Sparkles, Phone, Home, Package, MessageCircle, Mail, Instagram } from 'lucide-react'
import FloatingHearts from './components/FloatingHearts'
import CategoryModal from './components/CategoryModal'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const mainCategories = [
    {
      id: 1,
      name: 'Hombres',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
      description: 'Trajes, camisas y ropa formal'
    },
    {
      id: 2,
      name: 'Mujeres',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop',
      description: 'Vestidos, trajes y alta costura'
    },
    {
      id: 3,
      name: 'Niños y Niñas',
      image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop',
      description: 'Ropa infantil y de fiesta'
    }
  ]

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setModalOpen(true)
  }

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
                    <span className="text-fucsia">Ivana</span> <span className="text-fucsia-light">Blanco de Barrera</span>
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
      <section id="coleccion" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Colección
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diseños exclusivos para toda la familia. Selecciona una categoría para explorar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-fucsia/80 group-hover:via-fucsia/40 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center text-white font-semibold">
                      <span className="mr-2">Explorar</span>
                      <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>

                  {/* Sparkle effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Modal */}
      <CategoryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
      />

 
      {/* Contact Section */}
      <section id="contacto" className="relative py-20 bg-gradient-to-br from-gray-900 via-[#0a1628] to-gray-900 text-white overflow-hidden">
        {/* Estrellas de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ponte en Contacto
            </h2>
            <p className="text-xl text-gray-400">
              Hablemos sobre tu próximo diseño
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Columna Izquierda - Info */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-fucsia" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Ubicación</h3>
                  <p className="text-gray-400">Apure, Venezuela</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-fucsia" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">info@ikponteguapa.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-fucsia" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-400">+58 414 144 9767</p>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Tarjetas de Contacto */}
            <div className="space-y-4">
              {/* Available Badge */}
              <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold">Disponible para Proyectos</h3>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Actualmente acepto proyectos de diseño personalizado y alta costura.
                </p>
              </div>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/584141449767?text=Hola%20Ivana,%20me%20interesa%20conocer%20más%20sobre%20tus%20diseños"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#25D366] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">WhatsApp</h3>
                      <p className="text-gray-400 text-sm">Chatea conmigo al instante</p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-fucsia transition">
                    Iniciar Chat →
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:info@ikponteguapa.com"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-400 text-sm">Envíame un correo</p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-fucsia transition">
                    Enviar Email →
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href="https://instagram.com/ikponteguapa"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-fucsia transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Instagram</h3>
                      <p className="text-gray-400 text-sm">Sígueme en redes</p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-fucsia transition">
                    Ver Perfil →
                  </span>
                </div>
              </a>
            </div>
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
                  +58 414 144 9767
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
