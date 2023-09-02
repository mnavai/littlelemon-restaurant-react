import React from "react";
import Nav from "../component/Navigation/Nav";
import Header from "../component/Header/Header";
import Highlights from '../component/Highlights/Highlights';
import Footer from '../component/Footer/Footer';
import '../App.css';

const Home = () => {
    return (
        <div className="home-page">
            <Nav></Nav>
            <Header></Header>
            <Highlights></Highlights>
            <Footer></Footer>
        </div>
    );
}
export default Home;