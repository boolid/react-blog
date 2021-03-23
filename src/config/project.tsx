interface IComment {
  username: string;
  comment: string;
}

export interface IProject {
  id: number;
  backgroundImg: string;
  title: string;
  content: string;
  likes: number;
  date: Date;
  comments: IComment[];
}

// testing function
export const projects: IProject[] = [
  {
    id: 1,
    backgroundImg: "./images/blog.jpeg",
    title: "How to create a blog",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
