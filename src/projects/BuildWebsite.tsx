import React from "react";

import "./BuildWebsite.css";

const StartWithWhy: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          Before doing any projects, first you need to think why. Why do you
          want to build a website? What's the main purpose? For me, building
          this blogging website had few purposes.
        </div>
        <ol>
          <li>
            Build something so that I could keep details of projects that I
            wanted to build
          </li>
          <li>Improve my writing skill</li>
          <li>Learn something I don't know already</li>
        </ol>
        <div>
          I'm pretty sure you and I will have different purpose of building a
          website so make sure you know why you are building!
        </div>
      </div>
    </div>
  );
};

const Planning: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          Planning is very important. It helps you achieve goals and be a more
          efficient use of time as you will know exactly what you are going to
          do. I don't know about you but when I start doing something, there are
          amazing ideas pop-up in my head. And, I'll easily lose focus on what
          I'm supposed to do. This is really bad. I mean real bad because this
          causes me to lose focus on what I'm suppose to do and wonder around.
        </div>
        <div>
          I'll show you how I plan to build this website. You do not need a
          fancy tool to plan. You just need something to write down. Even a pen
          and paper will do fine. For this blog, I've used a simple online
          drawing tool (also free!!) called draw.io.
        </div>
      </div>
    </div>
  );
};

interface TableOfContent {
  id: string;
  title: string;
  content: React.ReactElement;
}

const tableOfContents: TableOfContent[] = [
  {
    id: "start-with-why",
    title: "Start with Why!",
    content: <StartWithWhy />,
  },
  {
    id: "planning",
    title: "Planning!",
    content: <Planning />,
  },
];

function buildTableOfContents(): React.ReactElement {
  return (
    <div>
      <h2>TABLE OF CONTENT</h2>
      <ul>
        {tableOfContents.map((content, index) => {
          return (
            <li>
              <a href={"#" + content.id}>{content.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const BuildWebsite: React.FC = () => {
  return (
    <div className="build-website">
      <div>
        I hope this will be somewhat interesting to you. To be honest, this page
        will not talk about how to code a website but it should help you how I
        approach building a website.
      </div>
      <div>Let's get into it!!!</div>

      {buildTableOfContents()}

      {tableOfContents.map((content) => {
        return (
          <div>
            <h2 id={content.id}>{content.title}</h2>
            {content.content}
          </div>
        );
      })}
    </div>
  );
};

export default BuildWebsite;
