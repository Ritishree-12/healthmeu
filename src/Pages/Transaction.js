import React from "react";
import { MDBModalTitle } from "mdb-react-ui-kit";

const Transaction = () => {
  return (
    <>
      <div>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Collection Date
            </label>
            <input type="date" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Reporting Date
            </label>
            <input type="date" className="form-control" id="inputPassword4" />
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
            <input type="date" className="form-control" id="inputEmail4" />
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
            <input type="number" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label">
              Test Report
            </label>
            <select id="inputState" className="form-select">
              <option selected>Select...</option>
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
            <input type="number" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Discount Percentage
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Discount Amount
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Final Amount
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Due
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
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
      </div>
    </>
  );
};

export default Transaction;
