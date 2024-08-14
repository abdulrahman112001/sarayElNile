import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Fisrt from "../../../../public/assets/firstImage.jpeg";
import Second from "../../../../public/assets/Secondimage.jpeg";
import Third from "../../../../public/assets/roud.jpeg";

// Define the type for the DestinationCard props
interface DestinationCardProps {
  name: string;
  imageUrl: any; // StaticImageData is the type for images imported via next/image
}

// DestinationCard component with typed props
const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  imageUrl,
}) => (
  <div className="relative rounded-lg overflow-hidden group w-72 h-60 mx-auto my-2">
    <Image
      src={imageUrl}
      alt={name}
      width={256}
      height={160}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
      <h3 className="text-white text-xl font-semibold">{name}</h3>
    </div>
  </div>
);

// Define the type for the destination array
interface Destination {
  name: string;
  imageUrl: any;
}

// DestinationRow component
const DestinationRow: React.FC = () => {
  const destinations: Destination[] = [
    { name: "Giza", imageUrl: Fisrt },
    { name: "Dahab", imageUrl: Second },
    { name: "Aswan", imageUrl: Third },
    { name: "Giza", imageUrl: Fisrt },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="p-4">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="max-w-sm mx-auto">
          <Slider {...settings}>
            {destinations.map((dest, index) => (
              <DestinationCard
                key={`${dest.name}-${index}`}
                name={dest.name}
                imageUrl={dest.imageUrl}
              />
            ))}
          </Slider>
        </div>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center p-5">
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
