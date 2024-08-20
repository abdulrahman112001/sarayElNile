import React, { useState } from "react";
import { SelectChangeEvent, useMediaQuery, useTheme } from "@mui/material";
import MobileFilter from "./MobileFilter";
import DropdownMenu from "./DropdownMenu";
import FilterModal from "./FilterModal";

const filterOptions = [
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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = (): void => setOpenModal(true);

  const handleCloseModal = (): void => setOpenModal(false);

  const handleOptionClick = (option: string): void => {
    console.log("Selected option:", option);
  };

  const toggleDropdown = (label: string): void => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>): void => {
    handleOptionClick(event.target.value);
  };

  return (
    <div className="flex sm:flex-row flex-wrap items-center gap-3 p-3 px-5">
      {isMobile ? (
        <MobileFilter
          options={filterOptions}
          onSelectChange={handleSelectChange}
          onOpenModal={handleOpenModal}
        />
      ) : (
        filterOptions.map((filter) => (
          <DropdownMenu
            key={filter.label}
            label={filter.label}
            options={filter.options}
            openDropdown={openDropdowns[filter.label] || false}
            onClick={() => toggleDropdown(filter.label)}
            onSelectChange={handleSelectChange}
          />
        ))
      )}

      <FilterModal
        open={openModal}
        onClose={handleCloseModal}
        options={filterOptions}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default Drops;
