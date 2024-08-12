import React, { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

// Sample image paths
import img1 from "../../../public/assets/firstImage.jpeg";
import img2 from "../../../public/assets/Secondimage.jpeg";
import Form from "../atoms/Form/Form";
import BluerForm from "../atoms/Form/Form";

const images = [img1, img2]; // Array of images

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Slider Images */}
        <div className="relative w-full h-full">
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Form Above Image */}
      <BluerForm />
    </section>
  );
};

export default HeroSection;
