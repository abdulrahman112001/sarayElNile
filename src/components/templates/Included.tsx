import React from "react";
import { MdDone } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { TourDetail, TourIncludeItem } from "@/types/tour"; // Correct import

interface IncludedProps {
  DetailTour: TourDetail;
}

const Included: React.FC<IncludedProps> = ({ DetailTour }) => {
  return (
    <div>
      <h2 className="text-3xl font-segoe text-start mt-9">What’s Included</h2>
      {DetailTour.tour_includes?.map((item: TourIncludeItem, index: number) => (
        <div
          key={index}
          className="flex items-center max-w-3xl mx-auto p-4 mt-4"
        >
          {item.status === "yes" ? (
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
