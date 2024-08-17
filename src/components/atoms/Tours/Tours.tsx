import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Fisrt from "../../../../public/assets/FirstImage.jpeg";
import Second from "../../../../public/assets/SecondImage.jpeg";
import Third from "../../../../public/assets/pyr.jpeg";
import Slider from "react-slick";
import Link from "next/link";

interface AttractionCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  image: any;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  title,
  location,
  price,
  rating,
  image,
}) => {
  return (
    <Link href="top-packages">
      <div className="flex flex-col cursor-pointer shadow-lg rounded-lg hover:border border-yellow-400 overflow-hidden bg-white w-11/12 sm:mx-4 mx-0 my-2 sm:my-4 lg:my-6">
        <div className="relative h-60 w-full">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="absolute top-2 left-2 bg-[#FFF1BA] text-[#232323] text-xs font-segoe font-medium px-2 py-1 rounded">
            Top Rated
          </div>
        </div>
        <div className="flex-1 p-4 flex flex-col h-64">
          <h3 className="text-lg font-segoe text-black mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-2 font-segoe">{location}</p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-500 text-sm ml-2 font-segoe">
              ({rating})
            </span>
          </div>
          <div className="mt-auto text-right">
            <p className="text-black font-semibold text-lg font-segoe">
              From ${price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Tours: React.FC = () => {
  const attractions = [
    {
      title: "Pyramids of Giza",
      location: "Giza, Egypt",
      price: 140,
      rating: 2,
      image: Second,
    },
    {
      title: "Luxor Temple",
      location: "Luxor, Egypt",
      price: 50,
      rating: 4,
      image: Third,
    },
    {
      title: "Pyramids of Giza",
      location: "Giza, Egypt",
      price: 140,
      rating: 2,
      image: Second,
    },
    {
      title: "Luxor Temple",
      location: "Luxor, Egypt",
      price: 50,
      rating: 4,
      image: Third,
    },
    {
      title: "Pyramids of Giza",
      location: "Giza, Egypt",
      price: 140,
      rating: 2,
      image: Second,
    },
    {
      title: "Luxor Temple",
      location: "Luxor, Egypt",
      price: 50,
      rating: 4,
      image: Third,
    },
    {
      title: "Pyramids of Giza",
      location: "Giza, Egypt",
      price: 140,
      rating: 2,
      image: Second,
    },
    {
      title: "Luxor Temple",
      location: "Luxor, Egypt",
      price: 50,
      rating: 4,
      image: Third,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: true, // Center the single item on mobile
          centerPadding: "20px", // Adjust padding for centered card
        },
      },
    ],
  };

  return (
    <div className="relative ">
      <Slider {...settings} className="w-full">
        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction.title}
            title={attraction.title}
            location={attraction.location}
            price={attraction.price}
            rating={attraction.rating}
            image={attraction.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Tours;
