import React, { useState } from "react";
import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";
import MobileSidebar from "../atoms/Filters/MobileSidebar";
import { useMediaQuery } from "@mui/material";
import LargeScreenSidebar from "../atoms/Filters/LargeScreenSidebar";

const ExcursionsTab: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [price, setPrice] = useState<[number, number]>([0, 1000]);
  const [selectedDestination, setSelectedDestination] =
    useState<string>("Spain");
  const [selectedStarRating, setSelectedStarRating] =
    useState<string>("5 stars");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "Restaurant",
  ]);
  const [selectedAccommodationType, setSelectedAccommodationType] =
    useState<string>("Hotel");

  // Media query to determine if the screen size is 'md' or larger
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as [number, number]); // Ensure newValue is typed correctly
  };

  const handleClearFilters = () => {
    setPrice([0, 1000]);
    setSelectedDestination("");
    setSelectedStarRating("5 stars"); // Default value if null is not a valid state
    setSelectedAmenities([]);
    setSelectedAccommodationType("");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8 px-6">
      {/* Large Screen Sidebar (Visible on large screens) */}
      {isLargeScreen ? (
        <div className="w-full md:w-1/4">
          <LargeScreenSidebar
            price={price}
            selectedDestination={selectedDestination}
            selectedStarRating={selectedStarRating}
            selectedAmenities={selectedAmenities}
            selectedAccommodationType={selectedAccommodationType}
            handlePriceChange={handlePriceChange}
            handleClearFilters={handleClearFilters}
            setSelectedDestination={setSelectedDestination}
            setSelectedStarRating={setSelectedStarRating}
            setSelectedAmenities={setSelectedAmenities}
            setSelectedAccommodationType={setSelectedAccommodationType}
          />
        </div>
      ) : (
        // Mobile Filter Button (Visible on small screens)
        <div className="w-full md:hidden flex justify-center mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-custom-gradient p-3 text-white rounded-md w-full max-w-xs"
          >
            Show Filters
          </button>
        </div>
      )}

      {/* Travel Packages */}
      <div className="w-full md:w-3/4">
        <TravelPackagePage />
      </div>

      {/* Mobile Sidebar (Visible on small screens) */}
      <MobileSidebar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        price={price}
        selectedDestination={selectedDestination}
        selectedStarRating={selectedStarRating}
        selectedAmenities={selectedAmenities}
        selectedAccommodationType={selectedAccommodationType}
        handlePriceChange={handlePriceChange}
        handleClearFilters={handleClearFilters}
        setSelectedDestination={setSelectedDestination}
        setSelectedStarRating={setSelectedStarRating}
        setSelectedAmenities={setSelectedAmenities}
        setSelectedAccommodationType={setSelectedAccommodationType}
      />
    </div>
  );
};

export default ExcursionsTab;
