import React from "react";

function Sidebar() {
  return (
    <div className="sidebar flex items-start flex-col space-y-4 p-4 w-64">
      <div className="side-bar-heading">Filters</div>
      <div className="individual-option-category">
        <div className="option-category-heading text-xs text-gray-400 my-2">
          Commute Type
        </div>
        {["Remote", "Work From Office", "Hybrid"].map((cat, index) => {
          return (
            <div className="flex items-center">
              <input
                id="filter-mobile-color-0"
                name="color[]"
                value={cat}
                onChange={() => {}}
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
              />
              <label
                htmlFor="filter-mobile-color-0"
                className="ml-3 min-w-0 flex-1 text-gray-500"
              >
                {cat}
              </label>
            </div>
          );
        })}
      </div>

      <div className="individual-option-category">
        <div className="option-category-heading text-xs text-gray-400 my-2">
          Employment Type
        </div>
        {[1, 2, 3].map((cat, index) => {
          return (
            <div className="flex items-center">
              <input
                id="filter-mobile-color-0"
                name="color[]"
                defaultValue="white"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
              />
              <label
                htmlFor="filter-mobile-color-0"
                className="ml-3 min-w-0 flex-1 text-gray-500"
              >
                White
              </label>
            </div>
          );
        })}
      </div>

      <div className="individual-option-category">
        <div className="option-category-heading text-xs text-gray-400 my-2">
          Experience
        </div>
        {[1, 2, 3].map((cat, index) => {
          return (
            <div className="flex items-center">
              <input
                id="filter-mobile-color-0"
                name="color[]"
                defaultValue="white"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
              />
              <label
                htmlFor="filter-mobile-color-0"
                className="ml-3 min-w-0 flex-1 text-gray-500"
              >
                White
              </label>
            </div>
          );
        })}
      </div>

      <div className="individual-option-category">
        <div className="option-category-heading text-xs text-gray-400 my-2">
          Job Posted Time
        </div>
        {[1, 2, 3].map((cat, index) => {
          return (
            <div className="flex items-center">
              <input
                id="filter-mobile-color-0"
                name="color[]"
                defaultValue="white"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
              />
              <label
                htmlFor="filter-mobile-color-0"
                className="ml-3 min-w-0 flex-1 text-gray-500"
              >
                White
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
