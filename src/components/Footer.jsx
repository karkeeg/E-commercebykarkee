import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 my-4 border-top bg-light">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            
            <img src="https://w7.pngwing.com/pngs/175/316/png-transparent-alva-logo-los-k-morales-k-miscellaneous-angle-logo-thumbnail.png" 
                 alt="Company Logo" width="40" height="40"/>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary fs-5">&copy;Karkee 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end  d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bi bi-twitter fs-4" i></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bi bi-instagram fs-4" i></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bi bi-facebook fs-4" ></i>
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
