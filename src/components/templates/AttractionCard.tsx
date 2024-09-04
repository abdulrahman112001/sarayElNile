import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AttractionCardProps {
  id: number; // Use number if id is numeric
  title: string;
  location?: string; // Make location optional
  price: number;
  image: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  id,
  title,
  location,
  price,
  image,
}) => {
  return (
    <Link href={`/${id}`}>
      <div className="flex transition-all border border-gray-200 ease-in-out flex-col cursor-pointer shadow-md rounded-lg hover:border hover:border-yellow-400 overflow-hidden bg-white md:w-11/12 max-w-sm sm:mx-2 ml-3 my-2 sm:my-4 lg:my-6">
        <div className="relative h-60 w-full">
          <Image
            src={image}
            width={0}
            height={0}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col h-64">
          <h3 className="text-lg font-segoe text-black mb-1 truncate">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 font-segoe">{location}</p>
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
