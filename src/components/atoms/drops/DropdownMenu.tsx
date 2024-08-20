import React from "react";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChevronDown } from "lucide-react";

interface DropdownMenuProps {
  label: string;
  options: string[];
  openDropdown: boolean;
  onClick: () => void;
  onSelectChange: (event: SelectChangeEvent<string>) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  options,
  openDropdown,
  onClick,
  onSelectChange,
}) => (
  <div className="relative w-full sm:w-auto">
    <Button
      onClick={onClick}
      className="w-full sm:w-auto flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
    >
      {label}
      <ChevronDown className="w-5 h-5 ml-2" />
    </Button>
    {openDropdown && (
      <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() =>
              onSelectChange({
                target: { value: option },
              } as SelectChangeEvent<string>)
            }
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
          >
            {option}
          </Button>
        ))}
      </div>
    )}
  </div>
);

export default DropdownMenu;
