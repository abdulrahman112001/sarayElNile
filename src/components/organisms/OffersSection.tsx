import React from "react";
import Offer from "../atoms/Offer/Offer";

type Props = {};

const OffersSection = (props: Props) => {
  return (
    <div className="p-4">
      <div className="text-center text-black font-segoe font-semi-bold text-special-offer p-10">
        Special Offers
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/6 p-5">
          <Offer />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/6 p-5">
          <Offer />
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
