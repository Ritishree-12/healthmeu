import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar, 
  MDBBreadcrumbItem,
  MDBBreadcrumb  ,
  MDBBtn,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";




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
        <MDBFooter bgColor='dark' className='text-center text-lg-start  text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textDecoration:'none'}}>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
}