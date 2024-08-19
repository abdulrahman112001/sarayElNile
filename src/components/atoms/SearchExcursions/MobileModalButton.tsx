import React from "react";
import { Search } from "lucide-react";
import Button from "@mui/material/Button";

type MobileModalButtonProps = {
  openModal: () => void;
};

const MobileModalButton: React.FC<MobileModalButtonProps> = ({ openModal }) => (
  <Button
    className="fixed top-14 w-full left-0 z-40 sm:hidden bg-white text-gray-400 font-segoe rounded-md px-4 py-4 hover:bg-white"
    onClick={openModal}
  >
    Search For a excursion or activity <Search className="ml-4" />
  </Button>
);

export default MobileModalButton;
