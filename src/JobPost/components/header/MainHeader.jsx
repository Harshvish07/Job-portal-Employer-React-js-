import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import LanguageSelector from "../LanguageSelector";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const headerText = [
    { name: "Home", path: "/home" },
    { id: 1, name: "Find Candidate", path: "/find-candidate" },
    { id: 2, name: "Dashboard", path: "/dashboard/overview" },
    { id: 3, name: "My Jobs", path: "/my-jobs" },
    { id: 4, name: "Applications", path: "/applications" },
    { id: 5, name: "Customer Supports", path: "/customer-supports" }
  ];
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between md:mx-[100px] md:p-2">
        {/* left side header */}
        <div className="flex  md:p-2  ">
          <ul className="flex space-x-5 text-gray-500">
            {headerText.map((link, id) => (
              <li key={id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-violet-700 border-b-2 md:p-2 border-violet-700 font-semibold"
                      : "hover:text-violet-700"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side Hedaer */}
        <div className="flex space-x-4">
          <div className="flex space-x-3 items-center md:p-2">
            <TbPhoneCall size={25} />
            <p className="font-semibold  md:text-md">+1-202-555-0178</p>
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
