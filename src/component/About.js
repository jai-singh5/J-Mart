import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              
              <br />
              HII.. THERE...🙌🏼
              <br />
              This Site Is Developed By Jai Singh👦🏼
              <br />
              This Is A Demo Shopping Site🖤
              <br />
              Thank You For Visiting..🍀
              <h5>Have A Great Day😀</h5>
            </p>
            <br />
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
            <hr />
            <div className="navbar navbar-expand-lg navbar-light bg-transparent  ">
              <div className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                 <a href="https://instagram.com/rajput_jai005">
                  <i className="fa fa-instagram fa-lg me-5"></i>
                </a>
                {/* <a href="https://www.facebook.com/jai.singh.rajput"> */}
                  <i className="fa fa-facebook fa-lg me-5"></i>
                {/* </a> */}
                <a href="https://x.com/PointofRajput">
                  <i className="fa fa-twitter fa-lg me-5"></i>
                </a>
                <a href="https://github.com/jai-singh5">
                  <i className="fa fa-github fa-lg me-5"></i>
                </a>
                <a href="https://www.linkedin.com/in/jai-singh-24b24a298/">
                  <i className="fa fa-linkedin fa-lg me-5"></i>
                </a>
                <a href="mailto:jaisingh09520@gmail.com">
                  <i className="fa fa-envelope fa-lg me-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;