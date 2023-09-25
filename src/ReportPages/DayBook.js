import React, { useState } from "react";
import ReportSideNavbar from "../components/ReportSideNavbar";

export default function DayBook() {
  return (
    <>
      <nav
        className="navbar bg-body-tertiary"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div className="container-fluid">
          <img src="./logo.png" width="230px" height="50px" alt="logo" />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div style={{ marginTop: "60px" }}>
        {/* Add some top margin to your content to prevent it from being hidden behind the fixed navbar */}
        <ReportSideNavbar />
      
      </div>
      <div className="content">
        <div className="cardd">
        <h4>Day Book</h4>

          <div className="card-body">
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
              <button type="button" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-secondary">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container"  style={{ marginTop: "60px",overflow:'auto' }}>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  );
}
