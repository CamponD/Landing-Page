import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-100 text-gray-800 px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Productos destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts