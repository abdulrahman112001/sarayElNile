import React from "react";
import ImageGallery from "../organisms/ImageGallery";
import TripInfo from "./Trip";
import Included from "./Included";
import TourItinerary from "./Itinerary";
import FAQ from "./Freq";
import Reviews from "./Reviews";
import RandomButtons from "./RandomButtons";
import UserProfilePage from "./Travelers";
import PricePlans from "./PriceSection";

const MyPage: React.FC = ({DetailTour}) => {
  return (
    <div>
      <ImageGallery
        title={DetailTour?.title}
        breadcrumb={["Home", "Destinations", "Luxury Beach Resort"]}
        mainContent={DetailTour?.description}
        images={DetailTour?.images}
      />
      <TripInfo DetailTour={DetailTour}/>
      <Included DetailTour={DetailTour}/>
      <TourItinerary DetailTour={DetailTour}/>
      <PricePlans DetailTour={DetailTour}/>
      <UserProfilePage />
      <FAQ DetailTour={DetailTour} />
      <Reviews />
      <RandomButtons DetailTour={DetailTour}/>
    </div>
  );
};

export default MyPage;
