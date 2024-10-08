import React from 'react'
import { Link } from 'react-router-dom'


function Service() {
  return (
    <>
    <div className="container-fluid bg-primary py-5 bg-hero" style={{marginBottom: "90px"}}>
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">Our Services</h1>
                    <div className="pt-2">
                        <Link to="/" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Home</Link>
                        <Link to="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Our Services</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h1 className="display-5">Professional Painting Services</h1>
                <hr className="w-25 mx-auto text-primary" style={{opacity: "1"}}/>
            </div>
            <div className="row gy-4 gx-3">
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-paint-brush"></i></div>
                        </div>
                        <h3 className="mt-5">Regular Painting</h3>
                        <Link className="btn shadow-none text-secondary" to="">View Detail<i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-paint-roller"></i></div>
                        </div>
                        <h3 className="mt-5">Wall Painting</h3>
                        <Link className="btn shadow-none text-secondary" to="">View Detail<i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-brush"></i></div>
                        </div>
                        <h3 className="mt-5">Floor Coating</h3>
                        <Link className="btn shadow-none text-secondary" to="">View Detail<i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-eraser"></i></div>
                        </div>
                        <h3 className="mt-5">Graffiti Removal</h3>
                        <Link className="btn shadow-none text-secondary" to="">View Detail<i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-spray-can"></i></div>
                        </div>
                        <h3 className="mt-5">Mildew Removal</h3>
                        <Link className="btn shadow-none text-secondary" to="">View Detail<i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-city"></i></div>
                        </div>
                        <h3 className="mt-5">Window Washing</h3>
                        <Link className="btn shadow-none text-secondary" to="">View Detail<i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-primary bg-testimonial py-5" style={{margin: "180px 0"}}>
        <div className="container py-5">
            <div className="row g-0 justify-content-end">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-4">Testimonials</h1>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item">
                            <p className="fs-4 fw-normal"><i className="fa fa-quote-left text-secondary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid p-1 bg-secondary" src="img/testimonial-1.jpg" alt=""/>
                                <div className="ps-3">
                                    <h3>Client Name</h3>
                                    <span className="text-uppercase">Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="fs-4 fw-normal"><i className="fa fa-quote-left text-secondary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid p-1 bg-secondary" src="img/testimonial-2.jpg" alt=""/>
                                <div className="ps-3">
                                    <h3>Client Name</h3>
                                    <span className="text-uppercase">Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Service