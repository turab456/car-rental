"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../../store/slices/userSlice";
import { useUserId } from "../../../hooks/useUserId";
export default function ProfileTab() {
  const dispatch = useDispatch();
  const { userId, isLoading } = useUserId();
  const { data: user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId && !isLoading) {
      dispatch(fetchUserData(userId));
    }
  }, [userId, isLoading, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // dispatch updateUser action if you want to update Redux state
  };

  return (
    <div className="col-lg-9">
      <div className="user-profile-wrapper">
        <div className="row">
          {/* Profile Info */}
          <div className="col-lg-7">
            <div className="user-profile-card">
              <h4 className="user-profile-card-title">Profile Info</h4>

              <div className="user-profile-form">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p className="text-danger">{error}</p>
                ) : (
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={user.address}
                            onChange={handleChange}
                            placeholder="Address"
                          />
                        </div>
                      </div>
                    </div>

                    <button type="button" className="theme-btn my-3">
                      <span className="far fa-user"></span> Save Changes
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="col-lg-5">
            <div className="user-profile-card">
              <h4 className="user-profile-card-title">Change Password</h4>

              <div className="col-lg-12">
                <div className="user-profile-form">
                  <form action="#">
                    <div className="form-group">
                      <label>Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Old Password"
                      />
                    </div>

                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                      />
                    </div>

                    <div className="form-group">
                      <label>Re-Type Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re-Type Password"
                      />
                    </div>

                    <button type="button" className="theme-btn my-3">
                      <span className="far fa-key"></span> Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}