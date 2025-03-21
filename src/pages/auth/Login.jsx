import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/Google.png";
import Linkedin from "../../assets/Linkedin.png";
import Circle from "../../assets/Circle.png";
import useAuthHook from "../../hooks/authHook/useAuthHook";

// import { setAuthData } from "../../JobPost/utils/redux/loginSlice";
// import { useDispatch } from "react-redux";

const Login = () => {
  // const dispatch=useDispatch()

  const navigate = useNavigate();
  const { employerLogin, loading } = useAuthHook();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await employerLogin(email, password);
    if (res) navigate("/home");
  };
  const facebook = () => {
    facebookLogin();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex z-[9999] bg-white">
      {/* Circle at Top Left */}
      <img
        src={Circle}
        alt="Decorative Circle"
        className="absolute w-[32px] h-[32px] mt-5 ml-5"
      />

      {/* Left Side - Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[50%] flex flex-col justify-center items-center"
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-10">
          Login In to <span className="text-violet-600">TechnoHire</span>
        </h2>

        {/* Input Fields */}
        <div className="w-2/3 max-w-2xl space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border bg-[#F7F8F9] outline-none p-2 w-full rounded px-10  "
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-10 bg-[#F7F8F9] outline-none border p-2 w-full rounded"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="w-2/3 max-w-2xl flex justify-between items-center mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="accent-violet-600"
            />
            <span className="text-[#767F8C] text-sm">Remember Me</span>
          </label>
          <Link to="/forgetPassword">
            <p className="text-sm text-violet-600 hover:underline">
              Forget Password?
            </p>
          </Link>
        </div>

        {/* Login Button */}
        <button
          disabled={loading}
          className={`w-60 h-[45px]  ${
            loading ? "bg-gray-400" : "bg-[#7900BA]"
          } text-white  rounded-lg mt-6`}
        >
          Login
        </button>

        {/* Or Login With */}
        <div className="flex items-center w-full max-w-sm my-5">
          <div className="flex-grow h-[1px] bg-gray-300"></div>
          <span className="mx-2 text-[#6A707C] font-semibold">
            Or Login with
          </span>
          <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={facebook}
            className="flex justify-center items-center w-20 border border-gray-200 p-2 rounded"
          >
            <img src={Facebook} alt="Facebook" className="w-5 h-5" />
          </button>
          <button className="flex justify-center items-center w-20 border border-gray-200 p-2 rounded">
            <img src={Google} alt="Google" className="w-5 h-5" />
          </button>
          <button className="flex justify-center items-center w-20 border border-gray-200 p-2 rounded">
            <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-violet-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>

      {/* Right Side - Logo Background */}
      <div
        className="w-[50%] h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Login;
