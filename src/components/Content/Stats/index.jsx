import Button from '../../../commonComponents/Button';
import './style.css';


function Stats({ correctCount, totalCount, avgSpeed, restartQuiz, }) {
  
  const accuracy = Math.round(Number.parseFloat(((correctCount / totalCount) * 100)));

  console.log()
  return (
    <div className="statsContainer">
      <div className="stats">
        <div className="accuracy">
          <div className="center">
            {`${accuracy} %`}
          </div>
          <div className="center">
            Accuracy
          </div>
        </div>
        <div className="time">
          <div className="center">
            {`${avgSpeed}s`}
          </div>
          <div className="center">
            Avg Speed
          </div>
        </div>
      </div>
      <div className="playAgain">
        <Button content="Play Again" onClick={restartQuiz} />
      </div>
    </div>
  );
}

export default Stats;
