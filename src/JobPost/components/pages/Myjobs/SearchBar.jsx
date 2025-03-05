import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" }
];

const SearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-[500px]">
      {/* Country Selector */}
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center space-x-2 cursor-pointer border-r pr-3">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="h-4 w-6"
          />
          <span className="text-sm font-medium">{selectedCountry.name}</span>
          <IoChevronDown className="text-gray-400 text-sm" />
        </Menu.Button>
        <Menu.Items className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg">
          {countries.map((country, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  className={`flex items-center w-full px-3 py-2 text-sm ${
                    active ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setSelectedCountry(country)}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="h-4 w-6 mr-2"
                  />
                  {country.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      {/* Search Input */}
      <div className="flex items-center w-full pl-3">
        <FaSearch className="text-purple-600 text-sm" />
        <input
          type="text"
          placeholder="Job title, keyword, company"
          className="w-full outline-none text-sm text-gray-500 placeholder-gray-400 pl-2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
