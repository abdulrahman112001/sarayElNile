import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  BsHeart,
  BsMap,
  BsClock,
  BsFillCircleFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

import { Button } from "@mui/material";
import Link from "next/link";
import { excursionData } from "@/data";

// Sample Excursion Data


export default function Excursions() {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4, // Adjusted to show full cards
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5, // Show 2 full cards and part of the 3rd on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1, // Show 1 full card and part of the 2nd on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {" "}
      {/* Adjusted padding for more space */}
      <Slider {...settings} ref={sliderRef}>
        {excursionData.map((excursion) => (
          <div key={excursion.id} className="px-[5px] md:px-[9px] mb-3">
            {" "}
            {/* Increased padding */}
            <Link href="/top-excursions">
              <div key={excursion.id} className="px-[4px] mb-3">
                {" "}
                {/* Increased padding */}
                <div className="flex flex-col max-w-lg mx-auto cursor-pointer hover:border border-gray-400 rounded-lg overflow-hidden shadow-lg bg-white h-[500px]">
                  {" "}
                  {/* Increased card width */}
                  <div className="relative h-72">
                    <Image
                      className="w-full h-full object-cover"
                      src={excursion.image}
                      alt={excursion.title}
                    />
                    <div className="absolute top-2 left-2 bg-[#FFF1BA] text-[#232323] text-xs font-segoe font-medium px-2 py-1 rounded">
                      Top Rated
                    </div>
                    <Button className="absolute top-2 right-2 text-white hover:text-red-500">
                      <BsHeart size={24} />
                    </Button>
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
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
