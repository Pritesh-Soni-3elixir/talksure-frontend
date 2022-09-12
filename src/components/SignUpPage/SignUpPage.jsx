import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Config from "../Auth/config";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleName = (e) => {
    setUser((prevDetails) => ({ ...prevDetails, name: e.target.value }));
  };
  const handleEmail = (e) => {
    setUser((prevDetails) => ({ ...prevDetails, email: e.target.value }));
  };
  const handlePassword = (e) => {
    setUser((prevDetails) => ({ ...prevDetails, password: e.target.value }));
  };
  const handleCPassword = (e) => {
    setUser((prevDetails) => ({ ...prevDetails, confirmpassword: e.target.value }));
  };

  const clickRegistration = () => {
    // e.preventDefault();
    // const epattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const eresult = epattern.test(user.email);
    // console.log("Email>>>>>>>>>>>>>>>>>>>", eresult);

    // const ppattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // const presult = ppattern.test(user.password);
    // console.log("password>>>>>>>>>>>>>>>>>>>", presult);

    // const cppattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // const cpresult = ppattern.test(user.confirmpassword);
    // console.log("confirm password>>>>>>>>>>>>>>>>>>>", cpresult);

    if (user.password === user.confirmpassword) {
      //   axios.post(Config.APIURL+"api/v1/users",user).then((res) => {
      axios.post("api/v1/users", user).then(() => {
        // console.log("res",res);
      });
      // console.log("Success");
    } else {
      //   console.log("Error");
    }

    // console.log("User", user);
  };

  return (
    <div>
      <section className="position-relative h-100 pt-5 pb-4">
        <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
          <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: "526px" }}>
            <h1 className="text-center text-xl-start">Create Account</h1>
            <p className="text-center text-xl-start pb-3 mb-3">
              Already have an account? <Link to="/signin">Sign in here.</Link>
            </p>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-sm-6">
                  <div className="position-relative mb-4">
                    <label htmlFor="name" className="form-label fs-base">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg"
                      value={user.name}
                      onChange={handleName}
                      required
                    />
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter your name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="position-relative mb-4">
                    <label htmlFor="email" className="form-label fs-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={user.email}
                      onChange={handleEmail}
                      required
                    />
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter a valid email address!
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <label htmlFor="password" className="form-label fs-base">
                    Password
                  </label>
                  <div className="password-toggle">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      value={user.password}
                      onChange={handlePassword}
                      required
                    />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" />
                      <span className="password-toggle-indicator" />
                    </label>
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter a password!
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <label htmlFor="password-confirm" className="form-label fs-base">
                    Confirm password
                  </label>
                  <div className="password-toggle">
                    <input
                      type="password"
                      id="password-confirm"
                      className="form-control form-control-lg"
                      value={user.confirmpassword}
                      onChange={handleCPassword}
                      required
                    />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" />
                      <span className="password-toggle-indicator" />
                    </label>
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter a password!
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input type="checkbox" id="terms" className="form-check-input" />
                  <label htmlFor="terms" className="form-check-label fs-base">
                    I agree to <a href="#">Terms &amp; Conditions</a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary shadow-primary btn-lg w-100"
                onClick={clickRegistration}
              >
                Sign up
              </button>
            </form>
            <hr className="my-4" />
            <h6 className="text-center mb-4">Or sign up with your social network</h6>
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col mb-3">
                <a href="#" className="btn btn-icon btn-secondary btn-google btn-lg w-100">
                  <i className="bx bxl-google fs-xl me-2" />
                  Google
                </a>
              </div>
              <div className="col mb-3">
                <a href="#" className="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
                  <i className="bx bxl-facebook fs-xl me-2" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="w-100 align-self-end">
            <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
              &copy; All rights reserved. Made by
              <a
                className="nav-link d-inline-block p-0"
                href="https://createx.studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Createx Studio
              </a>
            </p>
          </div>
        </div>

        <div
          className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
          style={{ backgroundImage: "url(assets/img/account/signin-bg.jpg)" }}
        />
      </section>
    </div>
  );
}

export default SignUp;
