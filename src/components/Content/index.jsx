
import { useEffect, useRef, useState, } from 'react'
import classNames from 'classnames';
import apiClient from '../../apiClient';
import Button from '../../commonComponents/Button';
import Questionaire from './Questionaire';
import Stats from './Stats';
import { QUIZ_STATE } from './quizState';

import './style.css';
import useTimer from '../../hooks/useTimer';


function Content() {
  
  const [tasks, setTasks] = useState([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [quizState, setQuizState] = useState(QUIZ_STATE.IN_PROGRESS);
  const avgSpeed = useRef(0);

  const {
    startTimer,
    timerState,
    seconds,
    stopTimer,
    resetTimer,
    minutes,
  } = useTimer();

  console.log("Timer State..", timerState);

  useEffect(() => {
    fetchTasks();
  }, [])

  useEffect(() => {
    if (isQuizEnded) {
      console.log("ss..", seconds, minutes);
      avgSpeed.current = Number.parseFloat(((minutes * 60 + seconds) / tasks.length)).toFixed(2);
      resetTimer();
    }
  }, [isQuizEnded])

  useEffect(() => {
    if (quizState !== QUIZ_STATE.IN_PROGRESS && isQuizStarted && !isQuizEnded) {
      stopTimer();
    } else if (quizState === QUIZ_STATE.IN_PROGRESS && isQuizStarted && !isQuizEnded) {
      console.log("from.. quizstate")
      startTimer();
    }
  }, [quizState])

  const fetchTasks = async () => {
    const response = await apiClient.get('frontend/tasks');
    const tasksData = await response.data.task_array;
    setTasks(tasksData);
  }
  
  const startQuiz = () => {
    setIsQuizStarted(true);
    console.log("from.. startQuiz")
    startTimer();
  }

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizEnded(false);
  }

  return (
    <div className="contentContainer">
      <div className={classNames({
        'start-end-content': (!isQuizStarted || isQuizEnded),
        'content': (isQuizStarted && !isQuizEnded)
      })}>
        {!isQuizStarted ?
          <div className="buttonContainer">
            <Button content="Start Quiz" onClick={startQuiz} />
          </div>
          :
          !isQuizEnded ?
              <Questionaire
              tasks={tasks}
              setIsQuizEnded={setIsQuizEnded}
              setCorrectAnswerCount={setCorrectAnswerCount}
              seconds={seconds}
              minutes={minutes}
              quizState={quizState}
              setQuizState={setQuizState}
              />
            :
            <Stats
              correctCount={correctAnswerCount}
              totalCount={tasks.length}
              avgSpeed={avgSpeed.current}
              restartQuiz={restartQuiz}
            />
        }
      </div>
    </div>
  );
}

export default Content;
