import React, { useState } from "react";
import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";

import MobileSidebar from "../atoms/Filters/MobileSidebar";
import { useMediaQuery } from "@mui/material";
import LargeScreenSidebar from "../atoms/Filters/LargeScreenSidebar";

type Props = {};

const ExcursionsTab = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Media query to determine if the screen size is 'md' or larger
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8 px-6">
      {/* Large Screen Sidebar (Visible on large screens) */}
      {isLargeScreen ? (
        <div className="w-full md:w-1/4">
          <LargeScreenSidebar
            price={[0, 1000]}
            selectedDestination="Spain"
            selectedStarRating="5 stars"
            selectedAmenities={["Restaurant"]}
            selectedAccommodationType="Hotel"
            handlePriceChange={() => {}}
            handleClearFilters={() => {}}
            setSelectedDestination={() => {}}
            setSelectedStarRating={() => {}}
            setSelectedAmenities={() => {}}
            setSelectedAccommodationType={() => {}}
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
        price={[0, 1000]} // Replace with actual default value or state
        selectedDestination="" // Replace with actual default value or state
        selectedStarRating={null} // Replace with actual default value or state
        selectedAmenities={[]} // Replace with actual default value or state
        selectedAccommodationType={null} // Replace with actual default value or state
        handlePriceChange={(event, newValue) => {
          /* handle price change */
        }}
        handleClearFilters={() => {
          /* handle clear filters */
        }}
        setSelectedDestination={(value) => {
          /* set destination */
        }}
        setSelectedStarRating={(value) => {
          /* set star rating */
        }}
        setSelectedAmenities={(value) => {
          /* set amenities */
        }}
        setSelectedAccommodationType={(value) => {
          /* set accommodation type */
        }}
      />
    </div>
  );
};

export default ExcursionsTab;
