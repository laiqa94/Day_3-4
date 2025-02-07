import Image from 'next/image';
import React from 'react';

const Stain = () => {
  return (
    <div className="stain-container">
      {/* Header Section */}
      <div className="mt-28 mb-7 text-center">
        <span className="text-xl font-semibold px-10 lg:px-16">{`Don't Miss`}</span>
      </div>

      {/* Image Section */}
      <div className="flex justify-center px-10">
        <Image
          src="/stan.png"
          alt="Shoes banner"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="text-center text-black mt-16 space-y-6">
        <h1 className="text-3xl lg:text-5xl font-semibold uppercase">
          Flight Essentials
        </h1>
        <p className="text-base lg:text-lg">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button className="btn px-6 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Stain;
