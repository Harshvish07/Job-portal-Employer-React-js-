// import React from "react";
// import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
// import Background from "../../assets/Background.png";
// import Logo from "../../assets/loginLogo.png";
// import Continue from "../../assets/Continue.png";
// import Circle from "../../assets/Circle.png"

// const ForgetPassword = () => {
//     const navigate = useNavigate(); // Initialize the navigation function

//     const handleResetPassword = () => {
//         navigate("/resetPassword"); // Navigate to resetPassword page
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-screen flex z-[9999] bg-white">

//             {/* Circle at Top Left */}
//             <img
//                 src={Circle}
//                 alt="Decorative Circle"
//                 className="absolute w-[32px] h-[32px] mt-5 ml-5"
//             />
//             {/* Left Side - Forget Password Form */}
//             <div className="w-[50%]">
//                 <div className="flex flex-col justify-center items-center mt-[25%]  ">
//                     {/* Title */}
//                     <h2 className="text-2xl font-semibold mb-2">Forget Password</h2>
//                     <p className="text-gray-500 text-center mb-20">
//                         Enter your registered email to receive a password reset link
//                     </p>

//                     {/* Input Field */}
//                     <div className="w-full max-w-2xl">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="border p-3 w-full rounded"
//                         />
//                     </div>

//                     {/* Go Back to Login */}
//                     <div className="w-full max-w-2xl mt-3 text-right">
//                         <span>Go Back to </span>
//                         <Link to="/login" className="text-violet-900 hover:underline">
//                             Login
//                         </Link>
//                     </div>

//                     {/* Reset Password Button */}
//                     <button
//                         onClick={handleResetPassword} // Added onClick
//                         className="w-full max-w-sm flex items-center justify-center bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition mt-5"
//                     >
//                         <span>Reset Password</span>
//                         <img src={Continue} alt="Continue" className="size-4 ml-2" />
//                     </button>

//                     {/* Sign Up Link */}
//                     <p className="mt-5">
//                         Don't have an account?{" "}
//                         <a href="#" className="text-violet-600 hover:underline">Sign Up</a>
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side - Logo Background */}
//             <div
//                 className="w-[50%] h-full bg-cover bg-center flex items-center justify-center"
//                 style={{ backgroundImage: `url(${Background})` }}
//             >
//                 <img src={Logo} alt="Logo" />
//             </div>
//         </div>
//     );
// };

// export default ForgetPassword;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useForgotPassword from "../../hooks/forgotPass"; // Import the hook
import Background from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import Continue from "../../assets/Continue.png";
import Circle from "../../assets/Circle.png";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { requestPasswordReset, loading, error, message } = useForgotPassword();

  const handleResetPassword = async () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    await requestPasswordReset(email);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex z-[9999] bg-white">
      <img
        src={Circle}
        alt="Decorative Circle"
        className="absolute w-[32px] h-[32px] mt-5 ml-5"
      />

      <div className="w-[50%]">
        <div className="flex flex-col justify-center items-center mt-[25%]">
          <h2 className="text-2xl font-semibold mb-2">Forget Password</h2>
          <p className="text-gray-500 text-center mb-4">
            Enter your registered email to receive a password reset link
          </p>

          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full max-w-2xl rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="w-full max-w-2xl mt-3 text-right">
            <span>Go Back to </span>
            <Link to="/login" className="text-violet-900 hover:underline">
              Login
            </Link>
          </div>

          <button
            onClick={handleResetPassword}
            className="w-full max-w-sm flex items-center justify-center bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition mt-5"
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
            <img src={Continue} alt="Continue" className="size-4 ml-2" />
          </button>

          {message && <p className="text-green-600 mt-2">{message}</p>}
          {error && <p className="text-red-600 mt-2">{error}</p>}

          <p className="mt-5">
            Don't have an account?{" "}
            <Link to="/signup" className="text-violet-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <div
        className="w-[50%] h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default ForgetPassword;
