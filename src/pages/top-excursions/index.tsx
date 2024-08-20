// File: pages/index.tsx or wherever Home component is used
import React from "react";
import SearchExcursios from "@/components/atoms/SearchExcursions/SearchExcursios"; // Check path and filename
import Drops from "@/components/atoms/drops";

import Explore from "@/components/molecules/ExploreExcursios";
import Excursions from "@/components/molecules/Excursions/Excursions";

const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-28">
        <SearchExcursios />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <Drops />
      </div>
      <div>
        <Excursions />
      </div>
    </div>
  );
};

export default Home;
