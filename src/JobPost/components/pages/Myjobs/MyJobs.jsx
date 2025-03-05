import React from "react";
import { FaCheckCircle, FaTimesCircle, FaUsers } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

const jobs = [
  {
    title: "UI/UX Designer",
    type: "Full Time",
    status: "Active",
    remaining: "27 days remaining",
    applications: 798
  },
  {
    title: "Senior UX Designer",
    type: "Internship",
    status: "Active",
    remaining: "8 days remaining",
    applications: 185
  },
  {
    title: "Junior Graphic Designer",
    type: "Full Time",
    status: "Active",
    remaining: "24 days remaining",
    applications: 583
  },
  {
    title: "Front End Developer",
    type: "Full Time",
    status: "Expire",
    remaining: "Dec 7, 2019",
    applications: 740
  },
  {
    title: "Interaction Designer",
    type: "Contract Base",
    status: "Expire",
    remaining: "Feb 2, 2019",
    applications: 426
  },
  {
    title: "Software Engineer",
    type: "Temporary",
    status: "Active",
    remaining: "9 days remaining",
    applications: 922
  },
  {
    title: "Product Designer",
    type: "Full Time",
    status: "Active",
    remaining: "7 days remaining",
    applications: 994
  },
  {
    title: "Project Manager",
    type: "Full Time",
    status: "Expire",
    remaining: "Dec 4, 2019",
    applications: 196
  },
  {
    title: "Marketing Manager",
    type: "Full Time",
    status: "Active",
    remaining: "4 days remaining",
    applications: 492
  }
];

const JobList = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Jobs</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">My Jobs</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Applications</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left">
                  <div className="font-medium text-gray-800">{job.title}</div>
                  <div className="text-xs text-gray-500">
                    {job.type} • {job.remaining}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  {job.status === "Active" ? (
                    <span className="text-green-500 flex items-center justify-center">
                      <FaCheckCircle className="mr-1" /> Active
                    </span>
                  ) : (
                    <span className="text-red-500 flex items-center justify-center">
                      <FaTimesCircle className="mr-1" /> Expired
                    </span>
                  )}
                </td>
                <td className="py-3 px-6 text-center flex items-center justify-center">
                  <FaUsers className="mr-1 text-gray-500" /> {job.applications}{" "}
                  Applications
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="p-2 rounded-full hover:bg-gray-200">
                    <IoEllipsisVertical className="text-gray-600" size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button className="px-3 py-2 text-gray-500 rounded hover:bg-gray-200">
          ←
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`px-3 py-2 rounded ${
              num === 4
                ? "bg-purple-500 text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            {num < 10 ? `0${num}` : num}
          </button>
        ))}
        <button className="px-3 py-2 text-gray-500 rounded hover:bg-gray-200">
          →
        </button>
      </div>
    </div>
  );
};

export default JobList;

// import React, { useState } from "react";
// import { FaCheckCircle, FaTimesCircle, FaUsers } from "react-icons/fa";
// import { IoEllipsisVertical } from "react-icons/io5";

// const jobs = [
//   { title: "UI/UX Designer", type: "Full Time", status: "Active", remaining: "27 days remaining", applications: 798 },
//   { title: "Senior UX Designer", type: "Internship", status: "Active", remaining: "8 days remaining", applications: 185 },
//   { title: "Junior Graphic Designer", type: "Full Time", status: "Active", remaining: "24 days remaining", applications: 583 },
//   { title: "Front End Developer", type: "Full Time", status: "Expire", remaining: "Dec 7, 2019", applications: 740 },
//   { title: "Interaction Designer", type: "Contract Base", status: "Expire", remaining: "Feb 2, 2019", applications: 426 },
//   { title: "Software Engineer", type: "Temporary", status: "Active", remaining: "9 days remaining", applications: 922 },
//   { title: "Product Designer", type: "Full Time", status: "Active", remaining: "7 days remaining", applications: 994 },
//   { title: "Project Manager", type: "Full Time", status: "Expire", remaining: "Dec 4, 2019", applications: 196 },
//   { title: "Marketing Manager", type: "Full Time", status: "Active", remaining: "4 days remaining", applications: 492 },
// ];

// const jobsPerPage = 3; // Number of jobs per page

// const JobList = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate total pages
//   const totalPages = Math.ceil(jobs.length / jobsPerPage);

//   // Get jobs for current page
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//   // Page change handler
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">My Jobs</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//               <th className="py-3 px-6 text-left">My Jobs</th>
//               <th className="py-3 px-6 text-center">Status</th>
//               <th className="py-3 px-6 text-center">Applications</th>
//               <th className="py-3 px-6 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm font-light">
//             {currentJobs.map((job, index) => (
//               <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
//                 <td className="py-3 px-6 text-left">
//                   <div className="font-medium text-gray-800">{job.title}</div>
//                   <div className="text-xs text-gray-500">{job.type} • {job.remaining}</div>
//                 </td>
//                 <td className="py-3 px-6 text-center">
//                   {job.status === "Active" ? (
//                     <span className="text-green-500 flex items-center justify-center">
//                       <FaCheckCircle className="mr-1" /> Active
//                     </span>
//                   ) : (
//                     <span className="text-red-500 flex items-center justify-center">
//                       <FaTimesCircle className="mr-1" /> Expired
//                     </span>
//                   )}
//                 </td>
//                 <td className="py-3 px-6 text-center flex items-center justify-center">
//                   <FaUsers className="mr-1 text-gray-500" /> {job.applications} Applications
//                 </td>
//                 <td className="py-3 px-6 text-center">
//                   <button className="p-2 rounded-full hover:bg-gray-200">
//                     <IoEllipsisVertical className="text-gray-600" size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center mt-4 space-x-2">
//         <button
//           className="px-3 py-2 text-gray-500 rounded hover:bg-gray-200 disabled:opacity-50"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           ←
//         </button>
//         {[...Array(totalPages)].map((_, index) => {
//           const page = index + 1;
//           return (
//             <button
//               key={page}
//               className={`px-3 py-2 rounded ${
//                 page === currentPage ? "bg-purple-500 text-white" : "text-gray-500 hover:bg-gray-200"
//               }`}
//               onClick={() => handlePageChange(page)}
//             >
//               {page < 10 ? `0${page}` : page}
//             </button>
//           );
//         })}
//         <button
//           className="px-3 py-2 text-gray-500 rounded hover:bg-gray-200 disabled:opacity-50"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobList;
