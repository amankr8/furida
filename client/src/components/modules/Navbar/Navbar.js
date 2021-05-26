import React from 'react'
import logo from '../../../images/furida.png'

function Navbar() {
    window.$(document).click(function() {
        window.$('.navbar-collapse').collapse('hide');
    })

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
                <div className="container">
                    <a href="/#" className="navbar-brand"><img src={logo} height="35" alt="furida logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#updates" className="nav-link">Updates</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
