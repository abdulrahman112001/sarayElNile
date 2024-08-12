import Image from "next/image";
import React from "react";
import Exp from "../../../../public/assets/firstImage.jpeg";

type ExcursionCardProps = {
  imageSrc: any;
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

type ExploreProps = {
  // You can add any props here if needed in the future
};

const Explore: React.FC<ExploreProps> = () => {
  const excursions = [
    {
      id: 1,
      imageSrc: Exp,
      recommendation: "Travelers recommend",
    },
    {
      id: 2,
      imageSrc: Exp,
      recommendation: "Travelers recommend",
    },
    {
      id: 3,
      imageSrc: Exp,
      recommendation: "Travelers recommend",
    },
    {
      id: 4,
      imageSrc: Exp,
      recommendation: "Travelers recommend",
    },
    {
      id: 5,
      imageSrc: Exp,
      recommendation: "Travelers recommend",
    },
    {
      id: 6,
      imageSrc: Exp,
      recommendation: "Travelers recommend",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-segoe mb-6">Explore Excursions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {excursions.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            imageSrc={excursion.imageSrc}
            recommendation={excursion.recommendation}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
