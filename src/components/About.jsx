const About = () => {
    return (
      <section className="bg-gray-50 text-gray-800 px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre el proyecto
            </h2>
            <p className="text-lg leading-relaxed">
              Aquí se podrá introducir una breve historia o propósito de este espacio. Hablar de cómo nació la idea, a quién está dirigido o qué valores representa.
            </p>
          </div>
  
          {/* Imagen (cambiarla por una de Vania o del libro) */}
          <div>
            <img
              src="https://placehold.co/500x400"
              alt="Sobre el proyecto"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;