// import React, { useState } from "react";

// const SettingsPage = () => {
//   const [activeTab, setActiveTab] = useState("General");

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Settings</h2>
//       <div className="border-b flex space-x-6 pb-3 mb-6 text-gray-500 text-lg">
//         {["General", "FAQ", "Support", "Terms & Services"].map((tab) => (
//           <span
//             key={tab}
//             className={`cursor-pointer px-4 pb-2 ${
//               activeTab === tab
//                 ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
//                 : "hover:text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>
//       <div className="bg-gray-50 p-6 rounded-lg">
//         {activeTab === "General" && <GeneralSettings />}
//         {activeTab === "FAQ" && <FAQ />}
//         {activeTab === "Support" && <Support />}
//         {activeTab === "Terms & Services" && <TermsServices />}
//       </div>
//     </div>
//   );
// };

// const GeneralSettings = () => (
//   <>
//     <AppPreferences />
//     <Notifications />
//     <SecuritySettings />
//     <ChangePassword />
//   </>
// );

// const FAQ = () => (
//   <div>
//     <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
//     <p className="mt-2 text-gray-600">
//       Here you can find answers to the most common questions.
//     </p>
//   </div>
// );

// const Support = () => (
//   <div>
//     <h3 className="text-lg font-semibold">Support</h3>
//     <p className="mt-2 text-gray-600">Need help? Contact our support team.</p>
//   </div>
// );

// const TermsServices = () => (
//   <div>
//     <h3 className="text-lg font-semibold">Terms & Services</h3>
//     <p className="mt-2 text-gray-600">Read our terms and conditions here.</p>
//   </div>
// );

// const AppPreferences = () => {
//   return (
//     <div className="mb-6">
//       <h3 className="text-lg font-semibold">App Preferences</h3>
//       <div className="flex space-x-6 mt-2">
//         <select className="border p-3 rounded-lg bg-white w-1/3">
//           <option>Light Mode</option>
//           <option>Dark Mode</option>
//         </select>
//         <select className="border p-3 rounded-lg bg-white w-1/3">
//           <option>Public</option>
//           <option>Private</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// const Notifications = () => {
//   return (
//     <div className="mb-6">
//       <h3 className="text-lg font-semibold">Notifications</h3>
//       <div className="grid grid-cols-2 gap-3 mt-3">
//         {[
//           "All Notifications",
//           "Candidate Updates",
//           "Personal Messages",
//           "Candidate Recommendations",
//           "Notify me when Candidate Rejected the Message",
//           "Notify me when Candidate accepted the message"
//         ].map((label) => (
//           <label key={label} className="flex items-center space-x-3">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-purple-600"
//             />
//             <span className="text-gray-700">{label}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// const SecuritySettings = () => {
//   return (
//     <div className="mb-6">
//       <h3 className="text-lg font-semibold">Sign in & Security</h3>
//       <div className="flex space-x-6 mt-3">
//         <input
//           type="email"
//           value="****19@gmail.com"
//           disabled
//           className="border p-3 rounded-lg bg-gray-200 w-1/2"
//         />
//         <input
//           type="tel"
//           value="+91 12345 67890"
//           disabled
//           className="border p-3 rounded-lg bg-gray-200 w-1/2"
//         />
//       </div>
//     </div>
//   );
// };

// const ChangePassword = () => {
//   return (
//     <div>
//       <h3 className="text-lg font-semibold">Change Password</h3>
//       <div className="grid grid-cols-3 gap-3 mt-3">
//         <input
//           type="password"
//           placeholder="Old Password"
//           className="border p-3 rounded-lg bg-white"
//         />
//         <input
//           type="password"
//           placeholder="New Password"
//           className="border p-3 rounded-lg bg-white"
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="border p-3 rounded-lg bg-white"
//         />
//       </div>
//       <button className="bg-purple-600 text-white px-6 py-3 rounded-lg mt-4">
//         Change
//       </button>
//     </div>
//   );
// };

// export default SettingsPage;

import React, { useState } from "react";
import GeneralSettings from "./GeneralSetting";
import FAQ from "./FAQ";
import Support from "./Support";
import TermsServices from "./Term&condition";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="p-4 w-full mx-auto bg-white shadow-md rounded-lg">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      {/* Navigation Tabs */}
      <div className="border-b flex space-x-6 pb-3 mb-6 text-gray-500 text-lg">
        {["General", "FAQ", "Support", "Terms & Services"].map((tab) => (
          <span
            key={tab}
            className={`cursor-pointer px-4 pb-2 transition ${
              activeTab === tab
                ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                : "hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-gray-50 p-6 h-auto rounded-lg">
        {" "}
        {/* ✅ Fixed Height Issue */}
        {activeTab === "General" && <GeneralSettings />}
        {activeTab === "FAQ" && <FAQ />}
        {activeTab === "Support" && <Support />}
        {activeTab === "Terms & Services" && <TermsServices />}
      </div>
    </div>
  );
};

export default SettingsPage;
