import React from "react";

const Footer = () => {
  return (
    <>
       <div className="flex-column justify-content-top">
       <div className="navbar navbar-expand-lg navbar-info bg-info py-3 shadow-lg ">
         <div className=" navbar-nav mx-auto mb-2 mb-lg-0" id="navbarSupportedContent">
           <div className="navbar-nav  " >
             <p className="fw-bold">
               <i className="fa fa-copyright me-5"> 2025 JAI SINGH</i>
             </p>         
             <div className="nav-item " id="navbarSupportedContent">
               <a href="https://instagram.com/rajput_jai005"> 
                 <i className="fa fa-instagram me-4"> Instagram</i>
               </a>
               <a href="https://www.facebook.com/jai.singh.rajput"> 
                 <i className="fa fa-facebook me-4"> Facebook</i>
               </a>
              <a href="https://x.com/PointofRajput"> 
                 <i className="fa fa-twitter me-4"> X</i>
              </a>
               <a href="https://github.com/jai-singh5">
                 <i className="fa fa-github me-4"> Github</i>
               </a>
               <a href="https://www.linkedin.com/in/jai-singh-24b24a298/">
                 <i className="fa fa-linkedin me-4"> Linkedin</i>
               </a>
               <a href="mailto:jaisingh09520@gmail.com">
                 <i className="fa fa-envelope me-4"> E-Mail</i>
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
     </>
  );
};

export default Footer;