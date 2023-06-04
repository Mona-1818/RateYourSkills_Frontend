import React from "react";
import "./Footer.css";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_social">
        <FiLinkedin />
        <FiInstagram />
        <FiMail />
      </div>
      <div className="footer_copyright">
        &copy; 2023 RateYourSkills. All Right Reserved.
      </div>
    </div>
  );
}
