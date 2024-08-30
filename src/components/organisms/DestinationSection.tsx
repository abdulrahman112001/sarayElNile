import React from "react";
import DestinationRow from "../molecules/Destination/Destination";

type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
};

type Props = {
  Destinations: Destination[] | undefined; // Allow undefined in case of missing data
};

const DestinationSection: React.FC<Props> = ({ Destinations }) => {
  // Ensure Destinations is an array, or provide an empty array as a fallback
  const mappedDestinations = Array.isArray(Destinations)
    ? Destinations.map((dest) => ({
        name: dest.name,
        panar_image: dest.image, // Map the image to panar_image
      }))
    : [];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        Destination
      </div>
      <div>
        <DestinationRow Destinations={mappedDestinations} />
      </div>
    </div>
  );
};

export default DestinationSection;
