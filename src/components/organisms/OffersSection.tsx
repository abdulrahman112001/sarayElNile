import React from "react";
import Offer from "../molecules/Offer/Offer";
import Photo1 from "../../../public/assets/camels.jpeg";
import Photo2 from "../../../public/assets/pyr.jpeg";
type Props = {};

const OffersSection = (props: Props) => {
  return (
    <div className="p-4">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        Special Offers
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/6 p-5">
          <Offer
            imageSrc={Photo1}
            title="Planning a trip to the 2024 Summer Games?"
            description="Brussels is a quick train ride from all the action."
            linkHref="#"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/6 p-5">
          <Offer
            imageSrc={Photo2}
            title="Explore the Pyramids Egypt!"
            description="Discover the ancient wonders and modern attractions."
            linkHref="#"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
