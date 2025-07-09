"use client";

import React from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "@/store/cart-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { checkoutAction } from "@/lib/actions/checkout.action";

const CheckoutPage = () => {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0 || total === 0) {
    return (
      <main className="min-h-screen bg-amber-50">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
              Your Cart is Empty
            </h1>
            <div className="w-16 h-1 bg-amber-800 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-amber-700 font-light max-w-2xl mx-auto mb-8">
              Discover our carefully curated collection of quality products.
            </p>
            <Link href="/products">
              <Button className="bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-4 rounded-sm font-normal text-lg border-2 border-amber-800 hover:border-amber-900 transition-colors duration-200">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Checkout
          </h1>
          <div className="w-16 h-1 bg-amber-800 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-amber-700 font-light max-w-2xl mx-auto">
            Review your order and proceed to payment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-amber-200 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-amber-900">
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-amber-50 rounded-sm border border-amber-100"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-amber-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-amber-700 font-light">
                        ${(item.price / 100).toFixed(2)} each
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-amber-300 text-amber-700 hover:bg-amber-100 hover:border-amber-400 transition-all duration-200"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-light text-amber-900 min-w-[3rem] text-center bg-white px-4 py-2 rounded-sm border border-amber-200">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-amber-300 text-amber-700 hover:bg-amber-100 hover:border-amber-400 transition-all duration-200"
                          onClick={() => addItem({ ...item, quantity: 1 })}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-right min-w-[100px]">
                        <p className="text-xl font-light text-amber-900">
                          ${((item.price * item.quantity) / 100).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t border-amber-200 pt-6">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-2xl font-light text-amber-900">
                      Total:
                    </span>
                    <span className="text-3xl font-light text-amber-900">
                      ${(total / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <form action={checkoutAction}>
              <input type="hidden" name="items" value={JSON.stringify(items)} />
              <Button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-4 rounded-sm font-normal text-lg border-2 border-amber-800 hover:border-amber-900 transition-colors duration-200"
              >
                Proceed to Payment
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-amber-300 text-amber-700 hover:bg-amber-100 hover:border-amber-400 transition-all duration-200 py-4 text-lg font-light"
                onClick={() => clearCart()}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
