import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Try from "../../../public/assets/firstImage.jpeg";
import OverView from "../../components/templates/OverView";
import ExcursionsTab from "../../components/templates/ExcursionsTab";
import PackageDetails from "../../components/templates/PackageTab";
import Pry from "../../../public/assets/pyr.jpeg";

const PyramidsSection = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="relative h-auto w-full bg-gray-100">
      {/* Background Image */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src={Try}
            alt="Egypt Background"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>

        {/* Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-full max-w-3xl px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Left side - Image */}
              <div className="w-full sm:w-5/12 relative h-48 sm:h-64">
                <Image
                  src={Pry}
                  alt="Pyramids of Giza"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Right side - Content */}
              <div className="w-full sm:w-7/12 p-4">
                <h2 className="text-lg sm:text-xl font-segoe mb-2">
                  Pyramids of Giza
                </h2>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.5</span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-segoe">
                  Once ancient Upper Egypts capital at Thebes, Luxor
                  archaeological heavyweight put it right behind Cairo for
                  visitors keen to peel back the millennia. Hemming the Nile 400
                  miles (644 kilometers) south of Egypts capital, its
                  commercialized trappings dont detract from the emotional force
                  of its antiquities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center mt-28 sm:mt-36 md:mt-20 px-4 py-6 sm:px-6 overflow-x-auto">
        <div className="flex space-x-2 sm:space-x-4">
          {["Overview", "Packages", "Excursions"].map((tab) => (
            <button
              key={tab}
              className={`text-center font-segoe py-2 px-4 rounded-md whitespace-nowrap ${
                activeTab === tab
                  ? "bg-custom-gradient text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="rounded-md">
          {activeTab === "Overview" && <PackageDetails />}
          {activeTab === "Packages" && <ExcursionsTab />}
          {activeTab === "Excursions" && <OverView />}
        </div>
      </div>
    </div>
  );
};

export default PyramidsSection;
