import React, { useState } from "react";
import Icon from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function EmailVerificationSuccessful() {
        const [code,setCode]=useState("")
        const navigate=useNavigate()
  return (
    <div className="flex fixed top-0 left-0 bg-white w-screen h-screen">
      <div className="flex flex-col gap-14 items-center justify-center h-full w-1/2 px-14">
        <img src='successful.svg' className="w-[100px]" alt=""/>
        <div className="flex  flex-col items-center gap-2">
                <p className="inline-flex gap-8  items-center font-poppins text-[32px] font-medium ">Verification Successful!</p>
                <p className="font-poppins text-[14px] font-[400] text-[#80807F]">Your mail has been successfully verified. You're all </p>
                <p className="mt-[-10px] font-poppins text-[14px] font-[400] text-[#80807F]">set to explore and apply for your dream job.</p>
        </div>
        <div className="w-1/2 ">
                <button onClick={()=>navigate('/login')} className="h-11 font-inter font-semibold rounded-md text-white w-full bg-[#7900BA]">Login</button>
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
