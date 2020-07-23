import React from "react";

const TrainingCousel = () => {
  return (
    <div className="card">
      <div className="card-header" id="5">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left font-weight-bold"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            <h2>Training counsel</h2>
            <h4>Tailor-made training programs</h4>
          </button>
        </h2>
      </div>

      <div
        id="collapseFive"
        className="collapse"
        aria-labelledby="5"
        data-parent="#accordionExample"
      >
        <div className="card-body px-md-5 py-md-4">
          <p className="text-justify">
            When a product is launched on the market or there is a new
            therapeutic development in a specific field, it is important to have
            trained teams to communicate with physicians and provide essential
            education. Lead-Up has been commissioned to develop both internal
            and external educational initiatives and be a partner in the
            training of medical reps, marketing teams and young physicians.
          </p>

          <p>
            <span className="px-3">-</span>General elaboration of training
            documents.
          </p>
          <p>
            <span className="px-3">-</span>E-learning modules.
          </p>
          <p>
            <span className="px-3">-</span>Rising star programs for young
            physicians.
          </p>
          <p>
            <span className="px-3">-</span>Brochures and slide kits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCousel;
