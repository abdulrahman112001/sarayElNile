// components/PrivacyPolicySection.tsx

import Image from "next/image";
import React from "react";
import PrivacyImage from "../../../public/assets/egys.jpeg";
type PrivacyPolicyItem = {
  title: string;
  content: string;
};

const privacyPolicyItems: PrivacyPolicyItem[] = [
  {
    title: "Introduction",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
  },
  {
    title: "Information We Collect",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Data Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Your Rights",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const PrivacyPolicySection: React.FC = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r mt-16 lg:mt-24 from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={PrivacyImage}
            alt="Background Image"
            className="w-full h-full object-cover opacity-50"
            width={100}
            height={100}
          />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-segoe leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl mb-12 font-segoe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            auctor arcu, at fermentum dui. Maecenas.
          </p>
        </div>
      </div>

      <div className="bg-white px-6 font-segoe mt-2">
        <div className="grid gap-14">
          {privacyPolicyItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-segoe text-[#333]">{item.title}</h3>
              <p className="text-base text-[#333] mt-4">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicySection;
