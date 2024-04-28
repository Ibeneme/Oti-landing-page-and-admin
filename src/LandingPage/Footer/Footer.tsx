import React from "react";
// import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <span
        style={{
          color: "#fff",
          fontSize: 12,
          display: "flex",
          gap: 24,
          cursor: "pointer",
        }}
      >
        <p onClick={() => navigate("/privacy")}>Privacy Policy</p>{" "}
        <p onClick={() => navigate("/terms")}>Terms and Conditions </p>
      </span>
      <div className="copyright" style={{ color: "#fff" }}>
        Clutch Innovations&copy;2024
      </div>
    </footer>
  );
};

export default Footer;
