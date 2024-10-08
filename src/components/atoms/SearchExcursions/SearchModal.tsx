import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocationDropdown from "./LocationDropdown";
import dayjs from "dayjs";

type DateRange = [Date | null, Date | null];

interface SearchModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  location: string;
  setLocation: (location: string) => void;
  locations: string[];
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  setOpenDatePickerModal: (open: boolean) => void; // Prop for opening DatePickerModal
}

const SearchModal: React.FC<SearchModalProps> = ({
  openModal,
  setOpenModal,
  location,
  setLocation,
  locations,
  dateRange,
  setDateRange,
  setOpenDatePickerModal,
}) => {
  const formatDateRange = () => {
    const [start, end] = dateRange;
    if (start && end) {
      return `${start.toLocaleDateString()} to ${end.toLocaleDateString()}`;
    }
    return "Select dates";
  };

  return (
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
          <LocationDropdown
            location={location}
            setLocation={setLocation}
            locations={locations}
          />
          <input
            type="text"
            readOnly
            value={formatDateRange()}
            onClick={() => setOpenDatePickerModal(true)} // Open DatePickerModal
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[200px] cursor-pointer"
          />
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
  );
};

export default SearchModal;
