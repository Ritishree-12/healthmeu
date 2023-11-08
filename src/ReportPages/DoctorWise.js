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
            <div
          className="container card"
          style={{ marginTop: "90px", padding: "20px", width: "68%" }}
        >
          <form>
            <h4>Doctor Wise</h4>
            <div
              className="card"
              style={{
                display: "flex",
                width: "350px",
                height: "55px",
                justifyContent: "right",
              }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    {/* Adjusted column width for smaller screens */}
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio1">
                      Overal Ratewise
                    </label>
                  </div>
                  <div className="col-md-6 mb-3">
                    {/* Adjusted column width for smaller screens */}
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio1">
                      TestWise Rate
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Doctor Wise</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option selected>All...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Start Date
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  End Date
                </label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="button-container">
              <Link to='/doctors__wise_data'><button type="button" className="btn btn-primary">Submit </button></Link>
              <button type="button" className="btn btn-secondary">
                Back
              </button>
            </div>
          </form>
        </div>     
            </div>
          </div>
        </div>
      </div>

      <FooterPages />
    </>
  );
}

