import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBContainer,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Lab = () => {
  const [patientModal, setPatientModal] = useState(false);
  const [dayBookModal, setDayBookModal] = useState(false);
  // Define separate state variables for other modals if needed.

  const togglePatientModal = () => setPatientModal(!patientModal);
  const toggleDayBookModal = () => setDayBookModal(!dayBookModal);
  // Define separate functions for other modals if needed.

  const linkStyle = {
    margin: "0 10px", // Add margin (space) around the links
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        light
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-lg-between "
            id="navbarNavAltMarkup"
            fixed="top"
          >
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Transaction
                </a>
                {/* ---------------------------------------------------------------------PATIENT ENTRY--------------------------------------------------------------------- */}
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" onClick={togglePatientModal}>
                      Patient Entry
                    </a>
                  </li>
                </ul>
              </li>
              <MDBModal
                show={patientModal}
                setShow={setPatientModal}
                tabIndex="-1"
              >
                <MDBModalDialog
                  style={{
                    maxWidth: "700px",
                    maxHeight: "800px",
                    overflow: "auto",
                  }}
                >
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Patient Entry</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={togglePatientModal}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <form className="row g-3">
                        <div className="col-md-6">
                          <label for="inputEmail4" className="form-label">
                            Collection Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputEmail4"
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="inputPassword4" className="form-label">
                            Reporting Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputPassword4"
                          />
                        </div>
                        <div className="col-12">
                          <label for="inputAddress" className="form-label">
                            Patient Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="inputEmail4" className="form-label">
                            Age
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputEmail4"
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="inputState" className="form-label">
                            Gender
                          </label>
                          <select id="inputState" className="form-select">
                            <option selected>Choose</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label for="inputCity" className="form-label">
                            Contact
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputCity"
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="inputState" className="form-label">
                            Test Report
                          </label>
                          <select id="inputState" className="form-select">
                            <option selected>Select...</option>
                            <option>TOXO IgG</option>
                            <option>TRUHEALTH CRUCIAL PACKAGE</option>
                            <option>HAEMOGRM(CBC)</option>
                            <option>HCG BETA SUBUNIT</option>
                            <option>RH TYPING</option>
                            <option>TSH-TRAB-TSI-TSH ANTIBODY</option>
                            <option>CBC Complete</option>
                            <option>TORCH 10</option>
                            <option>BLOOD GROUP</option>
                            <option>FT4,TSH</option>
                            <option>TRUHEALTH PRIME</option>
                            <option>APLA-PHOSPOLIPID ANTIBODY IG</option>
                            <option>E2 ESTRADIOL</option>
                            <option>TRUHEALTH ESSENTIAL PACKAGE</option>
                            <option>WIDAL</option>
                            <option>PSA TOTAL</option>
                            <option>BLOOD CULTURE(ANEROBIC)</option>
                            <option>DC</option>
                          </select>
                        </div>
                        <MDBModalTitle>Billing Address</MDBModalTitle>
                        <hr />
                        <div className="col-md-6">
                          <label for="inputEmail4" className="form-label">
                            Total Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputEmail4"
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="inputPassword4" className="form-label">
                            Discount Percentage
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                          />
                        </div>
                        <div className="col-md-4">
                          <label for="inputPassword4" className="form-label">
                            Discount Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                          />
                        </div>
                        <div className="col-md-4">
                          <label for="inputPassword4" className="form-label">
                            Final Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                          />
                        </div>
                        <div className="col-md-4">
                          <label for="inputPassword4" className="form-label">
                            Due
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                          />
                        </div>
                        <MDBModalTitle>Receipt</MDBModalTitle>
                        <hr />
                        <div className="col-md-8">
                          <label for="inputPassword4" className="form-label">
                            Receipt Number
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Receipt Number"
                          />
                        </div>
                        <div className="col-md-4">
                          <label for="inputPassword4" className="form-label">
                            Refered by
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Doctor Name"
                          />
                        </div>

                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={togglePatientModal}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
              {/*-------------------------------------------------------- DAY BOOK MODAL ---------------------------------------------------------------------------------------*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Report Entry
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/day_book' className="dropdown-item active">Day Book</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/doctor_wise'>
                      Doctorwise
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/under_rsby">
                      Under RSBY Centerwise
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Userwise Test Reports
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rate List
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Commision DoctorWise
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                </ul>
              </li>
              {/* <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" onClick={toggleDayBookModal}>
                   Day Book
                  </a>
                </li>
                <MDBModal show={toggleDayBookModal} setShow={setDayBookModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Day Book</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleDayBookModal}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <form className="row g-3">
                        <div className="col-md-6">
                          <label for="inputEmail4" className="form-label">
                          From
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputEmail4"
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="inputPassword4" className="form-label">
                          To
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputPassword4"
                          />
                        </div>             
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggleDayBookModal}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
                <li>
                  <a className="dropdown-item" onClick={''}>
                   Doctorwise
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={''}>
                   Under RSBY Centerwise
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={''}>
                    Userwise Test Reports
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={''}>
                    Rate List
                  </a>
                </li>
              </ul> */}

              <a className="nav-link" href="#" style={linkStyle}>
                Master File
              </a>
              <a className="nav-link" href="#" style={linkStyle}>
                {" "}
                Business Analysis
              </a>
              <a className="nav-link" href="#" style={linkStyle}>
                Settings
              </a>
              <a className="nav-link" href="#" style={linkStyle}>
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="intro"
        className="bg-image"
        style={{
          backgroundImage: "url(banner.jpg)",
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
            <div>
              <h1 className="mb-5">This is title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis molestiae laboriosam numquam expedita ullam saepe
                ipsam, deserunt provident corporis, sit non accusamus maxime,
                magni nulla quasi iste ipsa architecto? Autem!
              </p>
            </div>
          </MDBContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lab;
