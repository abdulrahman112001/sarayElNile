import FilterSidebar from "@/components/atoms/Filters/Filters";
import SearchInput from "@/components/atoms/Search/Search";
import TravelPackagePage from "@/components/atoms/TravelCardSearch/TravelCardSearch";
import React from "react";

type Props = {};

const Mobile = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA] h-screen flex flex-col">
      {/* Fixed Search Bar and Filter */}
      <div className="fixed top-0 left-0 right-0 bg-[#FAFAFA] p-6 z-10">
        <div className="mt-20 flex justify-between gap-3 w-full">
          <div className="">
            <SearchInput />
          </div>
          <div className="">
            <FilterSidebar />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-[calc(50px+6rem)]">
        {" "}
        {/* Adjust this value based on the height of your fixed div */}
        <div className="p-6">
          {/* Main Content Layout: Filters on the left, Cards on the right */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Travel Packages */}
            <div className="w-full md:w-3/4">
              <TravelPackagePage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
