import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer mb-0">
      <h1 className="text-center">BY SAGOL</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
