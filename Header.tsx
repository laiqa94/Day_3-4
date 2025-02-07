"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";
import { Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Header */}
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link href="/">
          <img src="/nike-logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-x-5 text-sm">
            <li className="hover:text-gray-900 cursor-pointer">New & Featured</li>
            <li className="hover:text-gray-900 cursor-pointer">Men</li>
            <li className="hover:text-gray-900 cursor-pointer">Women</li>
            <li className="hover:text-gray-900 cursor-pointer">Kids</li>
            <li className="hover:text-gray-900 cursor-pointer">Sale</li>
            <li className="hover:text-gray-900 cursor-pointer">SNKRS</li>
          </ul>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center gap-x-4">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <input
              className="bg-gray-100 outline-none w-44 text-center px-3 py-2 rounded-full"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Wishlist Icon */}
            <Link href="/wishlist" className="relative">
              <Heart className="h-6 w-6 text-gray-700 hover:text-red-500 transition duration-300" />
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black transition duration-300" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            <FaAlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 right-5 bg-white shadow-lg rounded-lg w-64 z-50">
          <ul className="p-5 text-black text-lg">
            <Link href="/store">
              <li className="py-2 border-b">Find a Store</li>
            </Link>
            <Link href="/help">
              <li className="py-2 border-b">Help</li>
            </Link>
            <Link href="/join">
              <li className="py-2 border-b">Join Us</li>
            </Link>
            <Link href="/signUp">
              <li className="py-2">Sign In</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
