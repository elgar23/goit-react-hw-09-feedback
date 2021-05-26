import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';


export default function App() {
	const [good, setgood] = useState(0);
	const [neutral, setneutral] = useState(0);
	const [bad, setbad] = useState(0);
  
	const countTotalFeedback = e => {
	  return e;
	};
  
	const countPositiveFeedbackPercentage = e => {
	  return Math.round((good * 100) / e);
	};
  
	const leaveFeedback = e => {
	  if (e === 'good') {
		setgood(prevState => prevState + 1);
	  } else if (e === 'bad') {
		setbad(prevState => prevState + 1);
	  } else if (e === 'neutral') setneutral(prevState => prevState + 1);
	};
  
	return (
	  <div className={App}>
		<Section title="Please leave feedback">
		  <FeedbackOptions
			options={{ good, neutral, bad }}
			onLeaveFeedback={leaveFeedback}
		  />
		</Section>
		<Section title="Statistics">
		  <Statistics
			good={good}
			neutral={neutral}
			bad={bad}
			total={countTotalFeedback}
			positivePercentage={countPositiveFeedbackPercentage}
		  />
		</Section>
	  </div>
	);
  }