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
          <Route exact path="/Rachana/">
            <Home />
          </Route>
          <Route path="/Rachana/Abouts">
            <Abouts />
          </Route>
          <Route path="/Rachana/About">
            <About />
          </Route>
          <Route path="/Rachana/Rachana">
            <Theme />
          </Route>
          <Route path="/Rachana/Contact">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
