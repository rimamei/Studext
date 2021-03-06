import React from "react";
import { Charts, Dropdown, Title } from "../atoms";

const Statistics = () => {
  return (
    <div
      className="lg:[982px] wrapper p-4"
    >
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
