import React, { useState, useEffect } from 'react';
import "./App.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import About from './components/container/About/About';
import Contact from './components/container/Contact/Contact';
import Footer from './components/container/Footer/Footer';
import Home from './components/container/Home/Home';
import Skills from './components/container/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import ClubCard from './components/ClubCard/Clubcard.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={10000}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <ClubCard />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
