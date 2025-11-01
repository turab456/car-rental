'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../hooks/useAuth';
import Cookies from 'js-cookie';
import api from '../../../services/api';

export default function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    phoneOTP: '',
  });

  const [otpSent, setOtpSent] = useState(false); // ✅ Track OTP sent state

  const { loading, otpLoading, errorMsg, successMsg, handleLogin, handleRegister } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phoneNumber || !formData.phoneOTP) {
      alert('Please enter both phone number and OTP.');
      return;
    }

    const response = await handleLogin(formData);
    if (response?.data?.accessToken) {
      Cookies.set('accessToken', response.data.accessToken, { path: '/' });
      alert('Token set successfully!');
    }
    if(response?.data?.id && response?.data?.phoneNumber){
      await localStorage.setItem('userData', JSON.stringify({
        id: response.data.id,
        phoneNumber: response.data.phoneNumber
      }));
    }
  };

  const handleSendOtp = async () => {
    if (!formData.phoneNumber) {
      alert('Please enter your phone number to receive OTP.');
      return;
    }

    try {
      const response = await handleRegister({ phoneNumber: formData.phoneNumber });

      if (response?.success || response?.status === 200) {
        setOtpSent(true); // Mark OTP as sent
        alert('OTP sent successfully!');
      }
    } catch (error) {
      console.error('Send OTP failed:', error);
      alert('Failed to send OTP. Please try again.');
    } finally {
      setOtpLoading(false); // stop loading
    }
  };
  console.log(!otpSent)
  return (
    <section className="py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="login-form shadow p-4 rounded bg-white">
              {/* Header */}
              <div className="login-header text-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={180}
                  height={50}
                  className="img-fluid mb-2"
                />
                <h3 className="fw-bold">Welcome Back</h3>
                <p className="text-muted">Login to your account</p>
              </div>

              {/* Alerts */}
              {errorMsg && (
                <div className="alert alert-danger text-center">{errorMsg}</div>
              )}
              {successMsg && (
                <div className="alert alert-success text-center">
                  {successMsg}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Phone Number */}
                <div className="form-group mb-3">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    disabled={otpSent} // disable after sending OTP
                  />
                </div>

                {/* Send OTP Button */}
                <button
                  type="button"
                  className="theme-btn mb-3"
                  onClick={handleSendOtp}
                  disabled={otpSent || otpLoading}
                >
                  {otpLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending OTP...
                    </>
                  ) : otpSent ? (
                    <>
                      <i className="fas fa-check me-2 text-success"></i>OTP Sent
                    </>
                  ) : (
                    <>
                      <i className="fas fa-mobile-alt me-2"></i>Send OTP
                    </>
                  )}
                </button>

                {/* OTP Input */}
                <div className="form-group mb-3">
                  <label>OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneOTP"
                    value={formData.phoneOTP}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    required
                    disabled={!otpSent}
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="theme-btn"
                  disabled={loading || !otpSent}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Logging in...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sign-in-alt me-2"></i>Login
                    </>
                  )}
                </button>

                {/* Social Login */}
                <div className="social-login text-center mt-3">
                  <p className="text-muted">Or Login With</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href="#" className="btn btn-outline-primary rounded-circle">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#" className="btn btn-outline-danger rounded-circle">
                      <i className="fab fa-google"></i>
                    </Link>
                    <Link href="#" className="btn btn-outline-info rounded-circle">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
