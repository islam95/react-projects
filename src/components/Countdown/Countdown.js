import React from "react";
import Clock from "./Clock"
import "./Countdown.css";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 18, 2018",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    return (
      <div>
        <h1>Countdown Component</h1>
        <h4>Countdown to {this.state.deadline}</h4>
        <Clock deadline={this.state.deadline} />
        <div>
          <input
            placeholder="New date"
            onChange={e => this.setState({ newDeadline: e.target.value })}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
