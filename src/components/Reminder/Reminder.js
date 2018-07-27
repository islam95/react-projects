import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addReminder,
  deleteReminder
} from "../../redux/actions/reminderActions";
import moment from "moment";
import "./Reminder.css";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-text-left list-group col-sm-5">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <span style={{paddingRight: 20}}>{reminder.text}</span>
                <span>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </span>
              </div>
              <span
                className="list-item delete-button"
                onClick={() => this.props.onDeleteReminder(reminder.id)}
              >
                &#x2715;
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  onKeyEnter(e) {
    e.preventDefault();
    this.props.onAddReminder(this.state.text, this.state.dueDate);
  }

  render() {
    return (
      <div className="reminder">
        <h1>Reminder</h1>
        <Form className="reminder-form" inline>
          <FormControl
            className="marginRight"
            placeholder="I have to..."
            onChange={e => this.setState({ text: e.target.value })}
            onKeyPress={e => (e.key === "Enter" ? this.onKeyEnter(e) : null)}
          />
          <FormControl
            type="datetime-local"
            onChange={e => this.setState({ dueDate: e.target.value })}
          />
          <Button
            bsStyle="success"
            onClick={() =>
              this.props.onAddReminder(this.state.text, this.state.dueDate)
            }
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
    reminders: state.reminderReducer
  };
};

const dispatchToProps = dispatch => {
  return {
    onAddReminder: (text, dueDate) => dispatch(addReminder(text, dueDate)),
    onDeleteReminder: id => dispatch(deleteReminder(id))
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(Reminder);
