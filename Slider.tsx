import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
      }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container max-w-screen-xl mx-auto py-10 px-4">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Explore Our Collection
      </h2>
      <Slider {...settings}>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/shoes.png"
              alt="Shoes"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mt-4 font-medium">Running Shoes</p>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/shoes2.png"
              alt="Shoes 2"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mt-4 font-medium">Sports Sneakers</p>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/shoes3.png"
              alt="Shoes 3"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mt-4 font-medium">Casual Wear</p>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/shoes4.png"
              alt="Shoes 4"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mt-4 font-medium">Trainers</p>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/shoes5.png"
              alt="Shoes 5"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mt-4 font-medium">Performance Shoes</p>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image
              src="/shoes6.png"
              alt="Shoes 6"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mt-4 font-medium">Everyday Shoes</p>
        </div>
      </Slider>
    </div>
  );
}

export default CustomArrows;
