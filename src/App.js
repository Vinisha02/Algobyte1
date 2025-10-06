import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TeamDetail from "./components/TeamDetail";
import CodeRush from "./components/CodeRush";
import { Toaster } from "react-hot-toast";

import Header, { HeaderPhone } from "./components/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu state

  return (
    <Router>
      <>
        <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <HeaderPhone setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <Work />
              <Timeline />
              <Teams />
              <Contact />
              <Footer />
              <Toaster />
              <CodeRush/>
            </>
          } />
          <Route path="/team-details" element={<TeamDetail />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
