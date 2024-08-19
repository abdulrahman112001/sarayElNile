import React from "react";
import { excursions } from "@/data";
import ExcursionCard from "@/components/templates/ExcursionCard";

type ExploreProps = {
  // Add any props here if needed in the future
};

const Explore: React.FC<ExploreProps> = () => {
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
