import React from 'react';

const Navbar = () => {
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
</>
  )
}
export default Navbar
