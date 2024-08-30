import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

interface AttractionCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  image: StaticImageData;
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
      <div className="flex transition-all border border-gray-200 ease-in-out flex-col cursor-pointer shadow-md rounded-lg hover:border hover:border-yellow-400 overflow-hidden bg-white md:w-11/12 w-[340px] sm:mx-2  ml-3 my-2 sm:my-4 lg:my-6">
        <div className="relative h-60 w-full">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
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

export default AttractionCard;
