"use client";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-nice-select/css/nice-select.css";
import "../styles/style.css";
import { useRouter } from "next/navigation";
import { taxiData as originalTaxiData } from '../constants/data'
import { useBooking } from "../context/BookingContext";

export default function BookingArea() {
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const [distanceKm, setDistanceKm] = useState(null);
  const router = useRouter();
  const { setBookingData } = useBooking();

  useEffect(() => {
    if (typeof window !== "undefined" && !window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCTt9yomok8uojcLoQ8GxeWj7E5HYLMKkk&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      document.head.appendChild(script);
    } else {
      initAutocomplete();
    }

    if (typeof window !== "undefined") {
      (async () => {
        const $ = (await import("jquery")).default;
        window.$ = window.jQuery = $;
        await import("jquery-nice-select");
        $(".select").niceSelect();
      })();
    }
  }, []);

  const initAutocomplete = () => {
    if (!window.google) return;
    let fromPlace = null;
    let toPlace = null;

    if (fromInputRef.current) {
      const fromAutocomplete = new window.google.maps.places.Autocomplete(fromInputRef.current);
      fromAutocomplete.addListener("place_changed", () => {
        fromPlace = fromAutocomplete.getPlace();
        if (fromPlace.geometry && toPlace?.geometry) calculateDistance(fromPlace, toPlace);
      });
    }

    if (toInputRef.current) {
      const toAutocomplete = new window.google.maps.places.Autocomplete(toInputRef.current);
      toAutocomplete.addListener("place_changed", () => {
        toPlace = toAutocomplete.getPlace();
        if (toPlace.geometry && fromPlace?.geometry) calculateDistance(fromPlace, toPlace);
      });
    }
  };

  const calculateDistance = (fromPlace, toPlace) => {
    const lat1 = fromPlace.geometry.location.lat();
    const lng1 = fromPlace.geometry.location.lng();
    const lat2 = toPlace.geometry.location.lat();
    const lng2 = toPlace.geometry.location.lng();

    const distance = getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2);
    setDistanceKm(distance.toFixed(2));

  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  // ✅ Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!distanceKm) {
      alert("Please select both locations to calculate distance.");
      return;
    }

    // Calculate dynamic taxi prices based on distance
    const dynamicTaxis = originalTaxiData.map((taxi) => {
      const extraKm = Math.max(distanceKm - parseFloat(taxi.features[0].value), 0); // distance beyond included km
      const extraFarePerKm = parseFloat(taxi.features[1].value.replace(/[^0-9.]/g, ""));
      const basePrice = parseFloat(taxi.price.replace(/[^0-9.]/g, ""));
      const newPrice = basePrice + extraKm * extraFarePerKm;

      return {
        ...taxi,
        features: [
          { ...taxi.features[0], value: `${distanceKm} Km` }, // update included km
          taxi.features[1],
          taxi.features[2],
          taxi.features[3],
          taxi.features[4]
        ],
        price: `₹${newPrice.toFixed(2)}`
      };
    });

    // Save form + distance + taxi data in context
    setBookingData({
      form: {
        locations: [fromInputRef.current.value, toInputRef.current.value],

      },

      distance: distanceKm,
      taxis: dynamicTaxis
    });

    router.push("/taxidetails");
  };

  return (
    <div className="booking-area">
      <div className="container">
        <div className="booking-form">
          <h4 className="booking-title">Book Your Ride</h4>
          <form action="#" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Pick Up Location</label>
                  <input
                    ref={fromInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Type Location"
                  />
                  <i className="fas fa-location-dot"></i>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>Drop Off Location</label>
                  <input
                    ref={toInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Type Location"
                  />
                  <i className="fas fa-location-dot"></i>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>Passengers</label>
                  <input type="text" className="form-control" placeholder="Passengers" />
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>Cab Type</label>
                  <select className="select">
                    <option value="">Choose Cab</option>
                    <option value="1">All Type</option>
                    <option value="2">Hybrid</option>
                    <option value="3">Luxury</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>Pick Up Date</label>
                  <input
                    type="text"
                    className="form-control date-picker"
                    placeholder="MM/DD/YY"
                  />
                  <i className="fas fa-calendar-days"></i>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="form-group">
                  <label>Pick Up Time</label>
                  <input
                    type="text"
                    className="form-control time-picker"
                    placeholder="00:00 AM"
                  />
                  <i className="fas fa-clock"></i>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="form-group">
                  <label>Driver Age</label>
                  <select className="select">
                    <option value="">Choose Age</option>
                    <option value="1">Any Age</option>
                    <option value="2">25</option>
                    <option value="3">30</option>
                    <option value="4">35</option>
                    <option value="5">40</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>Cab Model</label>
                  <select className="select">
                    <option value="">Choose Model</option>
                    <option value="1">All Model</option>
                    <option value="2">M5 2022</option>
                    <option value="3">Q7 2021</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-2 align-self-end">
                {/* <Link href="/taxidetails"> */}
                <button className="theme-btn" type="submit">
                  Book Taxi <i className="fas fa-arrow-right"></i>
                </button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
