import React from "react";
import "./App.css";
import Home from "./components/Home";
import Abouts from "./components/Shiva/Abouts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Indexv from "./components/Shiva/Indexv";
import Last from "./components/Last";
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
          <Route path="/Blogathon/Apply">
            <Last />
          </Route>
          <Route path="/Blogathon/Contact">
            <Indexv />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
