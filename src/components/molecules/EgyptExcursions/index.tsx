import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { sampleExcursions } from "@/data";

interface ExcursionCardProps {
  imageSrc: StaticImageData;
  location: string;
  title: string;
  pickupAvailable: boolean;
  rating: number;
  reviewCount: number;
  price: number;
}

const ExcursionCard: React.FC<ExcursionCardProps> = ({
  imageSrc,
  location,
  title,
  pickupAvailable,
  rating,
  reviewCount,
  price,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="sm:w-96 w-72 rounded-lg overflow-hidden shadow-md bg-white mx-auto my-5">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 bg-white rounded-full p-1.5"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1 font-segoe">{location}</p>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 font-segoe">
          {title}
        </h3>
        {pickupAvailable && (
          <p className="text-sm text-gray-600 mb-2 font-segoe">
            Pickup Available
          </p>
        )}
        <div className="flex items-center mb-2">
          <FaStar className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="font-semibold mr-1 font-segoe">{rating}</span>
          <span className="text-sm text-gray-600 font-segoe">
            ({reviewCount} user)
          </span>
        </div>
        <div className="flex justify-end">
          <p className="text-sm text-gray-600 font-segoe">
            From{" "}
            <span className="text-lg font-semibold text-black font-segoe">
              ${price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Sample data

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
};

const ExcursionList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-segoe mb-6">Egypt Excursions</h2>
      {/* Render slider only on mobile view */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {sampleExcursions.map((excursion, index) => (
            <ExcursionCard key={index} {...excursion} />
          ))}
        </Slider>
      </div>
      {/* Render cards directly on larger screens */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleExcursions.map((excursion, index) => (
          <ExcursionCard key={index} {...excursion} />
        ))}
      </div>
    </div>
  );
};

export default ExcursionList;
