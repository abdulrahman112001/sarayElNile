import React from "react";
import Slider from "react-slick";
import ExcursionCard from "@/components/templates/ExcursionCard";
import { excursions } from "@/data";

import { StaticImageData } from "next/image";

// Define the type for the excursion data
type Excursion = {
  id: number;
  imageSrc: StaticImageData;
  recommendation: string;
};

// Carousel settings
const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const Explore: React.FC = () => {
  return (
    <div className="mx-0 md:mx-5 py-8">
      <h2 className="md:text-3xl text-xl font-segoe ml-3 mb-6 text-start">
        Explore Excursions
      </h2>

      {/* Mobile Carousel */}
      <div className="block lg:hidden ">
        <Slider {...sliderSettings}>
          {excursions.map((excursion) => (
            <div key={excursion.id} className="">
              <ExcursionCard
                imageSrc={excursion.imageSrc}
                recommendation={excursion.recommendation}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-6 gap-6">
        {excursions.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            imageSrc={excursion.imageSrc}
            recommendation={excursion.recommendation}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
