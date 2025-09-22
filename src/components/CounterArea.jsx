"use client";
import "../styles/animate.min.css";
import "../styles/style.css";
const counters = [
  {
    img: "assets/img/icon/taxi-1.svg",
    value: 500,
    suffix: "+",
    title: "Available Taxi",
  },
  {
    img: "assets/img/icon/happy.svg",
    value: 900,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    img: "assets/img/icon/driver.svg",
    value: 700,
    suffix: "+",
    title: "Our Drivers",
  },
  {
    img: "assets/img/icon/trip.svg",
    value: 1800,
    suffix: "+",
    title: "Road Trip Done",
  },
];

export default function CounterArea() {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-wrapper">
          <div className="row">
            {counters.map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="counter-box">
                  <div className="icon">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count={item.suffix}
                      data-to={item.value}
                      data-speed="3000"
                    >
                      {item.value}
                    </span>
                    <h6 className="title">
                      {item.suffix} {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
