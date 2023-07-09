import React from "react";
import { motion } from "framer-motion";
import "./Maincard.scss";
// import { Link } from "react-router-dom";
import {FiGithub, FiEye} from "react-icons/fi"

function Maincard(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [40, 0], opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="body_main">
        {props.data?.map((dataval, index) => (
          <>
            {/* <Link className="links" to={dataval.link}> */}
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="body_inner"
                key={dataval.id}
              >
                <img src={dataval.img} alt={dataval.name} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {dataval.name}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {dataval.discription.slice(0,147)}
                </p>



                <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >


                <motion.a href={dataval.github}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 target="_black"
                >
                  <FiGithub />
                </motion.a>
                  

                <motion.a href={dataval.live}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiEye />
                </motion.a>

                </motion.div>


              </motion.div>



          </>
        ))}
      </div>
    </motion.div>
  );
}

export default Maincard;
