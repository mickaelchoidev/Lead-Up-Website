import React from "react";
import { motion } from "framer-motion";

import OpinionLeaders from "./components/OpinionLeaders";
import StrategicCounsel from "./components/StrategicCounsel";
import Meetings from "./components/Meetings";
import MedicalWriting from "./components/MedicalWriting";
import TrainingCounsel from "./components/TrainingCounsel";

const elementVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const KnowHow = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      style={{ position: "absolute", width: "100vw" }}
    >
      <div className="container my-5">
        <div className="accordion" id="accordionExample">
          <OpinionLeaders />
          <StrategicCounsel />
          <Meetings />
          <MedicalWriting />
          <TrainingCounsel />
        </div>
      </div>
    </motion.div>
  );
};

export default KnowHow;
