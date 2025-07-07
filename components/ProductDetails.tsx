"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

interface ProductDetailsProps {
  product: Stripe.Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const price = product.default_price as Stripe.Price;
  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images[0],
      quantity: 1,
    });
  };

  const handleRemoveItem = () => {
    removeItem(product.id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg border border-amber-200 shadow-lg">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-light text-amber-900 leading-tight">
              {product.name}
            </h1>
            {product.description && (
              <p className="text-amber-700 text-lg leading-relaxed font-light">
                {product.description}
              </p>
            )}
            <div className="flex items-center gap-3">
              <p className="text-4xl font-light text-amber-900">
                ${((price.unit_amount ?? 0) / 100).toFixed(2)}
              </p>
              <span className="text-sm text-amber-600 uppercase tracking-wide font-medium">
                {price.currency?.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-amber-800 font-medium text-lg">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
                onClick={handleRemoveItem}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-xl font-light text-amber-900 min-w-[3rem] text-center bg-amber-50 px-4 py-2 rounded-md border border-amber-200">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
                onClick={handleAddItem}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="pt-6 border-t border-amber-100">
            <Link href="/checkout">
              <Button
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                size="lg"
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
