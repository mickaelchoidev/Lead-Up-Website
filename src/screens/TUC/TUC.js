import React from "react";
import { motion } from "framer-motion";

import "./TUC.css";

const elementVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const TUC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      style={{ position: "absolute" }}
    >
      <div className="container-fluid" id="TUC-image" />
    </motion.div>
  );
};

export default TUC;
