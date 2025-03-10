// import React, { useState } from "react";
// import useFaq from "../../../../hooks/getFaq";

// export const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const { faqs, loading, error } = useFaq();

//   // const faqs = [
//   //   {
//   //     question: "How do I create an account?",
//   //     answer:
//   //       "To create an account, go to the signup page and fill in your details."
//   //   },
//   //   {
//   //     question: "How can I update my profile information?",
//   //     answer:
//   //       "To update your profile information, go to the 'Your Account' section and click on 'Edit Profile'. Make the necessary changes and save them to keep your details up to date."
//   //   },
//   //   {
//   //     question: "What should I do if I forget my password?",
//   //     answer: "Use the 'Forgot Password' option to reset your password."
//   //   },
//   //   {
//   //     question: "How do I set up job alerts for new opportunities?",
//   //     answer: "Go to your settings and enable job alerts."
//   //   },
//   //   {
//   //     question: "What file formats are accepted for resume uploads?",
//   //     answer: "We accept .pdf, .doc, and .docx formats."
//   //   },
//   //   {
//   //     question: "How do I upload my resume to the portal?",
//   //     answer: "Go to the resume section in your profile and upload your file."
//   //   }
//   // ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="space-y-6  ">
//       <div className="flex justify-center items-center  align-middle">
//         <h3 className="text-xl font-semibold   text-gray-700">Your Account</h3>
//       </div>
//       {faqs.slice(0, 3).map((faq, index) => (
//         <div key={index} className="border rounded p-3 bg-white shadow-sm">
//           <div
//             className={`flex justify-between items-center cursor-pointer font-medium ${
//               openIndex === index ? "text-purple-600" : "text-gray-700"
//             }`}
//             onClick={() => toggleFAQ(index)}
//           >
//             <span>{faq.question}</span>
//             <span>{openIndex === index ? "×" : "+"}</span>
//           </div>
//           {openIndex === index && (
//             <p className="mt-2 text-gray-600">{faq.answer}</p>
//           )}
//         </div>
//       ))}
//       <div className="flex justify-center items-center  align-middle">
//         <h3 className="text-xl font-semibold text-gray-700">
//           Candidate & Resume
//         </h3>
//       </div>
//       {faqs.slice(3).map((faq, index) => (
//         <div key={index} className="border rounded p-3 bg-white shadow-sm">
//           <div
//             className={`flex justify-between items-center cursor-pointer font-medium ${
//               openIndex === index + 3 ? "text-purple-600" : "text-gray-700"
//             }`}
//             onClick={() => toggleFAQ(index + 3)}
//           >
//             <span>{faq.question}</span>
//             <span>{openIndex === index + 3 ? "×" : "+"}</span>
//           </div>
//           {openIndex === index + 3 && (
//             <p className="mt-2 text-gray-600">{faq.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;

// secound
// import { useState } from "react";
// import useFaq from "../../../../hooks/getFaq";

// const FAQ = () => {
//   const { faqs, loading, error } = useFaq();
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   if (loading)
//     return <p className="text-center text-gray-700">Loading FAQs...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;
//   if (!faqs.length)
//     return <p className="text-center text-gray-700">No FAQs available.</p>;

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-center items-center">
//         <h3 className="text-xl font-semibold text-gray-700">FAQs</h3>
//       </div>

//       {faqs.map((faq, index) => (
//         <div key={faq.id} className="border rounded p-3 bg-white shadow-sm">
//           <div
//             className={`flex justify-between items-center cursor-pointer font-medium ${
//               openIndex === index ? "text-purple-600" : "text-gray-700"
//             }`}
//             onClick={() => toggleFAQ(index)}
//           >
//             <span>{faq.question}</span>
//             <span>{openIndex === index ? "×" : "+"}</span>
//           </div>
//           {openIndex === index && (
//             <p className="mt-2 text-gray-600">{faq.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;

import { useState } from "react";
import useFaq from "../../../../hooks/getFaq";

const FAQ = () => {
  const { faqs, loading, error } = useFaq();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading)
    return <p className="text-center text-gray-700">Loading FAQs...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;
  if (!faqs.length)
    return <p className="text-center text-gray-700">No FAQs available.</p>;

  return (
    <div className="space-y-6">
      {/* Section: Your Account */}
      <div className="flex justify-center items-center">
        <h3 className="text-xl font-semibold text-gray-700">Your Account</h3>
      </div>

      {faqs.slice(0, 3).map((faq, index) => (
        <div key={faq.id} className="border rounded p-3 bg-white shadow-sm">
          <div
            className={`flex justify-between items-center cursor-pointer font-medium ${
              openIndex === index ? "text-purple-600" : "text-gray-700"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "×" : "+"}</span>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}

      {/* Section: Candidate & Resume */}
      <div className="flex justify-center items-center">
        <h3 className="text-xl font-semibold text-gray-700">
          Candidate & Resume
        </h3>
      </div>

      {faqs.slice(3).map((faq, index) => {
        const adjustedIndex = index + 3; // Adjust index for second section
        return (
          <div key={faq.id} className="border rounded p-3 bg-white shadow-sm">
            <div
              className={`flex justify-between items-center cursor-pointer font-medium ${
                openIndex === adjustedIndex
                  ? "text-purple-600"
                  : "text-gray-700"
              }`}
              onClick={() => toggleFAQ(adjustedIndex)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === adjustedIndex ? "×" : "+"}</span>
            </div>
            {openIndex === adjustedIndex && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
