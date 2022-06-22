import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";

function Experience() {
  const [currentOption, setCurrentOption] = useState("");
  return (
    <div>
      <Dropdown
        placeholder={"Experience"}
        options={[
          "1 - 2 Years",
          "2 - 3 Years",
          "3 - 4 Years",
          "4 - 6 Years",
          "6 - 7 Years",
          "7 - 8 Years",
          "7 - 9 Years",
          "9 - 10 Years",
          "10+ Years",
        ]}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />
    </div>
  );
}

export default Experience;
