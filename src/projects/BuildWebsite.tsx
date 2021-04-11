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
          drawing tool (also free!!) called{" "}
          <a href="https://draw.io" target="_blank">
            draw.io
          </a>
          .
        </div>
        <div>
          Check out how I planned for this website:
          <img
            style={{ width: "100%" }}
            src="/images/build-website/planning.png"
          />
        </div>
      </div>
    </div>
  );
};

const BreakDownIntoPieces: React.FC = () => {
  return (
    <div>
      <div>
        Since we have general look for the website, let's dive deeper what needs
        to be built. This exercise helps how you will structure your web
        application. By the way, if you are interested, you can view all my code
        in my github page{" "}
        <a href="https://github.com/boolid/react-blog" target="_blank">
          here
        </a>
        .
      </div>
      <div>
        <a href="https://github.com/boolid/react-blog/tree/main/src/pages">
          <h3>Pages</h3>
        </a>
        <div>
          How many pages do we need to build? What's the page about? How the
          pages are linked to each other and how will you be able to access the
          page? For this website, we are building about 4 pages: Home Page,
          Project List Page, Project Page, and About Me Page.
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>Home</b> page will be general page
          that should give overview of the website. This page will have brief
          summary about latest project blog and brief summary about me.
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>Project List</b> page, as it sounds,
          should have list of project pages. This page should contain image,
          date, title and short summary of the project.
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>Project</b> page is basic blog page
          about the project that I'm worked on. Hopefully, I will have a lot of
          projects.
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>About Me</b> page is just description
          of who I am. I don't think this page is that important but it's
          something to keep in mind.
        </div>
      </div>
      <div>
        <a
          href="https://github.com/boolid/react-blog/tree/main/src/components"
          target="_blank"
        >
          <h3>Components</h3>
        </a>
        <div>
          I think this might be a react terminology but it's just the building
          block that can be shared across other pages. I think you will
          understand as you read along.
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>Navigation Bar</b> is the one on the
          left that helps you to navigate the page. For this website, I have
          found cool navigation bar tutorial on youtube. If you are interested,
          please do check it out{" "}
          <a
            href="https://www.youtube.com/watch?v=biOMz4puGt8&t=497s&ab_channel=Fireship"
            target="_blank"
          >
            here
          </a>
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>Cards</b> are used in many places.
          Home Page uses two cards. One for latest project and one for about me.
          Project List Page also use bunch of card but they will have the same
          styling. For this, I have built my custom cards instead of using
          others. It's simply because I wanted to learn how CSS works.
        </div>
        <div>
          <b style={{ fontSize: "1.3em" }}>Icons</b> are very very important.
          They are needed everywhere lol!!!! I think the tuorial of how to build
          navigation bar actually tells you where to get icons. For me, I got
          the icons from{" "}
          <a
            href="https://fontawesome.com/icons?d=gallery&p=2&s=duotone"
            target="_blank"
          >
            Font Awesome
          </a>{" "}
          website and use the Duotone.
        </div>
      </div>
    </div>
  );
};

const Backend: React.FC = () => {
  return (
    <div>
      <div>
        In short, I'm not going to create a backend system for now. I do need it
        eventually but for now, I like to keep this project as simple as
        possible. This is why I decided to scrap off the like and comment
        feature that I've added in the planning.
      </div>
      <div>
        However, this just not end here. I still need a server to host this
        website. I could use raspberry pi to host it at home but who host
        website at home these days right? I personally love using firebase so
        I'll host this website{" "}
        <a href="https://firebase.google.com/firebase" target="_blank">
          firebase.
        </a>
      </div>
    </div>
  );
};

const LessonLearn: React.FC = () => {
  return (
    <div>
      <div>There are few things I've learn while building this website.</div>
      <div>
        <h3>1. Learning CSS was very challenging</h3>
        Learning CSS was fun but still had difficulty learning CSS especially
        when things doesn't go as plan. I mainly tried to learn how flex-box
        works.
      </div>
      <div>
        <h3>2. Content writing is very difficult</h3>
        As I'm trying to write my first page, man... this page took a while to
        write. Although it seems that there aren't many content inside but it
        took really really realllllly long to write.
      </div>
      <div>
        <h3>3. I'm lazier than I thought</h3>I was going to write some backend
        code. You know, typical having database and server that interact with
        the database. However, I got way too lazy to write that code and decided
        to strip apart all the things that required backend system.
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
  {
    id: "break-down-pieces",
    title: "Breaking down into pieces",
    content: <BreakDownIntoPieces />,
  },
  {
    id: "backend",
    title: "Backend!?!?!",
    content: <Backend />,
  },
  {
    id: "lesson-learn",
    title: "Lesson Learn",
    content: <LessonLearn />,
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
      <div>Let's get into it!!! 🚀🚀🚀</div>

      {buildTableOfContents()}

      {tableOfContents.map((content) => {
        return (
          <div>
            <h2 id={content.id}>{content.title}</h2>
            {content.content}
          </div>
        );
      })}

      <div>
        Anyhow... This is my first blog so it won't be as fancy as you will
        think it is. It might even lack of a lot of content. Please let me know
        if you have any questions 😁.
      </div>
    </div>
  );
};

export default BuildWebsite;
