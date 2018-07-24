import React from "react";
import Clock from "./Clock"
import { Button, Form, FormControl } from 'react-bootstrap';
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
        <h4>Countdown to <span className="deadline-color">{this.state.deadline}</span></h4>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="deadline-input"
            placeholder="New date"
            onChange={e => this.setState({ newDeadline: e.target.value })}
          />
          <Button bsStyle="primary" onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Countdown;
