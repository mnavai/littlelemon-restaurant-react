import React from "react";
import Nav from "../component/Navigation/Nav"
import Hero from '../component/Hero';
import Testimonials from '../component/Testimonials';
import About from '../component/About';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <div className="nav-section">
                <Nav></Nav>
            </div>
            <div className="hero-section">
                <Hero></Hero>
            </div>
            <div className="testimonial-section">
                <Testimonials></Testimonials>
            </div>
            <div className="about-section">
                <About></About>
            </div>
            <div className="footer-section">
                <Footer></Footer>
            </div>
        </div>
    );
}
export default Home;