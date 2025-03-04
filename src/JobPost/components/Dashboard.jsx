import React, { useState } from "react";
import { FaInstagram, FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "./Sidebar/Sidebar";
import JobPromotionModal from "./JobPromotionModal";

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
    status: "Expired",
    remaining: "Dec 7, 2019",
    applications: 740
  },
  {
    title: "Technical Support Specialist",
    type: "Part Time",
    status: "Active",
    remaining: "4 days remaining",
    applications: 556
  },
  {
    title: "Interaction Designer",
    type: "Contract Base",
    status: "Expired",
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
    status: "Expired",
    remaining: "Dec 4, 2019",
    applications: 198
  },
  {
    title: "Marketing Manager",
    type: "Full Time",
    status: "Active",
    remaining: "4 days remaining",
    applications: 492
  }
];

const Dashboard = () => {
  const [menuIndex, setMenuIndex] = useState();
  const [selectedJob, setSelectedJob] = useState();

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between p-2">
        <img
          src="/public/Group_8-removebg-preview 1.png"
          alt="TechnoHire Logo"
          className="h-18 w-50"
        />

        <div className="flex items-center space-x-4 mr-96">
          <FaBell />
          <button className="border border-blue-400 px-4 py-2 text-blue-400 font-bold rounded">
            Post A Job
          </button>
          <FaInstagram className="h-8 w-8 text-pink-500 cursor-pointer" />
        </div>
      </div>

      {/* Layout */}
      <div className="flex h-screen bg-gray-100">
        <aside className="w-1/4 bg-white p-6">
          <Sidebar />
        </aside>

        <main className="w-3/4 p-6 overflow-y-auto">
          <div className="flex justify-between items-center p-4 rounded-md">
            <h2 className="text-2xl font-semibold">My Jobs ({jobs.length})</h2>

            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Job Status</span>
              <select className="rounded-md px-4 py-2 bg-white text-gray-600 shadow-sm">
                <option value="all">All Jobs</option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Job List Table */}
          <div className="bg-white shadow rounded-md p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-medium text-gray-600">
                    Job Title
                  </th>
                  <th className="text-left font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-left font-medium text-gray-600">
                    Applications
                  </th>
                  <th className="text-left font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">
                      <div className="text-gray-800 font-medium">
                        {job.title}
                      </div>
                      <div className="text-gray-500">
                        {job.type} · {job.remaining}
                      </div>
                    </td>
                    <td
                      className={`py-2 font-medium ${
                        job.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {job.status}
                    </td>
                    <td className="py-2 text-gray-800">
                      {job.applications} Applications
                    </td>
                    <td className="py-2 relative">
                      <div className="flex gap-1">
                        <button
                          onClick={() =>
                            setMenuIndex(menuIndex === index ? null : index)
                          }
                          className="px-3 py-1 bg-purple-500 text-white rounded-md focus:outline-none"
                        >
                          View Applications
                        </button>
                        <BsThreeDotsVertical />
                      </div>
                      {menuIndex === index && (
                        <div className="relative right-0 mt-2 bg-white shadow-md rounded-md border w-40">
                          <button
                            onClick={() => setSelectedJob(job.title)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            Promote Job
                          </button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            View Details
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                            Make it Expire
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {selectedJob && (
        <JobPromotionModal
          jobTitle={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
};

export default Dashboard;
