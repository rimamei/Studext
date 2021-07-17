import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import data from "../../data";

const Charts = () => {
  return (
    <ResponsiveContainer width="95%" height={150}>
      <BarChart
        data={data.chart}
        stackOffset="sign"
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="true" fill="#008FFF" stackId="stack" barSize={10} />
        <Bar dataKey="false" fill="#DB0038" stackId="stack" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
