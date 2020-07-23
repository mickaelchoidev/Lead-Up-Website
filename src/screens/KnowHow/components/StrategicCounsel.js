import React from "react";

const StrategicCounsel = () => {
  return (
    <div className="card">
      <div className="card-header" id="2">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left font-weight-bold"
            type="button"
            data-toggle="collapse"
            data-target="#collapse2"
            aria-expanded="true"
            aria-controls="collapse2"
          >
            <h2>Strategic counsel</h2>
            <h4>Advice that counts</h4>
          </button>
        </h2>
      </div>

      <div
        id="collapse2"
        className="collapse"
        aria-labelledby="2"
        data-parent="#accordionExample"
      >
        <div className="card-body px-md-5 py-md-4">
          <p className="text-justify">
            With many years of solid experience, the Lead-Up team is well placed
            to provide strategic counsel and recommendations to our clients for
            internal, external and crisis management concerns. A few of the
            types of projects that have been developed around the strategic
            needs of our clients are :
          </p>

          <p>
            <span className="px-3">-</span>Medical or medico-marketing
            assistance in defining strategic solutions for life-cycle management
            and communication initiatives.
          </p>
          <p>
            <span className="px-3">-</span>Analysis and prevention of technical,
            commercial and image risks before product launches.
          </p>
          <p>
            <span className="px-3">-</span>Assistance in decision making
            regarding development and licensing opportunities.
          </p>
          <p>
            <span className="px-3">-</span>Development of publication strategies
            and gathering medical intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategicCounsel;
