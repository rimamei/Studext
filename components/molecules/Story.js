import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Image, Title } from "../atoms";
import data from "../../data";

const Story = () => {
  return (
    <div className="lg:w-[968px] h-[143px] overflow-hidden p-4 wrapper mb-4">
      <Title label="Story" outerClassName="text-lg mb-3" />
      <ScrollContainer>
        <div className="flex cursor-pointer mb-4">
          {data.story.map((item) => (
            <figure
              key={item.id}
              width={51}
              height={51}
              className="flex flex-col items-center justify-center text-center mr-4"
            >
              <div className="border-story items-center mb-1">
                <Image
                  icon={item.image}
                  className="border-2 border-white rounded-full"
                />
              </div>
              <figcaption>
                <p className="text-[10px] truncate">
                  {item.name.length > 9
                    ? `${item.name.substring(0, 9)}...`
                    : item.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Story;
