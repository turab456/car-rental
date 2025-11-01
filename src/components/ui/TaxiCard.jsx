"use client";
import React from "react";
import "../../styles/animate.min.css";
import "../../styles/style.css";
import Image from "next/image";
const TaxiCard = ({ categories, img, title, price, features, onPress }) => {
  return (
    <div className={`col-md-6 col-lg-4 filter-item ${categories.join(" ")}`}>
      <div className="taxi-item">
        <div className="taxi-img">
          <Image src={img} alt={title} />
        </div>
        <div className="taxi-content">
          <div className="taxi-head">
            <h4>{title}</h4>
            <span>{price}</span>
          </div>
          <div className="taxi-feature">
            <ul>
              {features.map((f, i) => (
                <li key={i}>
                  <i className={f.icon}></i> {f.label}: <span>{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="theme-btn" onClick={onPress}>

            Book Taxi Now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxiCard;
