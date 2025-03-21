// import { useState, useCallback } from "react";

// const useHomepageData = () => {
//   const [liveJobsCount, setLiveJobsCount] = useState(0);
//   const [companiesCount, setCompaniesCount] = useState(0);
//   const [newJobsCount, setNewJobsCount] = useState(0);
//   const [recentJobs, setRecentJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Helper function to get the token from state
//   const token = useSelector((state) => state.login.token);
//   // Fetch Live Jobs Count
//   const fetchLiveJobsCount = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/job/getOpenJobs",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}` // Include the token
//           }
//         }
//       );
//       if (!response.ok) throw new Error("Failed to fetch live jobs");
//       const data = await response.json();
//       setLiveJobsCount(data.openJobsCount || 0);
//     } catch (err) {
//       setError("Error fetching live jobs count");
//     }
//     setLoading(false);
//   }, [getToken]);

//   // Fetch Companies Count
//   const fetchCompaniesCount = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://technohire-backend.onrender.com/company/companiesCount"
//       );
//       if (!response.ok) throw new Error("Failed to fetch companies count");
//       const data = await response.json();
//       setCompaniesCount(data.count || 0);
//     } catch (err) {
//       setError("Error fetching companies count");
//     }
//     setLoading(false);
//   }, []);

//   // Fetch New Jobs Count
//   const fetchNewJobsCount = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://technohire-backend.onrender.com/job/newJobsCount"
//       );
//       if (!response.ok) throw new Error("Failed to fetch new jobs count");
//       const data = await response.json();
//       setNewJobsCount(data.count || 0);
//     } catch (err) {
//       setError("Error fetching new jobs count");
//     }
//     setLoading(false);
//   }, []);

//   // Fetch Recent Jobs
//   const fetchRecentJobs = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://technohire-backend.onrender.com/job/getAllJobs"
//       );
//       if (!response.ok) throw new Error("Failed to fetch recent jobs");
//       const data = await response.json();
//       setRecentJobs(data.Jobs || []);
//     } catch (err) {
//       setError("Error fetching recent jobs");
//     }
//     setLoading(false);
//   }, []);

//   return {
//     liveJobsCount,
//     companiesCount,
//     newJobsCount,
//     recentJobs,
//     loading,
//     error,
//     fetchLiveJobsCount,
//     fetchCompaniesCount,
//     fetchNewJobsCount,
//     fetchRecentJobs
//   };
// };

// export default useHomepageData;

import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

const useHomepageData = () => {
  const [liveJobsCount, setLiveJobsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [newJobsCount, setNewJobsCount] = useState(0);
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get the token from Redux state
  const token = useSelector((state) => state.login.token);

  // Fetch Live Jobs Count
  const fetchLiveJobsCount = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://technohire-backend-5my9.onrender.com/job/getOpenJobs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` // Include the token
          }
        }
      );
      if (!response.ok) throw new Error("Failed to fetch live jobs");
      const data = await response.json();
      setLiveJobsCount(data.openJobsCount || 0);
    } catch (err) {
      setError("Error fetching live jobs count");
    } finally {
      setLoading(false);
    }
  }, [token]); // Fixed dependency

  // Fetch Companies Count
  const fetchCompaniesCount = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://technohire-backend.onrender.com/company/companiesCount"
      );
      if (!response.ok) throw new Error("Failed to fetch companies count");
      const data = await response.json();
      setCompaniesCount(data.count || 0);
    } catch (err) {
      setError("Error fetching companies count");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch New Jobs Count
  const fetchNewJobsCount = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://technohire-backend.onrender.com/job/newJobsCount"
      );
      if (!response.ok) throw new Error("Failed to fetch new jobs count");
      const data = await response.json();
      setNewJobsCount(data.count || 0);
    } catch (err) {
      setError("Error fetching new jobs count");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch Recent Jobs
  const fetchRecentJobs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://technohire-backend.onrender.com/job/getAllJobs"
      );
      if (!response.ok) throw new Error("Failed to fetch recent jobs");
      const data = await response.json();
      setRecentJobs(data.Jobs || []);
    } catch (err) {
      setError("Error fetching recent jobs");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    liveJobsCount,
    companiesCount,
    newJobsCount,
    recentJobs,
    loading,
    error,
    fetchLiveJobsCount,
    fetchCompaniesCount,
    fetchNewJobsCount,
    fetchRecentJobs
  };
};

export default useHomepageData;
