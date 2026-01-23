"use client";
import React, { useEffect, useState } from "react";
import TaxiCard from "../../components/ui/TaxiCard";
import Tab from "../../components/ui/Tab";
import TripPicker from "../../components/ui/TripPicker";
import { useBooking } from "../../context/BookingContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-nice-select/css/nice-select.css";
import axiosInstance from "../../services/axiosInterceptor";
export default function TaxiList() {
  const { bookingData } = useBooking() || {};
  //   const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const [departure, setDeparture] = useState(new Date(2025, 9, 27, 6, 0));
  const [returnDate, setReturnDate] = useState(new Date(2025, 9, 27, 23, 59));
  const [userData, setUserData] = useState(null);

  const locations = bookingData?.form?.locations || [];
  const tripType = bookingData?.form?.tripType;
  // ✅ Prepare route tabs dynamically
  let displayLocations = [];
  console.log("bookingData", bookingData);
  if (tripType === "Round Trip" && locations.length === 2) {
    // From → To → From
    displayLocations = [locations[0], locations[1], locations[0]];
  } else {
    // Default: From → To
    displayLocations = locations;
  }
  const transformBookingTimes = (bookingInfo) => {
    const formatDate = (input) => {
      const date = input instanceof Date ? input : new Date(input);
      return date.toISOString().split("T")[0];
    };

    const formatTime = (input) => {
      const date = input instanceof Date ? input : new Date(input);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    const updatedBooking = { ...bookingInfo };

    if (bookingInfo.pickUpDate) {
      updatedBooking.pickUpTime = bookingInfo.pickUpDate;
      updatedBooking.pickUpDate = formatDate(bookingInfo.pickUpDate);
    }

    if (bookingInfo.returnDate) {
      updatedBooking.returnTime = formatTime(bookingInfo.returnDate);
      updatedBooking.returnDate = formatDate(bookingInfo.returnDate);
    }

    return updatedBooking;
  };
  const handleBookNow = async (taxi) => {
    // 🗓️ Format current date as DD/MM/YYYY
    const createdDate = new Date()
      .toLocaleDateString("en-GB")
      .replace(/\//g, "/");

    // 🔠 Generate unique lead name — starts with "CB" + 5 random alphanumeric chars
    const randomString = Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase();
    const uniqueLeadName = `CB${randomString}`;

    const bookingInfo = {
      // collectionName: "leads",
      // phoneNumber: bookingData.form.phoneNumber,
      // userId: userData?.id,
      tripType: bookingData?.form?.tripType,
      locations: bookingData?.form?.locations,
      totalKm: Number(taxi.features[0].value.replace(/[^0-9.]/g, "")),
      totalAmount: Number(taxi.price.replace(/[^0-9.]/g, "")),
      vehicleType: taxi.title,
      pickUpDate: departure,
      pickUpTime: userData?.phoneNumber,
      // returnDate: returnDate,
      userCity: "Bangalore",

      // 🆕 Additional fields
      // leadStatus: "NEW-LEAD",
      // createdDate,
      // uniqueLeadName,
      // adminSeen: false,
    };

    const result = transformBookingTimes(bookingInfo);

    try {
      const response = await axiosInstance.post("/lead/create", result);
      if (response) {
        alert("Booking successful!");
      }
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };
  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);
  return (
    <section className="taxi-list">
      <div className="container">
        <div className="mb-4 d-flex flex-wrap align-items-center gap-3">
          {displayLocations.map((location, index) => (
            <React.Fragment key={index}>
              <Tab text={location} />
              {index < displayLocations.length - 1 && (
                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <i className="fas fa-arrow-right "></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <TripPicker
          departure={departure}
          setDeparture={setDeparture}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        />
        <div className="row gy-5">
          {bookingData?.taxis?.map((taxi, index) => (
            <TaxiCard
              key={index}
              categories={taxi.categories}
              img={taxi.img}
              title={taxi.title}
              price={taxi.price}
              features={taxi.features}
              onPress={() => handleBookNow(taxi)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
