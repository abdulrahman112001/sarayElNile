import React from "react";
import PeopleSay from "../atoms/PeaopleSay/PeaopleSay";

type Props = {};

const PeopleSaySection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA] pb-16 ">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        What People Say
      </div>
      <div>
        <PeopleSay />
      </div>
    </div>
  );
};

export default PeopleSaySection;
