import React from "react";

// Components
import LibraryColor from "./LibraryColors";

const SideNav = ({ activeNav }) => {
  return (
    <div className={`sideNav ${activeNav ? "active" : ""}`}>
      <h1>SideBar</h1>
      <LibraryColor />
    </div>
  );
};

export default SideNav;
