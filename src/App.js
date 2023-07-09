import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
// import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'

import ClubCard from './components/ClubCard/Clubcard.jsx'

// import random from './ramdom'

// import Random from './ramdom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <ClubCard />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
      {/* <Random /> */}
    </div>
  )
}

export default App
