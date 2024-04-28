import React from "react";
import "./Hero.css";
//import { FiArrowRight } from "react-icons/fi";
import MapSvg from "../../assets/simulator/FrameHand.png";
import { overflowLogos } from "./Logo";
import { FaSignal } from "react-icons/fa6";
//import { BiSolidInfoCircle } from "react-icons/bi";
//import ChatAnimations from "../Animations/HeroAnimations/ChatAnimations/ChatAnimations";


const Hero: React.FC = () => {


  
  return (
    <div className="testing-responsiveness">
      <div className={`hero`}>
        <div className="hero-main">
          <div className="hero-left-content">
            <h1 className="hero-header">
              Welcome to
              <span className="header-span">
                {" "}
                OTI Signals, <br />
              </span>{" "}
              your all-in-one solution for trading signals across
              cryptocurrencies, stocks, forex, and commodities
            </h1>
            <p className="hero-smaller-text">
              Subscribe today to gain access to expert insights and maximize
              your trading opportunities.{" "}
            </p>
            <div style={{ height: 100 }}>
              {/* <button
                data-aos="zoom-in"
                //onClick={useNavigateToCreateAccount()}
                className="nav-button"
              >
                Subscribe to our Waiting List
                <FiArrowRight />
              </button> */}
            </div>
          </div>
          <div className="hero-right-content">
            <div
              className="map-image-container"
              style={{ alignItems: "center", width: "100%", zIndex: 3 }}
            >
              <img
                data-aos="zoom-in"
                src={MapSvg}
                alt="Hero Image"
                //className="map-image"
                style={{
                  marginTop: 120,
                  maxWidth: 330,
                  borderRadius: 24,
                  zIndex: 3,
                }}
              />
            </div>
            {/* <div className="hero-animation-container">
              {/* <HeroAnimation /> 
              <ChatAnimations />
            </div> */}
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="overflow-logos-container"
          style={{ marginTop: 240 }}
        ></div>

        <div data-aos="zoom-in" className="scrollable-logos-container">
          <div className="overflow-logos-container-div">
            {overflowLogos.map((logo, index) => (
              <div key={index} className="overflow-logo">
                {/* <img
                  data-aos="zoom-in"
                  src={logo.icon}
                  alt={logo.name}
                  className="overflow-logo-image"
                /> */}
                <FaSignal />
                <p className="overflow-logo-name">{logo.name} </p>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
