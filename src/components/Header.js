import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar, 
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Footer from "./Footer";




export default function App() {
  const [showBasic, setShowBasic] = useState(true);

  return (
    <>
      <header>
      <MDBNavbar expand='lg' light bgColor='light' fixed="top">
      <MDBContainer fluid>
        <img src='healthmeulogo.png' width='250px' height="50px" alt='logo-img'/>
        <nav>
    
          <button  class="btn m-2" style={{background:'#41A60F'}}>
             <Link to="/lab_logIn" style={{textDecoration:'none',color:'#fff'}}>Lab Software</Link>
            </button>
            <button class="btn w-28 m-2" style={{background:'#41A60F'}}>
            <Link to='/pharmacy_login' style={{textDecoration:'none',color:'#fff',whiteSpace:'nowrap'}}> Pharmacy Software</Link> 
            </button>
            <button class="btn m-2" style={{background:'#41A60F'}}>
              <Link to='/opd_logIn' style={{textDecoration:'none',color:'#fff'}}>Opd Software</Link>
              </button>
        
        </nav>
      </MDBContainer>
    </MDBNavbar>

        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage:
              "url(banner.jpg)",
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
      </header>
       <Footer/>
    </>
  );
}