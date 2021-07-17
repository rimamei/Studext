import React from "react";

const NavMenu = ({ outerClassName, onClick }) => {
  return (
    <div className={outerClassName}>
      <button type="button" onClick={onClick}>
        <svg
          width="56"
          height="48"
          viewBox="0 0 56 48"
          fill="none"
          className="hover:text-blue-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0H32C45.2548 0 56 10.7452 56 24C56 37.2548 45.2548 48 32 48H24C10.7452 48 0 37.2548 0 24Z"
            fill="white"
          />
          <path
            d="M29.8672 17.589C29.8673 17.8343 29.819 18.0772 29.7252 18.3038C29.6315 18.5305 29.4939 18.7364 29.3205 18.9099C29.1472 19.0834 28.9413 19.2211 28.7147 19.315C28.4881 19.4089 28.2453 19.4573 28 19.4574C27.7547 19.4575 27.5118 19.4092 27.2852 19.3155C27.0585 19.2217 26.8526 19.0841 26.6791 18.9108C26.5056 18.7374 26.3679 18.5315 26.274 18.3049C26.1801 18.0784 26.1317 17.8355 26.1316 17.5902C26.1314 17.0948 26.3281 16.6197 26.6782 16.2693C27.0284 15.9189 27.5034 15.722 27.9988 15.7218C28.4942 15.7216 28.9693 15.9183 29.3197 16.2684C29.6701 16.6186 29.867 17.0936 29.8672 17.589Z"
            fill="#5C5C5C"
          />
          <path
            d="M28 25.8666C29.0312 25.8666 29.8672 25.0306 29.8672 23.9994C29.8672 22.9682 29.0312 22.1322 28 22.1322C26.9688 22.1322 26.1328 22.9682 26.1328 23.9994C26.1328 25.0306 26.9688 25.8666 28 25.8666Z"
            fill="#5C5C5C"
          />
          <path
            d="M28 32.2782C29.0312 32.2782 29.8672 31.4422 29.8672 30.411C29.8672 29.3798 29.0312 28.5438 28 28.5438C26.9688 28.5438 26.1328 29.3798 26.1328 30.411C26.1328 31.4422 26.9688 32.2782 28 32.2782Z"
            fill="#5C5C5C"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavMenu;
