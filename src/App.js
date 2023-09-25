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
import Rsby from "./ReportPages/Rsby";


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
        <Route exact path="/under_rsby" element={<Rsby/>}></Route>
      </Routes>
  
    </>
  );
}

export default App;
