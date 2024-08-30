// components/PrivacyPolicySection.tsx

import React from "react";

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
    <div className="bg-white px-6 font-segoe mt-20 lg:mt-28">
      <div className="mb-8">
        <h2 className="text-3xl font-segoe text-[#333]">Privacy Policy</h2>
        <p className="text-xl text-[#333] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas.
        </p>
      </div>
      <hr className="my-10" />
      <div className="grid gap-14">
        {privacyPolicyItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-segoe text-[#333]">{item.title}</h3>
            <p className="text-base text-[#333] mt-4">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
