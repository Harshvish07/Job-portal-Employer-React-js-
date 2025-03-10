// import { useState, useEffect } from "react";

// const emailSupport = () => {
//   const [email, setEmail] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchemail = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         " https://technohire-backend.onrender.com/employer/help-support/contact",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             email: "email",
//             message: "message"
//           })
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         setEmail(data.email);
//       } else {
//         setError("Failed to fetch email");
//       }
//     } catch (err) {
//       setError("Error fetching email");
//     }
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchemail(); // Fetch email on mount
//   }, []);
//   return { email, loading, error, fetchemail };
// };

// export default emailSupport;

import { useState, useEffect } from "react";

const emailSupport = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchContact = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://technohire-backend.onrender.com/employer/help-support/contact",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            signal
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch contact details: ${response.statusText}`
          );
        }

        const data = await response.json();

        if (data && typeof data === "object") {
          setContact(data);
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

    fetchContact();

    return () => controller.abort(); // Cleanup
  }, []);

  return { contact, loading, error };
};

export default emailSupport;
