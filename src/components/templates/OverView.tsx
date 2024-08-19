import Drops from "@/components/atoms/drops";
import ExcursionList from "@/components/molecules/EgyptExcursions";
import React from "react";

type Props = {};

const OverView = (props: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-segoe text-start mt-9 ml-6">
        What’s Included
      </h2>
      <Drops />

      <ExcursionList />
    </div>
  );
};

export default OverView;
