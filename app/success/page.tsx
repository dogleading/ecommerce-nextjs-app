"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Home, ShoppingBag } from "lucide-react";

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

          <Card className="bg-white border-amber-200 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-amber-900 flex items-center gap-3">
                <Package className="w-6 h-6 text-amber-800" />
                What happens next?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-sm border border-amber-100">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-amber-900 mb-1">
                      Order Confirmation
                    </h3>
                    <p className="text-amber-700 font-light">
                      {`You'll receive an email confirmation with your order
                      details shortly.`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-sm border border-amber-100">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-amber-900 mb-1">
                      Processing
                    </h3>
                    <p className="text-amber-700 font-light">
                      Your order is being prepared and will be shipped within
                      1-2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-sm border border-amber-100">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-amber-900 mb-1">
                      Shipping Updates
                    </h3>
                    <p className="text-amber-700 font-light">
                      {`We'll send you tracking information once your order
                      is shipped.`}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
