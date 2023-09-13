import React from 'react';
// import './style.css';

const LabLogIn = (props) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-sm-6 col-md-4">
          <div className="card">
            <div className="card-body">
              <h1 className="h3 mb-3 font-weight-normal">Log In Here</h1>
              <form className="form-signin">
                <label htmlFor="inputEmail" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control mb-2"
                  placeholder="Email address"
                  required
                  autoFocus
                />
                <label htmlFor="inputPassword" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control mb-3"
                  placeholder="Password"
                  required
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabLogIn;
