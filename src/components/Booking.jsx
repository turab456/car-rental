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
import toast from "react-hot-toast";

export default function BookingArea() {
  const user =
    typeof window !== "undefined" ? localStorage.getItem("userData") : null;
  const router = useRouter();
  const { setBookingData } = useBooking();
  const { isAuthenticated } = useAuthenticate();
  const { handleRegister, handleLogin, errorMsg, successMsg } = useAuth()||{};

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const otpRefs = useRef([]);

  const [distanceKm, setDistanceKm] = useState(null);
  const [tripType, setTripType] = useState("One Way");
  const [extraCities, setExtraCities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(
    user ? JSON.parse(user).phoneNumber : ""
  );
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isFromFilled, setIsFromFilled] = useState(false);
  const [isToFilled, setIsToFilled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const handleOtpChange = (e, idx) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    const nextOtp = [...otp];
    nextOtp[idx] = val;
    setOtp(nextOtp);

    if (val && idx < 4) {
      otpRefs.current[idx + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        const nextOtp = [...otp];
        nextOtp[idx] = "";
        setOtp(nextOtp);
      } else if (idx > 0) {
        otpRefs.current[idx - 1]?.focus();
      }
    }
  };

  const handleOtpPaste = (e) => {
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    const digits = paste.replace(/\D/g, "").slice(0, 4).split("");

    if (digits.length) {
      const nextOtp = ["", "", "", "", ""];
      digits.forEach((d, i) => (nextOtp[i] = d));
      setOtp(nextOtp);

      const focusIndex = Math.min(digits.length, 5) - 1;
      otpRefs.current[focusIndex]?.focus();
    }
    e.preventDefault();
  };

  // Google Maps & jQuery initialization
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
      if (city.ref) createAutocomplete(city.ref, () => {});
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

  const deg2rad = (deg) => deg * (Math.PI / 180);

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

  const handleAddCity = () => {
    setExtraCities((prev) => [
      ...prev,
      { id: prev.length + 1, ref: null, autocompleteAttached: false },
    ]);
  };

  const handleVerifyOtp = async () => {
    const otpCode = Array.isArray(otp) ? otp.join("") : otp;
    if (otpCode.length < 5) return;

    const formData = { phoneNumber, phoneOTP: otpCode };
    const response = await handleLogin(formData);

    if (response?.data?.accessToken) {
      Cookies.set("accessToken", response.data.accessToken, { path: "/" });
      alert("Token set successfully!");
    }

    if (response?.data?.id && response?.data?.phoneNumber) {
      await localStorage.setItem(
        "userData",
        JSON.stringify({
          id: response.data.id,
          phoneNumber: response.data.phoneNumber,
        })
      );
    }

    setOtpVerified(true);
    toast.success(successMsg || "OTP verified successfully!");
  };

  // Auto-trigger verify when 5 digits present
  useEffect(() => {
    const otpCode = Array.isArray(otp) ? otp.join("") : otp;
    if (otpSent && otpCode.length === 5 && !otpVerified) {
      handleVerifyOtp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("step 1");

    if (!isAuthenticated && !otpVerified) {
      if (!phoneNumber) {
        toast.error(errorMsg || "Enter your phone number first.");
        return;
      }

      setOtpSent(true);
      handleRegister({ phoneNumber });
      toast.success(successMsg || "OTP sent to your mobile number");
      return;
    }

    if (!distanceKm) {
      toast.error(errorMsg || "Please select valid From and To locations.");
      return;
    }

    const from = fromInputRef.current?.value || "";
    const to = toInputRef.current?.value || "";
    const cities = extraCities
      .map((city) => city.ref?.value?.trim())
      .filter((v) => v);

    let locations = [];
    if (tripType === "One Way") {
      locations =
        cities.length === 0 ? [from, to] : [from, ...cities, to, from];
    } else if (tripType === "Round Trip") {
      locations =
        cities.length === 0 ? [from, to, from] : [from, ...cities, to, from];
    }

    const dynamicTaxis = originalTaxiData.map((taxi) => {
      const extraKm = Math.max(
        distanceKm - parseFloat(taxi.features[0].value),
        0
      );
      const extraFarePerKm = parseFloat(
        taxi.features[1].value.replace(/[^0-9.]/g, "")
      );
      const basePrice = parseFloat(taxi.price.replace(/[^0-9.]/g, ""));
      const newPrice = basePrice + extraKm * extraFarePerKm;
      console.log("newPrice", newPrice);
      console.log("extraKm", extraKm);
      console.log("newPrice", newPrice);

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

  // Reinitialize autocomplete for extra cities
  useEffect(() => {
    if (!window.google) return;

    extraCities.forEach((city) => {
      if (city.ref && !city.autocompleteAttached) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          city.ref
        );
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
        });
        city.autocompleteAttached = true;
      }
    });
  }, [extraCities]);

  const canAddCity = isFromFilled && isToFilled;

  const handleResendOtp = () => {
    if (!canResend) return;

    setOtp(["", "", "", "", ""]);
    otpRefs.current[0]?.focus();
    setOtpVerified(false);
    setOtpSent(true);
    handleRegister({ phoneNumber });
    toast.success(successMsg || "OTP resent successfully!");
  };

  // Resend timer countdown
  useEffect(() => {
    if (!otpSent) return;

    setResendTimer(30);
    setCanResend(false);

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent]);

  return (
    <div className="booking-area">
      <div className="container">
        <div className="booking-form form-card shadow-lg">
          <div className="form-card-header">
            <h4 className="booking-title">Plan Your Perfect Ride</h4>
            <p className="booking-sub">
              Fast. Safe. Comfortable — pick a taxi that fits your trip.
            </p>
          </div>

          <form className="booking-grid">
            <div className="col-left">
              <div className="trip-picker">
                <label className="input-label">Trip Type</label>
                <div className="trip-pill-group">
                  <button
                    type="button"
                    className={`status-pill ${
                      tripType === "One Way"
                        ? "status-pill--active"
                        : "status-pill--inactive"
                    }`}
                    onClick={() => setTripType("One Way")}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    className={`status-pill ${
                      tripType === "Round Trip"
                        ? "status-pill--active"
                        : "status-pill--inactive"
                    }`}
                    onClick={() => setTripType("Round Trip")}
                  >
                    Round Trip
                  </button>
                </div>
              </div>
              <label className="input-label mt-3">Pick Up</label>
              <input
                ref={fromInputRef}
                type="text"
                className="form-control input-large"
                placeholder="Where from?"
                onChange={(e) =>
                  setIsFromFilled(e.target.value.trim().length > 0)
                }
              />

              <label className="input-label mt-3">Drop Off</label>
              <input
                ref={toInputRef}
                type="text"
                className="form-control input-large"
                placeholder="Where to?"
                onChange={(e) =>
                  setIsToFilled(e.target.value.trim().length > 0)
                }
              />

              <div className="mt-3">
                <label className="input-label">Extra Stops</label>
                {extraCities.map((city) => (
                  <input
                    key={city.id}
                    ref={(el) => (city.ref = el)}
                    type="text"
                    className="form-control mb-2"
                    placeholder="City name (optional)"
                  />
                ))}
                <button
                  type="button"
                  className="btn-add-city"
                  onClick={handleAddCity}
                  disabled={!canAddCity}
                >
                  + Add Stop
                </button>
              </div>
              <label className="input-label mt-3">Phone</label>
              <div className="phone-otp">
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  className="form-control input-large"
                  placeholder="Mobile Number"
                  disabled={otpSent && !otpVerified}
                />
              </div>

              {otpSent && (
                <div className="otp">
                  <div className="otp-verify d-flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <input
                        key={i}
                        ref={(el) => (otpRefs.current[i] = el)}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        className="otp-input text-center"
                        value={otp[i]}
                        onChange={(e) => handleOtpChange(e, i)}
                        onKeyDown={(e) => handleOtpKeyDown(e, i)}
                        onPaste={handleOtpPaste}
                        disabled={otpVerified}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={handleResendOtp}
                    disabled={!canResend}
                  >
                    {canResend ? "Resend OTP" : `Resend in ${resendTimer}s`}
                  </button>
                </div>
              )}
            </div>
          </form>
          <div className="mt-4">
            <button
              className="theme-btn booking-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Book Taxi <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
