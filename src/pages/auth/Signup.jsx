import React, { useState } from "react";
import Icon from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../../hooks/authHook/useAuthHook";
import { toast } from "react-toastify";
export default function Signup() {
  const { register, loading } = useAuthHook();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [isshown1, setIsshown1] = useState(false);
  const [isshown2, setIsshown2] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error("Password and Ponfirm Password does not match", {
        position: "top-right"
      });
      return;
    }
    const res = await register(email, password, fullname, username);
    if (res) navigate(`/emailVerification/${res.token}?email=${email}`);
  };

  return (
    <div className="fixed top-0 left-0 bg-white flex w-screen h-screen">
      <div className="flex flex-col justify-center gap-3 h-full w-1/2 px-14">
        <p className="text-[32px] font-medium font-poppins">
          Welcome to{" "}
          <span className="font-poppins text-[#7900BA]">Technohire!</span>
        </p>
        <span className="inline-flex ">
          <p className="text-[16px] font-poppins font[400] text-[#333333]">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="underline text-[16px] font-poppins font[400] text-[#7900BA]"
          >
            Log in
          </Link>
        </span>
        <form onSubmit={handleSubmit} className="w-full gap-2 flex flex-col">
          <input
            className="px-7 outline-none text-sm border p-2 w-full rounded"
            type="text"
            value={fullname}
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            className="px-7 outline-none text-sm border p-2 w-full rounded"
            type="text"
            value={username}
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="px-7 outline-none text-sm border p-2 w-full rounded"
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              className="px-7 pr-[90px]  outline-none text-sm border p-2 w-full rounded "
              type={isshown1 ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])\S{8,}$"
            />
            {!isshown1 ? (
              <span className=" flex w-[70px] justify-between items-center gap-1 absolute top-[50%] right-4 text-md transform translate-y-[-50%] text-[#666666CC]">
                <BiSolidHide
                  className="cursor-pointer text-xl"
                  onClick={() => setIsshown1((pre) => !pre)}
                />
                Hide
              </span>
            ) : (
              <span className="flex w-[70px] justify-between items-center gap-1 absolute top-[50%] right-4 text-md transform translate-y-[-50%] text-[#666666CC]">
                <BiSolidShow
                  className="cursor-pointer  text-xl"
                  onClick={() => setIsshown1((pre) => !pre)}
                />
                Show
              </span>
            )}
          </div>
          <table className="hidden lg:table w-full">
            <tbody>
              <tr className="flex w-full    ">
                <td className="w-1/3 flex gap-1 items-center text-gray-400 text-[10px]">
                  <span className="text-[#7900BA] text-lg"> &#8226; </span>Use 8
                  or more character
                </td>
                <td className="w-1/3 flex gap-1 items-center text-gray-400 text-[10px]">
                  <span className="text-[#7900BA] text-lg"> &#8226; </span>One
                  Uppercase character
                </td>
                <td className="w-1/3 flex gap-1 items-center text-gray-400 text-[10px]">
                  <span className="text-[#7900BA] text-lg"> &#8226; </span>One
                  Lowercase character
                </td>
              </tr>
              <tr className="flex w-full justify-start ">
                <td className="w-1/3 flex gap-1 items-center text-gray-400 text-[10px]">
                  <span className="text-[#7900BA] text-lg"> &#8226; </span>One
                  special character
                </td>
                <td className="w-1/3 flex gap-1 items-center text-gray-400 text-[10px]">
                  <span className="text-[#7900BA] text-lg"> &#8226; </span>One
                  number
                </td>
              </tr>
            </tbody>
          </table>
          <div className="relative">
            <input
              className="px-7 pr-[90px] outline-none text-sm border p-2 w-full rounded"
              type={isshown2 ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
            {!isshown2 ? (
              <span className=" flex w-[70px] justify-between items-center gap-1 absolute top-[50%] right-4 text-md transform translate-y-[-50%] text-[#666666CC]">
                <BiSolidHide
                  className=" cursor-pointer text-xl"
                  onClick={() => setIsshown2((pre) => !pre)}
                />
                Hide
              </span>
            ) : (
              <span className=" flex w-[70px] justify-between items-center gap-1 absolute top-[50%] right-4 text-md transform translate-y-[-50%] text-[#666666CC]">
                <BiSolidShow
                  className="cursor-pointer text-xl"
                  onClick={() => setIsshown2((pre) => !pre)}
                />
                Show
              </span>
            )}
          </div>
          <span className="text-[#333333]">
            By creating an account, you agree to the{" "}
            <a
              href="#"
              className="underline text-[16px] font-poppins font[400] text-[#7900BA]"
            >
              Terms of Use{" "}
            </a>
            and{" "}
            <a
              href="#"
              className="underline text-[16px] font-poppins font[400] text-[#7900BA]"
            >
              {" "}
              Privacy Policy
            </a>
          </span>
          {/* <span className='inline-flex text-[16px] font-poppins font[400] text-[#333333]'> By creating an account, you agree to the {"  "} <span><a href='#' className='underline text-[16px] font-poppins font[400] text-[#7900BA]'>{"  "}Terms of Use </a></span> and <a href='/'> Privacy Policy</a></span> */}
          <button
            className={`w-[250px] h-[40px] font-poppins ${
              loading ? "bg-gray-400" : "bg-[#7900BA]"
            } text-white  rounded-lg `}
            type="submit"
            disabled={loading}
          >
            Create an account
          </button>
          <span className="inline-flex ">
            <p className="text-[16px] font-poppins font[400] text-[#333333]">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="underline text-[16px] font-poppins font[400] text-[#7900BA]"
            >
              Log in
            </Link>
          </span>
        </form>
        <div className="flex items-center justify-center w-full">
          <div className="border-t w-1/3  border-gray-300"></div>
          <span className="mx-4 text-gray-600 text-sm ">Or Signup with</span>
          <div className="border-t w-1/3 border-gray-300"></div>
        </div>
        <div className="flex w-full justify-center gap-3 lg:gap-1">
          <button className=" flex rounded-[5px] justify-center items-center w-20 h-9 lg:w-15 h-8 border-[1px] border-gray-300">
            <img className="w-8 h-8 lg:w-6 h-6" src="facebookicon.svg" alt="" />
          </button>
          <button className=" flex rounded-[5px] justify-center items-center w-20 h-9 lg:w-15 h-8 border-[1px] border-gray-300">
            <img className="w-7 h-7 lg:w-5 h-5" src="googleicon.svg" alt="" />
          </button>
          <button className=" flex rounded-[5px] justify-center items-center w-20 h-9 lg:w-15 h-8 border-[1px] border-gray-300">
            <img className="w-8 h-8 lg:w-6 h-6" src="linkedinicon.svg" alt="" />
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${Icon})` }}
        className="h-full w-1/2 bg-cover bg-no-repeat flex justify-center items-center"
      >
        <img src={Logo} alt="Logo" />
      </div>
      <div className="absolute top-5 left-5 h-[32px] w-[32px] bg-[#7900BA] rounded-full"></div>
    </div>
  );
}
