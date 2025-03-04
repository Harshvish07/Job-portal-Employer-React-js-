import { useState, useEffect } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://technohire-backend.onrender.com/job/getAllJobs"
      );
      const data = await response.json();
      if (data.success) {
        setJobs(data.Jobs);
      } else {
        setError("Failed to fetch jobs");
      }
    } catch (err) {
      setError("Error fetching jobs");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(); // Fetch jobs on mount
  }, []);

  return { jobs, loading, error, fetchJobs };
};

export default useJobs;
