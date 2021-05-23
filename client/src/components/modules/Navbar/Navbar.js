import React from 'react'
import logo from '../../../images/furida.png'

function Navbar(props) {
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
                                <a href={props.link1} className="nav-link">{props.item1}</a>
                            </li>
                            <li className="nav-item">
                                <a href={props.link2} className="nav-link">{props.item2}</a>
                            </li>
                            <li className="nav-item">
                                <a href={props.link3} className="nav-link">{props.item3}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
