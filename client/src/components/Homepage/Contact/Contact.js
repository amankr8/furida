import React from 'react'

function Contact() {
    return (
        <div className="bg-light pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>PHONE</h5>
                        <a href="tel:+91-72800-69456" className="btn btn-danger btn-lg rounded-pill my-3"><small><i className="fas fa-phone-alt"></i> CALL US</small></a>
                        <p>+91 72800 69456</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>EMAIL</h5>
                        <a href="mailto:furida.jsr@gmail.com" className="btn btn-danger btn-lg rounded-pill my-3"><small><i className="fas fa-envelope"></i> EMAIL US</small></a>
                        <p>furida.jsr@gmail.com</p>
                    </div>
                    <div className="col-md mb-4">
                        <h5>ADDRESS</h5>
                        <a href="https://www.google.com/maps/dir//FURIDA/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f5e3206547b37b:0xb58ae6cf9ef175c4!2m2!1d86.2248994!2d22.8259992" className="btn btn-danger btn-lg rounded-pill my-3" target="_blank" rel="noopener noreferrer">
                            <small><i className="fas fa-location-arrow"></i> GET DIRECTIONS</small>
                        </a>
                        <p>C-4, Prime Rose Apartment, Rajiv Path, Dimna Road, Mango, Jamshedpur, Jharkhand - 831001, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
