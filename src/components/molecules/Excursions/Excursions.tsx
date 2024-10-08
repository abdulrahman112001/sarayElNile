import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { BsHeart, BsMap, BsClock, BsFillCircleFill } from "react-icons/bs";
import { Button } from "@mui/material";
import Link from "next/link";
import { TourPackage } from "@/types/tour";
import Loader from "../Loader"; // Import your Loader component

interface ExcursionsProps {
  toursData: TourPackage[] | null;
}

export default function Excursions({ toursData }: ExcursionsProps) {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (toursData === null) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <p className="text-gray-600 text-lg">
          No tours available at the moment.
        </p>
      </div>
    );
  }

  if (toursData.length === 0) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <h2 className="md:text-3xl text-xl font-segoe ml-5 mb-6 text-start">
        Tours and Tickets to Experience Giza Pyramids
      </h2>
      <Slider {...settings} ref={sliderRef}>
        {toursData.map((excursion: TourPackage) => (
          <div key={excursion.id} className="px-[5px] md:px-[9px] mb-3">
            <Link href="/top-excursions">
              <div className="px-[4px] mb-3">
                <div className="flex flex-col max-w-lg mx-auto cursor-pointer border hover:border-yellow-500 border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white h-[500px] transition-all duration-300 ease-in-out">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                      src={excursion.main_image}
                      alt={excursion.title}
                      width={100}
                      height={100}
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
                      <span className="font-segoe">
                        {excursion.destination}
                      </span>
                    </div>
                    <h2 className="font-segoe text-xl mb-2 truncate">
                      {excursion.title}
                    </h2>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <BsClock size={16} className="mr-1" />
                      <span>{excursion.duration} days</span>
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
                          <span className="m-2 text-gray-600 text-sm">
                            {excursion.starRating} stars
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="line-through text-gray-500">
                        From ${excursion.min_price}{" "}
                        {/* Display minimum price */}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="font-segoe text-xl text-yellow-700">
                        From $
                        {excursion.tour_prices[0]?.prices[0]?.price || "N/A"}
                        {/* Display actual price */}
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
