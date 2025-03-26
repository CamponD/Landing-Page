const Hero = () => {
    return (
      <section className="bg-white text-gray-800 px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Texto principal */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bienvenida a tu espacio de transformación
            </h1>
            <p className="text-lg mb-6">
              Aquí se puede ofrecer una breve descripción inspiradora del proyecto o de los servicios que se van a mostrar.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
              Quiero saber más
            </button>
          </div>
  
          {/* Imagen */}
          <div className="w-full h-64 md:h-auto">
            <img
              src="https://placehold.co/500x400"
              alt="Imagen principal"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero