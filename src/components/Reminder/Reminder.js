import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { addReminder } from "../../redux/actions/reminderActions";
import "./Reminder.css";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-md-4">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Reminder</h1>
        <Form inline>
          <FormControl
            className="marginRight"
            placeholder="I have to..."
            onChange={e => this.setState({ text: e.target.value })}
          />
          <Button
            bsStyle="success"
            onClick={() => this.props.onAddReminder(this.state.text)}
          >
            Add Reminder
          </Button>
        </Form>
        {this.renderReminders()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reminders: state
  };
};

const dispatchToProps = dispatch => {
  return {
    onAddReminder: text => dispatch(addReminder(text))
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(Reminder);
