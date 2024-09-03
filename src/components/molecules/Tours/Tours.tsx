// src/components/molecules/Tours/Tours.tsx
import React from "react";
import Slider from "react-slick";
import AttractionCard from "@/components/templates/AttractionCard";
import { ToursData, TourPackage } from "@/types/tour";

interface ToursProps {
  toursData: ToursData; // Correctly define the expected type here
}

const Tours: React.FC<ToursProps> = ({ toursData }) => {
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
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="relative m-0 md:p-2">
      <Slider {...settings} className="w-full">
        {toursData.data.map(
          (attraction) =>
            attraction.is_best_deal === 1 && (
              <AttractionCard
                key={attraction.id} // Use a unique key
                title={attraction.title}
                location={attraction.location}
                price={attraction.min_price}
                rating={attraction.rating}
                image={attraction.main_image}
              />
            )
        )}
      </Slider>
    </div>
  );
};

export default Tours;
