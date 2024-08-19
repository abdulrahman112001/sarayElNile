import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Main from "../../../public/assets/camels.jpeg";
import See from "../../../public/assets/firstImage.jpeg";

// Define types
type ImageSource = string | StaticImageData;

interface ImageGalleryProps {
  title: string;
  breadcrumb: string[];
  mainContent: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  title,
  breadcrumb,
  mainContent,
}) => {
  const images: ImageSource[] = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    Main,
  ];

  const [mainImage, setMainImage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setMainImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <nav className="mb-4">
        {breadcrumb.map((crumb, index) => (
          <span key={index} className="text-gray-500">
            {crumb}
            {index < breadcrumb.length - 1 && " / "}
          </span>
        ))}
      </nav>

      <div className="flex">
        <div className="w-full pr-2">
          {!isModalOpen && (
            <div className="flex">
              <div className="w-1/10 flex-col space-y-2 pr-2 hidden md:flex">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      isModalOpen ? "bg-black bg-opacity-50" : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={64}
                      className={`w-full h-16 object-cover rounded-md cursor-pointer ${
                        index === mainImage ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setMainImage(index)}
                    />
                    {isModalOpen && (
                      <div className="absolute inset-0 bg-black opacity-50 rounded-md" />
                    )}
                  </div>
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
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-segoe z-10">
                    See More
                  </div>
                </div>
              </div>

              <div className="w-full md:w-9/10 relative" onClick={openModal}>
                <Image
                  src={images[mainImage]}
                  alt="Main"
                  width={1000}
                  height={350}
                  className="w-full h-[250px] md:h-[350px] object-cover rounded-md"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          )}

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-50 text-black flex items-center justify-center"
              >
                <X size={32} />
              </button>
              <div className="relative w-full max-w-screen-sm h-[80%] max-h-screen p-4 rounded-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={images[mainImage]}
                    alt="Modal"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="flex overflow-x-auto mt-4">
                  {images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className={`w-16 h-16 object-cover rounded-md cursor-pointer mx-1 ${
                        index === mainImage ? "border-2 border-black" : ""
                      }`}
                      onClick={() => setMainImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <p>{mainContent}</p>
    </div>
  );
};

export default ImageGallery;
