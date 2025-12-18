"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../../store/slices/userSlice";
import { useUserId } from "../../../hooks/useUserId";
export default function Sidebar({ activeTab, setActiveTab }) {
 const dispatch = useDispatch();
  const { userId, isLoading } = useUserId();
  const { data: user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId && !isLoading) {
      dispatch(fetchUserData(userId));
    }
  }, [userId, isLoading, dispatch]);

  

  const tabs = [
    { key: "dashboard", label: "Dashboard", icon: "far fa-gauge-high" },
    { key: "profile", label: "My Profile", icon: "far fa-user" },
    { key: "booking", label: "My Booking", icon: "far fa-layer-group" },
    { key: "cancel", label: "Cancel Booking", icon: "far fa-xmark-circle" },
    { key: "payment", label: "Payment History", icon: "far fa-credit-card" },
    { key: "settings", label: "Settings", icon: "far fa-gear" },
    { key: "logout", label: "Logout", icon: "far fa-sign-out" },
  ];

  const fullName = `${user.firstName} ${user.lastName}`.trim() || "User";
  console.log(user.profileImage)
  return (
    <div className="col-lg-3">
      <div className="user-profile-sidebar">
        <div className="user-profile-sidebar-top">
          <div className="user-profile-img">
            <Image
              src={user.profileImage}
              alt="Profile"
              width={100}
              height={100}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                width: "100px",
                height: "100px",
              }}
            />
            <button type="button" className="profile-img-btn">
              <i className="far fa-camera"></i>
            </button>
            <input type="file" className="profile-img-file" />
          </div>

          <h5>{loading ? "Loading..." : fullName}</h5>
          <p>
            <a href="#">{user.email}</a>
          </p>
        </div>

        {/* Sidebar Menu */}
        <ul className="user-profile-sidebar-list">
          {tabs.map((item) => (
            <li key={item.key}>
              <a
                href="#"
                className={activeTab === item.key ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.key);
                }}
              >
                <i className={item.icon}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
