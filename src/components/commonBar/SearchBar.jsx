import React from "react";
import Dropdown from "../dropdown/Dropdown";

function SearchBar() {
  const getJobs = () => {};
  return (
    <div>
      <form className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
        />
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-4"
          onClick={getJobs}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 text-gray-400"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </form>
    </div>
  );
}

export default SearchBar;
