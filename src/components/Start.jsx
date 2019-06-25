import React from "react";

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "easies",
      timer: 30
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = name === "timer" ? Number(e.target.value) : e.target.value;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="startScreen">
        startScreen
        <form className="initialForm">
          <select
            className="tierSelect"
            name="level"
            onChange={this.handleChange}
          >
            <option type="radio" className="initalSelect" value="easies">
              Beginner
            </option>
            <option type="radio" className="initalSelect" value="intermediates">
              Intermediate
            </option>
            <option type="radio" className="initalSelect" value="hards">
              Advanced
            </option>
          </select>
          <select
            className="timerSelect"
            name="timer"
            onChange={this.handleChange}
          >
            <option className="timeOption" value={30}>
              30 Seconds
            </option>
            <option className="timeOption" value={60}>
              60 Seconds
            </option>
            <option className="timeOption" value={120}>
              120 Seconds
            </option>
          </select>
        </form>
        <button
          className="initialButton"
          onClick={() => this.props.tierSelect(this.state)}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default StartScreen;
