import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import Fisrt from "../../../../public/assets/firstImage.jpeg";
import Second from "../../../../public/assets/Secondimage.jpeg";
import Third from "../../../../public/assets/roud.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for the DestinationCard props
interface DestinationCardProps {
  name: string;
  imageUrl: StaticImageData; // StaticImageData is the type for images imported via next/image
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

// Define the type for the destination array
interface Destination {
  name: string;
  imageUrl: StaticImageData;
}

// DestinationRow component
const DestinationRow: React.FC = () => {
  const destinations: Destination[] = [
    { name: "Giza", imageUrl: Fisrt },
    { name: "Dahab", imageUrl: Second },
    { name: "Aswan", imageUrl: Third },
    { name: "Giza", imageUrl: Fisrt },
    { name: "Giza", imageUrl: Fisrt },
    { name: "Dahab", imageUrl: Second },
    { name: "Aswan", imageUrl: Third },
    { name: "Giza", imageUrl: Fisrt },
  ];

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
          {" "}
          {/* Adjust container width and overflow */}
          <Slider {...settings}>
            {destinations.map((dest, index) => (
              <div
                className="flex justify-center"
                key={`${dest.name}-${index}`}
              >
                <DestinationCard name={dest.name} imageUrl={dest.imageUrl} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center p-1">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={`${dest.name}-${index}`}
            name={dest.name}
            imageUrl={dest.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationRow;
