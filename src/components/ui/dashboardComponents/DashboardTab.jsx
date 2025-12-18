"use client";

import UpcomingBookingTable from "../dashboardComponents/components/CustomTable";





export default function DashboardTab() {
const columns = [
  { label: "Cab Info", key: "image" },
  { label: "Booking ID", key: "bookingId" },
  { label: "Phone Number", key: "phoneNumber" },
  { label: "User ID", key: "userId" },
  { label: "Trip Type", key: "tripType" },
  { label: "Locations", key: "locations" },
  { label: "Total KM", key: "totalKm" },
  { label: "Total Amount", key: "totalAmount" },
  { label: "Vehicle Type", key: "vehicleType" },
  { label: "Pickup Date", key: "pickUpDate" },
  { label: "Pickup Time", key: "pickUpTime" },
  { label: "Return Date", key: "returnDate" },
  { label: "User City", key: "userCity" },
];


  const data = [
  {
    image: "/assets/img/taxi/01.png",
    bookingId: "123456",
    phoneNumber: "bookingData.form.phoneNumber",
    userId: "userData?.id",
    tripType:" bookingData.form.tripType",
    locations: "bookingData.form.locations",
    totalKm: "taxi.features[0].value",
    totalAmount:" taxi.price",
    vehicleType: "taxi.title",
    pickUpDate: "departure",
    pickUpTime:" userData?.phoneNumber",
    returnDate: "returnDate",
    userCity: ""
  }
];

  return (
    <div className="col-lg-9">
      <div className="user-profile-wrapper">

        <div className="row">

          <div className="col-md-6 col-lg-4">
            <div className="dashboard-widget dashboard-widget-color-1">
              <div className="dashboard-widget-info">
                <h1>05</h1>
                <span>Upcoming Booking</span>
              </div>
              <div className="dashboard-widget-icon">
                <i className="fal fa-list"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="dashboard-widget dashboard-widget-color-2">
              <div className="dashboard-widget-info">
                <h1>1250</h1>
                <span>Total Booking</span>
              </div>
              <div className="dashboard-widget-icon">
                <i className="fal fa-eye"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="dashboard-widget dashboard-widget-color-3">
              <div className="dashboard-widget-info">
                <h1>110</h1>
                <span>Cancel Booking</span>
              </div>
              <div className="dashboard-widget-icon">
                <i className="fal fa-xmark-circle"></i>
              </div>
            </div>
          </div>

        </div>

       <UpcomingBookingTable columns={columns} data={data}/>

      </div>
    </div>
  );
}
