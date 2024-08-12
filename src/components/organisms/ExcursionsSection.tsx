import React from "react";
import Excursions from "../atoms/Excursions/Excursions";

type Props = {};

const ExcursionsSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-10">
        Top Excursions
      </div>
      <div>
        <Excursions />
      </div>
    </div>
  );
};

export default ExcursionsSection;
