import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthData } from "../../JobPost/utils/redux/loginSlice";

export default function useAuthHook() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const employerLogin = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://technohire-backend.onrender.com/employer/auth/login",
        {
          email: email,
          password: password
        }
      );
      console.log(res.data);
      dispatch(setAuthData(res.data));
      toast.success("Login Successfully!", {
        position: "top-right",
        autoClose: 3000
      });
      return true;
    } catch (error) {
      toast.error(error.response.data.msg || "Internal Server Error!", {
        position: "top-right",
        autoClose: 3000
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  // const forgetPassword=async(email)=>{
  //         setLoading(true)
  //         try {
  //                 const res=await axios.post('https://technohire-backend.onrender.com/employer/auth/forgot-password',{

  //                 })
  //         } catch (error) {

  //         }
  // }
  const sendEmailVerificationOtp = async (email, token) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://technohire-backend-5my9.onrender.com/employer/auth/send-email-verification-otp",
        {
          email: email
        },
        {
          headers: {
            Auth: token, // Token in Auth header
            "Content-Type": "application/json"
          }
        }
      );
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000
      });
      return true;
    } catch (error) {
      toast.error(error.response.msg || "Unable to send verification code!", {
        position: "top-right",
        autoClose: 3000
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  const register = async (email, password, fullname, username) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://technohire-backend.onrender.com/employer/auth/register",
        {
          email: email,
          fullName: fullname,
          userName: username,
          password: password
        }
      );
      await sendEmailVerificationOtp(email, res.data.token);
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000
      });
      return res.data;
    } catch (error) {
      toast.error(error.response.data.msg || "Internal Server Error!", {
        position: "top-right",
        autoClose: 3000
      });
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (email, otp) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://technohire-backend-5my9.onrender.com/employer/auth/verify-email-otp",
        {
          email: email,
          otp: otp
        }
      );
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000
      });
      navigate("/emailVerificationSuccessful");
    } catch (error) {
      toast.error(error.response.data.msg || "Soemthing went wrong!", {
        position: "top-right",
        autoClose: 3000
      });
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    employerLogin,
    register,
    verifyOtp,
    sendEmailVerificationOtp
  };
}
