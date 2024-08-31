import React from "react";

import MyPage from "@/components/templates/MyPage";
import BookingFormModal from "@/components/atoms/BookForm/BookingFormModal";
import BookingFormDesktop from "@/components/atoms/BookForm/BookingFormDesktop";
import fetchData from "@/helper/FetchData";

const ImageGallery: React.FC = ({DetailTour}) => {
  console.log("🚀 ~ DetailTour:", DetailTour)
  return (
    <div className="flex flex-col md:flex-row bg-[#FAFAFA] p-4 md:px-16">
      {/* Booking Form First on Mobile Devices */}
      <div className="w-full md:w-1/3 p-2 pt-20 md:pt-28 order-1 md:order-2">
        <BookingFormModal />
        <BookingFormDesktop  />
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 md:mt-0 mt-3 p-2 md:pl-12 md:pt-28 order-2 md:order-1">
        <MyPage  DetailTour={DetailTour?.data}/>
      </div>
    </div>
  );
};

export default ImageGallery;
export async function getServerSideProps(context) {
  const { id } = context.params;
  const DetailTour = await fetchData(`tours/${id}`);

  return {
    props: {
      DetailTour,
    },
  };
}