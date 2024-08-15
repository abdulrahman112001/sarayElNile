import React from "react";
import "tailwindcss/tailwind.css";
import BluerForm from "../atoms/Form/Form";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="assets/vd.mp4" // Adjust the path as needed
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Form Above Video */}
      <BluerForm />
    </section>
  );
};

export default HeroSection;
