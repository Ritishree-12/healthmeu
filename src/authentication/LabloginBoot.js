import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
     
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Transaction</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              {/* <MDBNavbarItem>
             Transaction
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                Report Entry
              </MDBNavbarItem>
              <MDBNavbarItem>
                Master File
              </MDBNavbarItem>
              <MDBNavbarItem>
                Business Analysis
              </MDBNavbarItem>
              <MDBNavbarItem>
               Settings
              </MDBNavbarItem>
              <MDBNavbarItem>
                About
              </MDBNavbarItem>
              <MDBNavbarItem>
                Buy Now
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}