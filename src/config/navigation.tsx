import { Tasks, Meh, Home } from "../components/icons";
import { INavbarItem } from "../components/navbar/navbar";

export const NavigationConfig: INavbarItem[] = [
  {
    name: "Home",
    icon: <Home />,
    link: "/",
  },
  {
    name: "Projects",
    icon: <Tasks />,
    link: "/projects",
  },
  {
    name: "About Me",
    icon: <Meh />,
    link: "/about-me",
  },
];
