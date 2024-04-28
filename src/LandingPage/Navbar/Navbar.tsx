import React, { useEffect, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
import "./Navbar.css";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
//import useNavigateToCreateAccount from "../../Pages/Auth/Hook/useCreateAccount";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate()
  return (
    <div className="nav">
      <div className="scrolledNav">
        {/* // <div className={`navbar`}> */}
        <div className="navbar-div">
          <div className="nav-left-content" onClick={()=>navigate('/')}>
            <p className="nav-logo-text">OTI-Signals</p>
          </div>
          <div className="nav-right-content newhide">
            <button
              className={`${isScrolled ? "scrolledNavbtn" : "nav-button"}`}
              //  onClick={useNavigateToCreateAccount()}
            >
              Subscribe to our Waiting list
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
