"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-2 bg-white sticky border-b border-gray-400">
      <div>
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-red-700 hover:text-red-800 transition-colors"
        >
          Ecommerce
        </Link>
      </div>
      <div className="flex gap-4 mx-auto">
        <Link
          href="/"
          className={`text-base font-medium transition-colors duration-200 px-3 py-2  ${
            isActive("/")
              ? "text-red-700 hover:text-red-800"
              : "text-gray-700 hover:text-red-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`text-base font-medium transition-colors duration-200 px-3 py-2   ${
            isActive("/products")
              ? "text-red-700  hover:text-red-800"
              : "text-gray-700 hover:text-red-700"
          }`}
        >
          Products
        </Link>
        <Link
          href="/checkout"
          className={`text-base font-medium transition-colors duration-200 px-3 py-2  ${
            isActive("/checkout")
              ? "text-red-700 hover:text-red-800"
              : "text-gray-700 hover:text-red-700"
          }`}
        >
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
