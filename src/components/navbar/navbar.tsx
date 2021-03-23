import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

// CSS
import "./navbar.css";

// Icon
import { DoubleArrow } from "../icons";

export interface INavbarItem {
  name: string;
  icon: ReactElement;
  link?: string;
}

interface INavbar {
  logoName: string;
  items: INavbarItem[];
}

const Navbar: React.FC<INavbar> = ({ logoName, items }) => {
  const location = useLocation();

  const highlightStyle = { filter: "grayscale(0%) opacity(1)" };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link className="nav-link" to="#">
            <DoubleArrow />
            <span className="link-text logo-text"> {logoName} </span>
          </Link>
        </li>
        {items.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <Link
                className="nav-link"
                to={item.link ? item.link : "#"}
                style={
                  item.link && location.pathname === item.link
                    ? highlightStyle
                    : {}
                }
              >
                {item.icon}
                <span className="link-text"> {item.name} </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
