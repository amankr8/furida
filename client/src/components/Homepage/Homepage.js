import React from 'react'
import Navbar from '../modules/Navbar/Navbar'
import Heading from './Heading/Heading'
import Cover from './Cover/Cover'
import Posts from './Posts/Posts'
import About from './About/About'
import Map from './Map/Map'
import Contact from './Contact/Contact'
import Footer from '../modules/Footer/Footer'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Heading />
            <div className="container">
                <section className="mb-4">
                    <Cover />
                </section>
                <section className="mb-4" id="updates">
                    <Posts />
                </section>
                <section className="mb-4" id="about">
                    <About />
                </section>
                <section className="mb-4" id="location">
                    <Map />
                </section>
            </div>
            <section id="contact">
                <Contact />
            </section>
            <Footer footer_content="&copy; 2020 FURIDA. All Rights Reserved." />
        </div>
    )
}

export default Homepage
