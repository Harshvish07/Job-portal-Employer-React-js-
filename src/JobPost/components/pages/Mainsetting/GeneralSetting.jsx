// const GeneralSettings = () => (
//   <div>
//     <h3 className="text-lg font-semibold mb-4">General Settings</h3>

//     {/* App Preferences */}
//     <div className="mb-6">
//       <h4 className="text-md font-medium">App Preferences</h4>
//       <div className="flex space-x-4 mt-2">
//         <select className="border rounded p-2 w-1/3">
//           <option>Light Mode</option>
//           <option>Dark Mode</option>
//         </select>
//         <select className="border rounded p-2 w-1/3">
//           <option>Public</option>
//           <option>Private</option>
//         </select>
//       </div>
//     </div>

//     {/* Notifications */}
//     <div className="mb-6">
//       <h4 className="text-md font-medium">Notifications</h4>
//       <div className="grid grid-cols-2 gap-2 mt-2">
//         {[
//           "All Notifications",
//           "Candidate Updates",
//           "Personal Messages",
//           "Candidate Recommendations",
//           "Notify me when Candidate Rejected the Message",
//           "Notify me when Candidate accepted the message"
//         ].map((option) => (
//           <label key={option} className="flex items-center space-x-2">
//             <input type="checkbox" className="form-checkbox text-purple-600" />
//             <span>{option}</span>
//           </label>
//         ))}
//       </div>
//     </div>

//     {/* Sign-in & Security */}
//     <div className="mb-6">
//       <h4 className="text-md font-medium">Sign in & Security</h4>
//       <div className="flex space-x-4 mt-2">
//         <input
//           type="email"
//           className="border rounded p-2 w-1/2"
//           value="****19@gmail.com"
//           disabled
//         />
//         <input
//           type="text"
//           className="border rounded p-2 w-1/2"
//           value="+91 12345 67890"
//           disabled
//         />
//       </div>
//     </div>

//     {/* Change Password */}
//     <div className="mb-6">
//       <h4 className="text-md font-medium">Change Password</h4>
//       <div className="flex space-x-4 mt-2">
//         <input
//           type="password"
//           placeholder="Old Password"
//           className="border rounded p-2 w-1/3"
//         />
//         <input
//           type="password"
//           placeholder="New Password"
//           className="border rounded p-2 w-1/3"
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="border rounded p-2 w-1/3"
//         />
//       </div>
//       <div className="mt-2 flex justify-between items-center">
//         <a href="#" className="text-purple-600 text-sm">
//           Forget Password?
//         </a>
//         <button className="bg-purple-600 text-white px-4 py-2 rounded">
//           Change
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default GeneralSettings;


import { useEffect, useState } from "react";
import useGeneralSettings from "../../../../hooks/useGeneralSettings";

const GeneralSettings = () => {
  const {
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
    forgotPassword,
  } = useGeneralSettings();

  const [theme, setTheme] = useState(appPreferences?.theme || "light");
  const [visibility, setVisibility] = useState(appPreferences?.visibility || "public");
  const [notifications, setNotifications] = useState(notificationSettings || {});
  const [email, setEmail] = useState(signInSecurity?.email || "");
  const [phone, setPhone] = useState(signInSecurity?.phone || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    fetchAppPreferences();
    fetchNotificationSettings();
    fetchSignInSecurity();
  }, []);

  const handleAppPreferencesUpdate = () => {
    updateAppPreferences({ theme, visibility });
  };

  const handleNotificationSettingsUpdate = () => {
    updateNotificationSettings(notifications);
  };

  const handleSignInSecurityUpdate = () => {
    updateSignInSecurity({ email, phone });
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const success = await changePassword(oldPassword, newPassword);
    if (success) {
      alert("Password changed successfully");
    } else {
      alert("Failed to change password");
    }
  };

  const handleForgotPassword = async () => {
    const success = await forgotPassword(email);
    if (success) {
      alert("Password reset email sent");
    } else {
      alert("Failed to send password reset email");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">General Settings</h3>

      {/* App Preferences */}
      <div className="mb-6">
        <h4 className="text-md font-medium">App Preferences</h4>
        <div className="flex space-x-4 mt-2">
          <select
            className="border rounded p-2 w-1/3"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
          <select
            className="border rounded p-2 w-1/3"
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <button
            onClick={handleAppPreferencesUpdate}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h4 className="text-md font-medium">Notifications</h4>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            "All Notifications",
            "Candidate Updates",
            "Personal Messages",
            "Candidate Recommendations",
            "Notify me when Candidate Rejected the Message",
            "Notify me when Candidate accepted the message",
          ].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={notifications[option] || false}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    [option]: e.target.checked,
                  })
                }
                className="form-checkbox text-purple-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleNotificationSettingsUpdate}
          className="bg-purple-600 text-white px-4 py-2 rounded mt-4"
        >
          Save
        </button>
      </div>

      {/* Sign-in & Security */}
      <div className="mb-6">
        <h4 className="text-md font-medium">Sign in & Security</h4>
        <div className="flex space-x-4 mt-2">
          <input
            type="email"
            className="border rounded p-2 w-1/2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
          <input
            type="text"
            className="border rounded p-2 w-1/2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled
          />
        </div>
        <button
          onClick={handleSignInSecurityUpdate}
          className="bg-purple-600 text-white px-4 py-2 rounded mt-4"
        >
          Save
        </button>
      </div>

      {/* Change Password */}
      <div className="mb-6">
        <h4 className="text-md font-medium">Change Password</h4>
        <div className="flex space-x-4 mt-2">
          <input
            type="password"
            placeholder="Old Password"
            className="border rounded p-2 w-1/3"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="border rounded p-2 w-1/3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded p-2 w-1/3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mt-2 flex justify-between items-center">
          <button
            onClick={handleForgotPassword}
            className="text-purple-600 text-sm"
          >
            Forget Password?
          </button>
          <button
            onClick={handlePasswordChange}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
