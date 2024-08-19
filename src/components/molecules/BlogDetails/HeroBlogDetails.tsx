import React from "react";
import Image from "next/image";
import backgroundImage from "../../../../public/assets/pyr.jpeg"; // Replace with your actual image path
import User from "../../../../public/assets/userbg.jpeg"; // Replace with your card image path

// Define the HeroSectionBlogs component
const HeroSectionBlogs: React.FC = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Blurred Card */}
      <div className="absolute inset-x-0 bottom-8 mx-auto p-4 md:p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg max-w-xs md:max-w-4xl h-[250px] md:h-[300px] flex flex-col items-center justify-center transform translate-x-0 translate-y-14">
        <div className="flex flex-col items-center p-2 md:p-4 text-center">
          <h1 className="text-xl md:text-3xl font-segoe text-white mb-1 md:mb-2">
            Welcome to Our Site
          </h1>
          <p className="text-base md:text-lg mb-2 md:mb-4 font-segoe text-white">
            Discover amazing experiences with us.
          </p>
          <p className="text-sm md:text-base text-white font-segoe mb-2 md:mb-4">
            Explore our range of services and find the perfect experience
            tailored just for you. From adventurous excursions to relaxing
            getaways, we have something for everyone.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-3">
          <Image
            src={User}
            alt="Card Image"
            className="rounded-full w-10 h-10 md:w-12 md:h-12"
            width={40}
            height={40}
          />
          <p className="text-sm md:text-base text-white font-segoe">
            By: Ali Mohamed
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBlogs;
