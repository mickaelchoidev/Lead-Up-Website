import React from "react";
import { motion } from "framer-motion";

import Carousel from "./components/Carousel";

import "./Home.css";

const elementVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      className="Home"
    >
      <div className="container-fluid px-0" style={{ position: "relative" }}>
        <div className="jumbotron jumbotron-fluid mt-0 w-100 h-100 bg-transparent d-flex align-items-center Home-jumbotron ">
          <div className="container ml-sm-5">
            <h1 className="display-5">
              Leading the way in international medical communications and event
              organisation
            </h1>
          </div>
        </div>
        <Carousel />
      </div>
      <div className="container p-4 mt-5 mb-4">
        <p className="text-justify text-light">
          Lead-Up is an international medical communications agency with a
          highly experienced team, hand-picked from the pharmaceutical industry
          which means we know and understand the needs of our clients.{" "}
        </p>
        <br />
        <p className="text-justify text-light">
          With diverse internal expertise and a strong external network of other
          specialized medical professionals, Lead-Up is a dynamic, fast-growing
          agency able to provide services to both the medical community and the
          pharmaceutical industry in a variety of therapeutic areas including
          cardiology, thrombosis, diabetes, oncology, hemostasis, dermatology,
          rheumatology, and immunology.
        </p>
        <br />
        <p className="text-justify text-light">
          At Lead-Up our philosophy is essential to our success and is based on
          :
        </p>

        <p className="text-justify text-light">
          <span className="px-3">-</span>Personalized service
        </p>
        <p className="text-justify text-light">
          <span className="px-3">-</span>Close client relations
        </p>
        <p className="text-justify text-light">
          <span className="px-3">-</span>Reactivity as a small agency
        </p>
        <p className="text-justify text-light">
          <span className="px-3">-</span>Quick turn-around time
        </p>
        <p className="text-justify text-light">
          <span className="px-3">-</span>A hand-picked team for each project
        </p>
        <p className="text-justify text-light">
          <span className="px-3">-</span>Respect for pharmaceutical ethics
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
