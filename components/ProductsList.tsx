"use client";

import { useState } from "react";
import Stripe from "stripe";
import { ProductCard } from "@/components/ProductCard";

interface ProductsListProps {
  products: Stripe.Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description?.toLowerCase().includes(term);
    return nameMatch || descriptionMatch;
  });
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white text-amber-900 placeholder-amber-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredProducts.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <div className="text-amber-600 text-lg">
            No products found matching {`"${searchTerm}"`}
          </div>
          <div className="text-amber-500 text-sm mt-2">
            Try searching with different keywords
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="flex">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
