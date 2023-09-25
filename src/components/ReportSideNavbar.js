import React from "react";
import "./reportstyle.css";
import { Link } from "react-router-dom";

const ReportSideNavbar = () => {
  return (
    <div className="report-container">
      <div className="sidebar">
        <Link className="active" to="#home">
          Day Report
        </Link>
        <Link to="#news">Monthly Report</Link>
        <Link to="#contact">Annual Report</Link>
        <Link to="#about">About</Link>
      </div>

     
    </div>
  );
};

export default ReportSideNavbar;
