import React from 'react'
import Navbar from '../Navbar/Navbar'
import Heading from './Heading/Heading'
import Posts from './Posts/Posts'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from '../Footer/Footer'

const Cover = () => {
    return (
        <div>
            <img src="https://picsum.photos/1280/720" className="img-fluid" alt="Cover" />
        </div>
    )
}

const Map = () => {
    return (
        <div className="border">
            <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7570.283295787509!2d86.22416387383286!3d22.825200134855145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb58ae6cf9ef175c4!2sFURIDA!5e0!3m2!1sen!2sin!4v1618419317130!5m2!1sen!2sin" height="450" style={{border: "0", width: "100%"}} allowFullScreen="" loading="lazy" />
        </div>
    )
}

function Homepage() {
    return (
        <div>
            <Navbar item1="Console" link1="/console" />
            <Heading />
            <div className="container">
                <div className="mb-4">
                    <Cover />
                </div>
                <div className="mb-4" id="updates">
                    <Posts />
                </div>
                <div className="mb-4" id="about">
                    <About />
                </div>
                <div className="mb-4" id="location">
                    <Map />
                </div>
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer footer_content="&copy; 2020 FURIDA. All Rights Reserved." />
        </div>
    )
}

export default Homepage
