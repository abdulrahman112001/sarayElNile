import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const SearchInput = () => {
  const [location, setLocation] = useState("Where");
  const [month, setMonth] = useState("");
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const locations = ["New York", "London", "Paris", "Tokyo"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-md mt-5 border border-gray-100 p-5 space-y-2 sm:space-y-0 sm:space-x-2 mx-auto max-w-2xl w-full">
      {/* Location Dropdown */}
      <div className="relative flex-1">
        <input
          type="text"
          value={location}
          onFocus={() => setIsLocationDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsLocationDropdownOpen(false), 200)}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where"
          className="bg-transparent rounded-md pl-3 pr-10 py-2 focus:outline-none w-full cursor-pointer"
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
      {/* Separator */}
      <div className="w-px bg-gray-300 h-8 hidden sm:block"></div>
      {/* Month Input with Dropdown */}
      <div className="relative flex-1">
        <input
          type="text"
          value={month}
          onFocus={() => setIsMonthDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsMonthDropdownOpen(false), 200)}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="Select month"
          className="bg-transparent rounded-md pl-3 pr-10 py-2 focus:outline-none w-full cursor-pointer"
        />
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-transparent" />
        {isMonthDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            <div className="grid grid-cols-2 gap-1 p-2">
              <div className="flex flex-col">
                {months.slice(0, 6).map((m) => (
                  <div
                    key={m}
                    className="px-4 py-2 hover:bg-yellow-200 cursor-pointer font-segoe text-sm"
                    onClick={() => {
                      setMonth(m);
                      setIsMonthDropdownOpen(false);
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                {months.slice(6).map((m) => (
                  <div
                    key={m}
                    className="px-4 py-2 hover:bg-yellow-200 cursor-pointer font-segoe text-sm"
                    onClick={() => {
                      setMonth(m);
                      setIsMonthDropdownOpen(false);
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Search Button */}
      <button className="bg-[#232323] text-white font-segoe rounded-md px-4 py-2 flex items-center text-center justify-center w-full sm:w-auto">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
