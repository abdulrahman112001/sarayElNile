import React from "react";
import BookingForm from "@/components/atoms/BookForm";
import MyPage from "../MyPage";

const ImageGallery: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FAFAFA] p-4 md:px-16">
      {/* Main Content Area */}
      <div className="w-full md:w-2/3 p-2 md:pl-12">
        <MyPage />
      </div>

      {/* Placeholder for another component */}
      <div className="w-full md:w-1/3 p-2 pt-4 md:pt-28">
        <BookingForm />
      </div>
    </div>
  );
};

export default ImageGallery;
