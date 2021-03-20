import React from "react";

const Comment: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fad"
      data-icon="comment-lines"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-comment-lines fa-w-16 fa-7x"
    >
      <g className="fa-group">
        <path
          fill="currentColor"
          d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 0 0-1.5 8.7A7.83 7.83 0 0 0 8 480c66.3 0 116-31.8 140.6-51.4A305 305 0 0 0 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm32 264a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm96-96a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h240a8 8 0 0 1 8 8z"
          className="fa-secondary"
        ></path>
        <path
          fill="currentColor"
          d="M376 176H136a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm-96 96H136a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"
          className="fa-primary"
        ></path>
      </g>
    </svg>
  );
};

export default Comment;
