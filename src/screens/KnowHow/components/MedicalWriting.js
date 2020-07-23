import React from "react";

const MedicalWriting = () => {
  return (
    <div className="card">
      <div className="card-header" id="4">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left font-weight-bold"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            <h2>Medical writing</h2>
            <h4>Make every word count</h4>
          </button>
        </h2>
      </div>

      <div
        id="collapseFour"
        className="collapse"
        aria-labelledby="4"
        data-parent="#accordionExample"
      >
        <div className="card-body px-md-5 py-md-4">
          <p className="text-justify">
            Lead-Up can provide its clients with medical writing assistance with
            experienced medical writers in a variety of therapeutic areas such
            as cardiology, thrombosis, diabetes, oncology, hemostasis,
            dermatology, rheumatology, and immunology. Some of the tools we have
            developed include :
          </p>

          <p>
            <span className="px-3">-</span>Scientific articles.
          </p>
          <p>
            <span className="px-3">-</span>Slides kits (for internal and
            external use).
          </p>
          <p>
            <span className="px-3">-</span>Promotional materials.
          </p>
          <p>
            <span className="px-3">-</span>Congress reports.
          </p>
          <p>
            <span className="px-3">-</span>Medical filings.
          </p>
          <p>
            <span className="px-3">-</span>Medical translations.
          </p>
          <p>
            <span className="px-3">-</span>Case histories.
          </p>
          <p>
            <span className="px-3">-</span>Congress abstracts and posters.
          </p>
          <p>
            <span className="px-3">-</span>Meeting minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalWriting;
