import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Clock from "./Clock";
import "./Countdown.css";
import { connect } from "react-redux";
import {
  changeDeadline
} from "../../redux/actions/countdownActions";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.props.onChangeDeadline(this.state.newDeadline);
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
          <span className="deadline-color">{this.props.deadline}</span>
        </h4>
        <Clock deadline={this.props.deadline} />
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

const mapStateToProps = state => {
  return {
    deadline: state.countdownReducer
  };
};

const dispatchToProps = dispatch => {
  return {
    onChangeDeadline: (date) => dispatch(changeDeadline(date))
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(Countdown);
