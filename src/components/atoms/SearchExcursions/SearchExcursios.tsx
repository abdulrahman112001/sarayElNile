import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Define the props for the CustomHeader component
const CustomHeader: React.FC<ReactDatePickerCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div className="flex justify-between items-center px-2 py-2 bg-white">
    <button
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
      className="text-yellow-500 hover:text-yellow-600"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
    <span className="text-sm font-segoe">
      {date.toLocaleString("default", { month: "long", year: "numeric" })}
    </span>
    <button
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
      className="text-yellow-500 hover:text-yellow-600"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

// Define the state types for the SearchExcursions component
type DateRange = [Date | null, Date | null];

const SearchExcursios: React.FC = () => {
  const [location, setLocation] = useState<string>("Where");
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] =
    useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const locations: string[] = ["New York", "London", "Paris", "Tokyo"];

  return (
    <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-md mt-5 border border-gray-100 p-5 space-y-2 sm:space-y-0 sm:space-x-2 mx-auto max-w-2xl w-full">
      {/* Location Dropdown */}
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

      {/* Separator */}
      <div className="w-px bg-gray-300 h-8 hidden sm:block"></div>

      {/* Date Picker */}
      <div className="relative flex-1 hidden sm:block">
        <DatePicker
          selectsRange
          startDate={dateRange[0] || undefined}
          endDate={dateRange[1] || undefined}
          onChange={(update: DateRange) => setDateRange(update)}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select date range"
          className="bg-transparent rounded-md pl-3 pr-10 py-2 border border-gray-300 focus:outline-none w-full cursor-pointer"
          renderCustomHeader={(props) => <CustomHeader {...props} />}
          calendarClassName="custom-calendar"
          dayClassName={(date) =>
            date.getDate() === 9 ||
            date.getDate() === 10 ||
            date.getDate() === 11
              ? "bg-orange-500 text-white rounded-full"
              : "hover:bg-gray-100 rounded-full"
          }
        />
      </div>

      {/* Search Button for Desktop */}
      <button
        className="hidden sm:block bg-[#232323] text-white font-segoe rounded-md px-4 py-2 flex items-center text-center justify-center"
        onClick={() => setOpenModal(true)}
      >
        Search
      </button>

      {/* Mobile Modal Button */}
      <Button
        className="fixed top-14 w-full left-0 z-40 sm:hidden bg-white text-gray-400 font-segoe rounded-md px-4 py-4 hover:bg-white"
        onClick={() => setOpenModal(true)}
      >
        Search For a excursion or activity <Search className="ml-4" />
      </Button>

      {/* MUI Modal for Mobile View */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="flex items-center justify-center p-4"
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: 600,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="flex flex-col space-y-4">
            {/* Location Dropdown in Modal */}
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
                className="bg-transparent rounded-md pl-3 pr-10 py-2 border border-gray-300 focus:outline-none w-full"
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
            {/* Date Picker in Modal */}
            <div className="relative w-full">
              <DatePicker
                selectsRange
                startDate={dateRange[0] || undefined}
                endDate={dateRange[1] || undefined}
                onChange={(update: DateRange) => setDateRange(update)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select date range"
                className="bg-transparent rounded-md pl-3 pr-10 py-2 border border-gray-300 focus:outline-none w-full cursor-pointer"
                renderCustomHeader={(props) => <CustomHeader {...props} />}
                calendarClassName="custom-calendar"
                dayClassName={(date) =>
                  date.getDate() === 9 ||
                  date.getDate() === 10 ||
                  date.getDate() === 11
                    ? "bg-orange-500 text-white rounded-full"
                    : "hover:bg-gray-100 rounded-full"
                }
              />
            </div>
            <Button
              onClick={() => setOpenModal(false)}
              variant="contained"
              color="primary"
              fullWidth
              className="bg-custom-gradient"
            >
              Search
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchExcursios;
