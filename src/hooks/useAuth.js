import { useState } from "react";
import { registerUser, loginUser } from "../features/auth/authServices";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [otpLoading, setotpLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleRegister = async (formData) => {
    setotpLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const { fullName, email, password, phoneNumber } = formData;
      const res = await registerUser({
        fullName,
        email,
        password,
        phoneNumber: Number(phoneNumber),
      });
      setSuccessMsg("Registration successful!");
      return res;
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Something went wrong.");
    } finally {
      setotpLoading(false);
    }
  };

  const handleLogin = async (formData) => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const { phoneNumber, phoneOTP } = formData;
      const res = await loginUser({
        phoneNumber: Number(phoneNumber),
        phoneOTP,
      });
      setSuccessMsg("Login successful!");
      return res;
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, errorMsg, successMsg,otpLoading, handleRegister, handleLogin };
};
