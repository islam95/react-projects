import React from "react";
import "./Countdown.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  // The time left until the passed date
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div className="clock">
        <span className="marginRight">{this.leadingZero(this.state.days)} days</span>
        <span className="marginRight">{this.leadingZero(this.state.hours)} hours</span>
        <span className="marginRight">{this.leadingZero(this.state.minutes)} minutes</span>
        <span className="marginRight">{this.leadingZero(this.state.seconds)} seconds</span>
      </div>
    );
  }
}

export default Clock;
