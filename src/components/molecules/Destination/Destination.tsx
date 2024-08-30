import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for the DestinationCard props
interface DestinationCardProps {
  name: string;
  imageUrl: StaticImageData | string;
}

// DestinationCard component with typed props
const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  imageUrl,
}) => (
  <div className="relative rounded-lg overflow-hidden group md:w-[310px] w-[320px] h-60 ml-12 md:mx-2 my-2">
    <Image
      src={imageUrl}
      alt={name}
      width={256}
      height={160}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
      <h3 className="text-white text-xl font-semibold text-shadow-custom">
        {name}
      </h3>
    </div>
  </div>
);

// Adjust the prop type to accept an array directly
interface DestinationRowProps {
  Destinations: {
    name: string;
    panar_image: StaticImageData | string;
  }[];
}

// DestinationRow component
const DestinationRow: React.FC<DestinationRowProps> = ({ Destinations }) => {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="p-0">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="max-w-md w-full overflow-hidden">
          <Slider {...settings}>
            {Destinations.map((dest, index) => (
              <div
                className="flex justify-center"
                key={`${dest.name}-${index}`}
              >
                <DestinationCard name={dest.name} imageUrl={dest.panar_image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center p-1">
        {Destinations.map((dest, index) => (
          <DestinationCard
            key={`${dest.name}-${index}`}
            name={dest.name}
            imageUrl={dest.panar_image}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationRow;
