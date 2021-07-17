import React from "react";
import Story from "./Story";
import TopScore from "./TopScore";
import CoursePreview from "./CoursePreview";
import Statistics from "./Statistics";

const Layout = () => {
  return (
    <div className="mx-6 my-4">
      <div className="flex">
        <div className="flex-3">
          <Story />
          <Statistics />
        </div>
        <div className="flex-1">
          <TopScore />
        </div>
      </div>
      <div>
        <CoursePreview />
      </div>
    </div>
  );
};

export default Layout;
