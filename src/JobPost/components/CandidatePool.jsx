import React, { useState, useEffect } from "react";
import { FaInstagram, FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import JobPromotionModal from "./JobPromotionModal";
import useJobs from "../../hooks/postJobs";
import { FaArrowRight, FaEllipsisV, FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const CandidatePool = () => {
  const [selectedJob, setSelectedJob] = useState();
  const { jobs, loading, error } = useJobs();
  const [menuOpen, setMenuOpen] = useState(null);
  const [filter, setFilter] = useState("all"); // Stores selected filter option
  const [filteredApplications, setFilteredApplications] = useState([]); // Stores filtered jobs

  useEffect(() => {
    // Update filtered jobs when jobs are loaded or filter changes
    if (filter === "all") {
      setFilteredApplications(jobs);
    } else {
      setFilteredApplications(
        jobs.filter((job) => job.status.toLowerCase() === filter)
      );
    }
  }, [jobs, filter]);

  return (
    <>
      <div className="p-4">
        <div className="mt-6 bg-white rounded-lg shadow-sm">
          <div className="flex justify-between p-4">
            <p className="font-semibold text-[20px]">Recently Posted Jobs</p>

            <select
              id="dropdown"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="rounded-md px-4 py-2 bg-white text-gray-600 shadow-sm"
            >
              <option value="all">All Jobs</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {loading ? (
            <p className="text-center text-gray-500 p-4">Loading jobs...</p>
          ) : error ? (
            <p className="text-center text-red-500 p-4">{error}</p>
          ) : jobs.length > 0 ? (
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
                {filteredApplications.map((job) => (
                  <tr key={job._id} className="border-b border-gray-200">
                    <td className="p-4">
                      <div className="font-medium">{job.jobTitle}</div>
                      <div className="text-sm text-gray-500">
                        {job.jobType} •{" "}
                        {new Date(job.expireDate).toDateString()}
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
                    <td className="p-4">
                      {job.applications || 0} Applications
                    </td>
                    <td className="p-4 relative flex items-center space-x-3">
                      <button className="bg-[#F1F2F4] hover:bg-[#7900BA] hover:text-white text-[#7900BA] px-4 py-2 rounded-md text-sm">
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
                          <div className="absolute left-0 mt-1 w-[150px] bg-white border rounded shadow-md p-0 z-10">
                            <button
                              onClick={() => setSelectedJob(job._id)}
                              className="w-full text-left px-4 py-2 text-sm  hover:bg-purple-700 hover:text-white text-[#7900BA] rounded-md"
                            >
                              Promote Job
                            </button>

                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-purple-700 hover:text-white text-[#7900BA] rounded-md">
                              View Detail
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-purple-700 hover:text-white text-[#7900BA] rounded-md">
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
      <p className="text-center text-gray-500 p-4">
        No Jobs {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </p>

      {selectedJob && (
        <JobPromotionModal
          jobTitle={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
};

export default CandidatePool;
