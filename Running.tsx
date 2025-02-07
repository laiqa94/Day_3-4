import Image from 'next/image';
import React from 'react';

const Running = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Featured Section */}
      <div className="mt-28 mb-12">
        <h2 className="text-xl font-semibold px-4 lg:px-16">Featured</h2>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center px-4">
        <Image 
          src="/running.png" 
          alt="Running Image" 
          width={1200} 
          height={600} 
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-center text-black mt-16 space-y-6">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase">
          Step into what feels good
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Everyone deserves the feeling of running in the perfect pair of shoes.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition">
          Find Your Shoes
        </button>
      </div>
    </div>
  );
};

export default Running;
