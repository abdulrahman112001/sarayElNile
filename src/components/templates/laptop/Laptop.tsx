import React, { useState } from "react";
import LargeScreenSidebar from "@/components/atoms/Filters/LargeScreenSidebar";
import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";
import SearchInput from "@/components/atoms/Search/Search";

type Props = {};

const Laptop = (props: Props) => {
  return (
    <div className="p-6 bg-[#FAFAFA]">
      {/* Search Bar */}
      <div className="mt-20">
        <SearchInput />
      </div>

      {/* Main Content Layout: Filters on the left, Cards on the right */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Filters Sidebar */}
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

        {/* Travel Packages */}
        <div className="w-full md:w-3/4">
          <TravelPackagePage />
        </div>
      </div>
    </div>
  );
};

export default Laptop;
