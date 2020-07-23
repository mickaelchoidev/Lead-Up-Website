import React from "react";

const OpinionLeaders = () => {
  return (
    <div className="card">
      <div className="card-header" id="1">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left font-weight-bold"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h2>Opinion Leaders</h2>
            <h4>Partnerships that make a difference</h4>
          </button>
        </h2>
      </div>

      <div
        id="collapseOne"
        className="collapse"
        aria-labelledby="1"
        data-parent="#accordionExample"
      >
        <div className="card-body px-md-5 py-md-4">
          <p className="text-justify">
            Opinion leaders are the foundation of Lead-Up's strong position in
            the field. Through years of experience in the hospital and
            pharmaceutical industry, we have built long-standing relationships
            with key opinion leaders from around the world. These relationships
            have been put to use to assist our clients in :
          </p>

          <p>
            <span className="px-3">-</span>Participation in advisory boards,
            speakers boards, steering committees etc.
          </p>
          <p>
            <span className="px-3">-</span>Development of scientific
            presentations for conferences and symposiums.
          </p>
          <p>
            <span className="px-3">-</span>Publications, article writing,
            abstract books.
          </p>
          <p>
            <span className="px-3">-</span>Training programs for opinion
            leaders, internal marketing teams, sales reps.
          </p>
          <p>
            <span className="px-3">-</span>Creation of CME programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpinionLeaders;
