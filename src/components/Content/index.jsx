
import { useEffect, useState, } from 'react'
import apiClient from '../../apiClient';
import Button from '../Button';
import Questionaire from './Questionaire';

import './style.css';


function Content() {
  
  const [tasks, setTasks] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  
  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const response = await apiClient.get('frontend/tasks');
    const tasksData = await response.data.task_array;
    setTasks(tasksData);
  }

  console.log("ss..", tasks)
  
  const startQuiz = () => {
    setIsQuizStarted(true);
  }

  return (
    <div className="contentContainer">
      <div className="content">
        {!isQuizStarted ?
          <Button content="Start Quiz" onClick={startQuiz} />
          :
          !isQuizEnded ?
              <Questionaire
              tasks={tasks}
              setIsQuizEnded={setIsQuizEnded}
              />
            :
            <>Stats Content</>
        }
      </div>
    </div>
  );
}

export default Content;
