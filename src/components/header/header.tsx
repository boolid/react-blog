import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { DoubleArrow, Home, Info, Book } from "@material-ui/icons";

const Header: React.FC = () => {
  const [popUp, setPopUp] = useState<boolean>(false);

  function createIcon(icon: React.ReactElement, title: string) {
    return (
      <Button
        style={{ paddingTop: "20px" }}
        size="large"
        startIcon={icon}
        onClick={() => setPopUp((e) => !e)}
      >
        {popUp ? title : null}
      </Button>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#222222",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        width: popUp ? "200px" : "80px",
        transition: "width 0.6s",
      }}
    >
      <Button
        style={{
          transform: popUp ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.6s",
          backgroundColor: "transparent",
        }}
        size="large"
        startIcon={<DoubleArrow fontSize="large" />}
        onClick={() => setPopUp((e) => !e)}
        disableRipple
      />
      {createIcon(<Home fontSize="large" />, "Home")}
      {createIcon(<Book fontSize="large" />, "Blog")}
      {createIcon(<Info fontSize="large" />, "About")}
    </div>
  );
};

export default Header;
