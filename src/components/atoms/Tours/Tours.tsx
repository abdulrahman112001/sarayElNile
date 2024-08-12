import React, { useRef } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Fisrt from "../../../../public/assets/firstImage.jpeg";
import Second from "../../../../public/assets/Secondimage.jpeg";
import Third from "../../../../public/assets/roud.jpeg";

type AttractionCardProps = {
  title: string;
  location: string;
  price: number;
  rating: number;
  image: any;
};

const AttractionCard: React.FC<AttractionCardProps> = ({
  title,
  location,
  price,
  rating,
  image,
}) => {
  return (
    <div className="flex flex-col cursor-pointer shadow-md rounded-lg hover:border border-yellow-700 overflow-hidden w-64 bg-white flex-shrink-0 m-5">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          className="h-40 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <div>
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
        </div>
        <div className="mt-auto text-right">
          <p className="text-black font-bold text-lg font-segoe">
            From ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

const Tours: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const attractions = [
    {
      title: "Top attractions in Alexandria, to Luxor",
      location: "Florence, Tuscany",
      price: 320,
      rating: 5,
      image: Fisrt,
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
      title: "Top attractions in Alexandria, to Luxor",
      location: "Florence, Tuscany",
      price: 320,
      rating: 5,
      image: Fisrt,
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
      title: "Top attractions in Alexandria, to Luxor",
      location: "Florence, Tuscany",
      price: 320,
      rating: 5,
      image: Fisrt,
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
    // Add more attractions as needed
  ];

  return (
    <div className="flex flex-col items-center p-2">
      <div className="relative w-full max-w-screen-lg">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#EAB308] p-2 rounded-full shadow-md"
        >
          <HiChevronLeft size={24} />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 py-4 scroll-smooth"
        >
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={index}
              title={attraction.title}
              location={attraction.location}
              price={attraction.price}
              rating={attraction.rating}
              image={attraction.image}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#EAB308] p-2 rounded-full shadow-md"
        >
          <HiChevronRight size={24} />
        </button>
      </div>
      <style jsx>{`
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        .scroll-smooth::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Tours;
