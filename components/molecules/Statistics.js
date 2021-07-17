import React from "react";
import { Title } from "../atoms";
import Charts from "../atoms/Charts";
import Dropdown from "../atoms/Dropdown";

const Statistics = () => {
  return (
    <div className="wrapper p-4">
      <div>
        <div className="flex justify-between">
          <Title label="Statistik" outerClassName="text-lg mb-8" />
          <Dropdown />
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Statistics;
