"use client";
import Image from "next/image";
import "../../styles/animate.min.css";
import "../../styles/style.css";
import Link from "next/link";
const ServiceCard = ({ img, icon, title, text, delay }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="service-item animate__animated animate__fadeInUp"
        style={{ animationDelay: delay }}
      >
        <div className="service-img">
          <Image src={img} alt={title} width={400} height={250} />
        </div>
        <div className="service-icon">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>
        <div className="service-content">
          <h3 className="service-title">
            <Link className="link" href={"#"}>{title}</Link>
          </h3>
          <p className="service-text">{text}</p>
          <div className="service-arrow">
            <Link  className="theme-btn link" href={"#"}>
              Read More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
