import React, { useEffect, useState } from "react";
import "./Clubcard.scss";

import { ClubNav, Clubdata } from "../../Data";
import { motion } from "framer-motion";
import Maincard from "../Maincard/Maincard";

const Clubcard = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [cdata, setCdata] = useState([]);
  const [active, setActive] = useState(0);
  const [onclickAnimation, setonclickAnimation] = useState({
    y: 0,
    opacity: 1,
  });

  useEffect(() => {
    // console.log("useeffect is trigger");
    setonclickAnimation([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setonclickAnimation([{ y: 0, opacity: 1 }]);

      if (tab.name === "all") {
        setCdata(Clubdata);
      } else {
        const filterdata = Clubdata.filter((cluballdata) => {
          return cluballdata.category.toLowerCase() === tab.name;
        });
        setCdata(filterdata);
      }
    }, 600);
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container1" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-40, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        <span>Find my Work !</span>
        <h1>My Projects </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [10, 0], opacity: 1 }}
        className="buttons"
      >
        {ClubNav.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}
            >
              {workNav}
            </button>
          );
        })}
      </motion.div>

      <motion.div
        animate={onclickAnimation}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <Maincard data={cdata}  />
      </motion.div>
    </div>
  );
};

export default Clubcard;
