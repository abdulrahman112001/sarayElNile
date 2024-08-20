import React, { useState } from "react";
import LocationDropdown from "./LocationDropdown";
import DatePickerComponent from "./DatePickerComponent";
import SearchModal from "./SearchModal";
import Button from "@mui/material/Button";
import { Search } from "lucide-react";

type DateRange = [Date | null, Date | null];

const SearchExcursions: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const locations: string[] = ["New York", "London", "Paris", "Tokyo"];

  return (
    <div>
      {/* Mobile Button */}
      <Button
        className="fixed top-14 w-full left-0 z-40 sm:hidden bg-white text-gray-400 font-segoe rounded-md px-4 py-4 hover:bg-white"
        onClick={() => setOpenModal(true)}
      >
        Search For an excursion or activity <Search className="ml-4" />
      </Button>

      {/* Full Search Component for larger screens, hidden on mobile */}
      <div className="relative hidden sm:flex flex-col sm:flex-row items-center bg-white rounded-md mt-5 border border-gray-100 p-5 space-y-2 sm:space-y-0 sm:space-x-2 mx-auto max-w-2xl w-full">
        <LocationDropdown
          location={location}
          setLocation={setLocation}
          locations={locations}
        />

        <div className="w-px bg-gray-300 h-8 hidden sm:block"></div>

        <DatePickerComponent
          dateRange={dateRange}
          setDateRange={setDateRange}
        />

        <button className="hidden sm:block bg-[#232323] text-white font-segoe rounded-md px-4 py-2 flex items-center text-center justify-center">
          Search
        </button>
      </div>

      {/* Search Modal */}
      <SearchModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        location={location}
        setLocation={setLocation}
        locations={locations}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
    </div>
  );
};

export default SearchExcursions;
