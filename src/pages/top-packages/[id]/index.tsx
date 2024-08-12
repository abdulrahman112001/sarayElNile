import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import See from "../../../../public/assets/firstImage.jpeg";
import BookingForm from "@/components/atoms/BookForm";

const ImageGallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ];

  const [mainImage, setMainImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setMainImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex mt-20 bg-[#FAFAFA]">
      {/* Main Content Area */}
      <div className="w-2/3 p-2">
        {/* Main Image and Thumbnails */}
        {!isModalOpen && (
          <div className="flex">
            {/* Thumbnails */}
            <div className="w-1/10 flex flex-col space-y-2 pr-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-16 object-cover rounded-md cursor-pointer ${
                    index === mainImage ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setMainImage(index)}
                />
              ))}
              <div
                className="relative w-full h-16 cursor-pointer"
                onClick={openModal}
              >
                <Image
                  src={See}
                  alt="See More"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-segoe">
                  See More
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full relative">
              <img
                src={images[mainImage]}
                alt="Main"
                className="w-full h-[400px] object-cover rounded-md"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
              >
                <ChevronLeft size={24} color="white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
              >
                <ChevronRight size={24} color="white" />
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative w-3/4 max-w-3xl p-4 rounded-lg">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-black"
              >
                <X size={24} />
              </button>
              <img
                src={images[mainImage]}
                alt="Modal"
                className="w-full h-[300px] object-cover rounded-md"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
              >
                <ChevronLeft size={24} color="white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
              >
                <ChevronRight size={24} color="white" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      index === mainImage ? "bg-black" : "bg-gray-500"
                    }`}
                    onClick={() => setMainImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Placeholder for another component */}
      <div className="w-1/3 p-2">
        <BookingForm />
      </div>
    </div>
  );
};

export default ImageGallery;
