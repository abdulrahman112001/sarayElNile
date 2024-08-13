import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Back from "../../../public/assets/userbg.jpeg";
import User from "../../../public/assets/infocard.png";
import Image from "next/image";

// Define the type for the component props
type UserProfileCardProps = {
  imageSrc: string;
  userPhoto: string;
  username: string;
  rating: number;
  description: string;
};

// UserProfileCard component
const UserProfileCard: React.FC<UserProfileCardProps> = ({
  imageSrc,
  userPhoto,
  username,
  rating,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden ">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt="User Background"
          className="w-full h-full object-cover mr-3 rounded-lg "
        />
      </div>
      {/* Right Section: User Details */}
      <div className="w-full md:w-1/2 p-4">
        <div className="flex items-center mb-4">
          <Image
            src={userPhoto}
            alt={username}
            className="w-10 h-10 rounded-full border-2 border-gray-300 mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{username}</h3>
            <div className="flex items-center mt-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-500 ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// Modal component
const CarouselModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const cards = [
    {
      imageSrc: Back,
      userPhoto: User,
      username: "John Doe",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaaaa.",
    },
    {
      imageSrc: Back,
      userPhoto: User,
      username: "Jane Smith",
      rating: 5,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more cards as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User Profile Carousel"
      className="absolute inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 z-50"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark semi-transparent background
          backgroundImage: `url(/mnt/data/transp.png)`, // Optional: Background image for overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          background: "", // White background for the modal content
          borderRadius: "10px", // Rounded corners for the modal
          border: "none", // No border
          padding: 0, // No padding
          inset: "auto", // Adjust inset positioning
          overflow: "visible", // Ensure content is visible
          maxWidth: "90%", // Ensure the modal doesn't exceed screen size
          maxHeight: "90%",
        },
      }}
    >
      <div className="relative w-full max-w-4xl">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-4">
              <UserProfileCard
                imageSrc={card.imageSrc}
                userPhoto={card.userPhoto}
                username={card.username}
                rating={card.rating}
                description={card.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Modal>
  );
};

// Page component that uses UserProfileCard and CarouselModal
const UserProfilePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-2 md:p-4">
      <UserProfileCard
        imageSrc={Back}
        userPhoto={User}
        username="John Doe"
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <button
        onClick={openModal}
        className="mt-6 flex items-center px-4 py-2 border border-opacity-60 border-yellow-700 bg-gray-100 text-[#A16207] font-segoe text-lg rounded-md hover:bg-[#8a4c03] hover:text-white transition-colors duration-300"
      >
        View More Details
      </button>
      <CarouselModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default UserProfilePage;
