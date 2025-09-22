import Image from "next/image";
import React from "react";
import img from "../assets/slider/slider-3.jpg";
import taxibookingicon from "../assets/icon/taxi-booking.svg"

const chooseItems = [
  {
    count: "01",
    icon: taxibookingicon,
    title: "Best Quality Taxi",
    desc:
      "There are many variations of passages available but the majority have suffered alteration in form injected humour words which don't look even slightly believable. If you are going passage you need there anything embar.",
    className: "",
  },
  {
    count: "02",
    icon: taxibookingicon,
    title: "Expert Drivers",
    desc:
      "There are many variations of passages available but the majority have suffered alteration in form injected humour words which even slightly believable. If you are going passage you need there anything.",
    className: "ms-lg-5",
  },
  {
    count: "03",
    icon: taxibookingicon,
    title: "Many Locations",
    desc:
      "There are many variations of passages available but the majority have suffered alteration in form injected humour words which don't look even slightly believable. If you are going passage you need there anything embar.",
    className: "mb-lg-0",
  },
];

const VideoChoose = () => (
  <>
    {/* video area */}
    <div className="video-area vda-2">
        <div className="container">
            <div
                className="video-content"
                style={{
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="video-wrapper">
                            <a
                                className="play-btn popup-youtube"
                                href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                            >
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* video area end */}

    {/* choose area */}
    <div className="choose-area cha-2 py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <div
                className="site-heading wow fadeInDown mb-4"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline text-white justify-content-start">
                  <i className="flaticon-drive"></i> Why Choose Us
                </span>
                <h2 className="site-title text-white mb-10">
                  We are dedicated <span>to provide</span> quality service
                </h2>
                <p className="text-white">
                  There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="choose-img wow fadeInUp" data-wow-delay=".25s">
                <Image src={img} alt="video"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-content-wrapper wow fadeInRight" data-wow-delay=".25s">
              {chooseItems.map((item, idx) => (
                <div
                  className={`choose-item ${item.className}`.trim()}
                  key={item.count}
                >
                  <span className="choose-count">{item.count}</span>
                  <div className="choose-item-icon">
                    <Image src={item.icon} alt="" />
                  </div>
                  <div className="choose-item-info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* choose area end */}
  </>
);

export default VideoChoose;
