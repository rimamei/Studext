import React from "react";

const Image = ({ icon, outerClassName, ...rest }) => {
  return (
    <div className={outerClassName}>
      <img src={icon} {...rest} />
    </div>
  );
};

export default Image;
