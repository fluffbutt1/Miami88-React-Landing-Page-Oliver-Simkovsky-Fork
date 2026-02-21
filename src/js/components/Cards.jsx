import React from "react";

export const Cards = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row gx-0 gy-0 w-75">
        <div className="col-3 p-0">
          <div className="border border-light w-75">
            <div className="bg-light" style={{ minHeight: "5rem" }}>
              <h3 className="cardTitle text-secondary h-auto w-auto mx-auto">500 x 325</h3>
            </div>
            <div className="border border-light"style={{ minHeight: "8rem" }}>
              <h4>Card Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="border border-light bg-light" style={{ minHeight: "4rem"}} >
                <div className="btn btn-primary">Find Out More!</div>
            </div>
          </div>
        </div>
        <div className="col-3 p-0">hi</div>
        <div className="col-3 p-0">hi</div>
        <div className="col-3 p-0">hi</div>
      </div>
    </div>
  );
};
