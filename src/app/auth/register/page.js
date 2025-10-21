'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../hooks/useAuth';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    agreeToTerms: false
  });

  const { loading, errorMsg, successMsg, handleRegister } = useAuth();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms)
      return alert('You must agree to the terms.');

    if (formData.password !== formData.confirmPassword)
      return alert('Passwords do not match.');

    await handleRegister(formData);
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
                <h3 className="fw-bold">Create an Account</h3>
                <p className="text-muted">Register to access our services</p>
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
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>

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

                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="agreeToTerms">
                    I agree to the <Link href="/terms">Terms & Conditions</Link>
                  </label>
                </div>

                <button
                  type="submit" className="theme-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Registering...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-user-plus me-2"></i>Register
                    </>
                  )}
                </button>

                <div className="login-footer text-center mt-4">
                  <p>
                    Already have an account?{' '}
                    <Link href="/auth/login">Login here</Link>
                  </p>
                </div>

                <div className="social-login text-center mt-3">
                  <p className="text-muted">Or Register With</p>
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
