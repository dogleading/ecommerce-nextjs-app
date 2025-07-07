import Stripe from "stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href={`/products/${product.id}`} className="group">
      <Card className="bg-white border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 overflow-hidden h-full">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-amber-900 font-light text-lg group-hover:text-amber-800 transition-colors duration-200 line-clamp-2">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-amber-700 text-sm leading-relaxed mb-3 font-light line-clamp-2">
            {product.description}
          </CardDescription>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xl font-light text-amber-900">
              ${((price.unit_amount ?? 0) / 100).toFixed(2)}
            </p>
            <span className="text-xs text-amber-600 uppercase tracking-wide font-medium">
              {price.currency?.toUpperCase()}
            </span>
          </div>
          <div className="pt-2 border-t border-amber-100">
            <div className="flex items-center text-amber-700 group-hover:text-amber-800 transition-colors duration-200">
              <span className="text-sm font-light">View Details</span>
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
