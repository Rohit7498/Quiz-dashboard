import './style.css';

function QustionSlider({ question, questionNumber, totalQuestions }) {
  return (
    <div className="questionContainer">
      <div className="question">
        <div className="heading">
          {`QUESTION ${questionNumber} of ${totalQuestions}`}
        </div>
        <div className="questionContent">
          {question || ''}
        </div>
      </div>
    </div>
  );
};


export default QustionSlider;