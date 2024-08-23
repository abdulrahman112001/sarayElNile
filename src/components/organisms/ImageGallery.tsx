import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import DatePickerComponent from "../molecules/dataPicker";
import DatePickerComponentMui from "../molecules/dataPicker";

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
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ];

  const [mainImage, setMainImage] = useState<number>(0);

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: false,
      closeButton: "top",
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-segoe mb-4">{title}</h1>

      <nav className="mb-4">
        {breadcrumb.map((crumb, index) => (
          <span key={index} className="text-gray-500 font-segoe">
            {crumb}
            {index < breadcrumb.length - 1 && " / "}
          </span>
        ))}
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Thumbnails Column for Larger Screens */}
        <div className="hidden md:flex flex-col w-1/6 space-y-2 pr-2">
          {images.map((img, index) => (
            <a key={index} href={img.toString()} data-fancybox="gallery">
              <div className="relative">
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={64}
                  className={`w-full h-16 object-cover rounded-md cursor-pointer ${
                    index === mainImage ? "ring-1 ring-yellow-500" : ""
                  }`}
                  onClick={() => setMainImage(index)}
                />
                {index === images.length - 1 && (
                  <div className="absolute font-segoe inset-0 rounded-md cursor-pointer bg-black bg-opacity-50 flex items-center justify-center text-white  text-base">
                    See More
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Main Image Container */}
        <div className="w-full md:w-3/4 relative">
          <a
            href={images[mainImage].toString()}
            data-fancybox="gallery"
            className="block w-full"
          >
            <Image
              src={images[mainImage]}
              alt="Main"
              width={1000}
              height={350}
              className="w-full h-[250px] md:h-[350px] object-cover rounded-md"
            />
          </a>
          <button
            onClick={() =>
              setMainImage((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setMainImage((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <p className="font-segoe mt-5 text-xl">{mainContent}</p>
    </div>
  );
};

export default ImageGallery;
