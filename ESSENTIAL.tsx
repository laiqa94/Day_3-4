import Image from "next/image";
import React from "react";

const Essentials = () => {
  return (
    <div className="mt-28 mb-12">
      {/* Header */}
      <div className="text-xl font-semibold px-10 lg:px-16 mb-10">
        <span>The Essentials</span>
      </div>

      {/* Images Section */}
      <div className="flex justify-evenly items-center flex-wrap mb-16 md:mb-28">
        {/* Image 1 */}
        <div className="w-96 h-[400px] overflow-hidden">
          <Image
            className="hover:scale-105 duration-300"
            src="/exclusive.png"
            alt="Exclusive item"
            width={350}
            height={550}
          />
        </div>

        {/* Image 2 */}
        <div className="w-96 h-[400px] overflow-hidden my-7 md:my-0">
          <Image
            className="hover:scale-105 duration-300"
            src="/fr2.png"
            alt="Featured item"
            width={350}
            height={550}
          />
        </div>

        {/* Image 3 */}
        <div className="w-96 h-[400px] overflow-hidden mb-14 md:mb-0">
          <Image
            className="hover:scale-105 duration-300"
            src="/Frame2.png"
            alt="Highlighted item"
            width={350}
            height={550}
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex justify-evenly flex-wrap px-36 pb-20 items-center">
        {/* Category: Icons */}
        <div>
          <h3 className="font-semibold pl-3">Icons</h3>
          <ul className="ess-ul mt-3">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Category: Shoes */}
        <div>
          <h3 className="font-semibold pl-3">Shoes</h3>
          <ul className="ess-ul mt-3">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Category: Clothing */}
        <div>
          <h3 className="font-semibold pl-3">Clothing</h3>
          <ul className="ess-ul mt-3">
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Category: Kids */}
        <div>
          <h3 className="font-semibold pl-3">{`Kids'`}</h3>
          <ul className="ess-ul mt-3">
            <li>Infant & Toddler Shoes</li>
            <li>{`Kids' Shoes`}</li>
            <li>{`Kids' Jordan Shoes`}</li>
            <li>{`Kids' Basketball Shoes`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
