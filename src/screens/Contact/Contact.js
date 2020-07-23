import React from "react";
import { motion } from "framer-motion";

import "./Contact.css";

const elementVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const elementTransition = {
  duration: 1.5,
  transition: "easeInOut",
};

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      className="Contact"
    >
      <div className="container-fluid bg-light py-0 mb-5">
        <div className="row align-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.242685282334!2d2.337502315674202!3d48.853582479287105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671ded944731b%3A0xcaea931cef2153ac!2s60%20Rue%20Saint-Andr%C3%A9%20des%20Arts%2C%2075006%20Paris!5e0!3m2!1sfr!2sfr!4v1595511155594!5m2!1sfr!2sfr"
            width="100%"
            height="400px"
            className="col-md-7 p-0"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            title="plan"
          />
          <div className="col-md pl-5 pr-3 pt-3">
            <p>
              For more information, please use the mail form below to contact
              us.
            </p>
            <p className="font-weight-bold">Lead Up</p>
            <p>
              60 rue St André des Arts <br />
              75006 Paris, France
            </p>
            <p className="font-weight-bold">contact + @ + lead-up.net</p>
            <p className="font-weight-bold">
              Phone: + 33 1 55 33 19 30
              <br />
              Fax: + 33 1 53 34 84 42
            </p>
            <p>
              <span className="font-weight-bold">Recruitment :</span>
              <br />
              If you would like to join our young, dynamic team, please send us
              your CV on our main email adress.
            </p>
          </div>
        </div>
      </div>
      <form className="container my-5 p-3 text-center">
        <div className="row">
          <div className="form-group col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="form-group col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Company name"
            />
          </div>
          <div className="form-group col-sm">
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Subject of your request"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your message here ..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary font-weight-bold ">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
