// File: pages/index.tsx or wherever Home component is used
import React from "react";
import ExcursionList from "@/components/atoms/EgyptExcursions"; // Update path as necessary
import Explore from "@/components/atoms/ExploreExcursios"; // Check path and filename
import SearchExcursios from "@/components/atoms/SearchExcursions/SearchExcursios"; // Check path and filename
import Drops from "@/components/atoms/drops";

const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-24">
        <SearchExcursios />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <Drops />
      </div>
      <div>
        <ExcursionList />
      </div>
    </div>
  );
};

export default Home;
