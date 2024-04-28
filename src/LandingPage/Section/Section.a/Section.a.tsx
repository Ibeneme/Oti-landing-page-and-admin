// SectionA.tsx

import React from "react";
import "./SectionA.css"; // Don't forget to create your corresponding CSS file
import { FiArrowRight } from "react-icons/fi";
import emoji from "../../../assets/Landingpage/SectionA/memoji/anastasiafrost.png";
import emojione from "../../../assets/Landingpage/SectionA/memoji/i_da_nastya.png";
import emojitwo from "../../../assets/Landingpage/SectionA/memoji/nastyatoki.png";
import emojithree from "../../../assets/Landingpage/SectionA/memoji/ssemenov.png";
import emojifour from "../../../assets/Landingpage/SectionA/memoji/yourawesam.png";

const SectionA: React.FC = () => {
  return (
    <section
      data-aos="zoom-in"
      className="sectionA"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="content-container">
        <div className="" style={{ maxWidth: 600, color: "#fff" }}>
          <h1
            style={{ color: "#fff" }}
            data-aos="zoom-in"
            className="text-content-h1"
          >
            Our Subscription Service
          </h1>
          <p
            style={{ color: "#fff" }}
            data-aos="zoom-in"
            className="text-content-p"
          >
            Never miss a trading opportunity again. Subscribe to OTI Signals and
            receive real-time signals for all major markets, carefully curated
            by our team of experienced analysts. Whether you're a beginner or an
            experienced trader, our signals will help you stay ahead of the
            curve.
          </p>
          <div data-aos="zoom-in" className="sectionA-left-content">
            <button
              data-aos="zoom-in"
              //style={{ display: "none" }}
              className="cta-button"
              //onClick={useNavigateToCreateAccount()}
            >
              Join Our Waiting list
              <FiArrowRight />
            </button>
            <div data-aos="zoom-in" style={{ display: "flex", gap: 12 }}>
              <img
                data-aos="zoom-in"
                src={emoji}
                alt="Description"
                className="image-emoji"
              />
              <img
                data-aos="zoom-in"
                src={emojione}
                alt="Description"
                className="image-emoji"
              />
              <img
                data-aos="zoom-in"
                src={emojitwo}
                alt="Description"
                className="image-emoji"
              />
              <img
                data-aos="zoom-in"
                src={emojithree}
                alt="Description"
                className="image-emoji"
              />
              <img
                data-aos="zoom-in"
                src={emojifour}
                alt="Description"
                className="image-emoji"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
