import React from "react";
import {
  FaClock,
  FaGlobeAmericas,
  FaLock,
  FaCalendarAlt,
} from "react-icons/fa";

const TripInfo = () => {
  const items = [
    { icon: FaClock, title: "Duration", value: "8 Days", subvalue: "7 Nights" },
    {
      icon: FaGlobeAmericas,
      title: "Destination",
      value: "1 Country",
      subvalue: "3 Places",
    },
    {
      icon: FaLock,
      title: "Type",
      value: "Private Tour",
      subvalue: "English Speaking Guide",
    },
    {
      icon: FaCalendarAlt,
      title: "Run",
      value: "Sunday - Thursday",
      subvalue: "Sunday - Thursday",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-segoe text-start mt-9">Trip Information</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <item.icon className="text-3xl text-[#945E13] mb-2" />
            <h3 className="font-segoe text-[#945E13] text-lg">{item.title}</h3>
            <p className="text-gray-800 font-segoe text-base">{item.value}</p>
            <p className="text-sm text-gray-500">{item.subvalue}</p>
          </div>
        ))}
      </div>

      <p className="pt-3 font-segoe text-[#6E6C5C]">
        Start in Japan is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default TripInfo;
