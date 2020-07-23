import React from "react";

const Meetings = () => {
  return (
    <div className="card">
      <div className="card-header" id="3">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left font-weight-bold"
            type="button"
            data-toggle="collapse"
            data-target="#collapse3"
            aria-expanded="true"
            aria-controls="collapse3"
          >
            <h2>Meetings</h2>
            <h4>We know how to run a great meeting</h4>
          </button>
        </h2>
      </div>

      <div
        id="collapse3"
        className="collapse"
        aria-labelledby="3"
        data-parent="#accordionExample"
      >
        <div className="card-body px-md-5 py-md-4">
          <p className="text-justify">
            Conducting meetings is an important part of our client’s needs.
            Being able to count on your agency from A to Z is essential. Lead-Up
            is here to be a partner in that effort.
          </p>

          <p>
            <span className="px-3">-</span>Definition of objectives and
            elaboration of the program.
          </p>
          <p>
            <span className="px-3">-</span>Meeting location selection and onsite
            management.
          </p>
          <p>
            <span className="px-3">-</span>Chairman and speaker identification.
          </p>
          <p>
            <span className="px-3">-</span>Speaker training.
          </p>
          <p>
            <span className="px-3">-</span>Writing and producing graphic
            identity for meeting materials.
          </p>
          <p>
            <span className="px-3">-</span>Travel logistics.
          </p>
          <p>
            <span className="px-3">-</span>Digital solutions.
          </p>

          <p className="text-justify">
            Types of meetings (face to face or virtual) :
          </p>

          <p>
            <span className="px-3">-</span>Symposia.
          </p>
          <p>
            <span className="px-3">-</span>Advisory boards.
          </p>
          <p>
            <span className="px-3">-</span>Closed/Stand-alone meetings.
          </p>
          <p>
            <span className="px-3">-</span>Internal medical-marketing meetings.
          </p>
          <p>
            <span className="px-3">-</span>'Rising Star' programs.
          </p>
          <p>
            <span className="px-3">-</span>Physician roundtables/focus groups.
          </p>
          <p>
            <span className="px-3">-</span>Specialized workshops (ie. Metaplan
            trainings, World Café etc...).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
