import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Star, Truck, Shield, Award, Users, ChevronRight, Heart, Leaf, CheckCircle, Info, Phone, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const oils = [
    {
      id: 1,
      name: "CBD Oil 1000mg",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "https://images.pexels.com/photos/7262800/pexels-photo-7262800.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      category: "oils",
      strength: "1000mg",
      type: "Full Spectrum"
    },
    {
      id: 2,
      name: "CBD Oil 500mg",
      price: "$49.99",
      originalPrice: "$64.99",
      image: "https://images.pexels.com/photos/7262801/pexels-photo-7262801.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      category: "oils",
      strength: "500mg",
      type: "Broad Spectrum"
    },
    {
      id: 3,
      name: "CBD Oil 2000mg",
      price: "$129.99",
      originalPrice: "$159.99",
      image: "https://images.pexels.com/photos/7262802/pexels-photo-7262802.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      category: "oils",
      strength: "2000mg",
      type: "Full Spectrum"
    }
  ];

  const edibles = [
    {
      id: 4,
      name: "CBD Gummies 25mg",
      price: "$39.99",
      originalPrice: "$49.99",
      image: "https://images.pexels.com/photos/7262803/pexels-photo-7262803.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      category: "edibles",
      strength: "25mg per piece",
      type: "30 Count"
    },
    {
      id: 5,
      name: "CBD Chocolate 10mg",
      price: "$24.99",
      originalPrice: "$29.99",
      image: "https://images.pexels.com/photos/7262804/pexels-photo-7262804.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      category: "edibles",
      strength: "10mg per piece",
      type: "20 Count"
    },
    {
      id: 6,
      name: "CBD Honey Sticks",
      price: "$34.99",
      originalPrice: "$44.99",
      image: "https://images.pexels.com/photos/7262805/pexels-photo-7262805.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      category: "edibles",
      strength: "15mg per stick",
      type: "12 Count"
    }
  ];

  const topicals = [
    {
      id: 7,
      name: "CBD Pain Relief Cream",
      price: "$59.99",
      originalPrice: "$74.99",
      image: "https://images.pexels.com/photos/7262806/pexels-photo-7262806.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      category: "topicals",
      strength: "500mg",
      type: "2oz Tube"
    },
    {
      id: 8,
      name: "CBD Muscle Balm",
      price: "$44.99",
      originalPrice: "$54.99",
      image: "https://images.pexels.com/photos/7262807/pexels-photo-7262807.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      category: "topicals",
      strength: "300mg",
      type: "1.5oz Jar"
    }
  ];

  const allProducts = [...oils, ...edibles, ...topicals];

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">PureCBD</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Inicio</a>
              <a href="#products" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Productos</a>
              <a href="#education" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Educación</a>
              <a href="#about" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Nosotros</a>
              <a href="#contact" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Contacto</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Search className="h-5 w-5 text-slate-600 hover:text-green-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-slate-600 hover:text-green-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </div>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium">
                Mi Cuenta
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Inicio</a>
                <a href="#products" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Productos</a>
                <a href="#education" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Educación</a>
                <a href="#about" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Nosotros</a>
                <a href="#contact" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Contacto</a>
                <div className="flex items-center space-x-4 pt-2">
                  <Search className="h-5 w-5 text-slate-600" />
                  <ShoppingCart className="h-5 w-5 text-slate-600" />
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm">
                    Mi Cuenta
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Age Verification Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-amber-800 text-sm">
            <Info className="h-4 w-4 mr-2" />
            <span>Debes ser mayor de 21 años para comprar productos de CBD. Todos nuestros productos contienen menos del 0.3% de THC.</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Certificado por Terceros
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-800">
                  CBD Premium
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Para tu Bienestar
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Descubre nuestra línea completa de productos de CBD de la más alta calidad. 
                  Cultivados orgánicamente y probados en laboratorio para tu tranquilidad.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Ver Productos
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                  Aprende sobre CBD
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">10K+</div>
                  <div className="text-sm text-gray-500">Clientes Felices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-500">Orgánico</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/7262799/pexels-photo-7262799.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Productos CBD Premium" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              ¿Por qué elegir PureCBD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos comprometemos con la calidad, transparencia y tu bienestar en cada producto que ofrecemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Probado en Laboratorio</h3>
              <p className="text-gray-600">Certificados COA disponibles para cada lote</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">100% Orgánico</h3>
              <p className="text-gray-600">Cultivado sin pesticidas ni químicos</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Envío Discreto</h3>
              <p className="text-gray-600">Entrega rápida y confidencial</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Garantía de Calidad</h3>
              <p className="text-gray-600">30 días de garantía de satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Productos de CBD premium para cada necesidad y estilo de vida
            </p>

            {/* Category Filter */}
            <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:text-green-600 border border-gray-200'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveCategory('oils')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === 'oils'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:text-green-600 border border-gray-200'
                }`}
              >
                Aceites
              </button>
              <button
                onClick={() => setActiveCategory('edibles')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === 'edibles'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:text-green-600 border border-gray-200'
                }`}
              >
                Comestibles
              </button>
              <button
                onClick={() => setActiveCategory('topicals')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === 'topicals'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:text-green-600 border border-gray-200'
                }`}
              >
                Tópicos
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        OFERTA
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      {product.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    Concentración: {product.strength}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-800">
                Aprende sobre el 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> CBD</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                El CBD (cannabidiol) es un compuesto natural que puede ayudar con el bienestar general, 
                el manejo del estrés y la recuperación.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">No Psicoactivo</h3>
                    <p className="text-gray-600">El CBD no produce efectos psicoactivos como el THC</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Natural y Seguro</h3>
                    <p className="text-gray-600">Derivado de plantas de cáñamo cultivadas orgánicamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Probado y Certificado</h3>
                    <p className="text-gray-600">Todos nuestros productos son probados por terceros</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7262808/pexels-photo-7262808.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Planta de cáñamo"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Mantente Informado
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Recibe consejos sobre bienestar, ofertas exclusivas y las últimas noticias sobre CBD
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex rounded-lg overflow-hidden bg-white shadow-lg">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-6 py-4 text-slate-800 focus:outline-none"
              />
              <button className="bg-slate-800 text-white px-8 py-4 hover:bg-slate-900 transition-colors font-semibold">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">PureCBD</span>
              </div>
              <p className="text-gray-400 mb-4">
                Tu fuente confiable para productos de CBD premium. Calidad, transparencia y bienestar en cada producto.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>1-800-CBD-PURE</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
                <Mail className="h-4 w-4" />
                <span>info@purecbd.com</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Aceites de CBD</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Comestibles</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Tópicos</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Ofertas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Información</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Sobre el CBD</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Dosificación</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Certificados COA</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 PureCBD. Todos los derechos reservados.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-green-400 transition-colors">Términos</a>
                <a href="#" className="hover:text-green-400 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Estas declaraciones no han sido evaluadas por la FDA. Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;