import React from "react";

class QCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5,
      question: this.props.question,
      selected: null
    };
    this.decrement = this.decrement.bind(this);
    this.timeUp = this.timeUp.bind(this);
  }
  componentDidMount() {
    console.log(this.props)
    let decremented = this.state.time - 1;
    this.setState({ time: decremented });
  }
  componentDidUpdate() {
    this.timer();
  }
  decrement() {
    let current = this.state.time;
    let decremented = current - 1;
    console.log(decremented);
    this.setState({ time: decremented });
  }
  timer() {
    if (this.state.time) {
      setTimeout(this.decrement, 1000);
    } else {
      this.timeUp(this.state);
    }
  }
  timeUp(stateObj) {
    if (!stateObj.selected) {
      confirm("do you need more time?") ? this.setState({time : 30}) : this.props.showAnswer() ;
    } else this.props.showAnswer();
  }

  render() {
    return <div className="roundTimer">{this.state.time}</div>;
  }
}

export default QCard;
