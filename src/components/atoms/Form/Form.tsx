import React from "react";
import { FaCar } from "react-icons/fa6";

export default function BluerForm() {
  return (
    <div className="absolute top-1/2 sm:left-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-full w-4/5 max-w-sm p-4 backdrop-blur-md bg-white/30 rounded-md ">
      <div className="py-4 px-2">
        {/* Mini Text Above Form */}
        <p className="text-start text-md text-white mb-4">
          Explore the best of Egypt adventure
        </p>

        <form className="space-y-3">
          {/* Row 1: Search Inputs with Icons */}
          <div className="flex flex-col sm:flex-row sm:space-x-2 mb-3">
            {/* Search Input 1 with Icon */}
            <div className="relative w-full">
              <FaCar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
              <input
                type="text"
                placeholder="Tour Package"
                className="w-full pl-10 pr-3 py-2 bg-[#FFF3C5] border border-[#FFF3C5] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>

            {/* Search Input 2 with Icon */}
            <div className="relative w-full sm:ml-2 mt-2 sm:mt-0">
              <FaCar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Excursions"
                className="w-full pl-10 pr-3 py-2 bg-white border border-[#FFF3C5] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>
          </div>

          {/* Dropdown for destinations */}
          <div className="relative mb-3">
            <select className="w-full px-3 py-2 border border-[#FFF3C5] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm">
              <option value="Giza">Giza</option>
              <option value="Cairo">Cairo</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
            </select>
          </div>

          {/* Row 2: Date Picker and Button */}
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <div className="flex-1 mb-3 sm:mb-0">
              <input
                type="date"
                className="w-full px-3 py-2 border border-[#FFF3C5] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto py-2 px-3 bg-[#f3edbc] text-yellow-800 font-segoe rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
