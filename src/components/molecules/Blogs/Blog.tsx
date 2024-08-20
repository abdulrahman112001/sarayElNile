import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { cardDataBlog } from "@/data";

// Define the data for the cards

// Define the Card component
const Card: React.FC<{
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
  id: string;
}> = ({ imageSrc, title, subtitle, id }) => {
  return (
    <div className="flex-shrink-0 max-w-md mx-2 rounded-sm overflow-hidden shadow-lg bg-[#FAFAFA]">
      <Link href={`/blogs/${id}`}>
        <div className="relative">
          <Image
            src={imageSrc}
            alt={title}
            width={512}
            height={320}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 font-segoe right-0 h-32 bg-white/30 backdrop-blur-md">
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-lg md:text-2xl font-sego">{title}</h2>
              <p className="text-sm md:text-lg font-segoe">{subtitle}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Define the slider settings
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

// Define the Blog component
const Blog: React.FC = () => {
  return (
    <div className="p-0">
      {/* Centered grid container for larger screens */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto max-w-screen-xl">
        {/* Desktop layout with 3 cards per row */}
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

      {/* Mobile layout with slider */}
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
