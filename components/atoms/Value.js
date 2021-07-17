import React from "react";

const Value = ({ children, outerClassName }) => {
  return (
    <div>
      <p className={`text-[10px] p-0.5 bg-white-100 font-bold bg-white rounded-full flex items-center justify-center ${outerClassName}`}>
        {children}
      </p>
    </div>
  );
};

export default Value;
