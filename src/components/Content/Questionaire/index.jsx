import { useState } from 'react';
import Topic from './Topic';
import QuestionSlider from './QuestionSlider';
import Judgement from './Judgement';
import './style.css';

function Questionaire(props) {
  const {
    tasks = [],
    setIsQuizEnded,
    setCorrectAnswerCount,
    seconds,
    minutes,
    quizState,
    setQuizState
  } = props;

  const [questionNumber, setQuestionNumber] = useState(1);
  if (questionNumber > tasks.length) setIsQuizEnded(true);

  const onAnswerSubmit = () => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
  }
  

  return tasks.length && questionNumber <= tasks.length ? (
    <>
      <Topic
        category={tasks[questionNumber - 1].category}
        seconds={seconds}
        minutes={minutes}
      />
      
      <QuestionSlider 
        question={tasks[questionNumber - 1].question}
        questionNumber={questionNumber}
        totalQuestions={tasks.length}
        quizState={quizState}
      />
      
      <Judgement
        answer={tasks[questionNumber - 1].answer}
        onSubmit={onAnswerSubmit}
        setCorrectAnswerCount={setCorrectAnswerCount}
        quizState={quizState}
        setQuizState={setQuizState}
      />
    </>
  ) : null;
};

export default Questionaire;
