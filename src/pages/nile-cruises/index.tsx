import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Try from "../../../public/assets/firstImage.jpeg";
import OverView from "./OverView";
import ExcursionsTab from "./ExcursionsTab";
import PackageTab from "./PackageTab";
import PackageDetails from "./PackageTab";
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-full max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex">
              {/* Left side - Image */}
              <div className="w-5/12 relative h-52">
                <Image
                  src={Pry}
                  alt="Pyramids of Giza"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Right side - Content */}
              <div className="w-2/3 p-4">
                <h2 className="text-xl font-bold mb-2">Pyramids of Giza</h2>
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
                <p className="text-gray-700 text-sm">
                  Once ancient Upper Egypts capital at Thebes, Luxors
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
      <div className="flex mt-16 ml-14 w-1/6">
        {["Overview", "Packages", "Excursions"].map((tab) => (
          <button
            key={tab}
            className={`text-left font-segoe p-2 px-4 mx-2 rounded-md ${
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

      <div className="mt-2 flex w-full">
        <div className="flex-1 rounded-md">
          {activeTab === "Overview" && <OverView />}
          {activeTab === "Packages" && <PackageDetails />}
          {activeTab === "Excursions" && <ExcursionsTab />}
        </div>
      </div>
    </div>
  );
};

export default PyramidsSection;
