import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
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
    <div className="flex items-center cursor-pointer rounded-lg overflow-hidden w-80 h-24 transition-transform duration-300 ease-in-out hover:shadow-lg hover:border border-gray-200 hover:bg-white">
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
    name: "City Exploration",
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

const Attractions: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1, // Show 1 card at a time
    slidesToScroll: 1,
    rows: 2, // Display 2 rows of cards
    slidesToScroll: 2, // Scroll 2 cards at a time
  };

  return (
    <div className="p-8">
      {isMobile ? (
        <Slider {...sliderSettings} className="w-full">
          {sampleAttractions.map((attraction) => (
            <div className="flex justify-center" key={attraction.id}>
              <AttractionCard {...attraction} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {sampleAttractions.map((attraction) => (
            <div className="flex justify-center" key={attraction.id}>
              <AttractionCard {...attraction} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attractions;
