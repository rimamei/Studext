import React from "react";
import Image from "./Image";

const Rating = ({ rating, review }) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(rating).keys()].map((x) => (
          <Image icon="images/course/star.svg" className="mr-1" />
        ))}
      </div>
      <p className="text-[10px] text-black-100 ml-1">({review})</p>
    </div>
  );
};

export default Rating;
