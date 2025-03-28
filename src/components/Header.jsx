import React from 'react';
import { Link } from 'react-router-dom';
import bibek from '../assets/bibek.jpg'

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">

      <div className="d-flex align-items-center justify-content-end ">
 
  <div className="d-flex align-items-center me-auto">
    <Link to={'/'} className="d-flex align-items-center text-white text-decoration-none">
      <img className="img-responsive2 me-2" 
           src="https://w7.pngwing.com/pngs/175/316/png-transparent-alva-logo-los-k-morales-k-miscellaneous-angle-logo-thumbnail.png" 
           alt="Logo" width="40"/>
    <h2 className="mb-0">Karkee</h2>
    </Link>
  </div>

  <ul className="nav mx-auto">
    <li><Link to={'/'} className="nav-link px-2 text-secondary">Home</Link></li>
    <li><Link to={'/mypics'} className="nav-link px-2 text-white">My Products</Link></li>
    <li><Link to={'/cart'} className="nav-link px-2 text-white">My Cart</Link></li>
    <li><Link to={'/'} className="nav-link px-2 text-white">FAQs</Link></li>
    <li><Link to={'/about'} className="nav-link px-2 text-white">About</Link></li>
  </ul>

  <div className="d-flex align-items-center ms-auto">
    <form className="me-3" role="search">
      <input 
        type="search" 
        className="form-control bg-light text-dark" 
        placeholder="Search..." 
        aria-label="Search"
      />
    </form>

    <div className="dropdown text-end">
  <a href="#" 
     className="d-block link-body-emphasis text-decoration-none dropdown-toggle" 
     data-bs-toggle="dropdown" aria-expanded="false">
    <img src={bibek} 
         alt="Profile" 
         width="35" height="35" 
         className="rounded-circle "
         style={{ objectFit: "cover" }} />
  </a>
  
  <ul className="dropdown-menu dropdown-menu-end text-small">
    <li><a className="dropdown-item" href="#">New project...</a></li>
    <li><a className="dropdown-item" href="#">Settings</a></li>
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link to={'/login'} className="dropdown-item" href="#">Sign out</Link></li>
  </ul>
</div>
  </div>
</div>
</div>
    </header>
  );
};

export default Header 
