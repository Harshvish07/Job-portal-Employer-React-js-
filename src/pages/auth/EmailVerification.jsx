import React, { useState, useEffect } from "react";
import Icon from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import Leftgirl from "../../assets/leftgirl.svg";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams, useLocation } from "react-router-dom";
import useAuthHook from "../../hooks/authHook/useAuthHook";
import { toast } from "react-toastify";
export default function EmailVerification() {
  const [code, setCode] = useState();
  const { token } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const { sendEmailVerificationOtp, verifyOtp, loading } = useAuthHook();
  //otp function
  const OTP_DURATION = 120;
  const storedStartTime = localStorage.getItem("otpStartTime");
  const initialTimeLeft = storedStartTime
    ? Math.max(
        OTP_DURATION -
          Math.floor((Date.now() - parseInt(storedStartTime)) / 1000),
        0
      )
    : OTP_DURATION;

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isResendDisabled, setIsResendDisabled] = useState(timeLeft > 0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            clearInterval(timer);
            setIsResendDisabled(false);
            localStorage.removeItem("otpStartTime"); // Clear when expired
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleResendOTP = async () => {
    if (isResendDisabled) return;
    const res = await sendEmailVerificationOtp(email, token);
    if (!res) return;
    const newStartTime = Date.now();
    localStorage.setItem("otpStartTime", newStartTime); // Save timestamp
    setTimeLeft(OTP_DURATION);
    setIsResendDisabled(true);
  };
  return (
    <div className="flex fixed top-0 left-0 bg-white w-screen h-screen">
      <div className="flex flex-col pb-20  pt-10 items-center justify-between h-full w-1/2 px-14">
        <div className="flex  flex-col items-center gap-2">
          <p className="inline-flex gap-8  items-center font-poppins text-[32px] font-medium ">
            <span>
              <MdArrowBackIos />
            </span>
            Email Verification
          </p>
          <p className="font-poppins text-[14px] font-[400] text-[#666666]">
            We've sent an verifcation to <b>{email}</b> to verify{" "}
          </p>
          <p className="font-poppins text-[15px] font-[400] text-[#666666]">
            your email address and activate your account.
          </p>
        </div>
        <img src={Leftgirl} className="w-[170px] " alt="" />
        <div>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="px-7 outline-none text-sm border p-3 w-[500px] rounded"
            type="text"
            placeholder="Verification Code"
          />
          <p className="mt-1 text-right font-inter font-medium text-[13px] text-[#7D7D7D]">
            Did not receive any code!{" "}
            <span
              className="cursor-pointer text-[#7900BA]"
              onClick={handleResendOTP}
            >
              Resend Code
            </span>
          </p>
        </div>
        <p className="font-poppins text-[14px] font-[600] text-black">
          00:{timeLeft} Sec{" "}
        </p>

        <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
          <span className="font-poppins font[400] text-[#7D7D7D]">
            Go back to{" "}
            <Link to="/login" className="cursor-pointer text-[#7900BA]">
              login
            </Link>
          </span>
          <button
            disabled={loading}
            onClick={() => verifyOtp(email, code.trim())}
            className={`h-11 font-inter ${
              loading ? "bg-gray-400" : "bg-[#7900BA]"
            } font-semibold rounded-md text-white w-full bg-[#7900BA]"`}
          >
            Continue
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
