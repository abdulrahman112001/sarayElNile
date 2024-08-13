import React from "react";

import BookingForm from "@/components/atoms/BookForm";
import MyPage from "../MyPage";

const ImageGallery: React.FC = () => {
  return (
    <div className="flex bg-[#FAFAFA] px-16">
      {/* Main Content Area */}
      <div className="w-2/3 p-2 pl-12">
        <MyPage />
      </div>

      {/* Placeholder for another component */}
      <div className="w-1/3 p-2 pt-28">
        <BookingForm />
      </div>
    </div>
  );
};

export default ImageGallery;
