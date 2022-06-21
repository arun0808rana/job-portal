import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="">
        <div className="space-y-2">
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
          <div className="flex items-center">
            <input
              id="filter-mobile-color-1"
              name="color[]"
              defaultValue="beige"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
            />
            <label
              htmlFor="filter-mobile-color-1"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              Beige
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-color-2"
              name="color[]"
              defaultValue="blue"
              type="checkbox"
              defaultChecked=""
              className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
            />
            <label
              htmlFor="filter-mobile-color-2"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              Blue
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-color-3"
              name="color[]"
              defaultValue="brown"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
            />
            <label
              htmlFor="filter-mobile-color-3"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              Brown
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-color-4"
              name="color[]"
              defaultValue="green"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
            />
            <label
              htmlFor="filter-mobile-color-4"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              Green
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-mobile-color-5"
              name="color[]"
              defaultValue="purple"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
            />
            <label
              htmlFor="filter-mobile-color-5"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              Purple
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
