import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page1Img from "../../assets/Page1.png";
import PhoneCall from "../../assets/PhoneCall.png";
import Upload from "../../assets/Upload.png";
import ArrowDown from "../../assets/ArrowDown.png";
import Continue from "../../assets/Continue.png";
import Correct from "../../assets/Correct.png";
import Page1 from "./Page1";
import Background from "../../assets/Background.png";
import Page2Img from "../../assets/Page2.png";
import Page2 from "./Page2";
import Page3Img from "../../assets/Page3.png";
import Page3 from "./Page3";
const Layout = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(
    Array(6).fill(false) // 6 Steps initialized as incomplete
  );

  // Step Labels
  const steps = [
    "Company Details",
    "Company Details2",
    "Work Experience",
    "Certification",
    "Skills & Preference",
    "Documents"
  ];

  // Save and Continue Function
  const handleSaveAndContinue = () => {
    setCompletedSteps((prev) => {
      const newSteps = [...prev];
      newSteps[currentStep] = true; // Mark current step as complete
      return newSteps;
    });

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("All steps completed!");
      navigate("/login");
    }
  };

  // Step Forms
  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <Page1 />;
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Certification Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Issuing Organization"
              className="border p-2 rounded"
            />
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Primary Skill"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Secondary Skill"
              className="border p-2 rounded"
            />
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col gap-4">
            <input type="file" className="border p-2 rounded" />
            <textarea
              placeholder="Additional Notes"
              className="border p-2 rounded h-24"
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  const renderImage = () => {
    switch (currentStep) {
      case 0:
        return (
          <img
            src={Page1Img}
            alt=""
            className="w-[537px] h-[422px] ml-[77px] mt-[79px]"
          />
        );
      case 1:
        return (
          <img
            src={Page2Img}
            alt=""
            className="w-[435px] h-[421px] ml-[77px] mt-[79px]"
          />
        );
      case 2:
        return (
          <img
            src={Page3Img}
            alt=""
            className="w-[562px] h-[402px] ml-[77px] mt-[79px]"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="relative w-[100vw] h-[100vh] p-[5%] bg-blue-300 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Left Side - Stepper Navigation */}
      <div className="absolute w-[50%] h-full flex flex-col">
        {/* Circles with Labels */}
        <div className="flex items-center justify-center mb-8 w-full max-w-2xl">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Circle */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? "bg-violet-700"
                    : "bg-transparent border-4 border-gray-500 "
                }`}
              >
                {completedSteps[index] ? (
                  <img src={Correct} alt="Completed" className="size-5" />
                ) : null}
              </div>

              {/* Line Between Circles (Except Last One) */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 w-5 ${
                    index < currentStep ? "bg-violet-700" : "bg-gray-400"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Labels */}
        <div className="flex justify-center gap-6 w-full max-w-2xl">
          {steps.map((step, index) => (
            <p
              key={index}
              className={`text-md ${
                index <= currentStep ? "text-violet-800" : "text-gray-600 ml-1"
              }`}
            >
              {step}
            </p>
          ))}
        </div>

        {renderImage()}
      </div>

      {/* Right Side - Form Section */}
      <div
        className="absolute top-0 right-0 w-[50%] h-full 
                        rounded-tl-[80px] rounded-bl-[80px] bg-white p-[5%] pb-0 flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-xl font-semibold">Company Details</h2>
          <p className="text-violet-500">Enter your details for this step</p>
        </div>
        {/*Form Redering by current step*/}
        <div>{renderForm()}</div>
        {/* Bottom Button - Save and Continue */}
        <button
          onClick={handleSaveAndContinue}
          className="flex items-center justify-center gap-2 bg-violet-700 pl-5 h-[68px] border border-gray-300 rounded-lg w-full hover:bg-violet-800 transition"
        >
          <span className="text-white">Save and Continue</span>
          <img src={Continue} alt="Continue" className="size-4 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Layout;
