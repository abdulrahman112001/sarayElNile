import React, { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";

interface FilterOption {
  label: string;
  options: string[];
}

const filterOptions: FilterOption[] = [
  { label: "Popular filter", options: ["Option 1", "Option 2", "Option 3"] },
  { label: "Facilities", options: ["Wifi", "Parking", "Restaurant"] },
  { label: "High Rated", options: ["4+ stars", "3+ stars", "2+ stars"] },
  { label: "Tour Date", options: ["Today", "Tomorrow", "This week"] },
  { label: "Price", options: ["$0-$50", "$50-$100", "$100+"] },
  { label: "Adventure Type", options: ["Hiking", "Water sports", "City tour"] },
  { label: "Age Range", options: ["All ages", "18+", "21+"] },
  { label: "Maximum Group Size", options: ["1-5", "6-10", "11+"] },
];

const Drops: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleOptionClick = (option: string) => {
    console.log("Selected option:", option);
    setOpenDropdown(null); // Close the dropdown after clicking an option
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 p-3 px-5">
      <button className="w-full sm:w-auto flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
        <Clock className="w-5 h-5 mr-2" />
        Clear all
      </button>
      {filterOptions.map((filter) => (
        <div key={filter.label} className="relative w-full sm:w-auto">
          <button
            onClick={() => toggleDropdown(filter.label)}
            className="w-full sm:w-auto flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
          >
            {filter.label}
            <ChevronDown className="w-5 h-5 ml-2" />
          </button>
          {openDropdown === filter.label && (
            <div className="absolute z-10 w-full sm:w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              {filter.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Drops;
