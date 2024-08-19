import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomHeader from "./CustomHeader";
import LocationDropdown from "./LocationDropdown";

type MobileModalProps = {
  open: boolean;
  onClose: () => void;
  location: string;
  setLocation: (loc: string) => void;
  dateRange: [Date | null, Date | null];
  setDateRange: (range: [Date | null, Date | null]) => void;
};

const MobileModal: React.FC<MobileModalProps> = ({
  open,
  onClose,
  location,
  setLocation,
  dateRange,
  setDateRange,
}) => (
  <Modal
    open={open}
    onClose={onClose}
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
        <LocationDropdown location={location} setLocation={setLocation} />
        {/* Date Picker in Modal */}
        <div className="relative w-full">
          <DatePicker
            selectsRange
            startDate={dateRange[0] || undefined}
            endDate={dateRange[1] || undefined}
            onChange={(update: [Date | null, Date | null]) =>
              setDateRange(update)
            }
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
          onClick={onClose}
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

export default MobileModal;
