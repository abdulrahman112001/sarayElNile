import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

interface DropdownMenuProps {
  label: string;
  options: string[];
  openDropdown: boolean;
  selectedOption: string;
  onClick: () => void;
  onSelectChange: (event: SelectChangeEvent<string>) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  options,
  openDropdown,
  selectedOption,
  onClick,
  onSelectChange,
}) => (
  <div className="relative w-full sm:w-[100px] lg:w-[200px]">
    <FormControl fullWidth>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId="dropdown-label"
        value={selectedOption}
        onChange={onSelectChange}
        open={openDropdown}
        onClick={onClick}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm"
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 300, // Set a maximum height for the dropdown menu
              border: "1px solid #ddd",
              borderRadius: "4px",
            },
          },
        }}
        renderValue={(selected) => (
          <div className="flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-800">
            {selected || label}
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);

export default DropdownMenu;
