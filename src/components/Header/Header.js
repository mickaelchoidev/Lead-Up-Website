import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Header.css";

const elementVariants = {
  initial: { y: "-100%", opacity: 0 },
  in: { y: 0, opacity: 1 },
  out: { y: "100%", opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const Header = () => {
  return (
    <motion.header
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      className="Header"
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 pl-0 pr-4">
        <Link className="navbar-brand Header-logo" to="/">
          <img src={require("../../images/leadUpLogo.jpg")} alt="leadUp" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link px-4 px-lg-2 pb-4 py-lg-2" to="/">
                Why Lead Up ?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-4 px-lg-2 pb-4 py-lg-2"
                to="/who-are-we"
              >
                Who are we ?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-4 px-lg-2 pb-4 py-lg-2"
                to="/our-know-how"
              >
                Our know-how
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-4 px-lg-2 pb-4 py-lg-2" to="/tuc">
                TUC
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-4 px-lg-2 pb-4 py-lg-2"
                to="/clients-partners"
              >
                Clients and partners
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-4 px-lg-2 pb-4 py-lg-2"
                to="/contact"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
