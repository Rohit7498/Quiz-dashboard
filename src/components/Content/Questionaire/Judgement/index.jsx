import { useState } from 'react';
import './style.css';
import correct from '../../../../assets/correct.gif';
import incorrect from '../../../../assets/incorrect.gif';
import GifPlayer from 'react-gif-player'

import Button from "../../../../commonComponents/Button";
import Input from "../../../../commonComponents/Input";
import { QUIZ_STATE } from '../../quizState';

function Judgement({
  answer,
  onSubmit,
  setCorrectAnswerCount,
  quizState,
  setQuizState,
})
{
  const [userAnswer, setUserAnswer] = useState('');
  const [isSolutionDisplayed, setIsSolutionDisplayed] = useState(false);

  const validateAnswer = () => {
    const str1 = userAnswer.trim();
    const str2 = answer.trim();
    const comparer = str1.localeCompare(str2, undefined, { sensitivity: 'accent' });
    if (comparer === 0) {
      setQuizState(QUIZ_STATE.CORRECT);
      if(!isSolutionDisplayed) setCorrectAnswerCount((prevAnswerCount) => prevAnswerCount + 1);
    } else {
      setQuizState(QUIZ_STATE.INCORRECT);
    }
  }

  const loadNext = () => {
    setUserAnswer('');
    setIsSolutionDisplayed(false);
    onSubmit();
    setQuizState(QUIZ_STATE.IN_PROGRESS);
  }

  const onAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      validateAnswer();
      setTimeout(()=>loadNext(), 1500);
    }
  }

  const showSolution = () => setIsSolutionDisplayed(true);

  return(
    <div className="judgementContainer">
      
      {quizState === QUIZ_STATE.IN_PROGRESS ?
        <>
          <div className="leftContainer">
            <div className="answer">
              ANSWER
            </div>
            <div className="inputContainer">
              <Input
                placeholder="Type Answer..."
                value={userAnswer}
                onChange={onAnswerChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <div className="rightContainer">
            {!isSolutionDisplayed ?
              <div className="right">
                <div className="answer" style={{ marginRight: '12px' }}>Stuck ?</div>
                <Button
                  content="See Solution"
                  onClick={showSolution}
                />
              </div>
              :
              <div className="answer">{answer}</div>
          }
          </div>
        </>
        :
        quizState === QUIZ_STATE.CORRECT ?
        <div className="correct">
          <div className="imgWrapper">
              <img src={correct} alt="Correct" width="167px" height="167px"/>
          </div>
        </div>
          :
          <div className="incorrect">
            <div className="imgWrapper">
              <img src={incorrect} alt="Incorrect" width="167px" height="167px" />
            </div>
          </div>
      }
    </div>
  );
};


export default Judgement;