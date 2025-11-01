"use client";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-nice-select/css/nice-select.css";
import "../styles/style.css";
import { useRouter } from "next/navigation";
import { taxiData as originalTaxiData } from "../constants/data";
import { useBooking } from "../context/BookingContext";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { useAuth } from "../hooks/useAuth";
import Cookies from "js-cookie";
export default function BookingArea() {
  const user = typeof window !== "undefined" ? localStorage.getItem("userData") : null;
  const router = useRouter();
  const { setBookingData } = useBooking();
  const { isAuthenticated } = useAuthenticate();
  const { handleRegister, handleLogin } = useAuth();

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const [distanceKm, setDistanceKm] = useState(null);
  const [tripType, setTripType] = useState("oneway");
  const [extraCities, setExtraCities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(user ? JSON.parse(user).phoneNumber : "");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isFromFilled, setIsFromFilled] = useState(false);
  const [isToFilled, setIsToFilled] = useState(false);

  const otpRefs = useRef([]);

  // --- Google & jQuery ---
  useEffect(() => {
    if (typeof window !== "undefined" && !window.google) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCTt9yomok8uojcLoQ8GxeWj7E5HYLMKkk&libraries=places";
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
    const createAutocomplete = (inputRef, onPlaceChange) => {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place?.geometry) onPlaceChange(place);
      });
    };

    let fromPlace = null;
    let toPlace = null;

    if (fromInputRef.current) {
      createAutocomplete(fromInputRef.current, (place) => {
        fromPlace = place;
        setIsFromFilled(!!place?.geometry);
        if (toPlace?.geometry) calculateDistance(fromPlace, toPlace);
      });
    }

    if (toInputRef.current) {
      createAutocomplete(toInputRef.current, (place) => {
        toPlace = place;
        setIsToFilled(!!place?.geometry);
        if (fromPlace?.geometry) calculateDistance(fromPlace, toPlace);
      });
    }

    extraCities.forEach((city) => {
      if (city.ref) createAutocomplete(city.ref, () => { });
    });
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
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  const deg2rad = (deg) => deg * (Math.PI / 180);

  const handleAddCity = () => {
    setExtraCities((prev) => [...prev, { id: prev.length + 1, ref: null }]);
  };

  // --- OTP Logic ---
  const handleSendOtp = () => {
    if (!phoneNumber) return alert("Enter your phone number first.");
    setOtpSent(true);
    handleRegister({ phoneNumber });
  };



  const handleVerifyOtp = async() => {
    const formData = { phoneNumber, phoneOTP: otp };

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
    }    setOtpVerified(true);
    alert("OTP verified successfully!");
  };

  // --- Booking ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!distanceKm) {
      alert("Please select both pickup and drop-off locations.");
      return;
    }

    if (!isAuthenticated && !otpVerified) {
      alert("Please verify your OTP before booking.");
      return;
    }

    const from = fromInputRef.current?.value || "";
    const to = toInputRef.current?.value || "";
    const cities = extraCities
      .map((city) => city.ref?.value?.trim())
      .filter((v) => v);

    let locations = [];
    if (tripType === "oneway") {
      locations = cities.length === 0 ? [from, to] : [from, ...cities, to, from];
    } else if (tripType === "roundtrip") {
      locations = cities.length === 0 ? [from, to, from] : [from, ...cities, to, from];
    }

    const dynamicTaxis = originalTaxiData.map((taxi) => {
      const extraKm = Math.max(distanceKm - parseFloat(taxi.features[0].value), 0);
      const extraFarePerKm = parseFloat(
        taxi.features[1].value.replace(/[^0-9.]/g, "")
      );
      const basePrice = parseFloat(taxi.price.replace(/[^0-9.]/g, ""));
      const newPrice = basePrice + extraKm * extraFarePerKm;
      return {
        ...taxi,
        features: [
          { ...taxi.features[0], value: `${distanceKm} Km` },
          taxi.features[1],
          taxi.features[2],
          taxi.features[3],
          taxi.features[4],
        ],
        price: `₹${newPrice.toFixed(2)}`,
      };
    });

    setBookingData({
      form: { locations, tripType, phoneNumber },
      distance: distanceKm,
      taxis: dynamicTaxis,
    });

    router.push("/taxidetails");
  };

  const canAddCity = isFromFilled && isToFilled;

  return (
    <div className="booking-area">
      <div className="container">
        <div className="booking-form">
          <h4 className="booking-title">Book Your Ride</h4>
          <form onSubmit={handleSubmit}>
            {/* Trip Type */}
            <div className="col-lg-3">
              <div className="form-group">
                <label>Trip Type</label>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="oneWay"
                      checked={tripType === "oneway"}
                      onChange={() => setTripType("oneway")}
                    />
                    <label className="form-check-label" htmlFor="oneWay">
                      One Way
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="roundTrip"
                      checked={tripType === "roundtrip"}
                      onChange={() => setTripType("roundtrip")}
                    />
                    <label className="form-check-label" htmlFor="roundTrip">
                      Round Trip
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Pickup */}
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Pick Up Location</label>
                  <input
                    ref={fromInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Type Location"
                    onChange={(e) =>
                      setIsFromFilled(e.target.value.trim().length > 0)
                    }
                  />
                  <i className="fas fa-location-dot"></i>
                </div>
              </div>

              {/* Drop */}
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Drop Off Location</label>
                  <input
                    ref={toInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Type Location"
                    onChange={(e) =>
                      setIsToFilled(e.target.value.trim().length > 0)
                    }
                  />
                  <i className="fas fa-location-dot"></i>
                </div>
              </div>

              {/* Phone + OTP */}
              <div className="col-lg-3">
               <div className="form-group position-relative">
  <label>Phone Number</label>
  <input
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    type="tel"
    className="form-control pe-5"
    placeholder="Mobile Number"
    disabled={otpSent && !otpVerified}
  />

  {!isAuthenticated && !otpVerified && (
    <button
      type="button"
      className="otp-inline-btn"
      onClick={handleSendOtp}
    >
      {otpSent ? "Resend" : "Send OTP"}
    </button>
  )}
</div>


                {/* OTP Boxes */}
                {!isAuthenticated && otpSent && !otpVerified && (
                  <div className="d-flex mt-2 gap-2 align-items-center">
                    <input
                      type="text"
                      maxLength={5}
                      className="form-control "
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}

                    />
                    <button
                      type="button"
                      className="theme-btn"

                      onClick={handleVerifyOtp}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>

              {/* Extra Cities */}
          <div className="col-lg-2 col-md-6 " >
                <div className="form-group">
                  {canAddCity &&
                    extraCities.map((city) => (
                      <input
                        key={city.id}
                        ref={(el) => (city.ref = el)}
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter City"
                      />
                    ))}
                  <button
                    type="button"
                    className="btn btn-outline-warning  text-dark"
                    onClick={handleAddCity}
                    disabled={!canAddCity}
                  >
                    + Add More City
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="col-lg-2 align-self-end mt-2">
                <button
                  className="theme-btn"
                  type="submit"
                  disabled={!isAuthenticated && !otpVerified}
                  style={{
                    opacity: !isAuthenticated && !otpVerified ? 0.6 : 1,
                    cursor: !isAuthenticated && !otpVerified ? "not-allowed" : "pointer",
                  }}
                >
                  Book Taxi <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
