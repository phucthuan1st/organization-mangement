import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./Login.css";

library.add(faFacebookF, faTwitter, faLinkedinIn, faGoogle);

const Login = ({ onAuthentication }) => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "user",
      password: "test",
    },
  ];

  const errors = {
    not_exist_uname:
      "Username does not exist. Please contact the administrator.",
    wrong_password: "Incorrect password.",
    blank_field: "Please fill in the required fields.",
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Check if the field is blank
    if (!value) {
      setErrorMessages({ name: `${name}_blank`, message: errors.blank_field });
    } else {
      // Clear the error message if the field is not blank
      setErrorMessages({});
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Check if any field is blank on button click
    if (!uname.value || !pass.value) {
      setErrorMessages({ name: "blank", message: errors.blank_field });
      return;
    }

    // TODO: implement authentication process here
    // Below is for testing only
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({
          name: "wrong_pass",
          message: errors.wrong_password,
        });
      } else {
        onAuthentication("", userData.username);
      }
    } else {
      setErrorMessages({
        name: "not_exist_uname",
        message: errors.not_exist_uname,
      });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const RenderTab = (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="http://www.chemistry.hcmus.edu.vn/images/logo%20KHTN_REMAKE%201.png"
              className="img-fluid"
              alt="Khoa hoc Tu nhien"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="login-form">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>

                <input
                  type="email"
                  name="uname"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onBlur={handleBlur}
                  required
                />
                {renderErrorMessage("uname_blank")}
                {renderErrorMessage("not_exist_uname")}
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="pass"
                  onBlur={handleBlur}
                  required
                />
                {renderErrorMessage("pass_blank")}
                {renderErrorMessage("wrong_pass")}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleClick}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>
        {/* Copyright */}

        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#!" className="text-white me-4">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#!" className="text-white me-4">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#!" className="text-white">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        {/* Right */}
      </div>
    </section>
  );

  return <div className="loginForm">{RenderTab}</div>;
};

export default Login;
