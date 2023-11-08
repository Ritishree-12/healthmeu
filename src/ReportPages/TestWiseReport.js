import React from "react";
import Navbar from "../components/Navbar";
import FooterPages from "../components/FooterPages";
import "./daystyle.css";

const TestWiseReport = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="table-container">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
         From
          </label>
          <div class="col-sm">
            <input type="date" class="form-control" id="inputEmail3" />
          </div>
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            To
          </label>
          <div class="col-sm">
            <input type="date" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Collection Center</th>
              <th>Date</th>
              <th>Sr/No</th>
              <th>Lab Id</th>
              <th>Patient Name</th>
              <th>Tests</th>
              <th>Fees</th>
              <th>Discount</th>
              <th>Payble</th>
              <th>Paid</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "23%" }}>
        <FooterPages />
      </div>
    </>
  );
};

export default TestWiseReport;
