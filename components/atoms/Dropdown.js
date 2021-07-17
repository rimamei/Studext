import React from "react";

const Dropdown = () => {
  return (
    <div className="px-2 h-10 cursor-pointer flex items-center border rounded-xl">
      <p className="text-black-80 text-sm font-bold">Months &nbsp;</p>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.414997 1.005C0.0249973 1.395 0.0249973 2.025 0.414997 2.415L5.005 7.005C5.395 7.395 6.025 7.395 6.415 7.005L11.005 2.415C11.395 2.025 11.395 1.395 11.005 1.005C10.615 0.615 9.985 0.615 9.595 1.005L5.705 4.885L1.825 1.005C1.435 0.615001 0.794997 0.625 0.414997 1.005Z"
          fill="#008FFF"
        />
      </svg>
    </div>
  );
};

export default Dropdown;
