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

const MyPage: React.FC = () => {
  return (
    <div>
      <ImageGallery
        title="Luxury Beach Resort"
        breadcrumb={["Home", "Destinations", "Luxury Beach Resort"]}
        mainContent="Experience the ultimate luxury at our beach resort with stunning ocean views, world-class amenities, and personalized service."
      />
      <TripInfo />
      <Included />
      <TourItinerary />
      <PricePlans />
      <UserProfilePage />
      <FAQ />
      <Reviews />
      <RandomButtons />
    </div>
  );
};

export default MyPage;
