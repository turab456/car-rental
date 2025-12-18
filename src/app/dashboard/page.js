"use client";

import { useState } from "react";
import Sidebar from "../../components/ui/dashboardComponents/Sidebar.jsx";
import DashboardTab from "../../components/ui/dashboardComponents/DashboardTab.jsx";
import ProfileTab from "../../components/ui/dashboardComponents/ProfileTab.jsx";
import MyBookingsTab from "../../components/ui/dashboardComponents/MyBookingsTab.jsx";
import PaymentHistoryTab from "../../components/ui/dashboardComponents/PaymentHistoryTab.jsx";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="main">

      <div className="user-profile mt-5 full-screen-profile">
        <div className="container-fluid">
          <div className="row">

            {/* Sidebar receives activeTab + setActiveTab */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Tab Content Switching */}
            {activeTab === "dashboard" && <DashboardTab />}
            {activeTab === "profile" && <ProfileTab />}
            {activeTab === "booking" && <MyBookingsTab />}
            {activeTab === "payment" && <PaymentHistoryTab />}

            {/* You can add cancel/settings later */}
            {/* {activeTab === "cancel" && <CancelBookingTab />} */}
            {/* {activeTab === "settings" && <SettingsTab />} */}

          </div>
        </div>
      </div>

    </main>
  );
}
