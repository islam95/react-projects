import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Clock from "./Clock";
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

  onKeyEnter(e) {
    e.preventDefault();
    this.changeDeadline();
  }

  render() {
    return (
      <div>
        <h1>Countdown Component</h1>
        <h4>
          Countdown to{" "}
          <span className="deadline-color">{this.state.deadline}</span>
        </h4>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="deadline-input"
            placeholder="New date"
            onChange={e => this.setState({ newDeadline: e.target.value })}
            onKeyPress={e => (e.key === "Enter" ? this.onKeyEnter(e) : null)}
          />
          <Button bsStyle="primary" onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Countdown;
