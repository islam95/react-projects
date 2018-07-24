import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Countdown Component</h1>
        <h4>Countdown to December 18, 2018</h4>
        <div>
          <span>14 days</span>
          <span>14 days</span>
          <span>14 days</span>
          <span>14 days</span>
        </div>
      </div>
    );
  }
}

export default Countdown;
