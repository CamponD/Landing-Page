import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <FeaturedProducts />

      <main className="pt-20 px-4">
        <section id="inicio">
          <h2 className="text-2xl font-semibold">Bienvenida</h2>
          <p>Contenido de la landing...</p>
        </section>
      </main>
    </>
  )
}

export default App
