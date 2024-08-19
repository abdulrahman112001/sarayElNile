import React from "react";
import { Modal, Slide, Radio, Checkbox, Slider, Button } from "@mui/material";
import FilterSection from "./FilterSection";

interface MobileSidebarProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  price: number[];
  selectedDestination: string;
  selectedStarRating: string | null;
  selectedAmenities: string[];
  selectedAccommodationType: string | null;
  handlePriceChange: (event: Event, newValue: number | number[]) => void;
  handleClearFilters: () => void;
  setSelectedDestination: (value: string) => void;
  setSelectedStarRating: (value: string | null) => void;
  setSelectedAmenities: (
    value: string[] | ((prev: string[]) => string[])
  ) => void;
  setSelectedAccommodationType: (value: string | null) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isModalOpen,
  setIsModalOpen,
  price,
  selectedDestination,
  selectedStarRating,
  selectedAmenities,
  selectedAccommodationType,
  handlePriceChange,
  handleClearFilters,
  setSelectedDestination,
  setSelectedStarRating,
  setSelectedAmenities,
  setSelectedAccommodationType,
}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="flex items-center justify-center p-4 md:hidden"
    >
      <Slide direction="up" in={isModalOpen} mountOnEnter unmountOnExit>
        <div className="bg-white rounded-lg p-4 max-w-md w-full h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-segoe">Applied filters</h2>
            <Button
              className="text-red-600 hover:text-red-500 font-segoe"
              onClick={handleClearFilters}
            >
              Clear All
            </Button>
          </div>

          <div className="overflow-y-auto">
            <FilterSection title="Destinations" defaultOpen={true}>
              <div className="space-y-2">
                {["Spain", "Italy", "Greece", "Turkey", "Croatia"].map(
                  (country) => (
                    <div key={country} className="flex items-center">
                      <Radio
                        checked={selectedDestination === country}
                        onChange={() => setSelectedDestination(country)}
                        sx={{
                          color: "#9D6C1E",
                          "&.Mui-checked": {
                            color: "#9D6C1E",
                          },
                        }}
                      />
                      <span className="ml-2 font-segoe">{country}</span>
                    </div>
                  )
                )}
              </div>
            </FilterSection>

            <FilterSection title="Price">
              <div className="px-2">
                <Slider
                  value={price}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  sx={{
                    color: "#9D6C1E",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#9D6C1E",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#9D6C1E",
                    },
                  }}
                />
                <div className="flex justify-between mt-2 font-segoe">
                  <span>${price[0]}</span>
                  <span>${price[1]}</span>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Star rating">
              <div className="space-y-2">
                {["5 stars", "4 stars", "3 stars", "2 stars", "1 star"].map(
                  (rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox
                        checked={selectedStarRating === rating}
                        onChange={() => setSelectedStarRating(rating)}
                        sx={{
                          color: "#9D6C1E",
                          "&.Mui-checked": {
                            color: "#9D6C1E",
                          },
                        }}
                      />
                      <span className="ml-2 font-segoe">{rating}</span>
                    </div>
                  )
                )}
              </div>
            </FilterSection>

            <FilterSection title="Amenities">
              <div className="space-y-2">
                {[
                  "Restaurant",
                  "Hotel bar",
                  "Free breakfast",
                  "Room service",
                  "Fitness center",
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <Checkbox
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => {
                        setSelectedAmenities((prev) =>
                          prev.includes(amenity)
                            ? prev.filter((item) => item !== amenity)
                            : [...prev, amenity]
                        );
                      }}
                      sx={{
                        color: "#9D6C1E",
                        "&.Mui-checked": {
                          color: "#9D6C1E",
                        },
                      }}
                    />
                    <span className="ml-2 font-segoe">{amenity}</span>
                  </div>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Accommodation Type">
              <div className="space-y-2">
                {[
                  "Hotel",
                  "Apartment",
                  "Resort",
                  "Villa",
                  "Bed & Breakfast",
                ].map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      checked={selectedAccommodationType === type}
                      onChange={() => setSelectedAccommodationType(type)}
                      sx={{
                        color: "#9D6C1E",
                        "&.Mui-checked": {
                          color: "#9D6C1E",
                        },
                      }}
                    />
                    <span className="ml-2 font-segoe">{type}</span>
                  </div>
                ))}
              </div>
            </FilterSection>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="p-4 w-full bg-custom-gradient text-white rounded-md hover:bg-yellow-500 transition duration-300 font-segoe"
            >
              Apply
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default MobileSidebar;
