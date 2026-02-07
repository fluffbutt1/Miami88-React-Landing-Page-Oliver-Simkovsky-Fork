import React from "react";

export const Jumbo = () => {
  return (
    <div className="w-75 mx-auto">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5 text-start">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};
