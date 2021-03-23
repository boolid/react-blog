import React from "react";

const AboutMe: React.FC = () => {
  return (
    <>
      <h1>About Me</h1>
      <div>
        <div
          style={{
            backgroundImage: "url(./images/banner.png)",
            height: "10rem",
          }}
        />
        <h3>Little bit about me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquam
          animi aperiam asperiores aspernatur assumenda aut blanditiis
          consequuntur culpa delectus dolorem doloremque ducimus ea enim eos
          esse ipsa ipsam itaque laboriosam laudantium libero maiores modi
          mollitia natus neque perspiciatis porro provident quas quo repudiandae
          sed sint temporibus vel. Eaque, neque.
        </p>
      </div>
      <div>
        <h3>What is this blog about?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
          adipisci aperiam commodi, debitis esse ex, excepturi harum laboriosam
          magnam, nihil officia tempora. Consequatur dolores illo perferendis
          ullam voluptatem. A alias atque, aut, consectetur eius eveniet ex
          exercitationem expedita id illum ipsam non quas quis sequi suscipit
          tempore voluptatem voluptates!
        </p>
      </div>
      <div>
        <h3>Ask Me Any Questions!</h3>
        <p>Shoot me something and I'll response to you!</p>
      </div>
    </>
  );
};

export default AboutMe;
