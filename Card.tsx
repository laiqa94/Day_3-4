'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Products } from '>> @/types/products';
import { client } from '>> @/sanity/lib/client'
import { urlFor } from '>> @/sanity/lib/image' 
import Link from 'next/link';

// Product Card Component
const ProductCard = ({ image, name, price, category }: any) => (
  <div className="w-72 h-auto bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
    <div className="w-full h-72 mb-6 overflow-hidden">
      <img
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        src={image}
        alt={`${name} - ${category}`}
      />
    </div>
    <div className="flex justify-between items-center">
      <h3 className="text-base font-medium">{name}</h3>
      <p className="text-base font-semibold text-gray-700">{price}</p>
    </div>
    <div>
      <span className="text-sm text-gray-600">{category}</span>
    </div>
  </div>
);

const Card = () => {
  
  
  const query = ` 
    *[_type == "product"][0...17]{
      _id,
      ProductName,
      description,
      price,
      status,
      inventory,
      category,
      colors,
      "imageUrl": image.asset->url
    }
  `;
  
interface Products {
  slug: any;
  _id: string; // Unique identifier for the product
  ProductName: string; // Product name (capitalize if needed)
  description: string; // Product description
  price: number; // Price as a number
  status: string; // Status (e.g., Promo, Available, etc.)
  inventory: number; // Inventory count
  category: string; // Category (e.g., Women's Shoes, etc.)
  colors: string[]; // Array of available colors
  imageUrl: string; // URL for the product image
}

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mt-28 px-10 lg:px-16">
        <div>
          <span className="text-lg font-semibold text-gray-700">
            Best of Air Max
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
            Shop
          </span>
          <div className="p-2 bg-gray-100 text-gray-400 rounded-full hover:bg-gray-200 hover:text-gray-800 cursor-pointer">
            {/* Icon Placeholder */}
          </div>
          <div className="p-2 bg-gray-100 text-gray-400 rounded-full hover:bg-gray-200 hover:text-gray-800 cursor-pointer">
            {/* Icon Placeholder */}
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-10">
        {products.map((product) => (
          <Link href={`/product/${product._id}`}>   
          <ProductCard
            key={product._id}
            image={product.imageUrl}
            name={product.ProductName}
            price={`₹ ${product.price.toLocaleString()}`}
            category={product.category}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
