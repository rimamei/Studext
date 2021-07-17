import React from "react";

const Title = ({ label, outerClassName }) => {
  return (
    <div>
      <p className={`font-bold ${outerClassName}`}>{label}</p>
    </div>
  );
};

export default Title;
