import React from "react";
import SearchBar from "./SearchBar";
import Location from "./Location";
import Experience from "./Experience";

function CommonBar() {
  return (
    <div className="common-bar flex space-x-4 m-4">
      <SearchBar />
      <Location />
      <Experience />
    </div>
  );
}

export default CommonBar;
