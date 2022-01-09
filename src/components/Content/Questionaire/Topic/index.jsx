import './style.css';


function Topic({ category, minutes, seconds, }) {

  return (
    <div className="topicContainer">
      <div className="topic">
        <div className="heading">
          TOPIC
        </div>
        <div className="category">
          {category || ''}
        </div>
      
      </div>
      <div className="timer">
        {`${minutes} : ${seconds}`}
      </div>
 
    </div>
  );
};


export default Topic;