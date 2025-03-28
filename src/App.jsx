import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <main className="pt-20 px-4">
        <Hero />
        <About />
        <Testimonials />
        <FeaturedProducts />
        <Footer />
      </main>
    </>
  )
}

export default App
