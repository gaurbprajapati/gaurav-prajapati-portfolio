import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import gaurav from "../../assets/gaurav about.jpg";
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
            <li>
              I am Specialize in both FrontEnd and BackEnd Development, allowing me
              to create comprehensive and cohesive software solutions.
            </li>
            <li>
            As a passionate programmer, I am skilled in Python, Java, JavaScript, and SQL, as well as various frameworks and libraries such as React.js , Nodejs,Express Js, Django ,Django Rest Framework, Bootstrap,Material ui, Pandas, Numpy and MERN Stack. 
            </li>
            <li>I have a strong academic background in technical courses such as Data Structures and Algorithms , Operating Systems, DBMS , Computer Networks and Object Oriented Programming.</li>
            <li>Constantly learning and adapting in the ever-evolving world of Technology .</li>
            <li>Passionate about turning ideas into beautifully functional websites.</li>
         <li>Transforming complex concepts into intuitive and user-friendly web applications.</li>
          </ul>
      
        </motion.div>

      </div>

      
    </div>
  );
};

export default About;
