import FilterSidebar from "@/components/atoms/Filters/Filters";
import TravelPackagePage from "@/components/atoms/TravelCardSearch/TravelCardSearch";
import React from "react";

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
