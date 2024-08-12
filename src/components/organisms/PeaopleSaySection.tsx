import React from "react";
import PeopleSay from "../atoms/PeaopleSay/PeaopleSay";

type Props = {};

const PeopleSaySection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA] pb-16 ">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-10">
        What People Say
      </div>
      <div>
        <PeopleSay />
      </div>
    </div>
  );
};

export default PeopleSaySection;
