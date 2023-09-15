import React from 'react'

const Lab = () => {
  const linkStyle = {
    margin: '0 10px', // Add margin (space) around the links
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light" light style={{ backgroundColor: '#e3f2fd' }}>
    <div class="container-fluid">
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-md-flex justify-content-lg-between " id="navbarNavAltMarkup" >
        <div class="navbar-nav">
          <a class="nav-link active " aria-current="page" href="#"> Transaction</a>
          <a class="nav-link" href="#" style={linkStyle}> Report Entry</a>
          <a class="nav-link" href="#" style={linkStyle}>Master File</a>
          <a class="nav-link" href="#" style={linkStyle}> Business Analysis</a>
          <a class="nav-link" href="#" style={linkStyle}>Settings</a>
          <a class="nav-link" href="#" style={linkStyle}>About</a>     
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Lab
