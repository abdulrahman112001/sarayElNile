import React from "react";
import Image from "next/image";
import {
  FaStar,
  FaGoogle,
  FaApple,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import User from "../../../../public/assets/infocard.png";

type ProfileCardProps = {
  name: string;
  icon: JSX.Element;
  imgSrc: string;
  alt: string;
  id: any;
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

const ProfileCard: React.FC<ProfileCardProps> = ({ name, imgSrc, alt, id }) => {
  return (
    <div className="relative max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Icon positioned in the top-right corner */}
      <div className="absolute top-4 right-4 bg-white rounded-full shadow-md">
        <Image
          className="w-8 h-8"
          src={imgSrc}
          alt={alt}
          width={32}
          height={32}
        />
      </div>

      <div className="p-4 flex flex-col items-center">
        {/* Centered profile image */}
        <div className="relative mb-3">
          <Image
            className="w-20 h-20 rounded-full object-cover"
            src={User}
            alt="Profile"
            width={80}
            height={80}
          />
        </div>

        {/* Stars and text */}
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2 font-segoe">{name}</h2>
        <p className="text-sm text-gray-600 text-center font-segoe">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
    </div>
  );
};

const ProfileCardsContainer: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
      {cardData.map((card) => (
        <ProfileCard
          key={card.id}
          name={card.name}
          icon={card.icon}
          imgSrc={card.imgSrc}
          alt={card.alt}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default ProfileCardsContainer;
