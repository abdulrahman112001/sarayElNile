import React from "react";
import { FaParking, FaWifi, FaSwimmingPool, FaCoffee } from "react-icons/fa";

type Item = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
};

const includedItems: Item[] = [
  {
    icon: FaParking,
    title: "Parking",
    description:
      "Free private parking is possible on site (reservation is not possible).",
  },
  {
    icon: FaWifi,
    title: "Wi-Fi",
    description: "Free Wi-Fi is available throughout the property.",
  },
  {
    icon: FaSwimmingPool,
    title: "Swimming Pool",
    description: "Enjoy access to our outdoor swimming pool.",
  },
  {
    icon: FaCoffee,
    title: "Breakfast",
    description: "Complimentary breakfast is included each morning.",
  },
];

const Included = () => {
  return (
    <div>
      <h2 className="text-3xl font-segoe text-start mt-9">What’s Included</h2>
      {includedItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center max-w-3xl mx-auto p-4 mt-4"
        >
          <item.icon className="font-segoe text-[#A16207] mr-4 text-xl" />
          <div>
            <span className="font-segoe text-[#A16207] text-xl">
              {item.title}
            </span>
            <span className="ml-2 text-gray-700 font-segoe text-xl">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Included;
