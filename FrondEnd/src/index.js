import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import PetitionForm from "./pages/petition/petition";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/petition" element={<PetitionForm />} />
            </Routes>
        </Router>
    );
}

export default App;

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})