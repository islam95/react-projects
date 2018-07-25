import React, { Component } from "react";
import "./App.css";
import Countdown from "../Countdown/Countdown";
import Reminder from "../Reminder/Reminder";

class App extends Component {
  render() {
    return (
      <div className="center">
        <Countdown />
        <hr />
        <Reminder />
      </div>
    );
  }
}

export default App;
