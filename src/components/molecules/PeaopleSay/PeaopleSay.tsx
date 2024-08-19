import ProfileCard from "@/components/templates/ProfileCard";
import React from "react";
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
  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
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
  );
};

export default ProfileCardsContainer;
