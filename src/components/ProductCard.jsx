const ProductCard = () => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="https://placehold.co/400x250"
          alt="Producto destacado"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Libro para colorear</h3>
          <p className="text-gray-600 mb-4">
            Una herramienta creativa para conectar contigo misma, relajarte y sanar tu relación con la comida desde otro lugar.
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Ver más
          </a>
        </div>
      </div>
    )
  }
  
  export default ProductCard