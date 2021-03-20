import React from "react";

const DoubleArrow: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fad"
      data-icon="chevron-double-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-chevron-double-right fa-w-16 fa-7x"
    >
      <g className="fa-group">
        <path
          fill="currentColor"
          d="M285.6 273L90.79 467a24 24 0 0 1-33.88.1l-.1-.1-22.74-22.7a24 24 0 0 1 0-33.85L188.39 256 34.07 101.55A23.8 23.8 0 0 1 34 67.8l.11-.1L56.81 45a24 24 0 0 1 33.88-.1l.1.1L285.6 239a24.09 24.09 0 0 1 0 34z"
          className="fa-secondary"
        ></path>
        <path
          fill="currentColor"
          d="M478 273L283.19 467a24 24 0 0 1-33.87.1l-.1-.1-22.75-22.7a23.81 23.81 0 0 1-.1-33.75l.1-.1L380.8 256 226.47 101.55a24 24 0 0 1 0-33.85L249.22 45a24 24 0 0 1 33.87-.1.94.94 0 0 1 .1.1L478 239a24.09 24.09 0 0 1 0 34z"
          className="fa-primary"
        ></path>
      </g>
    </svg>
  );
};

export default DoubleArrow;
