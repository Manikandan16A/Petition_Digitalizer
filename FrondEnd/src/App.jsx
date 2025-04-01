import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import PetitionForm from "./pages/petition/petition";
import TrackPetition from "./pages/track/trackPetition";
import NotFound from "./pages/notFound/notFound";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* Default route redirects to Home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/petition" element={<PetitionForm />} />
          <Route path="/track" element={<TrackPetition />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
