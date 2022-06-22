import React from "react";
import Dropdown from "../dropdown/Dropdown";

function Location() {
  return (
    <div>
      <Dropdown
        placeholder={"Location"}
        options={[
          "Delhi NCR",
          "Gurgaon",
          "Canada",
          "New York",
          "California",
          "Mohali",
        ]}
      />
    </div>
  );
}

export default Location;
