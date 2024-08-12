import React from "react";
import Adventures from "../atoms/Adventures/Adventures";

type Props = {};

const AdventuresSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-16">
        Adventures For Everyone
      </div>
      <div>
        <Adventures />
      </div>
    </div>
  );
};

export default AdventuresSection;
