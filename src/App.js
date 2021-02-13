import React from "react";
import "./App.css";
import Nav from "./components/common/nav/Nav";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
