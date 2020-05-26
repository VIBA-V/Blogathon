import React from "react";
import "./App.css";
import Home from "./components/Home";
import Abouts from "./components/Shiva/Abouts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Shiva/Index";
import Theme from "./components/Theme";
import About from "./components/Shiva/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Blogathon/">
            <Home />
          </Route>
          <Route path="/Blogathon/Abouts">
            <Abouts />
          </Route>
          <Route path="/Blogathon/About">
            <About />
          </Route>
          <Route path="/Blogathon/Rachana">
            <Theme />
          </Route>
          <Route path="/Blogathon/Contact">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
