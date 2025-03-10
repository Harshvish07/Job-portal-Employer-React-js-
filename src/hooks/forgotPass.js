import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const requestPasswordReset = async (email) => {
    setLoading(true);
    setError(null);
    setMessage("");

    try {
      const response = await fetch(
        "https://technohire-backend-5my9.onrender.com/employer/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("A reset link has been sent to your email.");
        navigate("/resetPassword");
      } else {
        setError(data.message || "Failed to send reset email.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return { requestPasswordReset, loading, error, message };
};

export default useForgotPassword;
