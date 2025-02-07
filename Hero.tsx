
import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div>
      {/* Top Banner Section */}
      <div className="text-center bg-gray-100 py-2">
        <p className="text-lg font-medium">Hello Nike App</p>
        <p className="text-gray-600">
          Download the app to access everything Nike.{' '}
          <span className="text-black underline cursor-pointer">Get Your Great</span>
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center px-4 lg:px-10 mt-4">
        <Image
          src="/hero-shoes-image.png"
          alt="Nike Air Max Pulse Shoes Banner"
          width={1200}
          height={600}
        />
      </div>

      {/* Hero Text and CTA Section */}
      <div className="text-center text-black mt-16 px-4">
        <h2 className="font-semibold text-base lg:text-xl">First Look</h2>
        <h1 className="text-3xl lg:text-5xl font-bold uppercase mt-4">Nike Air Max Pulse</h1>
        <p className="mt-6 text-sm lg:text-base text-gray-700 leading-relaxed">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—
          designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="btn">Notify Me</button>
          <button className="btn">Shop Air Max</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
