import Drops from "@/components/atoms/drops";

import React from "react";
import Excursions from "../molecules/Excursions/Excursions";

type Props = {};

const OverView = (props: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-segoe text-start mt-2 ml-6">
        What’s Included
      </h2>
      <div className="mb-3">
        <Drops />
      </div>

      <Excursions />
    </div>
  );
};

export default OverView;
