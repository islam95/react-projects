import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./Reminder.css";

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Reminder</h1>
        <Form inline>
          <FormControl className="marginRight" placeholder="I have to..." />
          <Button bsStyle="success">Add Reminder</Button>
        </Form>
      </div>
    );
  }
}
