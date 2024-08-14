/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import ImageCard from "../../../../public/assets/Secondimage.jpeg";

type Attraction = {
  id: number;
  name: string;
  imageSrc: any;
  toursCount: number;
};

const AttractionCard: React.FC<Attraction> = ({
  name,
  imageSrc,
  toursCount,
}) => {
  return (
    <div className="flex items-center cursor-pointer rounded-lg overflow-hidden w-80 h-24  transition-transform duration-300 ease-in-out hover:shadow-lg hover:border border-gray-200 hover:bg-white ">
      <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex-grow p-4 flex flex-col justify-center">
        <h2 className="text-sm font-semibold text-gray-800 truncate font-segoe">
          {name}
        </h2>
        <p className="text-xs text-gray-600 truncate font-segoe">
          {toursCount} Tours and Activities
        </p>
      </div>
    </div>
  );
};

const sampleAttractions: Attraction[] = [
  {
    id: 1,
    name: "Scenic Lakeside",
    imageSrc: ImageCard,
    toursCount: 1230,
  },
  {
    id: 2,
    name: "Mountain Adventure",
    imageSrc: ImageCard,
    toursCount: 850,
  },
  {
    id: 3,
    name: "City Exploration ",
    imageSrc: ImageCard,
    toursCount: 1500,
  },
  {
    id: 4,
    name: "Scenic Lakeside",
    imageSrc: ImageCard,
    toursCount: 1230,
  },
  {
    id: 5,
    name: "Mountain Adventure",
    imageSrc: ImageCard,
    toursCount: 850,
  },
  {
    id: 6,
    name: "City Exploration",
    imageSrc: ImageCard,
    toursCount: 1500,
  },
];

type Props = {};

const Attractions: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {sampleAttractions.map((attraction) => (
        <div className="flex justify-center">
          <AttractionCard key={attraction.id} {...attraction} />
        </div>
      ))}
    </div>
  );
};

export default Attractions;
