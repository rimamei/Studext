import React from "react";

const NavItem = ({ title, children }) => {
  return (
    <div
      className={`p-4 flex cursor-pointer ${
        title !== "Dashboard" ? "navItem" : "text-blue-100"
      }`}
    >
      {children}
      <div className="ml-2.5">
        <p className="font-medium text-sm">{title}</p>
      </div>
    </div>
  );
};

export default NavItem;
