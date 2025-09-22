"use client";
import TaxiCard from "../components/ui/TaxiCard";
import "../styles/animate.min.css";
import "../styles/style.css";
import Taxi from "../assets/taxi/01.png";
const taxis = [
  {
    categories: ["cat1", "cat2"],
    img: Taxi,
    title: "BMW M5 2019 Model",
    price: "$1.25/km",
    features: [
      { icon: "fas fa-car-side", label: "Taxi Doors", value: "4" },
      { icon: "fas fa-user", label: "Passengers", value: "4" },
      { icon: "fas fa-suitcase-rolling", label: "Luggage Carry", value: "2" },
      { icon: "fas fa-temperature-high", label: "Air Condition", value: "Yes" },
      { icon: "fas fa-map-location-dot", label: "GPS Navigation", value: "Yes" },
      { icon: "fas fa-user-tie", label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    categories: ["cat3", "cat4"],
    img:Taxi,
    title: "BMW M5 2019 Model",
    price: "$1.25/km",
    features: [
      { icon: "fas fa-car-side", label: "Taxi Doors", value: "4" },
      { icon: "fas fa-user", label: "Passengers", value: "4" },
      { icon: "fas fa-suitcase-rolling", label: "Luggage Carry", value: "2" },
      { icon: "fas fa-temperature-high", label: "Air Condition", value: "Yes" },
      { icon: "fas fa-map-location-dot", label: "GPS Navigation", value: "Yes" },
      { icon: "fas fa-user-tie", label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    categories: ["cat1", "cat4"],
    img: Taxi,
    title: "BMW M5 2019 Model",
    price: "$1.25/km",
    features: [
      { icon: "fas fa-car-side", label: "Taxi Doors", value: "4" },
      { icon: "fas fa-user", label: "Passengers", value: "4" },
      { icon: "fas fa-suitcase-rolling", label: "Luggage Carry", value: "2" },
      { icon: "fas fa-temperature-high", label: "Air Condition", value: "Yes" },
      { icon: "fas fa-map-location-dot", label: "GPS Navigation", value: "Yes" },
      { icon: "fas fa-user-tie", label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    categories: ["cat1", "cat3"],
    img: Taxi,
    title: "BMW M5 2019 Model",
    price: "$1.25/km",
    features: [
      { icon: "fas fa-car-side", label: "Taxi Doors", value: "4" },
      { icon: "fas fa-user", label: "Passengers", value: "4" },
      { icon: "fas fa-suitcase-rolling", label: "Luggage Carry", value: "2" },
      { icon: "fas fa-temperature-high", label: "Air Condition", value: "Yes" },
      { icon: "fas fa-map-location-dot", label: "GPS Navigation", value: "Yes" },
      { icon: "fas fa-user-tie", label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    categories: ["cat1", "cat2", "cat3"],
    img: Taxi,
    title: "BMW M5 2019 Model",
    price: "$1.25/km",
    features: [
      { icon: "fas fa-car-side", label: "Taxi Doors", value: "4" },
      { icon: "fas fa-user", label: "Passengers", value: "4" },
      { icon: "fas fa-suitcase-rolling", label: "Luggage Carry", value: "2" },
      { icon: "fas fa-temperature-high", label: "Air Condition", value: "Yes" },
      { icon: "fas fa-map-location-dot", label: "GPS Navigation", value: "Yes" },
      { icon: "fas fa-user-tie", label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    categories: ["cat4"],
    img:Taxi,
    title: "BMW M5 2019 Model",
    price: "$1.25/km",
    features: [
      { icon: "fas fa-car-side", label: "Taxi Doors", value: "4" },
      { icon: "fas fa-user", label: "Passengers", value: "4" },
      { icon: "fas fa-suitcase-rolling", label: "Luggage Carry", value: "2" },
      { icon: "fas fa-temperature-high", label: "Air Condition", value: "Yes" },
      { icon: "fas fa-map-location-dot", label: "GPS Navigation", value: "Yes" },
      { icon: "fas fa-user-tie", label: "Driver Choosing", value: "Yes" },
    ],
  },
];


export default function TaxiArea() {
  return (
    <div className="taxi-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Our Taxi</span>
              <h2 className="site-title">Let's Check Available Taxi</h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="filter-controls">
          <ul className="filter-btns">
            <li className="active" data-filter="*">
              All Taxi
            </li>
            <li data-filter=".cat1">Hybrid Taxi</li>
            <li data-filter=".cat2">Town Taxi</li>
            <li data-filter=".cat3">Suv Taxi</li>
            <li data-filter=".cat4">Limousine Taxi</li>
          </ul>
        </div>
        <div className="row filter-box">
          {taxis.map((taxi, index) => (
            <TaxiCard key={index} {...taxi} />
          ))}
        </div>
      </div>
    </div>
  );
}
