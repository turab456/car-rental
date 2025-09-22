import Image from "next/image";
import React from "react";
import img from "../assets/faq/faq.jpg"
const faqs = [
  {
    id: "One",
    question: "How Long Does A Booking Take ?",
    answer:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra.",
    expanded: true,
  },
  {
    id: "Two",
    question: "How Can I Become A Member ?",
    answer:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra.",
    expanded: false,
  },
  {
    id: "Three",
    question: "What Payment Gateway You Support ?",
    answer:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra.",
    expanded: false,
  },
  {
    id: "Four",
    question: "How Can I Cancel My Request ?",
    answer:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra.",
    expanded: false,
  },
];

const Faq = () => (
  <div className="faq-area py-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="faq-right">
            <div className="site-heading mb-3">
              <span className="site-title-tagline justify-content-start">Faq's</span>
              <h2 className="site-title my-3">
                General <span>frequently</span> asked questions
              </h2>
            </div>
            <p className="about-text">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>
            <div className="faq-img mt-3">
              <Image src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion" id="accordionExample">
            {faqs.map((faq, idx) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`heading${faq.id}`}>
                  <button
                    className={`accordion-button${faq.expanded ? "" : " collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded={faq.expanded ? "true" : "false"}
                    aria-controls={`collapse${faq.id}`}
                  >
                    <span>
                      <i className="fas fa-question"></i>
                    </span>{" "}
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className={`accordion-collapse collapse${faq.expanded ? " show" : ""}`}
                  aria-labelledby={`heading${faq.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Faq;
