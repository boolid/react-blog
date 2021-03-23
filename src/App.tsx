import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// Components
import NavBar from "./components/navbar/navbar";
import { NavigationConfig } from "./config/navigation";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";

import { projects } from "./config/project";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar logoName="boolid" items={NavigationConfig} />
        <main>
          <Switch>
            <Route path="/projects">
              <Projects projects={projects} />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
            <Route path="/project/:id">
              <Project />
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
