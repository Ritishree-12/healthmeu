import React, { useState } from "react";
import "./daystyle.css";
import FooterPages from "../components/FooterPages";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DayBook() {
  return (
    <>
    <div>
     <Navbar/>
      </div>
      <div
        className="content"
        id="intro"
        style={{
          marginTop:'120px',
          // background: "#488b9c",
          height: "65vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 mx-auto">
              <div className="cardd" >
                <h4>Day Book</h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label">Start Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">End Date</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="button-container">
                  <Link to='/day_book_data'><button type="button" className="btn btn-primary"> Submit </button></Link>
                     
                    <button type="button" className="btn btn-secondary">
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterPages />
    </>
  );
}
