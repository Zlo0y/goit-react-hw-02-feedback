import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return ({
        [option]: prevState[option] + 1
      })
    }
    )
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100)
  };

  render() {
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
    
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics allStates={this.state} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
        </Section>
      </>
    )

  }
}