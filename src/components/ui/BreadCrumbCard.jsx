import React from 'react'
import slider1 from "../../assets/slider/slider-1.jpg";

const BreadCrumbCard = () => {
  return (
      <div className="site-breadcrumb"  style={{ backgroundImage: `url(${slider1.src})` }}>
            <div className="container">
                <h2 className="breadcrumb-title">About Us</h2>
                <ul className="breadcrumb-menu">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">About Us</li>
                </ul>
            </div>
        </div>
  )
}

export default BreadCrumbCard
