// import { useState } from "react";

// const useGeneralSettings = () => {
//   const [appPreferences, setAppPreferences] = useState(null);
//   const [notificationSettings, setNotificationSettings] = useState(null);
//   const [signInSecurity, setSignInSecurity] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Helper function to get the token from localStorage
//   const getToken = () => {
//     return localStorage.getItem("token"); // Assuming the token is stored in localStorage
//   };

//   // Fetch App Preferences
//   const fetchAppPreferences = async () => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/app-preferences",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       setAppPreferences(data);
//     } catch (err) {
//       setError("Error fetching app preferences");
//     }
//     setLoading(false);
//   };

//   // Update App Preferences
//   const updateAppPreferences = async (updatedPreferences) => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/app-preferences",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//           body: JSON.stringify(updatedPreferences),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       setAppPreferences(data);
//     } catch (err) {
//       setError("Error updating app preferences");
//     }
//     setLoading(false);
//   };

//   // Fetch Notification Settings
//   const fetchNotificationSettings = async () => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/notification-settings",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       setNotificationSettings(data);
//     } catch (err) {
//       setError("Error fetching notification settings");
//     }
//     setLoading(false);
//   };

//   // Update Notification Settings
//   const updateNotificationSettings = async (updatedSettings) => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/notification-settings",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//           body: JSON.stringify(updatedSettings),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       setNotificationSettings(data);
//     } catch (err) {
//       setError("Error updating notification settings");
//     }
//     setLoading(false);
//   };

//   // Fetch Sign-in Security
//   const fetchSignInSecurity = async () => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/sign-in-security",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       setSignInSecurity(data);
//     } catch (err) {
//       setError("Error fetching sign-in security");
//     }
//     setLoading(false);
//   };

//   // Update Sign-in Security
//   const updateSignInSecurity = async (updatedSecurity) => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/sign-in-security",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//           body: JSON.stringify(updatedSecurity),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       setSignInSecurity(data);
//     } catch (err) {
//       setError("Error updating sign-in security");
//     }
//     setLoading(false);
//   };

//   // Change Password
//   const changePassword = async (currentPassword, newPassword) => {
//     setLoading(true);
//     try {
//       const token = getToken();
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/settings/employer-account/change-password",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Include the token
//           },
//           body: JSON.stringify({ currentPassword, newPassword }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Unauthorized");
//       }
//       const data = await response.json();
//       return data.success;
//     } catch (err) {
//       setError("Error changing password");
//       return false;
//     }
//     setLoading(false);
//   };

//   // Forgot Password
//   const forgotPassword = async (email) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://technohire-backend-5my9.onrender.com/employer/auth/forgot-password",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to send password reset email");
//       }
//       const data = await response.json();
//       return data.success;
//     } catch (err) {
//       setError("Error sending password reset email");
//       return false;
//     }
//     setLoading(false);
//   };

//   return {
//     appPreferences,
//     notificationSettings,
//     signInSecurity,
//     loading,
//     error,
//     fetchAppPreferences,
//     updateAppPreferences,
//     fetchNotificationSettings,
//     updateNotificationSettings,
//     fetchSignInSecurity,
//     updateSignInSecurity,
//     changePassword,
//     forgotPassword,
//   };
// };

// export default useGeneralSettings;

import { useState } from "react";
import { useSelector } from "react-redux";

const useGeneralSettings = () => {
  const [appPreferences, setAppPreferences] = useState(null);
  const [notificationSettings, setNotificationSettings] = useState(null);
  const [signInSecurity, setSignInSecurity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get auth token from Redux store
  const token = useSelector((state) => state.login.token); // Adjust path based on your store structure

  // Reusable API fetch function
  const fetchData = async (url, method = "GET", body = null) => {
    setLoading(true);
    setError(null);
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "" // Use token from Redux
      };

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || "Something went wrong!");
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Base API URL
  const BASE_URL = "https://technohire-backend-5my9.onrender.com";

  // Fetch App Preferences
  const fetchAppPreferences = async () => {
    const data = await fetchData(`${BASE_URL}/settings/app-preferences`);
    if (data) setAppPreferences(data);
  };

  // Update App Preferences
  const updateAppPreferences = async (updatedPreferences) => {
    const data = await fetchData(
      `${BASE_URL}/settings/app-preferences`,
      "PUT",
      updatedPreferences
    );
    if (data) setAppPreferences(data);
  };

  // Fetch Notification Settings
  const fetchNotificationSettings = async () => {
    const data = await fetchData(`${BASE_URL}/settings/notification-settings`);
    if (data) setNotificationSettings(data);
  };

  // Update Notification Settings
  const updateNotificationSettings = async (updatedSettings) => {
    const data = await fetchData(
      `${BASE_URL}/settings/notification-settings`,
      "PUT",
      updatedSettings
    );
    if (data) setNotificationSettings(data);
  };

  // Fetch Sign-in Security
  const fetchSignInSecurity = async () => {
    const data = await fetchData(`${BASE_URL}/settings/sign-in-security`);
    if (data) setSignInSecurity(data);
  };

  // Update Sign-in Security
  const updateSignInSecurity = async (updatedSecurity) => {
    const data = await fetchData(
      `${BASE_URL}/settings/sign-in-security`,
      "PUT",
      updatedSecurity
    );
    if (data) setSignInSecurity(data);
  };

  // Change Password
  const changePassword = async (currentPassword, newPassword) => {
    const data = await fetchData(
      `${BASE_URL}/settings/employer-account/change-password`,
      "PUT",
      {
        currentPassword,
        newPassword
      }
    );
    return data?.success || false;
  };

  // Forgot Password
  const forgotPassword = async (email) => {
    const data = await fetchData(
      `${BASE_URL}/employer/auth/forgot-password`,
      "POST",
      { email }
    );
    return data?.success || false;
  };

  return {
    appPreferences,
    notificationSettings,
    signInSecurity,
    loading,
    error,
    fetchAppPreferences,
    updateAppPreferences,
    fetchNotificationSettings,
    updateNotificationSettings,
    fetchSignInSecurity,
    updateSignInSecurity,
    changePassword,
    forgotPassword
  };
};

export default useGeneralSettings;
