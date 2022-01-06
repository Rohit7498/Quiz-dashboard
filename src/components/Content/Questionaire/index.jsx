import { useState } from 'react';
import Topic from './Topic';
import QuestionSlider from './QuestionSlider';
import Judgement from './Judgement';


import './style.css';

function Questionaire(props) {
  const {
    tasks = [],
    setIsQuizEnded=false,
  } = props;

  const [questionNumber, setQuestionNumber] = useState(1);

  const onAnswerSubmit = () => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1)
  }
  if (questionNumber > tasks.length) setIsQuizEnded(true);

  return tasks.length && questionNumber <= tasks.length ? (
    <div className="container">
      <Topic category={tasks[questionNumber-1].category} />
      <QuestionSlider question={tasks[questionNumber-1].question} questionNumber={questionNumber} />
      <Judgement answer={tasks[questionNumber-1].answer} onSubmit={ onAnswerSubmit }/>
    </div>
  ) : null;
};

export default Questionaire;
