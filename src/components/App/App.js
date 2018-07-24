import React, { Component } from "react";
import "./App.css";
import Countdown from "../Countdown/Countdown";

class App extends Component {
  render() {
    return (
      <div className="center">
        <Countdown />
      </div>
    );
  }
}

export default App;
