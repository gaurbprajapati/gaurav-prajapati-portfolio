import React, { useState } from "react";
import {
    DiPython,
    DiJava,
    DiJavascript1,
    DiDatabase,
    DiCode,
    DiCss3,
} from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiDjango,
    SiMongodb,
    SiMysql,
    SiBootstrap,
    SiPandas,
    SiNumpy,
} from "react-icons/si";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
    const [active, setActive] = useState(1);

    return (
        <div className="container1" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="title"
            >
                <span>What I Expert?</span>
                <h1>Skills And Experience</h1>
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
                    Languages
                </button>
                <button
                    onClick={() => setActive(2)}
                    className={active === 2 ? "active" : ""}
                >
                    Framework and Library
                </button>
                <button
                    onClick={() => setActive(3)}
                    className={active === 3 ? "active" : ""}
                >
                    Database
                </button>
                <button
                    onClick={() => setActive(4)}
                    className={active === 4 ? "active" : ""}
                >
                    Tools
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="skills"
            >
                {active === 1 && (
                    <div className="skills-container">
                        <div className="skill-item">
                            <DiPython className="icon" />
                            <span>Python</span>
                        </div>
                        <div className="skill-item">
                            <DiJava className="icon" />
                            <span>Java</span>
                        </div>
                        <div className="skill-item">
                            <DiJavascript1 className="icon" />
                            <span>JavaScript</span>
                        </div>
                        <div className="skill-item">
                            <DiDatabase className="icon" />
                            <span>SQL</span>
                        </div>
                        <div className="skill-item">
                            <DiCode className="icon" />
                            <span>HTML</span>
                        </div>
                        <div className="skill-item">
                            <DiCss3 className="icon" />
                            <span>CSS</span>
                        </div>
                    </div>
                )}
                {active === 2 && (
                    <div className="skills-container">
                        <div className="skill-item">
                            <SiDjango className="icon" />
                            <span>Django</span>
                        </div>
                        <div className="skill-item">
                            <SiBootstrap className="icon" />
                            <span>Bootstrap</span>
                        </div>
                        <div className="skill-item">
                            <FaReact className="icon" />
                            <span>React.js</span>
                        </div>
                        <div className="skill-item">
                            <FaNodeJs className="icon" />
                            <span>Node.js</span>
                        </div>
                        <div className="skill-item">
                            <SiPandas className="icon" />
                            <span>Pandas</span>
                        </div>
                        <div className="skill-item">
                            <SiNumpy className="icon" />
                            <span>Numpy</span>
                        </div>
                    </div>
                )}
                {active === 3 && (
                    <div className="skills-container">
                        <div className="skill-item">
                            <SiMysql className="icon" />
                            <span>MySQL</span>
                        </div>
                        <div className="skill-item">
                            <SiMongodb className="icon" />
                            <span>MongoDB</span>
                        </div>
                    </div>
                )}
                {active === 4 && (
                    <div className="skills-container">
                        <div className="skill-item">
                            <DiCode className="icon" />
                            <span>VS Code</span>
                        </div>
                        <div className="skill-item">
                            <DiCode className="icon" />
                            <span>Git and Github</span>
                        </div>
                        <div className="skill-item">
                            <DiCode className="icon" />
                            <span>Postman</span>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Skills;
