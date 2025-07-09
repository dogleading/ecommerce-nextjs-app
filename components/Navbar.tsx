"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const pathname = usePathname();
  const { items } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 border-b border-gray-400 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-2">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-red-700 hover:text-red-800 transition-colors"
            onClick={closeMenu}
          >
            Ecommerce
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Link
            href="/"
            className={`text-base font-medium transition-colors duration-200 px-3 py-2 ${
              isActive("/")
                ? "text-red-700 hover:text-red-800"
                : "text-gray-700 hover:text-red-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`text-base font-medium transition-colors duration-200 px-3 py-2 ${
              isActive("/products")
                ? "text-red-700 hover:text-red-800"
                : "text-gray-700 hover:text-red-700"
            }`}
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className={`text-base font-medium transition-colors duration-200 px-3 py-2 ${
              isActive("/checkout")
                ? "text-red-700 hover:text-red-800"
                : "text-gray-700 hover:text-red-700"
            }`}
          >
            Checkout
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700 hover:text-red-700 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-red-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-2 space-y-1">
            <Link
              href="/"
              className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded ${
                isActive("/")
                  ? "text-red-700 bg-red-50"
                  : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded ${
                isActive("/products")
                  ? "text-red-700 bg-red-50"
                  : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
              }`}
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              href="/checkout"
              className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded ${
                isActive("/checkout")
                  ? "text-red-700 bg-red-50"
                  : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
              }`}
              onClick={closeMenu}
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
