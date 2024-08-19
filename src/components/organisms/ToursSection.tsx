import React from "react";
import Tours from "../molecules/Tours/Tours";

type Props = {};

const ToursSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        The Best Deals
      </div>
      <Tours />
    </div>
  );
};

export default ToursSection;
