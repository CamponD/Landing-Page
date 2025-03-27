const Testimonials = () => {
    return (
      <section className="bg-white text-gray-800 px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Lo que dicen otras mujeres
          </h2>
  
          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="italic mb-4">
                “Desde que empecé, ya no siento culpa al comer. Me siento libre.”
              </p>
              <h4 className="font-semibold">Laura G.</h4>
              <span className="text-sm text-gray-500">Empresaria</span>
            </div>
  
            {/* Testimonio 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="italic mb-4">
                “No es una dieta, es una nueva relación conmigo misma. Gracias ❤️”
              </p>
              <h4 className="font-semibold">Carmen R.</h4>
              <span className="text-sm text-gray-500">Coach y madre</span>
            </div>
  
            {/* Testimonio 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="italic mb-4">
                “Nunca pensé que pudiera disfrutar de la comida sin sentirme mal.”
              </p>
              <h4 className="font-semibold">María P.</h4>
              <span className="text-sm text-gray-500">Directora creativa</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials