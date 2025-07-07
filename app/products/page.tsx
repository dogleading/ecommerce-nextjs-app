import { stripe } from "@/lib/stripe";
import { ProductsList } from "@/components/ProductsList";

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Our Products
          </h1>
          <div className="w-16 h-1 bg-amber-800 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-amber-700 font-light max-w-2xl mx-auto">
            Discover our carefully curated collection of quality products, each
            selected with care and attention to detail.
          </p>
        </div>
        <ProductsList products={products.data} />
      </div>
    </main>
  );
};

export default ProductsPage;
