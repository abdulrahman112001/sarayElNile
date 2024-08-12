import React from "react";
import Attractions from "../atoms/Attractions/Attractions";

type Props = {};

const AttractionsSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-10">
        Attractions in Egypt
      </div>
      <div>
        <Attractions />
      </div>
    </div>
  );
};

export default AttractionsSection;
