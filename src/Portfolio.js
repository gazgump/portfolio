import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from './components/about'
import ContactPage from './components/contact'
import HomePage from './components/home'
import ScrollToTop from "./components/scrolltop";

import './App.css';

const Portfolio = () => (

  <div className="h-full w-full py-16">
    <Router>
      <ScrollToTop />
      <nav className="bg-gray-600 border-b flex justify-center py-4 w-full h-16 fixed top-0 z-[9999999]">
        <ul className="flex justify-between items-center w-[60%] md:w-[40%] lg:w-[20%]">
          <li><Link to="/" className="text-white text-center font-bold">Home</Link></li>
          <li><Link to="/about" className="text-white text-center font-bold">About</Link></li>
          <li><Link to="/contact" className="text-white text-center font-bold">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  </div>
);

const Home = () => (
  <HomePage />
);

const About = ({ match }) => (
  <AboutPage />
);

const Contact = ({ match }) => (
  <ContactPage />
);

export default Portfolio