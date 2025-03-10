// import { useState, useEffect } from "react";

// const useFaq = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchFaqs = async (signal) => {
//     setLoading(true);
//     setError(null); // Reset error before fetching

//     try {
//       const response = await fetch(
//         "https://technohire-backend.onrender.com/employer/help-support/faq",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           signal // Attach signal to support request cancellation
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Failed to fetch FAQs: ${response.statusText}`);
//       }

//       const data = await response.json();
//       if (data.success && Array.isArray(data.Faqs)) {
//         setFaqs(data.Faqs);
//       } else {
//         throw new Error("Invalid API response structure");
//       }
//     } catch (err) {
//       if (err.name !== "AbortError") {
//         setError(err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const controller = new AbortController();
//     fetchFaqs(controller.signal);

//     return () => controller.abort(); // Cleanup on unmount
//   }, []);

//   return { faqs, loading, error, fetchFaqs };
// };

// export default useFaq;

// secound
// import { useState, useEffect } from "react";

// const useFaq = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchFaqs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           "https://technohire-backend.onrender.com/employer/help-support/faq",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             signal
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch FAQs: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log("API Response:", data); // Debugging

//         if (Array.isArray(data)) {
//           setFaqs(
//             data.map((faq) => ({
//               id: faq._id || "",
//               question: faq.question || "No question available",
//               answer: faq.answer || "No answer available"
//             }))
//           );
//         } else {
//           throw new Error("Invalid API response structure");
//         }
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFaqs();

//     return () => controller.abort(); // Cleanup
//   }, []);

//   return { faqs, loading, error };
// };

// export default useFaq;

import { useState, useEffect } from "react";

const useFaq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchFaqs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://technohire-backend.onrender.com/employer/help-support/faq",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            signal
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch FAQs: ${response.statusText}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setFaqs(
            data.map((faq) => ({
              id: faq._id || "",
              question: faq.question || "No question available",
              answer: faq.answer || "No answer available"
            }))
          );
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();

    return () => controller.abort(); // Cleanup
  }, []);

  return { faqs, loading, error };
};

export default useFaq;
