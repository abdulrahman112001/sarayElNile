import React from "react";
import { MdDone } from "react-icons/md";
import { VscError } from "react-icons/vsc";

type Item = {
  icon: boolean; // true or false
  title: string;
  description: string;
};

const includedItems: Item[] = [
  {
    icon: true,
    title: "Parking",
    description:
      "Free private parking is possible on site (reservation is not possible).",
  },
  {
    icon: true,
    title: "Wi-Fi",
    description: "Free Wi-Fi is available throughout the property.",
  },
  {
    icon: false,
    title: "Swimming Pool",
    description: "Enjoy access to our outdoor swimming pool.",
  },
  {
    icon: true,
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
          {/* Conditionally render icon based on the boolean value */}
          {item.icon ? (
            <MdDone className="font-segoe text-green-700 mr-4 text-2xl" />
          ) : (
            <VscError className="font-segoe text-red-500 mr-4 text-2xl" />
          )}
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
