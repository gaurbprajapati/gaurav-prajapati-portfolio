import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaDev, FaCodepen, FaEnvelope, FaTwitter } from 'react-icons/fa';

import gaurav from '../../assets/gaurav.jpg';
import './Home.scss';

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }
    }
  };

  return (
    <motion.div
      className="container"
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5
      }}
    >

     <motion.div whileHover={{ scale: 1.1 }} variants={moveVariants} animate="animation" className="profile">
        <img src={gaurav} alt="portfolio" />
        </motion.div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Gaurav Prajapati</span>{' '}
        </h3>
        <h3 className="greeting-text">
          <Typewriter
            options={{
              strings: ['Full Stack Developer.', 'Coder','Software Developer.', 'Data Structure', 'Algorithms', 'DevOps enthusiast '],
              autoStart: true,
              loop: true,
              deleteSpeed: 8,
              cursor: '',
              delay: 100
            }}
          />
        </h3>
      </div>

      <div className="actions">
        <motion.a href="#contact" whileHover={{ scale: 1.1 }} variants={moveVariants} animate="animation">
          connect with me
        </motion.a>

        <motion.a href="https://drive.google.com/file/d/1y0RLp-8WlBSexLbYfkSxspeXe7PmRMWM/view?usp=sharing" target='_black' whileHover={{ scale: 1.1 }} variants={moveVariants} animate="animation">
          SEE MY RESUME
        </motion.a>
      </div>

      <div className="social-icons">
        <a href="https://github.com/gaurbprajapati" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-prajapati-297513188/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://dev.to/gaurbprajapati" target="_blank" rel="noopener noreferrer">
          <FaDev className="icon" />
        </a>
        <a href="https://codesandbox.io/u/gaurbprajapati" target="_blank" rel="noopener noreferrer">
          <FaCodepen className="icon" />
        </a>
        <a href="mailto:gauravprajapati094@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://twitter.com/varu_____" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
