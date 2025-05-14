// import React, { useState } from "react";
// import { FaBriefcase, FaEllipsisV } from "react-icons/fa";
// import { PiIdentificationCardLight } from "react-icons/pi";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { RxCrossCircled } from "react-icons/rx";

// const Overview = () => {
//   const [menuOpen, setMenuOpen] = useState(null);

//   const handleButtonClick = (index) => {
//     setMenuOpen(menuOpen === index ? null : index);
//   };

//   const jobs = [
//     { title: "UI/UX Designer", type: "Full Time", remaining: "27 days remaining", status: "Active", applications: 798 },
//     { title: "Senior UX Designer", type: "Internship", remaining: "8 days remaining", status: "Active", applications: 185 },
//     { title: "Technical Support Specialist", type: "Part Time", remaining: "4 days remaining", status: "Active", applications: 556 },
//     { title: "Junior Graphic Designer", type: "Full Time", remaining: "24 days remaining", status: "Active", applications: 583 },
//     { title: "Front End Developer", type: "Full Time", remaining: "Dec 7, 2019", status: "Expire", applications: 740 },
//   ];

//   return (
//     <div className="p-4">
//       {/* Header Section */}
//       <div className=" flex justify-between items-center">
//         <h2 className="text-xl font-semibold">Hello, Instagram</h2>
//       </div>
//       <p className="text-gray-500">Here is your daily activities and applications</p>

//       {/* Stats */}
//       <div className="flex gap-4 mt-4">
//         <div className="bg-[#DCBDED] flex justify-between w-[312px] h-[104px] p-4 rounded-lg items-center">
//           <div className="ml-3">
//             <h3 className="text-xl font-bold">589</h3>
//             <p className="text-gray-600">Open Jobs</p>
//           </div>
//           <span className="bg-white w-[64px] flex items-center justify-center h-[64px] rounded-md">
//             <FaBriefcase className="text-purple-500 text-2xl" />
//           </span>
//         </div>
//         <div className="bg-[#FFF6E6] p-4 rounded-lg flex justify-between items-center w-[312px] h-[104px]">
//           <div className="ml-3">
//             <h3 className="text-xl font-bold">2,517</h3>
//             <p className="text-gray-600">Saved Candidates</p>
//           </div>
//           <span className="bg-white w-[64px] flex items-center justify-center h-[64px] rounded-md">
//             <PiIdentificationCardLight className="text-orange-500 text-3xl" />
//           </span>
//         </div>
//       </div>

//       {/* Jobs Table */}
//       <div className="mt-6 bg-white rounded-lg shadow-sm">
//         <div className="flex justify-between p-4">
//           <p className="font-semibold text-[20px]">Recently Posted Jobs</p>
//           <button className="flex gap-2 hover:text-black text-[#767F8C] text-[16px] items-center">
//             View All <FaArrowRightLong />
//           </button>
//         </div>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="text-left border-b border-gray-200">
//               <th className="p-4">JOBS</th>
//               <th className="p-4">STATUS</th>
//               <th className="p-4">APPLICATIONS</th>
//               <th className="p-4">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job, index) => (
//               <tr
//                 key={index}
//                 className={`border-b border-gray-200 ${
//                   job.status === "Expire" ? "text-red-500" : "text-gray-700"
//                 }`}
//               >
//                 <td className="p-4">
//                   <div className="font-medium">{job.title}</div>
//                   <div className="text-sm text-gray-500">{job.type} • {job.remaining}</div>
//                 </td>
//                 <td className="flex items-center p-4">
//                   {job.status === "Active" ? (
//                     <FaRegCheckCircle className="text-green-700" />
//                   ) : (
//                     <RxCrossCircled className="text-red-700" />
//                   )}
//                   <span className={`px-2 py-1 rounded-full text-xs ${job.status === "Active" ? "text-green-700" : " text-red-700"}`}>
//                     {job.status}
//                   </span>
//                 </td>
//                 <td className="p-4">{job.applications} Applications</td>

//                 {/* Dropdown Button & Menu */}
//                 <td className="p-4 relative flex items-center space-x-3">
//                   <button className="bg-[#F1F2F4] hover:bg-[#7900BA] hover:text-white text-[#7900BA] px-4 py-2 rounded-md text-sm">
//                     View Applications
//                   </button>

//                   {/* Three Dots Button */}
//                   <div className="relative">
//                     <button onClick={() => handleButtonClick(index)}>
//                       <FaEllipsisV className="text-gray-600" />
//                     </button>

//                     {/* Dropdown Menu */}
//                     {menuOpen === index && (
//                       <div className="absolute left-0 mt-1 w-[150px] bg-white border rounded shadow-md p-2 z-10">
//                         <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                           View Detail
//                         </button>
//                         <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                           Mark as expired
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { PiIdentificationCardLight } from "react-icons/pi";
// import useJobs from "../../../hooks/postJobs"; // Import the API fetching hook
import { FaArrowRight, FaEllipsisV, FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

import { useNavigate } from "react-router-dom";

const Overview = () => {
  // const { jobs, loading, error } = useJobs();
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleViewAll = () => setShowAllJobs(true);
  const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 5);
  const navigate = useNavigate();

  const jobs = [
    {
      title: "UI/UX Designer",
      type: "Full Time",
      remaining: "27 days remaining",
      status: "Active",
      applications: 798
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      remaining: "8 days remaining",
      status: "Active",
      applications: 185
    },
    {
      title: "Technical Support Specialist",
      type: "Part Time",
      remaining: "4 days remaining",
      status: "Active",
      applications: 556
    },
    {
      title: "Junior Graphic Designer",
      type: "Full Time",
      remaining: "24 days remaining",
      status: "Active",
      applications: 583
    },
    {
      title: "Front End Developer",
      type: "Full Time",
      remaining: "Dec 7, 2019",
      status: "Expire",
      applications: 740
    }
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Hello, Instagram</h2>
      </div>
      <p className="text-gray-500">
        Here is your daily activities and applications
      </p>

      {/* Open Jobs & Saved Candidates */}

      <div className="flex gap-4 mt-4">
        <div className="bg-[#DCBDED] flex justify-between w-[312px] h-[104px] p-4 rounded-lg items-center">
          <div className="ml-3">
            <h3 className="text-xl font-bold">{jobs.length}</h3>
            <p className="text-gray-600">Open Jobs</p>
          </div>

          <span className="bg-white w-[64px] flex items-center justify-center h-[64px] rounded-md">
            <FaBriefcase className="text-purple-500 text-2xl" />
          </span>
        </div>

        <div className="bg-[#FFF6E6] p-4 rounded-lg flex justify-between items-center w-[312px] h-[104px]">
          <div className="ml-3">
            <h3 className="text-xl font-bold">2,517</h3>
            <p className="text-gray-600">Saved Candidates</p>
          </div>
          <span className="bg-white w-[64px] flex items-center justify-center h-[64px] rounded-md">
            <PiIdentificationCardLight className="text-orange-500 text-3xl" />
          </span>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <p className="font-semibold text-[20px]">Open Jobs</p>
          <p className="text-gray-500 text-sm">
            You have {jobs.length} open jobs
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4">
          <p className="font-semibold text-[20px]">Saved Candidates</p>
          <p className="text-gray-500 text-sm">You have 5 saved candidates</p>
        </div>
      </div> */}

      {/* Jobs Table (UI unchanged) */}
      <div className="mt-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between p-4">
          <p className="font-semibold text-[20px]">Recently Posted Jobs</p>
          {!showAllJobs && (
            <button
              onClick={handleViewAll}
              className="flex gap-2 hover:text-black text-[#767F8C] text-[16px] items-center"
            >
              View All <FaArrowRight />
            </button>
          )}
        </div>

        {loading ? (
          <p className="text-center text-gray-500 p-4">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500 p-4">{error}</p>
        ) : displayedJobs.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="p-4">JOBS</th>
                <th className="p-4">STATUS</th>
                <th className="p-4">APPLICATIONS</th>
                <th className="p-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {displayedJobs.map((job) => (
                <tr key={job._id} className="border-b border-gray-200">
                  <td className="p-4">
                    <div className="font-medium">{job.jobTitle}</div>
                    <div className="text-sm text-gray-500">
                      {job.jobType} • {new Date(job.expireDate).toDateString()}
                    </div>
                  </td>
                  <td className="flex items-center p-4">
                    {job.status === "Active" ? (
                      <FaRegCheckCircle className="text-green-700" />
                    ) : (
                      <RxCrossCircled className="text-red-700" />
                    )}
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        job.status === "Active"
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="p-4">{job.applications || 0} Applications</td>
                  <td className="p-4 relative flex items-center space-x-3">
                    <button
                      onClick={() => navigate("/viewapplication")} // Fixed syntax
                      className="bg-[#F1F2F4] hover:bg-[#7900BA] hover:text-white text-[#7900BA] px-4 py-2 rounded-md text-sm"
                    >
                      View Applications
                    </button>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setMenuOpen(menuOpen === job._id ? null : job._id)
                        }
                      >
                        <FaEllipsisV className="text-gray-600" />
                      </button>
                      {menuOpen === job._id && (
                        <div className="absolute left-0 mt-1 w-[150px] bg-white border rounded shadow-md p-2 z-10">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Detail
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Mark as Expired
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 p-4">No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default Overview;
