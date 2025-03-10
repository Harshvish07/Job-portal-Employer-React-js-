// import React, { useState } from "react";
// import { FaSort, FaTimes } from "react-icons/fa";
// import { Search, MapPin, Layers } from "lucide-react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill CSS

// const candidates = [
//   {
//     name: "Guy Hawkins",
//     role: "Senior UX Designer",
//     experience: "7 Years Experience",
//     education: "Master Degree",
//     appliedDate: "Jan 23, 2022",
//     match: "80%",
//     skills: [
//       "User Interface (UD Design)",
//       "User Experience (UXD Design)",
//       "User Research",
//       "Responsive Design",
//       "Prototyping",
//       "Wireframing",
//       "Usability Testing",
//     ],
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//   },
//   {
//     name: "Rebecca Watson",
//     role: "Graphic Designer",
//     experience: "7 Years Experience",
//     education: "Master Degree",
//     appliedDate: "Jan 23, 2022",
//     match: "40%",
//     skills: [
//       "User Interface (UD Design)",
//       "User Experience (UXD Design)",
//       "User Research",
//       "Responsive Design",
//       "Typography",
//       "Branding",
//       "Adobe Suite",
//     ],
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
// ];

// const FindCandidate = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState("");
//   const [selectedSkill, setSelectedSkill] = useState("");
//   const [experience, setExperience] = useState("");
//   const [expectation, setExpectation] = useState("");
//   const [preferences, setPreferences] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [message, setMessage] = useState("");

//   const togglePreference = (pref) => {
//     setPreferences((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

//   const toggleEducation = (edu) => {
//     setEducation((prev) =>
//       prev.includes(edu) ? prev.filter((e) => e !== edu) : [...prev, edu]
//     );
//   };

//   const handleInviteClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setMessage(""); // Clear the message when modal is closed
//   };

//   const handleSendMessage = () => {
//     // Handle sending the message
//     console.log("Message sent:", message);
//     setShowModal(false); // Close the modal after sending
//   };

//   return (
//     <div className="flex gap-6 p-6">
//       {/* Filter Section */}
//       <div className="w-80 flex-shrink-0">
//         <div className="bg-white p-6 rounded-lg shadow-md border">
//           <div className="relative mb-4">
//             <Search className="absolute left-3 top-3 text-gray-500" size={18} />
//             <input
//               type="text"
//               placeholder="Search Candidate"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div className="relative mb-4">
//             <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
//             <input
//               type="text"
//               placeholder="Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div className="relative mb-6">
//             <Layers className="absolute left-3 top-3 text-gray-500" size={18} />
//             <select
//               value={selectedSkill}
//               onChange={(e) => setSelectedSkill(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-purple-500"
//             >
//               <option value="">Select Skills</option>
//               <option value="User Interface (UD Design)">User Interface (UD Design)</option>
//               <option value="User Experience (UXD Design)">User Experience (UXD Design)</option>
//               <option value="User Research">User Research</option>
//               <option value="Responsive Design">Responsive Design</option>
//             </select>
//           </div>

//           {/* Candidate Experience */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Candidate Experience</h3>
//             <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//               {["Freshers", "1 - 2 Years", "2 - 4 Years", "4 - 6 Years", "10 - 15 Years", "15+ Years"].map((exp) => (
//                 <label key={exp} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="radio"
//                     name="experience"
//                     value={exp}
//                     checked={experience === exp}
//                     onChange={() => setExperience(exp)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{exp}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Candidate Expectations */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Candidate Expectations</h3>
//             <div className="grid grid-cols-2 gap-x-4 gap-y-3">
//               {["£5000 - £25000", "£50000 - £65000", "£100000 - £1500000", "£200000+"].map((exp) => (
//                 <label key={exp} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="radio"
//                     name="expectation"
//                     value={exp}
//                     checked={expectation === exp}
//                     onChange={() => setExpectation(exp)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{exp}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Candidate Preference */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Candidate Preference</h3>
//             <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//               {["All", "Full Time", "Part Time", "Internship", "Remote", "Temporary"].map((pref) => (
//                 <label key={pref} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="checkbox"
//                     checked={preferences.includes(pref)}
//                     onChange={() => togglePreference(pref)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{pref}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Education</h3>
//             <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//               {["High School", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree", "All"].map((edu) => (
//                 <label key={edu} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="checkbox"
//                     checked={education.includes(edu)}
//                     onChange={() => toggleEducation(edu)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{edu}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
//             Find Candidate
//           </button>
//         </div>
//       </div>

//       {/* Candidate List */}
//       <div className="flex-1">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold">Talent Pool</h2>
//             <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
//               <FaSort className="text-sm" /> Sort
//             </button>
//           </div>

//           {candidates.map((candidate, index) => (
//             <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <img src={candidate.image} alt={candidate.name} className="w-16 h-16 rounded-full" />
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <h3 className="font-semibold">{candidate.name}</h3>
//                     <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
//                       Matches Profils : {candidate.match}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 text-sm mb-1">{candidate.role}</p>
//                   <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
//                     <span>{candidate.experience}</span>
//                     <span>•</span>
//                     <span>Education: {candidate.education}</span>
//                     <span>•</span>
//                     <span>Applied: {candidate.appliedDate}</span>
//                   </div>
//                   <div className="flex flex-wrap items-center gap-2">
//                     {candidate.skills.slice(0, 4).map((skill, i) => (
//                       <span 
//                         key={i}
//                         className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                     <span className="text-gray-500 text-sm">
//                       &gt; {candidate.skills.length - 4} more
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <button 
//                 className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap"
//                 onClick={handleInviteClick}
//               >
//                 Invite To Apply
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Invitation to Apply</h2>
//               <button 
//                 className="text-gray-500 hover:text-gray-700"
//                 onClick={handleCloseModal}
//               >
//                 <FaTimes className="text-lg" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Title</label>
//               <select className="w-full p-2 border rounded-md">
//                 <option>Select...</option>
//                 <option>Interview Invitation</option>
//                 <option>Job Offer</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Message</label>
//               <ReactQuill
//                 value={message}
//                 onChange={setMessage}
//                 modules={{
//                   toolbar: [
//                     ["bold", "italic", "underline"],
//                     [{ list: "ordered" }, { list: "bullet" }],
//                     ["clean"],
//                   ],
//                 }}
//                 placeholder="Write your message here..."
//               />
//             </div>
//             <div className="flex justify-between">
//               <button 
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button 
//                 className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
//                 onClick={handleSendMessage}
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FindCandidate;








// import React, { useState, useEffect } from "react";
// import { FaSort, FaTimes } from "react-icons/fa";
// import { Search, MapPin, Layers } from "lucide-react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill CSS
// import axios from "axios";

// const FindCandidate = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState("");
//   const [selectedSkill, setSelectedSkill] = useState("");
//   const [experience, setExperience] = useState("");
//   const [expectation, setExpectation] = useState("");
//   const [preferences, setPreferences] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [message, setMessage] = useState("");
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);

//   useEffect(() => {
//     // Fetch candidates from the API
//     const fetchCandidates = async () => {
//       try {
//         const response = await axios.get(
//           "https://technohire-backend.onrender.com/talent-pool/browse"
//         );
//         setCandidates(response.data.candidates);
//         console.log(response.data.candidates);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   const togglePreference = (pref) => {
//     setPreferences((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

//   const toggleEducation = (edu) => {
//     setEducation((prev) =>
//       prev.includes(edu) ? prev.filter((e) => e !== edu) : [...prev, edu]
//     );
//   };

//   const handleInviteClick = (candidate) => {
//     setSelectedCandidate(candidate);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setMessage(""); // Clear the message when modal is closed
//   };

//   const handleSendMessage = async () => {
//     if (!selectedCandidate) return;

//     try {
//       const response = await axios.post(
//         "https://technohire-backend.onrender.com/talent-pool/invite",
//         {
//           candidateId: selectedCandidate._id,
//           message: message,
//         }
//       );

//       if (response.data.msg === "Invitation sent successfully") {
//         alert("Invitation sent successfully");
//         setShowModal(false);
//       }
//     } catch (error) {
//       console.error("Error sending invitation:", error);
//     }
//   };

//   return (
//     <div className="flex gap-6 p-6">
//       {/* Filter Section */}
//       <div className="w-80 flex-shrink-0">
//         <div className="bg-white p-6 rounded-lg shadow-md border">
//           <div className="relative mb-4">
//             <Search className="absolute left-3 top-3 text-gray-500" size={18} />
//             <input
//               type="text"
//               placeholder="Search Candidate"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div className="relative mb-4">
//             <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
//             <input
//               type="text"
//               placeholder="Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div className="relative mb-6">
//             <Layers className="absolute left-3 top-3 text-gray-500" size={18} />
//             <select
//               value={selectedSkill}
//               onChange={(e) => setSelectedSkill(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-purple-500"
//             >
//               <option value="">Select Skills</option>
//               <option value="User Interface (UD Design)">User Interface (UD Design)</option>
//               <option value="User Experience (UXD Design)">User Experience (UXD Design)</option>
//               <option value="User Research">User Research</option>
//               <option value="Responsive Design">Responsive Design</option>
//             </select>
//           </div>

//           {/* Candidate Experience */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Candidate Experience</h3>
//             <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//               {["Freshers", "1 - 2 Years", "2 - 4 Years", "4 - 6 Years", "10 - 15 Years", "15+ Years"].map((exp) => (
//                 <label key={exp} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="radio"
//                     name="experience"
//                     value={exp}
//                     checked={experience === exp}
//                     onChange={() => setExperience(exp)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{exp}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Candidate Expectations */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Candidate Expectations</h3>
//             <div className="grid grid-cols-2 gap-x-4 gap-y-3">
//               {["£5000 - £25000", "£50000 - £65000", "£100000 - £1500000", "£200000+"].map((exp) => (
//                 <label key={exp} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="radio"
//                     name="expectation"
//                     value={exp}
//                     checked={expectation === exp}
//                     onChange={() => setExpectation(exp)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{exp}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Candidate Preference */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Candidate Preference</h3>
//             <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//               {["All", "Full Time", "Part Time", "Internship", "Remote", "Temporary"].map((pref) => (
//                 <label key={pref} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="checkbox"
//                     checked={preferences.includes(pref)}
//                     onChange={() => togglePreference(pref)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{pref}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-3">Education</h3>
//             <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//               {["High School", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree", "All"].map((edu) => (
//                 <label key={edu} className="flex items-center space-x-2 whitespace-nowrap">
//                   <input
//                     type="checkbox"
//                     checked={education.includes(edu)}
//                     onChange={() => toggleEducation(edu)}
//                     className="accent-purple-600"
//                   />
//                   <span className="text-sm">{edu}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
//             Find Candidate
//           </button>
//         </div>
//       </div>

//       {/* Candidate List */}
//       <div className="flex-1">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold">Talent Pool</h2>
//             <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
//               <FaSort className="text-sm" /> Sort
//             </button>
//           </div>

//           {candidates.map((candidate, index) => (
//             <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <img src={candidate.image} alt={candidate.name} className="w-16 h-16 rounded-full" />
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <h3 className="font-semibold">{candidate.name}</h3>
//                     <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
//                       Matches Profil : {candidate.match}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 text-sm mb-1">{candidate.role}</p>
//                   <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
//                     <span>{candidate.experience}</span>
//                     <span>•</span>
//                     <span>Education: {candidate.education}</span>
//                     <span>•</span>
//                     <span>Applied: {candidate.appliedDate}</span>
//                   </div>
//                   <div className="flex flex-wrap items-center gap-2">
//                     {candidate.skills.slice(0, 4).map((skill, i) => (
//                       <span 
//                         key={i}
//                         className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                     <span className="text-gray-500 text-sm">
//                       &gt; {candidate.skills.length - 4} more
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <button 
//                 className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap"
//                 onClick={() => handleInviteClick(candidate)}
//               >
//                 Invite To Apply
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Invitation to Apply</h2>
//               <button 
//                 className="text-gray-500 hover:text-gray-700"
//                 onClick={handleCloseModal}
//               >
//                 <FaTimes className="text-lg" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Title</label>
//               <select className="w-full p-2 border rounded-md">
//                 <option>Select...</option>
//                 <option>Interview Invitation</option>
//                 <option>Job Offer</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Message</label>
//               <ReactQuill
//                 value={message}
//                 onChange={setMessage}
//                 modules={{
//                   toolbar: [
//                     ["bold", "italic", "underline"],
//                     [{ list: "ordered" }, { list: "bullet" }],
//                     ["clean"],
//                   ],
//                 }}
//                 placeholder="Write your message here..."
//               />
//             </div>
//             <div className="flex justify-between">
//               <button 
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button 
//                 className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
//                 onClick={handleSendMessage}
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FindCandidate;














import React, { useState, useEffect } from "react";
import { FaSort, FaTimes } from "react-icons/fa";
import { Search, MapPin, Layers } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import axios from "axios";

const FindCandidate = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [expectation, setExpectation] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [education, setEducation] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Fetch candidates from the API
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "https://technohire-backend.onrender.com/application"
        );
        // Map the response data to match the expected structure
        setCandidates(
          response.data.map((app) => ({
            _id: app._id,
            name: app.name,
            role: app.designation,
            experience: `${app.experience} Years Experience`,
            education: app.education,
            appliedDate: new Date(app.appliedDate).toLocaleDateString("en-GB", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            skills: app.skillsRequired || [],
            image: app.profileImage,
          }))
        );
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  // Toggle preferences
  const togglePreference = (pref) => {
    setPreferences((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  // Toggle education
  const toggleEducation = (edu) => {
    setEducation((prev) =>
      prev.includes(edu) ? prev.filter((e) => e !== edu) : [...prev, edu]
    );
  };

  // Handle invite click
  const handleInviteClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setMessage(""); // Clear the message when modal is closed
  };

  // Send invitation message
  const handleSendMessage = async () => {
    if (!selectedCandidate) return;

    try {
      const response = await axios.post(
        `https://technohire-backend.onrender.com/application/shortlistapplication/${selectedCandidate._id}`,
        {
          shortlisted: true,
          message: message,
        }
      );

      if (response.data.message === "Application shortlisted successfully") {
        alert("Invitation sent successfully");
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error sending invitation:", error);
    }
  };

  // Fetch filtered candidates
  const fetchFilteredCandidates = async () => {
    try {
      const params = new URLSearchParams();

      if (experience) params.append("filter", "experience");
      if (selectedSkill) params.append("skills", selectedSkill);
      if (education.length > 0) params.append("education", education.join(","));

      const response = await axios.get(
        `https://technohire-backend.onrender.com/application?${params.toString()}`
      );
      setCandidates(response.data);
    } catch (error) {
      console.error("Error filtering candidates:", error);
    }
  };

  // Handle sorting
  const handleSort = async (sortType) => {
    try {
      const response = await axios.get(
        `https://technohire-backend.onrender.com/application?sort=${sortType}`
      );
      setCandidates(response.data);
    } catch (error) {
      console.error("Error sorting candidates:", error);
    }
  };

  return (
    <div className="flex gap-6 p-6">
      {/* Filter Section */}
      <div className="w-80 flex-shrink-0">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search Candidate"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative mb-4">
            <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative mb-6">
            <Layers className="absolute left-3 top-3 text-gray-500" size={18} />
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Skills</option>
              <option value="User Interface (UD Design)">
                User Interface (UD Design)
              </option>
              <option value="User Experience (UXD Design)">
                User Experience (UXD Design)
              </option>
              <option value="User Research">User Research</option>
              <option value="Responsive Design">Responsive Design</option>
            </select>
          </div>

          {/* Candidate Experience */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Candidate Experience</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {[
                "Freshers",
                "1 - 2 Years",
                "2 - 4 Years",
                "4 - 6 Years",
                "10 - 15 Years",
                "15+ Years",
              ].map((exp) => (
                <label
                  key={exp}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <input
                    type="radio"
                    name="experience"
                    value={exp}
                    checked={experience === exp}
                    onChange={() => setExperience(exp)}
                    className="accent-purple-600"
                  />
                  <span className="text-sm">{exp}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Candidate Expectations */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Candidate Expectations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                "£5000 - £25000",
                "£50000 - £65000",
                "£100000 - £1500000",
                "£200000+",
              ].map((exp) => (
                <label
                  key={exp}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <input
                    type="radio"
                    name="expectation"
                    value={exp}
                    checked={expectation === exp}
                    onChange={() => setExpectation(exp)}
                    className="accent-purple-600"
                  />
                  <span className="text-sm">{exp}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Candidate Preference */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Candidate Preference</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {["All", "Full Time", "Part Time", "Internship", "Remote", "Temporary"].map(
                (pref) => (
                  <label
                    key={pref}
                    className="flex items-center space-x-2 whitespace-nowrap"
                  >
                    <input
                      type="checkbox"
                      checked={preferences.includes(pref)}
                      onChange={() => togglePreference(pref)}
                      className="accent-purple-600"
                    />
                    <span className="text-sm">{pref}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Education</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {["High School", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree", "All"].map(
                (edu) => (
                  <label
                    key={edu}
                    className="flex items-center space-x-2 whitespace-nowrap"
                  >
                    <input
                      type="checkbox"
                      checked={education.includes(edu)}
                      onChange={() => toggleEducation(edu)}
                      className="accent-purple-600"
                    />
                    <span className="text-sm">{edu}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <button
            className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            onClick={fetchFilteredCandidates}
          >
            Find Candidate
          </button>
        </div>
      </div>

      {/* Candidate List */}
      <div className="flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Talent Pool</h2>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
              onClick={() => handleSort("Newest")}
            >
              <FaSort className="text-sm" /> Sort
            </button>
          </div>

          {candidates.map((candidate) => (
            <div
              key={candidate._id}
              className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      Matches Profile: 80%
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{candidate.role}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
                    <span>{candidate.experience}</span>
                    <span>•</span>
                    <span>Education: {candidate.education}</span>
                    <span>•</span>
                    <span>Applied: {candidate.appliedDate}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {candidate.skills.slice(0, 4).map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {candidate.skills.length > 4 && (
                      <span className="text-gray-500 text-sm">
                        &gt; {candidate.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap"
                onClick={() => handleInviteClick(candidate)}
              >
                Invite To Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Invitation to Apply</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title</label>
              <select className="w-full p-2 border rounded-md">
                <option>Select...</option>
                <option>Interview Invitation</option>
                <option>Job Offer</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <ReactQuill
                value={message}
                onChange={setMessage}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["clean"],
                  ],
                }}
                placeholder="Write your message here..."
              />
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindCandidate;