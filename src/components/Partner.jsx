"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import partner1 from "../assets/partner/01.png";
import partner2 from "../assets/partner/02.png";
import partner3 from "../assets/partner/03.png";

// ✅ dynamically import to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const partners = [partner1, partner2, partner3, partner1, partner2, partner3];

const Partner = () => {
  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 6 },
    },
  };

  return (
    <div className="partner pt-80 pb-80">
      <div className="container">
        <OwlCarousel
          className="partner-slider owl-theme"
          {...options}
        >
          {partners.map((img, idx) => (
            <div className="partner-item" key={idx}>
              <div className="partner-img">
                <Image src={img} alt={`partner-${idx}`} />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Partner;
