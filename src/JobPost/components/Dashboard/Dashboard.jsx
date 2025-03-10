// Dashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:mx-[130px] h-full">
      {/* Nested Routes Will Be Rendered Here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
