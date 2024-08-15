import React, { useState } from "react";
import { Button, Modal, Slide } from "@mui/material";
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

const Dropdown = ({
  items,
  selectedItem,
  onSelect,
  placeholder,
  isDropdownOpen,
  setIsDropdownOpen,
}) => (
  <div className="relative">
    <input
      type="text"
      value={selectedItem}
      onFocus={() => setIsDropdownOpen(true)}
      onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
    />
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    {isDropdownOpen && (
      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
        <div className="p-2 max-h-60 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item}
              className="px-4 py-2 hover:bg-yellow-200 cursor-pointer"
              onClick={() => {
                onSelect(item);
                setIsDropdownOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function BookingForm() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [location, setLocation] = useState("Where");
  const [month, setMonth] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Button to open the modal (visible only on small screens) */}
      <Button
        className="py-2 capitalize w-full bg-custom-gradient text-white rounded-none hover:bg-yellow-500 transition duration-300 font-segoe fixed top-16 right-0 z-40 md:hidden"
        onClick={() => setIsModalOpen(true)}
      >
        Open Booking Form
      </Button>

      {/* Modal containing the booking form */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="flex items-center justify-center p-4 md:hidden"
      >
        <Slide direction="up" in={isModalOpen} mountOnEnter unmountOnExit>
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <h2 className="text-sm text-gray-500 mb-2">From $2000</h2>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                US $1000
              </h1>

              <form className="space-y-6">
                {/* Location Dropdown */}
                <Dropdown
                  items={locations}
                  selectedItem={location}
                  onSelect={(item) => setLocation(item)}
                  placeholder="Where"
                  isDropdownOpen={isLocationDropdownOpen}
                  setIsDropdownOpen={setIsLocationDropdownOpen}
                />

                {/* Month Dropdown */}
                <Dropdown
                  items={months}
                  selectedItem={month}
                  onSelect={(item) => setMonth(item)}
                  placeholder="Select month"
                  isDropdownOpen={isMonthDropdownOpen}
                  setIsDropdownOpen={setIsMonthDropdownOpen}
                />

                {/* Input fields */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                  <input
                    type="text"
                    placeholder="Select Your Nationality"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Textarea for additional details */}
                <textarea
                  placeholder="Tell us More Details"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                ></textarea>

                {/* Number selection for Adults, Children, and Infants */}
                <div className="space-y-4">
                  {[
                    { label: "Adults", value: adults, setValue: setAdults },
                    {
                      label: "Children",
                      value: children,
                      setValue: setChildren,
                    },
                    { label: "Infants", value: infants, setValue: setInfants },
                  ].map(({ label, value, setValue }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{`Number of ${label}`}</span>
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => setValue(Math.max(0, value - 1))}
                          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                        >
                          <Minus size={16} />
                        </Button>
                        <span>{value}</span>
                        <Button
                          onClick={() => setValue(value + 1)}
                          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkbox options */}
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
              </form>
            </div>

            {/* Sticky Button */}
            <div className="pt-4">
              <Button className="w-full p-3 bg-[#986518] text-white rounded-md hover:bg-yellow-700 transition duration-150">
                Book Now
              </Button>
            </div>
          </div>
        </Slide>
      </Modal>

      <div className="hidden md:block p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-sm text-gray-500 mb-2">From $2000</h2>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">US $1000</h1>

        <form className="space-y-6">
          {/* Location Dropdown */}
          <Dropdown
            items={locations}
            selectedItem={location}
            onSelect={(item) => setLocation(item)}
            placeholder="Where"
            isDropdownOpen={isLocationDropdownOpen}
            setIsDropdownOpen={setIsLocationDropdownOpen}
          />

          {/* Month Dropdown */}
          <Dropdown
            items={months}
            selectedItem={month}
            onSelect={(item) => setMonth(item)}
            placeholder="Select month"
            isDropdownOpen={isMonthDropdownOpen}
            setIsDropdownOpen={setIsMonthDropdownOpen}
          />

          {/* Input fields */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
            <input
              type="text"
              placeholder="Select Your Nationality"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Textarea for additional details */}
          <textarea
            placeholder="Tell us More Details"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>

          {/* Number selection for Adults, Children, and Infants */}
          <div className="space-y-4">
            {[
              { label: "Adults", value: adults, setValue: setAdults },
              { label: "Children", value: children, setValue: setChildren },
              { label: "Infants", value: infants, setValue: setInfants },
            ].map(({ label, value, setValue }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-gray-700">{`Number of ${label}`}</span>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setValue(Math.max(0, value - 1))}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                  >
                    <Minus size={16} />
                  </Button>
                  <span>{value}</span>
                  <Button
                    onClick={() => setValue(value + 1)}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkbox options */}
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
        </form>

        <Button className="w-full p-3 bg-[#986518] text-white rounded-md hover:bg-yellow-700 transition duration-150">
          Book Now
        </Button>
      </div>
    </div>
  );
}
