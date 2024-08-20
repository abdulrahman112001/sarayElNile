import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/templates/ProfileCard";
import Slider from "react-slick";
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

type ProfileCardProps = {
  name: string;
  icon: JSX.Element;
  imgSrc: string;
  alt: string;
  id: number;
};

const cardData: ProfileCardProps[] = [
  {
    id: 1,
    name: "Sarah Nichols",
    icon: <FaGoogle className="w-8 h-8 text-blue-500" />,
    imgSrc: "https://www.google.com/favicon.ico",
    alt: "Google logo",
  },
  {
    id: 2,
    name: "John Doe",
    icon: <FaApple className="w-8 h-8 text-gray-800" />,
    imgSrc: "https://www.apple.com/favicon.ico",
    alt: "Apple logo",
  },
  {
    id: 3,
    name: "Jane Smith",
    icon: <FaFacebook className="w-8 h-8 text-blue-600" />,
    imgSrc: "https://www.facebook.com/favicon.ico",
    alt: "Facebook logo",
  },
  {
    id: 4,
    name: "Robert Brown",
    icon: <FaTwitter className="w-8 h-8 text-blue-400" />,
    imgSrc: "https://www.twitter.com/favicon.ico",
    alt: "Twitter logo",
  },
];

const ProfileCardsContainer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2, // Show 1 card at a time on mobile
    slidesToScroll: 1,
  };

  return (
    <div className="md:p-2 p-0">
      {isMobile ? (
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id} className="">
              <ProfileCard
                key={card.id}
                name={card.name}
                imgSrc={card.imgSrc}
                alt={card.alt}
                id={card.id}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {cardData.map((card) => (
            <ProfileCard
              key={card.id}
              name={card.name}
              imgSrc={card.imgSrc}
              alt={card.alt}
              id={card.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCardsContainer;
