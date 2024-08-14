import React, { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { Modal, Box, Button, useMediaQuery, useTheme } from "@mui/material";

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
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOptionClick = (option: string) => {
    console.log("Selected option:", option);
    setOpenModal(false); // Close the modal after selecting an option
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 p-3 px-5">
      {/* Clear All Button */}
      <button className="w-full sm:w-auto flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
        <Clock className="w-5 h-5 mr-2" />
        Clear all
      </button>

      {/* Single Button for Mobile Devices */}
      {isMobile ? (
        <button
          className="w-full sm:w-auto flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
          onClick={handleOpenModal}
        >
          Filters
          <ChevronDown className="w-5 h-5 ml-2" />
        </button>
      ) : (
        // Render Dropdowns as Usual on Larger Screens
        filterOptions.map((filter) => (
          <div key={filter.label} className="relative w-full sm:w-auto">
            <button
              onClick={() => console.log(`Opened ${filter.label}`)}
              className="w-full sm:w-auto flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
            >
              {filter.label}
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        ))
      )}

      {/* Modal for Mobile */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            width: "90%",
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "80%",
            overflowY: "auto",
          }}
        >
          {filterOptions.map((filter) => (
            <div key={filter.label} className="mb-4">
              <h3 className="font-semibold mb-2">{filter.label}</h3>
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
          ))}
          <button
            className="bg-custom-gradient p-3 px-6 text-white"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Drops;
