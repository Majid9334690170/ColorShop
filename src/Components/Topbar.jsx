import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <>
    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-primary d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-dark py-2 pe-3 border-end border-white" to=""><i className="bi bi-telephone text-secondary me-2"></i>+91 9334690170</Link>
                        <Link className="text-dark py-2 px-3" to=""><i className="bi bi-envelope text-secondary me-2"></i>majid@gmail.com</Link>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-body py-2 px-3 border-end border-white" to="">
                            <i className="fab fa-facebook-f text-secondary"></i>
                        </Link>
                        <Link className="text-body py-2 px-3 border-end border-white" to="">
                            <i className="fab fa-twitter text-secondary"></i>
                        </Link>
                        <Link className="text-body py-2 px-3 border-end border-white" to="">
                            <i className="fab fa-linkedin-in text-secondary"></i>
                        </Link>
                        <Link className="text-body py-2 px-3 border-end border-white" to="">
                            <i className="fab fa-instagram text-secondary"></i>
                        </Link>
                        <Link className="text-body py-2 ps-3" to="">
                            <i className="fab fa-youtube text-secondary"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm px-5 py-3 py-lg-0">
        <Link to="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-paint-roller text-secondary me-3"></i>Painter</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4 border-end border-5 border-primary">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Service</Link>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="blog.html" className="dropdown-item">Blog Grid</Link>
                        <Link to="detail.html" className="dropdown-item">Blog Detail</Link>
                        <Link to="team.html" className="dropdown-item">The Team</Link>
                        <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="d-none d-lg-flex align-items-center ps-4">
                <i className="fa fa-2x fa-mobile-alt text-secondary me-3"></i>
                <div>
                    <h5 className="text-primary mb-1"><small>Call Now</small></h5>
                    <h6 className="text-light m-0">+91 9334690170</h6>
                </div>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Topbar