import React, { useEffect, useRef, useState } from "react";
import DropdownArrow from "../../assets/dropdown.svg";
import { toTitleCase } from "../../lib";
import useOnClickOutside from "../../hooks/useOnClickOutside";

function Dropdown({
  placeholder = "",
  options = [],
  currentOption,
  setCurrentOption,
}) {
  const selectRef = useRef();
  const mainRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    if (e.target.tagName === "INPUT") {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(true);
    }
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  useOnClickOutside(mainRef, () => setShowMenu(false));

  return (
    <div>
      <div className="relative inline-block" ref={mainRef}>
        {/* Dropdown toggle button */}
        <div className="relative">
          <input
            onClick={openMenu}
            type="text"
            ref={selectRef}
            placeholder={placeholder}
            className="w-full py-2 px-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          />
          {!showMenu ? (
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={openMenu}
            >
              <img src={DropdownArrow} alt="dropdown icon" className="w-4" />
            </span>
          ) : (
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={hideMenu}
            >
              <img
                src={DropdownArrow}
                alt="dropdown icon"
                className="w-4 rotate-180"
              />
            </span>
          )}
        </div>

        {/* Dropdown menu */}
        {!!showMenu && (
          <div
            onClick={(e) => {
              hideMenu();
              if (e.target.tagName === "A") {
                selectRef.current.value = e.target.innerText;
                setCurrentOption(e.target.value);
              }
            }}
            className="absolute border right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            {options.map((option, index) => {
              return (
                <React.Fragment key={`${placeholder}-${index}`}>
                  <a className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    {toTitleCase(option)}
                  </a>
                  {index < options.length - 1 ? (
                    <hr className="border-gray-200 dark:border-gray-700 " />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
