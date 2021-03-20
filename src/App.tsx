import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// Components
import NavBar from "./components/navbar/navbar";
import { NavigationConfig } from "./config/navigation";

// Pages
import Home from "./pages/Home";
import Project from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar logoName="boolid" items={NavigationConfig} />
        <main>
          <Switch>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
