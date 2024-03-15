// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationTopBar from './components/NavigationTopBar';
import FooterSection from './components/Footer';
import Home from './components/Home';
import About from './components/About'; // Import About component
import Contacts from './components/Contacts'; // Import Contacts component
import * as Bs from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Bs.Container className='app-container'>
        <NavigationTopBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render Home component at root path */}
          <Route path="/about" element={<About />} /> {/* Route for About */}
          <Route path="/contact" element={<Contacts />} /> {/* Route for Contacts */}
        </Routes>
        <FooterSection/>
      </Bs.Container>
    </Router>
  );
}

export default App;
