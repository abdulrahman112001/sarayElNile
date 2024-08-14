import React from "react";
import Image from "next/image";
import backgroundImage from "../../../../public/assets/phar.jpg"; // Adjust the path as needed
import Slider from "react-slick";
import useIsMobile from "../../../hooks/useIsMobile"; // Adjust the import path as needed
import { FaStar, FaTag, FaShieldAlt, FaChartLine } from "react-icons/fa"; // Import icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components (Only for desktop view)
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        left: "10px",
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
        cursor: "pointer",
      }}
    >
      <FaArrowLeft className="text-white text-xl" />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        right: "10px",
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
        cursor: "pointer",
      }}
    >
      <FaArrowRight className="text-white text-xl" />
    </div>
  );
};

type CardData = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const cardData: CardData[] = [
  {
    title: "Card 1",
    description: "Description for card 1. Add any content you need here.",
    icon: <FaStar className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Card 2",
    description: "Description for card 2. Add any content you need here.",
    icon: <FaTag className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Card 3",
    description: "Description for card 3. Add any content you need here.",
    icon: <FaShieldAlt className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Card 4",
    description: "Description for card 4. Add any content you need here.",
    icon: <FaChartLine className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
];

const WhyUs: React.FC = () => {
  const isMobile = useIsMobile();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    draggable: true,
    arrows: !isMobile, // Hide arrows on mobile
    nextArrow: !isMobile ? <CustomNextArrow /> : null,
    prevArrow: !isMobile ? <CustomPrevArrow /> : null,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative h-96 flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 gap-6 w-full">
        <div className="text-center text-white font-segoe text-special-offer mb-8">
          Why Choose Us
        </div>

        {isMobile ? (
          <Slider {...sliderSettings} className="w-full max-w-screen-2xl">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#3C3A37] p-6  border-white border-x  rounded-sm shadow-lg text-center"
              >
                {card.icon}
                <h3 className="text-xl text-[#C7AC4F] font-segoe mb-4">
                  {card.title}
                </h3>
                <p className="text-white font-segoe">{card.description}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#3C3A37] p-6 rounded-sm shadow-lg text-center"
              >
                {card.icon}
                <h3 className="text-xl text-[#C7AC4F] font-segoe mb-4">
                  {card.title}
                </h3>
                <p className="text-white font-segoe">{card.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUs;
