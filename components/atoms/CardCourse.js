import React from "react";
import Image from "./Image";
import Rating from "./Rating";
import Title from "./Title";
import number from "../../utils/formatNumber";

const CardCourse = ({ item }) => {
  return (
    <div className="w-[296px] h-[158px] rounded-[24px] shadow p-4 mr-4">
      <div className="flex">
        <div>
          <Image icon={item.image} />
        </div>
        <div className="ml-4">
          <div className="flex justify-between items-center">
            <Title
              label={item.title}
              outerClassName="text-sm leading-5 hover:text-blue-100"
            />
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.710002 11.3C1.1 11.69 1.73 11.69 2.12 11.3L6.71 6.71C7.1 6.32 7.1 5.69 6.71 5.3L2.12 0.71C1.73 0.32 1.1 0.32 0.710001 0.710001C0.320002 1.1 0.320002 1.73 0.710002 2.12L4.59 6.01L0.710002 9.89C0.320002 10.28 0.330002 10.92 0.710002 11.3Z"
                fill="#008FFF"
              />
            </svg>
          </div>
          <Rating review={item.review} rating={item.rating} />
          <div className="flex item-center leading-5 my-2">
            <Image icon="images/course/badge.svg" />
            <p className="text-[10px] ml-2">{item.store}</p>
          </div>
          <div className="flex items-center">
            <Image icon="images/course/user.svg" />
            <p className="text-xs ml-2">
              {item.student} Pelajar, {item.teacher} Guru
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <p className="text-[10px] p-1 px-2 text-red-100 rounded-xl h-6 bg-red-10">
          Mulai: <span className="font-bold">{item.date}</span>
        </p>
        <div className="mr-4 mb-4">
          <p className="text-[10px] text-black-100 line-through">Rp{number(item.price)}</p>
          <p className="text-sm text-blue-100 font-bold">Rp{number(item.fix_price)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
