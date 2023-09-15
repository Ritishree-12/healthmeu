import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
import "./style.css";
// import Lab from "../Pages/Lab";

const OpdLogIn = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // Simulate an asynchronous login request
    try {
      const response = await mockLogin(inputValue.email, inputValue.password);

      // Check if login was successful
      if (response.success) {
        setLoggedIn(true);
        setLoginError("");
      } else {
        setLoggedIn(false);
        setLoginError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setLoggedIn(false);
      setLoginError("An error occurred while logging in. Please try again.");
    }
    navigate('/opd');
  };
  const mockLogin = (email, password) => {
    // Simulate a server response (replace this with your actual authentication logic)
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000); // Simulating a 1-second delay
    });
    
  };

  return (
    <>
    {/* <Lab/> */}
      <MDBContainer fluid>
        <form onSubmit={submitHandler}>
          <MDBRow className="d-flex justify-content-center align-items-center body h-100 ">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                  <p className="text-dark-50 mb-3 text-center">
                    Please enter your login and password!
                  </p>
                  {loggedIn && (
                    <p className="text-success text-center mb-3">
                      Login successful!
                    </p>
                  )}
                  {loginError && (
                    <p className="text-danger text-center mb-3">{loginError}</p>
                  )}
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    name="email"
                    type="email"
                    size="lg"
                    value={inputValue.email}
                    onChange={inputHandler}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    name="password"
                    type="password"
                    size="lg"
                    value={inputValue.password}
                    onChange={inputHandler}
                  />

                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Remember password"
                  />

                  <button size="lg" type="submit" className="btn btn-primary">
                    Login
                  </button>

                  <hr className="my-4" />

                  <button
                    className="btn mb-2 w-100"
                    size="lg"
                    style={{ backgroundColor: "#dd4b39", color: "white" }}
                  >
                    <MDBIcon fab icon="google" className="mx-2" />
                    Sign in with google
                  </button>

                  <button
                    className="btn mb-4 w-100"
                    size="lg"
                    style={{ backgroundColor: "#3b5998", color: "white" }}
                  >
                    <MDBIcon fab icon="facebook-f" className="mx-2" />
                    Sign in with facebook
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
};

export default OpdLogIn;
