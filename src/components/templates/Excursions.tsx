import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import { BsClock, BsFillCircleFill, BsHeart, BsMap } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TheexcursionData } from "@/data";

// Define the type for excursion data
interface Excursion {
  id: number;
  image: StaticImageData;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: string;
}

type Props = {};

const Excursions = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };

  // Define the props type for ExcursionCard
  const ExcursionCard = ({ excursion }: { excursion: Excursion }) => (
    <div className="md:m-0 m-3">
      <div className="flex flex-col w-[310px] md:w-[310px] cursor-pointer hover:border border-gray-400 rounded-lg overflow-hidden shadow-md bg-white h-[500px]">
        <div className="relative h-2/3">
          <Image
            className="w-full h-full object-cover"
            src={excursion.image}
            alt={excursion.title}
            layout="fill" // Use layout="fill" for proper image handling
          />
          <div className="absolute top-2 left-2 bg-[#FFF1BA] text-[#232323] text-xs font-segoe font-medium px-2 py-1 rounded">
            Top Rated
          </div>
          <button className="absolute top-2 right-2 text-white hover:text-red-500">
            <BsHeart size={24} />
          </button>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4">
          <div className="flex items-center text-gray-600 text-sm mb-2 font-segoe">
            <BsMap size={16} className="mr-1" />
            <span className="font-segoe">{excursion.location}</span>
          </div>
          <h2 className="font-segoe text-xl mb-2 truncate">
            {excursion.title}
          </h2>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <BsClock size={16} className="mr-1" />
            <span>{excursion.duration}</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <div className="flex items-center">
                {[1, 2, 3, 4].map((_, index) => (
                  <BsFillCircleFill
                    key={index}
                    className="text-green-500 w-4 h-4 ml-1"
                  />
                ))}
                {excursion.rating % 1 !== 0 && (
                  <div className="w-4 h-4 ml-1 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full clip-half"></div>
                  </div>
                )}
                <span className="m-2 text-gray-600 text-sm">
                  {excursion.rating} ({excursion.reviews})
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <span className="line-through text-gray-500">
              From {parseInt(excursion.price.replace("$", "")) + 80}
            </span>
          </div>
          <div className="mt-1">
            <span className="font-segoe text-xl text-yellow-700">
              From {excursion.price}
            </span>
            <span className="text-gray-600 text-sm"> / Person</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Mobile view: Centered Carousel */}
      {isMobile ? (
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Slider {...settings} className="w-full">
              {TheexcursionData.map((excursion) => (
                <ExcursionCard key={excursion.id} excursion={excursion} />
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {TheexcursionData.map((excursion) => (
            <ExcursionCard key={excursion.id} excursion={excursion} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Excursions;
