'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../hooks/useAuth';

export default function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    phoneOTP: '',
  });

  const { loading, errorMsg, successMsg, handleLogin } = useAuth();

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
    if (response?.token) {
      // Example: Store token or redirect
      localStorage.setItem('token', response.token);
      console.log('User logged in successfully');
    }
  };

  return (
    <section className="py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="login-form shadow p-4 rounded bg-white">
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

              {/* ✅ Feedback Messages */}
              {errorMsg && (
                <div className="alert alert-danger text-center">{errorMsg}</div>
              )}
              {successMsg && (
                <div className="alert alert-success text-center">
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                  />
                </div>

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
                  />
                </div>

                <button type="submit" className="theme-btn" disabled={loading}>
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

                <div className="login-footer text-center mt-4">
                  <p>
                    Don’t have an account?{' '}
                    <Link href="/auth/register">Register here</Link>
                  </p>
                </div>

                <div className="social-login text-center mt-3">
                  <p className="text-muted">Or Login With</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link
                      href="#"
                      className="btn btn-outline-primary rounded-circle"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-outline-danger rounded-circle"
                    >
                      <i className="fab fa-google"></i>
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-outline-info rounded-circle"
                    >
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
