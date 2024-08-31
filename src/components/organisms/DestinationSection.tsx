import React from "react";
import DestinationRow from "../molecules/Destination/Destination";

type Destination = {
  id: number;
  name: string;
  panar_image: string;
  image: string;
};

type Props = {
  Destinations: Destination[];
};

const DestinationSection: React.FC<Props> = ({ Destinations }) => {
  const mappedDestinations = Destinations?.data?.map((dest) => ({
    name: dest.name,
    panar_image: dest.panar_image,
  }));

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
