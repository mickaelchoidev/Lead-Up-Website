import React from "react";

const Card = ({ dataPerson }) => {
  const { name, role, description } = dataPerson;
  return (
    <div className="media text-light mb-4">
      <div className="media-body">
        <h3 className="mt-0">
          {name}
          <span className="mx-4 h5 font-italic">{role}</span>
        </h3>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Card;
