const Navbar =()=>{
    return(

        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-light px-3">
    <a className="navbar-brand fw-" href="#">Karkee</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ms-3" >
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
      <div class="ms-5">
  <button class="btn btn-primary" type="button">Enquire</button>
</div>

    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar