import React, { useState } from "react";
import "./doctorwise.css";
import Footer from "../components/Footer";
import {
  MDBContainer,
  // MDBNavbar,
} from "mdb-react-ui-kit";

export default function DoctorWise() {
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
      <div
        id="intro"
        className="bg-image"
        style={{
          backgroundColor: "#f1f1f1",
          // backgroundImage:
          //   "url(banner.jpg)",
          height: "100vh",
          backgroundSize: "cover", // Make the background image cover the entire container
          backgroundAttachment: "fixed", // Fixed background image while scrolling
        }}
      >
        <div
          className="mask text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <MDBContainer className="d-flex align-items-center text-center h-100">
            {/* <div>
                <h1 className="mb-5">This is title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis molestiae laboriosam numquam expedita ullam saepe
                  ipsam, deserunt provident corporis, sit non accusamus maxime,
                  magni nulla quasi iste ipsa architecto? Autem!
                </p>
              </div> */}
          </MDBContainer>
        </div>
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
              <button type="button" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-secondary">
                Back
              </button>
            </div>
          </form>
        </div>
        <div
          className="container"
          style={{ marginTop: "60px", overflow: "auto" }}
        >
          <table className="table">
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
      </div>

      <div>
        <footer
          class="text-center text-dark"
        //   style={{ background: " #f1f1f1" }}
        >
          {/* <!-- Grid container --> */}
          <div class="container pt-4">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-twitter"></i>
              </a>

              {/* <!-- Google --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-google"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-instagram"></i>
              </a>

              {/* <!-- Linkedin --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              {/* <!-- Github --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            class="text-center text-dark p-3"
            style={{background:"rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    </>
  );
}
