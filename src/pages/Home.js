import React from "react";
import Nav from "../component/Navigation/Nav"
import Hero from '../component/Hero';
import Testimonials from '../component/Testimonials';
import About from '../component/About';
import Footer from '../component/Footer/Footer';
import '../App.css';

const Home = () => {
    return (
        <div className="home-page">
            <h2>Testing</h2>
            <Nav></Nav>
            <Hero></Hero>
            <Testimonials></Testimonials>
            <About></About>
            <Footer></Footer>
        </div>
    );
}
export default Home;