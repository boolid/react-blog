import { ReactElement } from "react";
import BuildWebsite from "../projects/BuildWebsite";
import Random from "../projects/Random";

interface IComment {
  username: string;
  comment: string;
}

export interface IProject {
  id: number;
  backgroundImg: string;
  title: string;
  shortDescription: string;
  content: ReactElement;
  likes: number;
  date: Date;
  comments: IComment[];
}

// testing function
export const projects: IProject[] = [
  {
    id: 1,
    backgroundImg: "./images/blog1_banner.png",
    title: "How to build a successful bloggging website in 8 hours using React",
    shortDescription: `This will hopefully give you guidance on how to build a blogging website quickly. This will not be an easy route to build a blogging website because you can do that with things like WordPress or Wix. That's too easy in my opinion. We need something more challenging. This is exactly why we will be making a website using a popular framework.`,
    content: <BuildWebsite />,
    likes: 1000,
    date: new Date(),
    comments: [
      {
        username: "unknown",
        comment: "you are awesome!",
      },
      {
        username: "unknown",
        comment: "This is the best!!!",
      },
    ],
  },
  {
    id: 2,
    backgroundImg: "./images/blog.jpeg",
    title: "How to create a blog",
    shortDescription:
      "This is the short description that will be shown in the project card",
    content: <Random />,
    likes: 1000,
    date: new Date(),
    comments: [
      {
        username: "unknown",
        comment: "you are awesome!",
      },
      {
        username: "unknown",
        comment: "This is the best!!!",
      },
    ],
  },
  {
    id: 3,
    backgroundImg: "./images/blog.jpeg",
    title: "How to create a blog",
    shortDescription:
      "This is the short description that will be shown in the project card",
    content: <Random />,
    likes: 1000,
    date: new Date(),
    comments: [
      {
        username: "unknown",
        comment: "you are awesome!",
      },
      {
        username: "unknown",
        comment: "This is the best!!!",
      },
    ],
  },
];
