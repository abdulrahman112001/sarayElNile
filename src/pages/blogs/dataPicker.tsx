import { useState } from "react";

type Day = number | null;
type Range = number[];

const Calendar = () => {
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

  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [days, setDays] = useState<number[]>(
    Array.from(
      { length: daysInMonth(selectedMonth, selectedYear) },
      (_, i) => i + 1
    )
  );
  const [selectedDays, setSelectedDays] = useState<Day[]>([]);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [startDay, setStartDay] = useState<Day>(null);
  const [hoveredDay, setHoveredDay] = useState<Day>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const handleMonthChange = (direction: "next" | "prev") => {
    let newMonth = selectedMonth;
    let newYear = selectedYear;

    if (direction === "next") {
      newMonth++;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
    } else {
      newMonth--;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
    }

    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
    setDays(
      Array.from({ length: daysInMonth(newMonth, newYear) }, (_, i) => i + 1)
    );
    setSelectedDays([]);
    setStartDay(null);
    setHoveredDay(null);

    console.log(`Selected month: ${months[newMonth]} ${newYear}`);
  };

  const handleMouseDown = (day: Day) => {
    setIsSelecting(true);
    setStartDay(day);
    setSelectedDays([day]);
    setHoveredDay(null);
  };

  const handleMouseEnter = (day: Day) => {
    if (isSelecting && startDay !== null) {
      setHoveredDay(day);
      const range = getRange(startDay, day);
      setSelectedDays(range);
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    setShowConfirmation(true);
  };

  const getRange = (start: Day, end: Day): Range => {
    if (start === null || end === null) return [];
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
  };

  const handleConfirmSelection = () => {
    console.log("Selected days confirmed:", selectedDays);
    setSelectedDays([]);
    setShowConfirmation(false);
  };

  const renderDayButtons = () => {
    const firstDayOfMonth = getFirstDayOfMonth(selectedMonth, selectedYear);

    const daysArray: (number | null)[] = [
      ...Array(firstDayOfMonth).fill(null),
      ...days,
    ];

    return daysArray.map((day, index) => {
      const isSelected = day !== null && selectedDays.includes(day);
      const isHovered =
        day !== null &&
        hoveredDay !== null &&
        selectedDays.includes(day) &&
        day >= Math.min(startDay ?? 0, hoveredDay ?? 0) &&
        day <= Math.max(startDay ?? 0, hoveredDay ?? 0);

      return (
        <button
          key={index}
          type="button"
          className={`w-10 h-10 flex justify-center items-center rounded-full text-gray-800 ${
            day !== null
              ? isSelected
                ? "bg-yellow-600 text-white"
                : isHovered
                ? "bg-yellow-200"
                : "hover:bg-yellow-100"
              : "text-transparent"
          } ${
            isHovered ? "ring-2 ring-yellow-400" : ""
          } dark:text-neutral-200 focus:outline-none dark:bg-neutral-800 dark:hover:bg-neutral-700`}
          disabled={day === null}
          onMouseDown={() => handleMouseDown(day)}
          onMouseEnter={() => handleMouseEnter(day)}
          onMouseUp={handleMouseUp}
        >
          {day ?? ""}
        </button>
      );
    });
  };

  return (
    <div className="relative">
      <div className="rounded-lg shadow-xl border border-red-800 mb-3 ml-3 bg-white dark:bg-neutral-800 w-80 h-auto mt-5 z-50 space-y-4">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="text-gray-800 hover:bg-gray-100 rounded-full p-1 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transition ease-in-out duration-200"
            aria-label="Previous Month"
            onClick={() => handleMonthChange("prev")}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            {months[selectedMonth]} {selectedYear}
          </h2>
          <button
            type="button"
            className="text-gray-800 hover:bg-gray-100 rounded-full p-1 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transition ease-in-out duration-200"
            aria-label="Next Month"
            onClick={() => handleMonthChange("next")}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 p-2">{renderDayButtons()}</div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Confirm Selection
            </h3>
            <div className="mt-2">
              <p className="text-gray-700 dark:text-neutral-300">
                Are you sure you want to confirm the selected days?
              </p>
              <ul className="list-disc list-inside mt-2">
                {selectedDays.map((day) => (
                  <li key={day}>Day {day}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
                onClick={handleConfirmSelection}
              >
                Confirm
              </button>
              <button
                type="button"
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-600"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
