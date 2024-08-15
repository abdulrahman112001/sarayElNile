import React, { useState } from "react";
import { Modal, Slide, Radio, Checkbox, Slider, Button } from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-segoe text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp size={20} color="#EAB308" />
        ) : (
          <ChevronDown size={20} color="#EAB308" />
        )}
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

const FilterSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState([0, 500]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedStarRating, setSelectedStarRating] = useState<string | null>(
    null
  );
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedAccommodationType, setSelectedAccommodationType] = useState<
    string | null
  >(null);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const handleClearFilters = () => {
    setPrice([0, 500]);
    setSelectedDestination("");
    setSelectedStarRating(null);
    setSelectedAmenities([]);
    setSelectedAccommodationType(null);
  };

  return (
    <div>
      {/* Sidebar visible on larger screens */}
      <div className="hidden md:block p-4 h-full overflow-y-auto rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-segoe">Applied filters</h2>
          <Button
            className="text-red-600 hover:text-red-500 font-segoe"
            onClick={handleClearFilters}
          >
            Clear All
          </Button>
        </div>

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
            {["Hotel", "Apartment", "Resort", "Villa", "Bed & Breakfast"].map(
              (type) => (
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
              )
            )}
          </div>
        </FilterSection>

        <div className="flex justify-center mt-4">
          <Button className="p-4 w-full bg-custom-gradient text-white rounded-md hover:bg-yellow-500 transition duration-300 font-segoe">
            Apply
          </Button>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <Button
        className="p-4 w-full capitalize text-nowrap bg-custom-gradient text-white rounded-md hover:bg-yellow-500 transition duration-300  block md:hidden"
        onClick={() => setIsModalOpen(true)}
      >
        Show Filters
      </Button>

      {/* Modal containing the filters (only on small screens) */}
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

            <div className="flex-grow overflow-y-auto">
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

            <div
              className="flex justify-center sticky bottom-0 bg-white p-2 pb-0"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <Button className="p-2 w-full bg-custom-gradient text-white rounded-md hover:bg-yellow-500 transition duration-300 font-segoe">
                Apply
              </Button>
            </div>
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default FilterSidebar;
