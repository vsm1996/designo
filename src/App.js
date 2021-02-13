import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/common/nav/Nav";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
