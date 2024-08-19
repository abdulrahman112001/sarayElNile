import Image, { StaticImageData } from "next/image";
import React from "react";

type ExcursionCardProps = {
  imageSrc: StaticImageData;
  recommendation: string;
};

const ExcursionCard: React.FC<ExcursionCardProps> = ({
  imageSrc,
  recommendation,
}) => (
  <div className="rounded-lg overflow-hidden shadow-md border border-transparent hover:border-yellow-500 transition-border duration-300 ease-in-out">
    <div className="relative">
      <Image
        src={imageSrc}
        alt="Excursion"
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <p className="p-4 text-sm font-medium">{recommendation}</p>
  </div>
);

export default ExcursionCard;
