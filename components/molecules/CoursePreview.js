import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { CardCourse, Title } from "../atoms";
import data from "../../data";

const Story = () => {
  return (
    <div className="w-full overflow-hidden p-4 wrapper my-4 ">
      <Title label="Course Preview" outerClassName="text-lg mb-3" />
      <ScrollContainer>
        <div className="flex cursor-pointer mb-4 overflow-x ">
          {data.course.slice(0, 2).map((item) => (
            <CardCourse item={item} />
          ))}
          <div className="flex items-center justify-center w-[296px] h-[158px] text-blue-100 cursor-pointer rounded shadow-content p-4 mx-3 my-2 hover:underline">
            <div className="flex flex-col text-xl mr-5  ">
              <span>View </span>
              <span>More (999+)</span>
            </div>
            <svg
              width="16"
              height="24"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.71001 11.3C1.10001 11.69 1.73001 11.69 2.12001 11.3L6.71001 6.71C7.10001 6.32 7.10001 5.69 6.71001 5.3L2.12001 0.71C1.73001 0.32 1.10001 0.32 0.710009 0.710001C0.320009 1.1 0.320009 1.73 0.710009 2.12L4.59001 6.01L0.71001 9.89C0.32001 10.28 0.33001 10.92 0.71001 11.3Z"
                fill="#008FFF"
              />
            </svg>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Story;
