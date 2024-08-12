import React from "react";
import Tours from "../atoms/Tours/Tours";

type Props = {};

const ToursSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-10">
        Tours Packages
      </div>
      <Tours />
    </div>
  );
};

export default ToursSection;
