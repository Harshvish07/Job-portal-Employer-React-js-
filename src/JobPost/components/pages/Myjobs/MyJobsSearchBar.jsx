import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import profileIcon from "/profileIcon.svg";
import { FaSearch } from "react-icons/fa";

function MyJobsSearchBar() {
  return (
    <div className="flex justify-between ">
      <div className="flex space-x-4 justify-evenly items-center">
        <select>
          <img src="" alt="" />
          <option value="India">India</option>
          <img src="" alt="" />
          <option value="France">France</option>
          <img src="" alt="" />
          <option value="Germany">Germany</option>
          <img src="" alt="" />
          <option value="America">America</option>
          <img src="" alt="" />
        </select>
        <div className="flex items-center ">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <MdOutlineMessage />
        <IoNotificationsOutline />
        <img src={profileIcon} alt="profile" />
      </div>
    </div>
  );
}

export default MyJobsSearchBar;
