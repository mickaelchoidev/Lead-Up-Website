import React from "react";
import { motion } from "framer-motion";

import Card from "./components/Card";
import Staff from "./Staff";

import "./WhoAreWe.css";

const elementVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};
const contentVariants = {
  initial: { x: "-100%", opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: "100%", opacity: 0 },
};
const contentTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const WhoAreWe = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      className="Who-are-we"
    >
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={contentVariants}
        transition={contentTransition}
        className="Who-are-we-presentation"
      >
        <div className="container p-4 mt-5">
          <p className="text-justify">
            Lead-Up was founded in 2003 by Dr. Yann Huet, with the desire to
            create a medical communications agency with an ‘inside’ knowledge of
            the pharmaceutical industry and close ties to opinion leaders and
            the medical community. In 2006, Gildas Auffret left the corporate
            side to join this dynamic team. He is now the owner and president of
            the agency. The long experience of Lead-Up employees in the
            pharmaceutical industry is a guarantee of a perfect understanding of
            our client needs and the ability to provide appropriate solutions.
            Add a network of the best international experts built over years and
            the professional diversity of the team, and you have the recipe that
            has made Lead-Up’s success over the last 16 years.
          </p>
        </div>
      </motion.div>

      <div className="container-fluid mt-5 p-0 border-top">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={contentVariants}
          transition={contentTransition}
          className="Who-are-we-presentation"
        >
          <h3 className="font-weight-bold p-4 mt-3 mb-0">
            A hand-picked team for each project
          </h3>
        </motion.div>
        <div className="container mx-auto p-4">
          {Staff.map((person, index) => (
            <Card dataPerson={person} key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhoAreWe;
