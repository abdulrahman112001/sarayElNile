import React, { useState } from "react";
import MobileSidebar from "@/components/atoms/Filters/MobileSidebar";
import MobileSearchModal from "@/components/atoms/Search/MobileSearchModal";
import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";

type Props = {};

const Mobile = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {};
  const handleClearFilters = () => {};
  const setSelectedDestination = (value: string) => {};
  const setSelectedStarRating = (value: string | null) => {};
  const setSelectedAmenities = (
    value: string[] | ((prev: string[]) => string[])
  ) => {};
  const setSelectedAccommodationType = (value: string | null) => {};

  return (
    <div className="bg-[#FAFAFA] h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 bg-[#FAFAFA] p-6 z-10">
        <div className="mt-16 flex justify-center items-center gap-3 w-full">
          <div className="">
            <MobileSearchModal />
          </div>
          <div className="">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-custom-gradient text-nowrap mb-1 p-3 text-white rounded-md"
            >
              Open Filter
            </button>
            <MobileSidebar
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              price={[0, 1000]}
              selectedDestination="Spain"
              selectedStarRating="5 stars"
              selectedAmenities={["Restaurant"]}
              selectedAccommodationType="Hotel"
              handlePriceChange={handlePriceChange}
              handleClearFilters={handleClearFilters}
              setSelectedDestination={setSelectedDestination}
              setSelectedStarRating={setSelectedStarRating}
              setSelectedAmenities={setSelectedAmenities}
              setSelectedAccommodationType={setSelectedAccommodationType}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto mt-[calc(40px+6rem)]">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
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
