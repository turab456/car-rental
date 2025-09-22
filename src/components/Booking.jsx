"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-nice-select/css/nice-select.css";
import "../styles/style.css";

export default function BookingArea() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      // Dynamically import jQuery + plugin
      (async () => {
        const $ = (await import("jquery")).default;
        window.$ = window.jQuery = $;

        await import("jquery-nice-select");

        $(".select").niceSelect();
      })();
    }
  }, []);

  return (
    <div className="booking-area">
      <div className="container">
        <div className="booking-form">
          <h4 className="booking-title">Book Your Ride</h4>
          <form action="#">
            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Pick Up Location</label>
                  <input type="text" className="form-control" placeholder="Type Location" />
                  <i className="fas fa-location-dot"></i>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="form-group">
                  <label>Drop Off Location</label>
                  <input type="text" className="form-control" placeholder="Type Location" />
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
                  <input type="text" className="form-control date-picker" placeholder="MM/DD/YY" />
                  <i className="fas fa-calendar-days"></i>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="form-group">
                  <label>Pick Up Time</label>
                  <input type="text" className="form-control time-picker" placeholder="00:00 AM" />
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
                <button className="theme-btn" type="submit">
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
