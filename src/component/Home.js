import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://t4.ftcdn.net/jpg/08/38/53/37/360_F_838533781_VkfwRMNhtR0bJ2ap2kmC9SA5fwzBxVSi.jpg" className="card-img" alt="Background" height={"550px"} />
        <div className="card-img-overlay d-flex flex-column justify-content-top">
            <div className="container"> 
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
           CHECK OUT ALL THE TRENDS
          </p>
       </div> 
       </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;