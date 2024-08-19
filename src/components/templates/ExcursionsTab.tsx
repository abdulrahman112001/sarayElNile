import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";
import React from "react";
import FilterSidebar from "../atoms/Filters/FilterSidebar";

type Props = {};

const ExcursionsTab = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8 px-6">
      {/* Filters Sidebar */}
      <div className="w-full md:w-1/4">
        <FilterSidebar />
      </div>

      {/* Travel Packages */}
      <div className="w-full md:w-3/4">
        <TravelPackagePage />
      </div>
    </div>
  );
};

export default ExcursionsTab;
