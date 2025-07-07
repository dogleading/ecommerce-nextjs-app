"use client";

import Stripe from "stripe";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CarouselProps {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[currentIndex];
  const price = currentProduct.default_price as Stripe.Price;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <section className="bg-amber-50 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
              Featured Products
            </h2>
            <div className="w-16 h-1 bg-amber-800 rounded-full mx-auto"></div>
          </div>

          <div className="relative">
            <Card className="border-amber-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="flex items-center justify-center p-8 md:p-12 bg-amber-50">
                  {currentProduct.images && currentProduct.images[0] && (
                    <div className="relative w-full max-w-sm h-64 md:h-80">
                      <div className="absolute -inset-2 bg-amber-200 rounded-lg opacity-20"></div>
                      <Image
                        src={currentProduct.images[0]}
                        alt={currentProduct.name}
                        fill
                        className="object-cover relative z-10 rounded-lg shadow-md"
                        priority
                      />
                    </div>
                  )}
                </div>

                <CardContent className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <CardTitle className="text-3xl md:text-4xl font-light text-amber-900 leading-tight">
                      {currentProduct.name}
                    </CardTitle>

                    <CardDescription className="text-xl text-amber-700 leading-relaxed font-light">
                      {currentProduct.description ||
                        "Discover this amazing product from our curated collection."}
                    </CardDescription>

                    {price.unit_amount && (
                      <div className="text-2xl font-light text-amber-800">
                        ${(price.unit_amount / 100).toFixed(2)}{" "}
                        {price.currency?.toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <Link href={`/products/${currentProduct.id}`}>
                      <Button className="bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-4 rounded-sm font-normal text-lg border-2 border-amber-800 hover:border-amber-900 transition-colors duration-200">
                        Add to Cart
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>

            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8">
              <button
                onClick={goToPrevious}
                className="bg-amber-800 hover:bg-amber-900 text-amber-50 p-3 rounded-full shadow-lg transition-colors duration-200 border-2 border-amber-800 hover:border-amber-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8">
              <button
                onClick={goToNext}
                className="bg-amber-800 hover:bg-amber-900 text-amber-50 p-3 rounded-full shadow-lg transition-colors duration-200 border-2 border-amber-800 hover:border-amber-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-amber-800"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
