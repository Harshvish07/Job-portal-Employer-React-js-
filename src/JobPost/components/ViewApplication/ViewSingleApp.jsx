import React, { useState } from "react";
import { useContext } from "react";
import { toggleContext } from "./ViewApplication";

import close from "../../../assets/close.svg";
import ronald from "../../../assets/ronald.png";
import star from "../../../assets/star.png";
import facebook from "../../../assets/images/facebook.svg";
import twitter from "../../../assets/images/twitter.svg";
import linkedIn from "../../../assets/images/linkedIn.svg";
import youtube from "../../../assets/images/youtube.svg";
import reddit from "../../../assets/images/reddit.svg";
import Insta from "../../../assets/images/Insta.svg";
import mail from "../../../assets/mail.svg";
import rightArrow from "../../../assets/rightArrow.svg";
import cake from "../../../assets/images/cake.svg";
import profile from "../../../assets/images/profile.svg";
import clipboard from "../../../assets/images/clipboard.svg";
import map from "../../../assets/images/map.svg";
import stack from "../../../assets/images/stack.svg";
import cap from "../../../assets/images/cap.svg";
import file from "../../../assets/images/file.svg";
import download from "../../../assets/images/download.svg";
import globe from "../../../assets/images/globe.svg";
import location from "../../../assets/images/location.svg";
import call from "../../../assets/images/call.svg";

const ViewSingleApp = () => {
  const [createCol, setCreateCol] = useState(false);
  const toggle = useContext(toggleContext);

  const handleCreate = () => {
    setCreateCol(true);
  };

  return (
    <>
      <div
        className="min-h-screen min-w-[99vw] flex items-center justify-center left-0 top-0 absolute z-50 bg-slate-900 "
        style={{ backgroundColor: "rgba(77, 77, 77, 0.8)" }}
      >
        <div className="min-w-[60vw] min-h-[130.5vh] bg-[#FFFFFF] rounded-md px-11 py-11 flex flex-col gap-6 relative animate-pop-in my-8">
          <div className="topHeading flex items-center justify-between">
            <div className="profile flex gap-4 items-center">
              <img src={ronald} alt="img" className="size-16" />
              <div className="username flex flex-col gap-2 justify-center">
                <span className="text-[#151502] text-xl font-semibold">
                  Esther Howard
                </span>
                <span className="text-[14px] text-[#8d8d8c]">
                  Website Designer (UI/UX)
                </span>
              </div>
            </div>
            <div className="RightSide">
              <div className="btns flex gap-2">
                <img src={star} alt="" className="size-10" />
                <button className="border-[#7900BA] border-2 px-3 py-1 flex gap-2 items-center justify-center rounded-md">
                  <img src={mail} alt="" />
                  <span className="text-[#7900BA] font-[500]">Send Mail</span>
                </button>
                <button className="border-[#7900BA] bg-[#7900BA] border-2 px-3 py-1 flex gap-2 items-center justify-center rounded-md">
                  <img src={rightArrow} alt="" />
                  <span className="text-[#FFFFFF] font-[500]">
                    Hire Candidates
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="h-[130vh] w-[52vw] flex gap-4 py-2 my-2">
            <div className="leftSide w-[65%]">
              <div className="biography px-2 flex flex-col gap-4">
                <h1 className="text-lg font-[600]">BIOGRAPHY</h1>
                <p className="break-words space-y-2 text-[#5b5b59] text-[15px]">
                  I've been passionate about graphic design and digital art from
                  an early age with a keen interest in Website and Mobile
                  Application User Interfaces. I can create high-quality and
                  aesthetically pleasing designs in a quick turnaround time.
                  Check out the portfolio section of my profile to see samples
                  of my work and feel free to discuss your designing needs. I
                  mostly use Adobe Photoshop, Illustrator, XD and Figma.
                  *Website User Experience and Interface (UI/UX) Design for all
                  kinds of Professional and Personal websites. "Mobile
                  Application User Experience and Interface Design - for all
                  kinds of IOS/Android and Hybrid Mobile Applications.
                  *Wireframe Designs.
                </p>
              </div>
              <hr className="w-[95%] text-[#666665] my-5" />
              <div className="coverletter px-2 flex flex-col gap-4">
                <h1 className="text-lg font-[600]">COVER LETTER</h1>
                <p className="break-words space-y-2 text-[#5b5b59] text-[15px] flex flex-col gap-2">
                  <span className="">Dear Sir,</span>
                  <p className="">
                    I am writing to express my interest in the fourth grade
                    instructional position that is currently available in the
                    Fort Wayne Community School System. I learned of the opening
                    through a notice posted on JobZone, IPFW's job database. I
                    am confident that my academic background and curriculum
                    development skills would be successfully utilized in this
                    teaching position.
                  </p>
                  <p>
                    I have just completed my Bachelor of Science degree in
                    Elementary Education and have successfully completed Praxis
                    I and Praxis II. During my student teaching experience, I
                    developed and initiated a three-week curriculum sequence on
                    animal species and earth resources. This collaborative unit
                    involved working with three other third grade teachers
                    within my team, and culminated in a field trip to the
                    Indianapolis Zoo Animal Research Unit.
                  </p>
                  <span className="">Sincerely,</span>
                  <span>Esther Howard</span>
                </p>
              </div>
              <hr className="w-[95%]  text-[#666665] my-5" />
              <div className="socialmedia flex flex-col gap-3">
                <h1 className="text-[#18191C] text-sm font-[600]">
                  Follow me Social Media
                </h1>
                <div className="socialMedia flex gap-3">
                  <img
                    src={facebook}
                    alt=""
                    className="cursor-pointer size-10"
                  />
                  <img
                    src={twitter}
                    alt=""
                    className="cursor-pointer size-10"
                  />
                  <img
                    src={linkedIn}
                    alt=""
                    className="cursor-pointer size-10"
                  />
                  <img src={reddit} alt="" className="cursor-pointer size-10" />
                  <img src={Insta} alt="" className="cursor-pointer size-10" />
                  <img
                    src={youtube}
                    alt=""
                    className="cursor-pointer size-10"
                  />
                </div>
              </div>
            </div>
            <div className="rightSide w-[40%] flex flex-col relative left-6 gap-4">
              <div className="first h-[40vh] w-[20vw] mx-auto rounded-md  grid grid-cols-2 px-2 gap-2 py-4 border-2 border-[#d0abe3] shadow-sm">
                <div className="left flex flex-col gap-5 py-2 items-start justify-center">
                  <div className="upper flex flex-col gap-1 px-2">
                    <img src={cake} alt="" className="size-6" />
                    <span className="text-[#8d8d8c] text-[11px]">
                      DATE OF BIRTH
                    </span>
                    <span className="text-[14px] font-[500]">
                      14 June, 2021
                    </span>
                  </div>
                  <div className="middle flex flex-col gap-1 px-2">
                    <img src={clipboard} alt="" className="size-6" />
                    <span className="text-[#8d8d8c] text-[11px]">
                      MARITAL STATUS
                    </span>
                    <span className="text-[14px] font-[500]">Single</span>
                  </div>
                  <div className="lower flex flex-col gap-1 px-2">
                    <img src={stack} alt="" className="size-6" />
                    <span className="text-[#8d8d8c] text-[11px]">
                      EXPERIENCE
                    </span>
                    <span className="text-[14px] font-[500]">7 Years</span>
                  </div>
                </div>
                <div className="right flex flex-col gap-5 py-2 items-start justify-center">
                  <div className="upper flex flex-col gap-1 px-2">
                    <img src={map} alt="" className="size-6" />
                    <span className="text-[#8d8d8c] text-[11px]">
                      NOTIONALITY
                    </span>
                    <span className="text-[14px] font-[500]">Bangladesh</span>
                  </div>
                  <div className="middle flex flex-col gap-1 px-2">
                    <img src={profile} alt="" className="size-6" />
                    <span className="text-[#8d8d8c] text-[11px]">GENDER</span>
                    <span className="text-[14px] font-[500]">Male</span>
                  </div>
                  <div className="lower flex flex-col gap-1 px-2">
                    <img src={cap} alt="" className="size-6" />
                    <span className="text-[#8d8d8c] text-[11px]">
                      EDUCATION
                    </span>
                    <span className="text-[14px] font-[500]">
                      Master Degree
                    </span>
                  </div>
                </div>
              </div>
              <div className="second h-[18vh] w-[20vw] mx-auto rounded-md  px-4 py-4 border-2 border-[#d0abe3] shadow-sm">
                <h1 className="font-[500] text-[#373736] text-lg mb-4">
                  Download My Resume
                </h1>
                <div className="flex gap-3 items-center my-3">
                  <img src={file} alt="" className="" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <span className="text-[#8d8d8c] text-xs">
                      Esther Horward
                    </span>
                    <span className="font-[600] text-sm">PDF</span>
                  </div>
                  <img src={download} alt="" className="cursor-pointer ml-10" />
                </div>
              </div>
              <div className="third h-[70vh] w-[20vw] mx-auto rounded-md px-6 py-4 border-2 border-[#d0abe3] shadow-sm">
                <h1 className="font-[500] text-[#373736] text-lg mb-5">
                  Contact Information
                </h1>
                <div className="info flex flex-col gap-3">
                  <div className="first flex gap-4 items-center justify-start">
                    <img src={globe} alt="" className="" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[#8d8d8c] text-sm">WEBSITE</span>
                      <span className="font-[600] text-sm">
                        www.estherhoward.com
                      </span>
                    </div>
                  </div>
                  <hr className="w-[95%]  text-[#666665] my-2" />
                  <div className="second flex gap-4 items-center justify-start">
                    <img src={location} alt="location" className="" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[#8d8d8c] text-sm">LOCATION</span>
                      <span className="font-[600] text-sm">
                        Beverly Hills, California 90202
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8d8d8c] text-sm break-words">
                    Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland,
                  </span>
                  <hr className="w-[95%]  text-[#666665] my-2" />
                  <div className="mobileNo flex flex-col gap-3">
                    <div className="primary flex gap-4 items-center justify-start">
                      <img src={call} alt="call" className="" />
                      <div className="flex flex-col gap-1">
                        <span className="text-[#8d8d8c] text-sm">PHONE</span>
                        <span className="font-[600] text-sm">
                          +1-202-555-0141
                        </span>
                      </div>
                    </div>
                    <div className="secondary flex gap-4 items-center justify-center relative right-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[#8d8d8c] text-sm">
                          SECONDARY PHONE
                        </span>
                        <span className="font-[600] text-sm">
                          +1-202-555-0141
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="w-[95%]  text-[#666665] my-2" />
                  <div className="first flex gap-4 items-center justify-start">
                    <img src={mail} alt="" className="" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[#8d8d8c] text-sm">
                        EMAIL ADDRESS
                      </span>
                      <span className="font-[600] text-sm">
                        esther.howard@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggle.handleViewProfileClick(toggle.profile)}
            className="closeImg bg-[#FFFFFF] absolute p-2 rounded-full top-1 -right-16 cursor-pointer"
          >
            <img src={close} alt="" className="size-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSingleApp;
