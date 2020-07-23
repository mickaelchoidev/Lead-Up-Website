import React from "react";
import { motion } from "framer-motion";

import "./ClientsPartners.css";

const elementVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const ClientsPartners = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      className="ClientsPartners"
    >
      <h1 className="text-center bg-light p-4 rounded">Clients and partners</h1>
    </motion.div>
  );
};

export default ClientsPartners;
