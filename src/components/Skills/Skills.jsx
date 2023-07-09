import React, { useState } from "react";
import "./Skills.scss";

import { experiences } from '../../Data';
import { motion } from "framer-motion";

import { FaPython, FaJava, FaJs, FaCode, FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { DiDjango, DiMongodb, DiVisualstudio } from "react-icons/di";


const Skills = () => {
  const [active, setActive] = useState(1);
  

  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills Education And Experience</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Experiences
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="portfolio"
      >
        {active === 1 &&
          (

          
            <div className="skills">
              <div className="skill">
                <FaPython className="icon" />
                <span>Python</span>
              </div>
              <div className="skill">
                <FaJava className="icon" />
                <span>Java</span>
              </div>
              <div className="skill">
                <FaJs className="icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <FaDatabase className="icon" />
                <span>SQL</span>
              </div>
              <div className="skill">
                <FaHtml5 className="icon" />
                <span>HTML</span>
              </div>
              <div className="skill">
                <FaCss3 className="icon" />
                <span>CSS</span>
              </div>
              <div className="skill">
                <DiDjango className="icon" />
                <span>Django</span>
              </div>
              <div className="skill">
                <FaCode className="icon" />
                <span>Django Rest Framework</span>
              </div>
              <div className="skill">
                <FaReact className="icon" />
                <span>React.js</span>
              </div>
              <div className="skill">
                <FaNodeJs className="icon" />
                <span>Node.js</span>
              </div>
              <div className="skill">
                <FaBootstrap className="icon" />
                <span>Bootstrap</span>
              </div>
              <div className="skill">
                <FaCode className="icon" />
                <span>Pandas</span>
              </div>
              <div className="skill">
                <FaCode className="icon" />
                <span>Numpy</span>
              </div>
              <div className="skill">
                <FaDatabase className="icon" />
                <span>SQL lite</span>
              </div>
              <div className="skill">
                <DiMongodb className="icon" />
                <span>MongoDB</span>
              </div>
              <div className="skill">
                <DiVisualstudio className="icon" />
                <span>VS Code</span>
              </div>
              <div className="skill">
                <FaGitAlt className="icon" />
                <span>Git and Github</span>
              </div>
              <div className="skill">
                <FaServer className="icon" />
                <span>Postman</span>
              </div>
            </div>
          )}
      </motion.div>



      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs"
      >
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                  <ul>
                    <li>{experience.discription}</li>
                    <li>SKill: {experience.Skills}</li>
                  </ul>
                </div>
              </div>
            );
          })}
      </motion.div>




      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ y: [-50, 0], opacity: 1 }}
  className="education-container"
>
  {active === 3 && (
    <div className="education-container">
      <div className="education-item">
        <h4>Noida Institute of Eng. And Tech. (NIET G. Noida)</h4>
        <p>B. Tech in Computer Science – 8.97 (till 3rd semester)</p>
        <p>Aug 2020 – Present</p>
      </div>

      <div className="education-item">
        <h4>Ramjas Sen. Sec. School (New Delhi)</h4>
        <p>Class 12th - Central Board of Secondary Education (CBSE)</p>
        <p>Percentage - 78.6</p>
        <p>Mar 2018 – Mar 2020</p>
      </div>

      <div className="education-item">
        <h4>Ramjas Sen. Sec. School (New Delhi)</h4>
        <p>Class 10th – Central Board of Secondary Education (CBSE)</p>
        <p>Percentage – 87.6</p>
        <p>Mar 2013 – Mar 2018</p>
      </div>
    </div>
  )}
</motion.div>

      {/* <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="finishes_container"
      >
        {finishes.map(finish => {
        return (
          <div className='finishes' key={finish.id}>
            <div className='number'>{finish.number}</div>
            <h4 className='item_name'>{finish.itemName }</h4>
          </div>
          )
        })}
      </motion.div> */}
    </div>
  );
};

export default Skills;
