"use client";
import { createContext, useContext, useEffect, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    form: {},
    distance: 0,
    taxis: [] // Will hold dynamic taxi data
  });
  useEffect(() => {
    const saved = sessionStorage.getItem("bookingData");
    if (saved) setBookingData(JSON.parse(saved));
  }, []);

  const updateBookingData = (data) => {
    setBookingData(data);
    sessionStorage.setItem("bookingData", JSON.stringify(data));
  };
  return (
    <BookingContext.Provider value={{ bookingData, setBookingData: updateBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
