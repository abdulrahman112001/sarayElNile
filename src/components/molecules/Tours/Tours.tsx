import React from "react";
import Slider from "react-slick";

import { ToursAttractions } from "@/data";
import AttractionCard from "@/components/templates/AttractionCard";

const Tours: React.FC = () => {
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
    <div className="relative">
      <Slider {...settings} className="w-full">
        {ToursAttractions.map((attraction) => (
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
