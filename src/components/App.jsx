import "@babel/polyfill";
import React from "react";
import StartScreen from "./Start";
import Axios from "axios";
import StartButton from "./StartButton";
import QCard from "./QCard";
import AnswerCard from './AnswerCard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentStep: StartScreen,
      timer: null,
      currentQuestion: 0
    };
    this.gameConfig = this.gameConfig.bind(this);
    this.gameStart = this.gameStart.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  componentDidMount() {}

  gameStart() {
    this.setState({ currentStep: QCard });
  }
  gameConfig(config) {
    let self = this;
    Axios({
      method: "GET",
      url: `/${config.level}`,
      responseType: "json"
    })
      .then(response => {
        self.setState({
          cards: response.data,
          timer: config.timer,
          currentStep: StartButton
        });
      })
      .then(() => console.log(self.state));
  }
  showAnswer() {
    console.log('failed')
    this.setState({currentStep: AnswerCard})
  }
  nextQuestion() {
    let nextIndex = this.state.currentQuestion + 1;
    this.setState({currentQuestion: nextIndex, currentStep: QCard})
  }

  render() {
    let Comp = this.state.currentStep;
    return (
      <div className="mainWrapper">
        <Comp
          tierSelect={this.gameConfig}
          gameStart={this.gameStart}
          question={this.state.cards[this.state.currentQuestion]}
          time={this.state.timer}
          showAnswer={this.showAnswer}
          nextQuestion={this.nextQuestion}
        />
      </div>
    );
  }
}

export default App;
