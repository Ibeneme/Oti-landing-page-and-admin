import React from "react";
import "./Hero.css";
import { FiArrowRight } from "react-icons/fi";
import MapSvg from "../../assets/simulator/FrameHandNew.png";
//import { BiSolidInfoCircle } from "react-icons/bi";
//import ChatAnimations from "../Animations/HeroAnimations/ChatAnimations/ChatAnimations";

const NewHero: React.FC = () => {
  return (
    <div className="testing-responsiveness">
      <div className={`hero`}>
        <div className="hero-main">
          <div className="hero-left-content">
            <h1 className="hero-header">Become a Provider</h1>
            <p className="hero-smaller-text">
              Are you a seasoned trader with valuable insights to share? Join
              OTI Signals as a provider and offer your own trading signals to
              our community. Monetize your expertise and build a loyal following
              while helping others succeed in the markets
            </p>
            <div style={{ height: 100 }}>
              <button
                data-aos="zoom-in"
                //onClick={useNavigateToCreateAccount()}
                className="nav-button"
              >
                Subscribe to our Waiting List
                <FiArrowRight />
              </button>
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
                  marginTop: 36,
                  width: 320,
                  borderRadius: 24,
                  zIndex: 3,
                  // border: `8px solid #ffaa00`,
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
      </div>{" "}
    </div>
  );
};

export default NewHero;
