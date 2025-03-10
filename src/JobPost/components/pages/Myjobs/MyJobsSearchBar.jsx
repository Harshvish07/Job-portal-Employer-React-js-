import React, { useState } from "react";
import { FaSearch, FaBell, FaCommentDots } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import ProfileIcon from "../../../../assets/profileIcon.svg";
import companyLogo from "../../../../assets/companyLogo.svg";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" }
];

const MyJobsSearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="flex  items-center justify-between bg-white px-6 py-1 shadow-sm">
      {/* Left Side - Logo */}
      <div className="flex items-center md:space-x-96 md:ml-[75px] ">
        <img
          src={companyLogo}
          alt="TechnoHire Logo"
          className="h-24 cursor-pointer mr-2 "
        />
      </div>

      {/* Middle - Search Bar */}
      <div className="flex items-center border border-gray-300  px-2 py-3 w-1/2 h-2/3">
        {/* Country Selector (Dropdown) */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2 border-r pr-3 cursor-pointer">
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="h-4"
            />
            <span className="text-sm font-medium">{selectedCountry.name}</span>
            <IoChevronDown className="text-gray-400 text-xs" />
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
                      className="h-4 mr-2"
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

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center space-x-6">
        <FaCommentDots className="text-gray-600 text-lg cursor-pointer" />
        <div className="relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        <img
          src={ProfileIcon}
          alt="Profile"
          className="h-8 w-8 rounded-full border-2 border-purple-500"
        />
      </div>
    </div>
  );
};

export default MyJobsSearchBar;
