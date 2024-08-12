import React from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import Try from "../../../public/assets/firstImage.jpeg";

const TravelDestinationCard: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-visible">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={Try}
          alt="Travel Destination"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom" // Center image and position it towards the bottom
          className="object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

      {/* Breadcrumb */}
      <nav className="relative z-10 text-sm p-4 text-white">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            Where to go <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">
            Egypt <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">
            Luxor <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">Valley of the Kings</li>
        </ol>
      </nav>

      {/* Card */}
      <div className="absolute bottom-0 left-1/2 mx-12 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-t-lg shadow-lg overflow-visible w-full max-w-2xl">
        <div className="p-4 flex">
          <div className="flex-shrink-0 mr-4">
            <Image
              src={Try}
              alt="Pyramids of Giza"
              width={100}
              height={100}
              className="object-cover rounded"
            />
          </div>
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Pyramids of Giza
            </div>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 text-sm">4.5</span>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Once ancient Upper Egypt's capital of Thebes, Luxor's
              archaeological...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDestinationCard;
