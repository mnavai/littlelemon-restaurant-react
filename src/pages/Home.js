import React from "react";
import Nav from "../component/Nav"
import Hero from '../component/Hero';
import Testimonials from '../component/Testimonials';
import About from '../pages/About';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Nav></Nav>
            <Hero></Hero>
            <Testimonials></Testimonials>
            <About></About>
            <Footer></Footer>
        </div>
    );
}
export default Nav;