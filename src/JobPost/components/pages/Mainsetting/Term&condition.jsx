const TermsServices = () => {
  return (
    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header with Tabs */}
      <div className="flex space-x-6 border-b pb-2 text-black">
        <h1 className="text-2xl  font-semibold mb-4">Terms & Services</h1>
      </div>

      {/* Terms & Conditions List */}
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          1) Users must be at least 18 years old or meet their local employment
          age requirement.
        </p>
        <p>
          2) Users must provide accurate and truthful information during
          registration and while using the app.
        </p>
        <p>
          3) Users are required to create an account to access certain features
          of the app.
        </p>
        <p>
          4) Users are responsible for keeping their account information secure
          and confidential.
        </p>
        <p>
          5) The app is not liable for unauthorized access due to user
          negligence.
        </p>
        <p>
          6) Users should provide up-to-date information in their profiles,
          resumes, and applications.
        </p>
        <p>
          7) Users should apply only for positions they are qualified for and
          genuinely interested in.
        </p>
        <p>8) Users must not engage in fraudulent or unethical activities.</p>

        <p className="font-semibold">9) Job Seekers agree to:</p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Provide accurate and up-to-date profile information.</li>
          <li>Apply only for suitable positions.</li>
          <li>Avoid fraudulent or unethical behavior.</li>
        </ul>
      </div>

      {/* Download Button */}
      <div className="mt-8 text-center">
        <button className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition">
          Download
        </button>
      </div>
    </div>
  );
};

export default TermsServices;
