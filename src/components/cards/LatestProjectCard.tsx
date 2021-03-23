import React, { CSSProperties } from "react";
import { Comment, Heart } from "../icons";

import "./LatestProjectCard.css";
import "./default.css";

interface ILatestProjectCard {
  style?: CSSProperties;
  img: string;
  title: string;
  description: string;
  comments: number;
  likes: number;
}

const LatestProjectCard: React.FC<ILatestProjectCard> = ({
  style,
  img,
  title,
  description,
  comments,
  likes,
}) => {
  return (
    <div style={style}>
      <div className="card latest-project-card">
        <div
          className="latest-project-image"
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className="latest-project-detail">
          <h4>Latest Project</h4>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="latest-project-action">
            <div>
              <Comment /> {comments}
            </div>
            <div>
              <Heart /> {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjectCard;
