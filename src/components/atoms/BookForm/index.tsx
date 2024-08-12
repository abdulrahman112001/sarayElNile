import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

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

export default function BookingForm() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [location, setLocation] = useState("Where");
  const [month, setMonth] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  return (
    <div className="w-80 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-sm text-gray-500 mb-2">From $2000</h2>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">US $1000</h1>

      <form className="space-y-4">
        {/* Location Dropdown */}
        <div className="relative">
          <input
            type="text"
            value={location}
            onFocus={() => setIsLocationDropdownOpen(true)}
            onBlur={() =>
              setTimeout(() => setIsLocationDropdownOpen(false), 200)
            }
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {isLocationDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              {locations.map((loc) => (
                <div
                  key={loc}
                  className="px-4 py-2 hover:bg-yellow-200 cursor-pointer"
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

        {/* Month Dropdown */}
        <div className="relative">
          <input
            type="text"
            value={month}
            onFocus={() => setIsMonthDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsMonthDropdownOpen(false), 200)}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="Select month"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {isMonthDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="grid grid-cols-2 gap-1 p-2">
                <div className="flex flex-col">
                  {months.slice(0, 6).map((m) => (
                    <div
                      key={m}
                      className="px-4 py-2 hover:bg-yellow-200 cursor-pointer"
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
                      className="px-4 py-2 hover:bg-yellow-200 cursor-pointer"
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

        <div className="flex">
          <select className="w-16 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>+23</option>
          </select>
          <input
            type="tel"
            placeholder="0123333334678"
            className="flex-1 p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Start Date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative">
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select your Nationality</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div>
          <textarea
            placeholder="Tell us More Details"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          ></textarea>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Number of Adults</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
              >
                <Minus size={16} />
              </button>
              <span>{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Number of Children</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
              >
                <Minus size={16} />
              </button>
              <span>{children}</span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Number of Infants</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setInfants(Math.max(0, infants - 1))}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
              >
                <Minus size={16} />
              </button>
              <span>{infants}</span>
              <button
                type="button"
                onClick={() => setInfants(infants + 1)}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="freeCancellation"
            className="h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="freeCancellation" className="text-gray-700">
            Free Cancellation
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="reserveLater"
            className="h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="reserveLater" className="text-gray-700">
            Reserve Later
          </label>
        </div>
        <button className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150">
          Book Now
        </button>
      </form>
    </div>
  );
}
