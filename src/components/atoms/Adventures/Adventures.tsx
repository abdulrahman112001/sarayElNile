import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import First from "../../../../public/assets/firstImage.jpeg";
import Second from "../../../../public/assets/Secondimage.jpeg";
import Third from "../../../../public/assets/roud.jpeg";

// Sample Data
const cardData = [
  {
    id: 1,
    image: First,
    title: "Solo",
    hoverText: "Discover Solitude",
  },
  {
    id: 2,
    image: Second,
    title: "Adventure",
    hoverText: "Seek Thrills",
  },
  {
    id: 3,
    image: Third,
    title: "Explore",
    hoverText: "Uncover Secrets",
  },
  {
    id: 4,
    image: Third,
    title: "Explore",
    hoverText: "Uncover Secrets",
  },
  {
    id: 5,
    image: Third,
    title: "Explore",
    hoverText: "Uncover Secrets",
  },
  // Add more cards as needed
];

export default function Adventures() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1,
    centerMode: false, // Disable center mode for better fit
    centerPadding: "0", // Remove padding
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for even smaller screens
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <Slider {...settings} className="flex justify-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex justify-center px-2" // Add horizontal padding between cards
          >
            <div className="flex flex-col items-center mx-auto relative group">
              {/* Card Container */}
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-110 duration-500">
                {/* Image Container */}
                <div className="relative">
                  <Image
                    className="w-full h-[300px] object-cover transition-transform transform group-hover:scale-110 duration-500"
                    src={card.image}
                    alt={card.title}
                  />
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex flex-col font-segoe justify-center items-center text-center p-4 text-white bg-black bg-opacity-15 hover:bg-opacity-65 hover:transition-all transition-opacity duration-500 opacity-100 group-hover:opacity-100">
                    <h2 className="text-xl font-semibold">{card.title}</h2>
                    {/* Hover Text */}
                    <div className="absolute bottom-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-opacity-75 p-2 rounded-md">
                      <p className="text-sm">{card.hoverText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
