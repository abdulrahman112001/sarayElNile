import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { cardDataBlog } from "@/data";

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
};

const Blog: React.FC = () => {
  return (
    <div className="p-0">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto max-w-screen-xl">
        {cardDataBlog.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            subtitle={card.subtitle}
            id={card.id}
          />
        ))}
      </div>

      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {cardDataBlog.map((card) => (
            <div key={card.id} className="px-0">
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                subtitle={card.subtitle}
                id={card.id}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
