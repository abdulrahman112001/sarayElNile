import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type LocationDropdownProps = {
  location: string;
  setLocation: (loc: string) => void;
};

const LocationDropdown: React.FC<LocationDropdownProps> = ({
  location,
  setLocation,
}) => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] =
    useState<boolean>(false);
  const locations: string[] = ["New York", "London", "Paris", "Tokyo"];

  return (
    <div className="relative flex-1 hidden sm:block">
      <input
        type="text"
        value={location}
        onFocus={() => setIsLocationDropdownOpen(true)}
        onBlur={() => setTimeout(() => setIsLocationDropdownOpen(false), 200)}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Where"
        className="bg-transparent rounded-md pl-3 pr-10 py-2 border border-gray-300 focus:outline-none w-full cursor-pointer"
      />
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      {isLocationDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {locations.map((loc) => (
            <div
              key={loc}
              className="px-4 py-2 hover:bg-yellow-200 font-segoe text-sm cursor-pointer"
              onClick={() => {
                setLocation(loc);
                setIsLocationDropdownOpen(false);
              }}
            >
              {loc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
