import React from "react";
import Nav from "../component/Navigation/Nav";
import Header from "../component/Header/Header";
import Hero from '../component/Hero/Hero';
import Testimonials from '../component/Testimonials';
import About from '../component/About';
import Footer from '../component/Footer/Footer';
import '../App.css';

const Home = () => {
    return (
        <div className="home-page">
            <Nav></Nav>
            <Header></Header>
            <Hero></Hero>
            <Testimonials></Testimonials>
            <About></About>
            <Footer></Footer>
        </div>
    );
}
export default Home;