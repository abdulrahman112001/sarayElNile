import React, { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import {
  Modal,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

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
const CustomSvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 8.4666665 10.583333625"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path
        d="m 2.3065772,0.5705078 c -0.469247,0 -0.8638101,0.32318405 -0.9823691,0.756543 H 0.7950414 A 0.26458603,0.26457948 0 0 0 0.5294246,1.5926676 0.26458603,0.26457948 0 0 0 0.7950414,1.8562174 h 0.5281332 c 0.1177539,0.434552 0.5133036,0.7591269 0.9834026,0.7591269 0.4653589,0 0.8576151,-0.3182908 0.9797852,-0.7462078 l 4.3868123,-0.012919 a 0.26458603,0.26457948 0 0 0 0.2640674,-0.2651 0.26458603,0.26457948 0 0 0 -0.2640674,-0.2640666 l -4.3795775,0.01292 C 3.1795951,0.89995744 2.7805782,0.57050833 2.3065772,0.5705078 Z m 0,0.5291667 c 0.27569,0 0.4935098,0.2173113 0.4935098,0.4929931 0,0.2756831 -0.2178198,0.4935101 -0.4935098,0.4935101 -0.275689,0 -0.4929931,-0.217827 -0.4929931,-0.4935101 0,-0.2756818 0.2173041,-0.4929931 0.4929931,-0.4929931 z m 2.826701,2.0277833 c -0.4770102,0 -0.8784394,0.3289258 -0.9968386,0.7699788 H 0.7950414 A 0.26458603,0.26457948 0 0 0 0.5294246,4.1615032 0.26458603,0.26457948 0 0 0 0.7950414,4.4266033 h 3.3419152 c 0.1187799,0.4409249 0.5197115,0.7704955 0.9963216,0.7704955 0.4766096,0 0.8775406,-0.3295706 0.9963227,-0.7704955 H 7.6731747 A 0.26458603,0.26457948 0 0 0 7.9372421,4.1615032 0.26458603,0.26457948 0 0 0 7.6731747,3.8974366 H 6.1301168 C 6.0117184,3.4563836 5.6102873,3.1274578 5.1332782,3.1274578 Z m 0,0.5291667 c 0.2827837,0 0.5064281,0.2221008 0.5064281,0.5048787 0,0.2827779 -0.2236444,0.5064289 -0.5064281,0.5064289 -0.2827851,0 -0.5064292,-0.223651 -0.5064292,-0.5064289 0,-0.2827779 0.2236441,-0.5048787 0.5064292,-0.5048787 z m -2.0562055,2.168343 c -0.476454,0 -0.8779092,0.3292729 -0.9968384,0.7699787 H 0.7950414 A 0.26458603,0.26457948 0 0 0 0.5294246,6.8605633 0.26458603,0.26457948 0 0 0 0.7950414,7.1241129 h 1.2846762 c 0.1181719,0.4418161 0.5201071,0.772046 0.9973551,0.772046 0.4772333,0 0.8786525,-0.3302508 0.9968384,-0.772046 H 7.6731747 A 0.26458603,0.26457948 0 0 0 7.9372421,6.8605633 0.26458603,0.26457948 0 0 0 7.6731747,6.5949462 H 4.0733944 C 3.9544494,6.1542634 3.5535109,5.8249675 3.0770727,5.8249675 Z m 0,0.5291666 c 0.2827852,0 0.5064292,0.223651 0.5064292,0.5064292 0,0.2827779 -0.223644,0.5064289 -0.5064292,0.5064289 -0.2827848,0 -0.5064289,-0.223651 -0.5064289,-0.5064289 0,-0.2827782 0.2236441,-0.5064292 0.5064289,-0.5064292 z"
        fill-rule="nonzero"
      />
    </g>
  </svg>
);
const Drops = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
  };

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="flex sm:flex-row flex-wrap items-center gap-3 p-3 px-5">
      {/* Single Button for Mobile Devices */}
      {isMobile ? (
        <>
          <div className="w-7/12 flex justify-between overflow-x-auto">
            {filterOptions.map((filter) => (
              <Select
                key={filter.label}
                value=""
                displayEmpty
                onChange={(event) => handleOptionClick(event.target.value)}
                className="mr-2 border border-transparent"
                sx={{
                  minWidth: 120,
                  "& .MuiSelect-select": {
                    paddingY: "8px",
                    fontSize: "0.875rem",
                  },
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return filter.label;
                  }
                  return selected;
                }}
              >
                {filter.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ))}
          </div>
          <Button
            className="flex justify-between capitalize items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-black"
            onClick={handleOpenModal}
          >
            <CustomSvgIcon />
            All filters
          </Button>
        </>
      ) : (
        // Render Dropdowns as Usual on Larger Screens
        filterOptions.map((filter) => (
          <div key={filter.label} className="relative w-full sm:w-auto">
            <Button
              onClick={() => toggleDropdown(filter.label)}
              className="w-full sm:w-auto flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
            >
              {filter.label}
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
            {openDropdowns[filter.label] && (
              <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {filter.options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))
      )}

      {/* Modal for Mobile */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="flex items-end justify-center"
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 600,
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
                <Button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                >
                  {option}
                </Button>
              ))}
            </div>
          ))}
          <Button
            onClick={() => setOpenModal(false)}
            className="bg-custom-gradient p-3 px-6 text-white fixed bottom-0 left-0 right-0 rounded-t-md"
          >
            Apply
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Drops;
