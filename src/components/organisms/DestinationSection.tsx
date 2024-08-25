import React from "react";
import Destination from "../molecules/Destination/Destination";

type Props = {};

const DestinationSection = ({Destinations}: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        Destination
      </div>
      <div>
        <Destination 
        Destinations={Destinations}
        />
      </div>
    </div>
  );
};

export default DestinationSection;
