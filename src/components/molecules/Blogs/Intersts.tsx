import React from "react";
import Slider from "react-slick";
import {
  FaHiking,
  FaMountain,
  FaLandmark,
  FaUmbrellaBeach,
  FaPagelines,
  FaMapMarkedAlt,
  FaUtensils,
  FaMusic,
  FaHeart,
  FaShip,
  FaPlane,
  FaLightbulb,
} from "react-icons/fa";

const interests = [
  {
    name: "Activities",
    icon: <FaHiking size={32} className="text-yellow-700" />,
  },
  {
    name: "Adventure",
    icon: <FaMountain size={32} className="text-yellow-700" />,
  },
  {
    name: "Attractions",
    icon: <FaLandmark size={32} className="text-yellow-700" />,
  },
  {
    name: "Beaches",
    icon: <FaUmbrellaBeach size={32} className="text-yellow-700" />,
  },
  {
    name: "Culture",
    icon: <FaPagelines size={32} className="text-yellow-700" />,
  },
  {
    name: "Destination",
    icon: <FaMapMarkedAlt size={32} className="text-yellow-700" />,
  },
  {
    name: "Festivals",
    icon: <FaMusic size={32} className="text-yellow-700" />,
  },
  { name: "Food", icon: <FaUtensils size={32} className="text-yellow-700" /> },
  {
    name: "Life Style",
    icon: <FaHeart size={32} className="text-yellow-700" />,
  },
  { name: "Shore", icon: <FaShip size={32} className="text-yellow-700" /> },
];

const InterestsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    // Adds padding around the center slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-8 bg-[#FAFAFA]">
      <div className=" mx-auto text-center">
        <h2 className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-5 p-5">
          Interests
        </h2>
        {/* Mobile carousel */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {interests.map((interest, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border border-yellow-600 bg-white">
                  {interest.icon}
                </div>
                <p className="mt-4 text-sm font-segoe text-center ml-4">
                  {interest.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="w-24 h-24 flex items-center justify-center rounded-full border border-yellow-600 bg-white">
                {interest.icon}
              </div>
              <p className="mt-4 text-sm font-segoe text-center">
                {interest.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
