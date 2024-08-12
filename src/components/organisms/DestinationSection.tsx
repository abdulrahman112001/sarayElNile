import React from "react";
import Destination from "../atoms/Destination/Destination";

type Props = {};

const DestinationSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-10">
        Destination
      </div>
      <div>
        <Destination />
      </div>
    </div>
  );
};

export default DestinationSection;
