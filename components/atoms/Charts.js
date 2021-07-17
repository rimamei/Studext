import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "17 Juli",
    true: 0,
    false: -9,
  },
  {
    name: "18 Juli",
    true: 30,
    false: 0,
  },
  {
    name: "19 Juli",
    true: 12,
    false: -17,
  },
  {
    name: "20 Juli",
    true: 0,
    false: -1,
  },
  {
    name: "21 Juli",
    true: 2,
    false: -1,
  },
  {
    name: "22 Juli",
    false: -17,
    true: 12,
  },
  {
    name: "23 Juli",
    false: -6,
    true: 5,
  },
  {
    name: "24 Juli",
    false: -24,
    true: 5,
  },
  {
    name: "25 Juli",
    false: -17,
    true: 12,
    amt: 1,
  },
];

const Charts = () => {
  return (
    <ResponsiveContainer width="95%" height={150}>
      <BarChart
        width={900}
        height={200}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name"/>
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
