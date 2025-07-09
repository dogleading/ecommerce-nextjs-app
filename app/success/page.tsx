"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";

const SuccessPage = () => {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-200 rounded-full opacity-30 animate-pulse"></div>
                <CheckCircle className="w-20 h-20 text-amber-800 relative z-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
              Order Successful!
            </h1>
            <div className="w-16 h-1 bg-amber-800 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-amber-700 font-light max-w-2xl mx-auto">
              Thank you for your purchase! Your order has been confirmed and is
              being processed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/products" className="block">
              <Button className="w-full bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-4 rounded-sm font-normal text-lg border-2 border-amber-800 hover:border-amber-900 transition-colors duration-200">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>

            <Link href="/" className="block">
              <Button
                variant="outline"
                className="w-full border-amber-300 text-amber-700 hover:bg-amber-100 hover:border-amber-400 transition-all duration-200 py-4 text-lg font-light"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-700 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            </div>
            <p className="text-amber-600 font-light">
              Thank you for choosing our store
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
