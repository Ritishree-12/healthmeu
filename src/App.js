import "./App.css";
import LabLogIn from "./authentication/LabLogIn";
import PharmacyLogin from "./authentication/PharmacyLogin";
import OpdLogIn from "./authentication/OpdLogIn";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Lab from "./Pages/Lab";
import Pharmacy from "./Pages/Pharmacy";
import Opd from "./Pages/Opd";
import DayBook from "./ReportPages/DayBook";
import DoctorWise from "./ReportPages/DoctorWise";
import TestWiseReport from "./ReportPages/TestWiseReport";
import DaybookTable from "./ReportPages/DaybookTable";
import DoctorwiseTableData from "./ReportPages/DoctorwiseTableData";
import TestWise from "./ReportPages/Testwise";


function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Header/>}></Route>
      <Route exact path="/navbar" element={<Navbar/>}></Route>
        <Route exact path="/lab_logIn" element={<LabLogIn />}></Route>
        <Route exact path="/Pharmacy_login" element={<PharmacyLogin />}></Route>
        <Route exact path="/opd_logIn" element={<OpdLogIn />}></Route>
        <Route exact path="/lab" element={<Lab/>}></Route>
        <Route exact path="/pharmacy" element={<Pharmacy/>}></Route>
        <Route exact path="/opd" element={<Opd/>}></Route>
        <Route exact path="/day_book" element={<DayBook/>}></Route>
        <Route exact path="/doctor_wise" element={<DoctorWise/>}></Route>
        <Route exact path="/day_book_data" element={<DaybookTable/>}></Route>
        <Route exact path="/doctors__wise_data" element={<DoctorwiseTableData/>}></Route>
        <Route exact path="/testwise" element={<TestWise/>}></Route>
        <Route exact path="/testwise_report" element={<TestWiseReport/>}></Route>
      </Routes>
  
    </>
  );
}

export default App;
