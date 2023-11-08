import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import Transaction from './Transaction';

const Lab = () => {
  const [patientModal, setPatientModal] = useState(false);
  const [dayBookModal, setDayBookModal] = useState(false);
  // Define separate state variables for other modals if needed.
  const [reports, setReports] = useState([]);


  const togglePatientModal = () => setPatientModal(!patientModal);
  const toggleDayBookModal = () => setDayBookModal(!dayBookModal);
  // Define separate functions for other modals if needed.

  useEffect(() => {
    // Make an API request to fetch test reports
    axios.get('YOUR_API_ENDPOINT_HERE')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching test reports:', error);
      });
  }, []);

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
               <Transaction/>
                    </MDBModalBody>
                    {/* <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={togglePatientModal}>
                        Close
                      </MDBBtn>
                    </MDBModalFooter> */}
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
                    <Link className="dropdown-item" to="/testwise">
                     TestWise
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
