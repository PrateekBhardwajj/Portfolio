import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './components/Home';
import AboutContent from './components/About';
import ProjectsContent from './components/Projects';
import ContactContent from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';
import './components/Home.css';
import './components/About.css';
import './components/Projects.css';
import './components/Contact.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
        <section id="home">
          <HomeContent />
        </section>
        <section id="about">
          <AboutContent />
        </section>
        <section id="projects">
          <ProjectsContent />
        </section>
        <section id="contact">
          <ContactContent />
        </section>
      </div>
      <Footer /> {/* Include the Footer at the end */}
    </Router>
  );
}

export default App;
