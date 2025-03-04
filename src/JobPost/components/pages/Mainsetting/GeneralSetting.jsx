const GeneralSettings = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4">General Settings</h3>

    {/* App Preferences */}
    <div className="mb-6">
      <h4 className="text-md font-medium">App Preferences</h4>
      <div className="flex space-x-4 mt-2">
        <select className="border rounded p-2 w-1/3">
          <option>Light Mode</option>
          <option>Dark Mode</option>
        </select>
        <select className="border rounded p-2 w-1/3">
          <option>Public</option>
          <option>Private</option>
        </select>
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
          "Notify me when Candidate accepted the message"
        ].map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-purple-600" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Sign-in & Security */}
    <div className="mb-6">
      <h4 className="text-md font-medium">Sign in & Security</h4>
      <div className="flex space-x-4 mt-2">
        <input
          type="email"
          className="border rounded p-2 w-1/2"
          value="****19@gmail.com"
          disabled
        />
        <input
          type="text"
          className="border rounded p-2 w-1/2"
          value="+91 12345 67890"
          disabled
        />
      </div>
    </div>

    {/* Change Password */}
    <div className="mb-6">
      <h4 className="text-md font-medium">Change Password</h4>
      <div className="flex space-x-4 mt-2">
        <input
          type="password"
          placeholder="Old Password"
          className="border rounded p-2 w-1/3"
        />
        <input
          type="password"
          placeholder="New Password"
          className="border rounded p-2 w-1/3"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border rounded p-2 w-1/3"
        />
      </div>
      <div className="mt-2 flex justify-between items-center">
        <a href="#" className="text-purple-600 text-sm">
          Forget Password?
        </a>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Change
        </button>
      </div>
    </div>
  </div>
);

export default GeneralSettings;
