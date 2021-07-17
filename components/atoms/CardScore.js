import React from "react";
import Image from "./Image";
import Value from "./Value";

const CardScore = ({ item }) => {
  return (
    <div
      key={item.id}
      className={`z-50 w-full cursor-pointer flex items-center h-[60px] rounded-xl mb-2 ${
        item.rank === 1
          ? "rank1"
          : item.rank === 2
          ? "rank2"
          : item.rank === 3
          ? "rank3"
          : "rank"
      }`}
    >
      <Value outerClassName="mx-2 w-3.5 h-3.5">{item.rank}</Value>
      <figure className="flex items-center">
        <Image icon={item.image} />
        <figcaption className="flex items-center justify-end">
          <div>
            <p className="font-bold text-sm w-[80px] ml-2">
              {item.name.length > 11
                ? `${item.name.substring(0, 11)}...`
                : item.name}
            </p>
          </div>
          <div className="flex items-center ml-6">
            <Value outerClassName="text-tosca-100 w-5 h-5">{item.true}</Value>
            <Value outerClassName="text-red-100 ml-1 w-5 h-5">{item.false}</Value>
            <Value outerClassName="ml-1 w-5 h-5">{item.no_ans}</Value>
          </div>
          <div>
            <p className="text-sm font-bold ml-4">{item.total_score}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardScore;
