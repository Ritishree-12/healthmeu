import React, { useState } from "react";
import {
    MDBNavbar, 
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarLink,
//   MDBNavbarItem,
//   MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  const [showBasic, setShowBasic] = useState(true);

  return (
    <>
      <header>
        {/* <MDBAnimatedNavbar expand="lg" fixed="top"> */}
        <MDBNavbar expand='lg' light bgColor='light' fixed="top">
      <MDBContainer fluid  >
        <h1>Health Care Software</h1>
        <nav aria-label='breadcrumb'>
          <MDBBreadcrumb  >
            <MDBBreadcrumbItem>
             <Link to="/lab_logIn" style={{textDecoration:'none',color:"#000"}}>Lab Software</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
            <Link to='/pharmacy_login' style={{textDecoration:'none',color:"#000"}}> Pharmacy Software</Link> 
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem >
              <Link to='/opd_logIn' style={{textDecoration:'none',color:"#000"}}>Opd Software</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>

     
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
  
      </header>

      <MDBContainer className="my-5">
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam
          minima perspiciatis eos tenetur. Praesentium dolores at quos aperiam
          sed, sint provident consectetur incidunt, nostrum porro earum commodi,
          ex architecto.
        </p>
      </MDBContainer>
    </>
  );
}
