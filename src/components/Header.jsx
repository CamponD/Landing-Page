export default function Header() {
    return (
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Vania</h1>
          <nav>
            <ul className="flex gap-6 text-sm font-medium text-gray-600">
              <li><a href="#inicio" className="hover:text-gray-900">Inicio</a></li>
              <li><a href="#productos" className="hover:text-gray-900">Productos</a></li>
              <li><a href="#sobre-mi" className="hover:text-gray-900">Sobre mí</a></li>
              <li><a href="#contacto" className="hover:text-gray-900">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }