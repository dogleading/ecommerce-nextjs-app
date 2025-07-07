import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light text-amber-900 leading-tight">
                Welcome to the store
              </h1>
              <div className="w-16 h-1 bg-amber-800 rounded-full"></div>

              <p className="text-xl text-amber-700 leading-relaxed font-light max-w-md">
                Discover our carefully curated collection of quality products.
              </p>

              <div className="pt-6">
                <Button className="bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-4 rounded-sm font-normal text-lg border-2 border-amber-800 hover:border-amber-900 transition-colors duration-200">
                  <Link href="/products">Browse Collection</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-200 rounded-sm opacity-30"></div>
                <Image
                  src={products.data[0].images[0]}
                  alt="Featured Product"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-sm shadow-lg object-cover w-full h-auto max-w-md border-4 border-amber-100"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-700 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Carousel products={products.data} />
      </section>
    </main>
  );
}
