import React from 'react';

class AnswerCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      question: this.props.question
    }
  }
  render() {
    return (
      <div>{JSON.stringify(this.state.question)}
      <button onClick={this.props.nextQuestion}>Next Question</button>
      </div>
    )
  }
}

export default AnswerCard;
