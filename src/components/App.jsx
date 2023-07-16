import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={Object.keys(this.state)}
        />
        </Section >
     
        < Section title="Statistics" >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
        
        
      
    </div>
    )
  }
}
