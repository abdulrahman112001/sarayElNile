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
import First from "../../../../public/assets/Secondimage.jpeg";
import Second from "../../../../public/assets/firstImage.jpeg";
import Roude from "../../../../public/assets/roud.jpeg";

// Sample Excursion Data
const excursionData = [
  {
    id: 1,
    image: First,
    location: "Alexandria, Egypt",
    title: "Doubletree by Hilton Egypt Alexandria",
    duration: "2-3 hours • Pickup Available",
    price: "$320",
    rating: 4.5,
    reviews: 30,
  },
  {
    id: 2,
    image: Second,
    location: "Cairo, Egypt",
    title: "Four Seasons Hotel Cairo",
    duration: "1-2 hours • Pickup Available",
    price: "$400",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 3,
    image: Roude,
    location: "Luxor, Egypt",
    title: "Sofitel Winter Palace Luxor",
    duration: "3-4 hours • Pickup Available",
    price: "$350",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 4,
    image: Roude,
    location: "Luxor, Egypt",
    title: "Sofitel Winter Palace Luxor",
    duration: "3-4 hours • Pickup Available",
    price: "$350",
    rating: 4.8,
    reviews: 45,
  },
  // Add more excursion objects here
];

export default function Excursions() {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.3, // Show 3 full cards and part of the 4th
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
          slidesToShow: 1.5, // Show 1 full card and part of the 2nd on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative p-1">
      <Slider {...settings} ref={sliderRef}>
        {excursionData.map((excursion) => (
          <div key={excursion.id} className="p-1">
            {" "}
            {/* Reduced padding */}
            <div className="flex flex-col max-w-xs mx-auto cursor-pointer hover:border border-gray-400 rounded-lg overflow-hidden shadow-lg bg-white h-[500px]">
              <div className="relative h-2/3">
                <Image
                  className="w-full h-full object-cover"
                  src={excursion.image}
                  alt={excursion.title}
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
        ))}
      </Slider>
      <button
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-[#FFF1BA] text-[#232323] rounded-full shadow-lg hover:bg-yellow-600 transition"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <BsChevronLeft size={24} />
      </button>
      <button
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-[#FFF1BA] text-[#232323] rounded-full shadow-lg hover:bg-yellow-600 transition"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <BsChevronRight size={24} />
      </button>
    </div>
  );
}
