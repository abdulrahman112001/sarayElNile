import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Dropdown from "./Dropdown";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { Dayjs } from "dayjs";
import DatePickerModal from "@/components/molecules/dataPicker";

const locations: string[] = ["New York", "London", "Paris", "Tokyo"];
const months: string[] = [
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

export default function BookingFormDesktop() {
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(1);
  const [infants, setInfants] = useState<number>(0);
  const [location, setLocation] = useState<string>("Where");
  const [month, setMonth] = useState<string>("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] =
    useState<boolean>(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] =
    useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [rangeDays, setRangeDays] = useState<number>(1);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleDateChange = (date: Dayjs | null, days: number) => {
    setSelectedDate(date);
    setRangeDays(days);
  };

  return (
    <div className="hidden md:block p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-sm text-gray-500 mb-2">From $2000</h2>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">US $1000</h1>

      <form className="space-y-6">
        <Dropdown
          items={locations}
          selectedItem={location}
          onSelect={setLocation}
          placeholder="Where"
          isDropdownOpen={isLocationDropdownOpen}
          setIsDropdownOpen={setIsLocationDropdownOpen}
        />

        <Dropdown
          items={months}
          selectedItem={month}
          onSelect={setMonth}
          placeholder="Select month"
          isDropdownOpen={isMonthDropdownOpen}
          setIsDropdownOpen={setIsMonthDropdownOpen}
        />

        <div className="relative flex items-center">
          <PhoneInput
            placeholder="Enter Your Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry="US"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Start Date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
            value={
              selectedDate
                ? `${selectedDate.format("YYYY-MM-DD")} to ${selectedDate
                    .add(rangeDays - 1, "day")
                    .format("YYYY-MM-DD")}`
                : "Select a date range"
            }
            onClick={handleOpenModal}
          />
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={handleOpenModal}
          />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Select Your Nationality"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <textarea
          placeholder="Tell us More Details"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>

        <div className="space-y-4">
          {[
            { label: "Adults", value: adults, setValue: setAdults },
            { label: "Children", value: children, setValue: setChildren },
            { label: "Infants", value: infants, setValue: setInfants },
          ].map(({ label, value, setValue }) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-gray-700">{`Number of ${label}`}</span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setValue(Math.max(0, value - 1))}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                >
                  <Minus size={16} />
                </button>
                <span>{value}</span>
                <button
                  type="button"
                  onClick={() => setValue(value + 1)}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </form>

      <div className="pt-4">
        <button className="w-full p-3 bg-[#986518] text-white rounded-md hover:bg-yellow-700 transition duration-150">
          Submit
        </button>
      </div>

      <DatePickerModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onDateChange={handleDateChange}
      />
    </div>
  );
}
