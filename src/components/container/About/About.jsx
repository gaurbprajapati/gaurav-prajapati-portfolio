import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import gaurav from "../../../assets/gaurav about.jpg";
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={gaurav}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
 
          <ul>
            <li>I am 21 Year old Full Stack Developer and Final Year BTECH computer Science student at NIET India .</li>
            {/* <li>Full Stack Developer based in New Delhi , India.</li> */}
            <li>
              I am Specialize in both FrontEnd and BackEnd Development, allowing me
              to create comprehensive and cohesive software solutions.
            </li>
            <li>
            As a passionate programmer, I am skilled in Python, Java, JavaScript, and SQL, as well as various frameworks and libraries such as React.js , Nodejs,Express Js, Django ,Django Rest Framework, Bootstrap,Material ui, Pandas, Numpy and MERN Stack. 
            </li>
            <li>I have a strong academic background in technical courses such as Data Structures and Algorithms , Operating Systems, DBMS , Computer Networks and Object Oriented Programming.</li>
            <li>Constantly learning and adapting in the ever-evolving world of Technology .</li>
            {/* <li>Crafting digital experiences through elegant code and pixel-perfect designs.</li> */}
            <li>Passionate about turning ideas into beautifully functional websites.</li>
         <li>Transforming complex concepts into intuitive and user-friendly web applications.</li>
          </ul>
        {/* <div className="contact-container"> */}
      {/* <div className="contact-info">
        <h3>Age</h3>
        <p>25</p>
      </div>
      <div className="contact-info">
        <h3>Phone</h3>
        <p>+91 973-703-9241</p>
      </div>
      <div className="contact-info">
        <h3>Email</h3>
        <p>alfaizkhan2810@gmail.com</p>
      </div>
      <div className="contact-info">
        <h3>Place</h3>
        <p>Vadodara, Gujarat, India</p>
      </div>
    </div> */}
        </motion.div>

      </div>

      
    </div>
  );
};

export default About;
