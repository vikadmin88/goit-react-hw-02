import { useState, useEffect } from 'react'
import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'
import Feedback from '../Feedback/Feedback'


function App() {
  
  const FB_STORAGE = "feedback_storage";
  const fbStorageObj = JSON.parse(localStorage.getItem(FB_STORAGE)) ?? {good: 0, neutral: 0, bad: 0,};

  const [feedbackState, setFeedbackState] = useState(fbStorageObj);
  
  const good = feedbackState.good;
  const neutral = feedbackState.neutral;
  const bad = feedbackState.bad;

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round(((good + neutral) / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem(FB_STORAGE, JSON.stringify(feedbackState));
  }, [feedbackState])

  const addFeedback = feedbackType => {
    setFeedbackState({
      ...feedbackState,
      [feedbackType]: feedbackState[feedbackType] + 1
    });
  };

  const resetFeedback = () => {
    setFeedbackState({good: 0, neutral: 0, bad: 0,});
  };

  return (
    <>
      <Description />
      <Options 
        addFeedback={addFeedback} 
        resetFeedback={resetFeedback}
        isHidden={totalFeedback < 1}
      />
      { totalFeedback > 0 ?   
        <Feedback 
          {...feedbackState}
          total={totalFeedback}
          positive={positiveFeedback}
        /> 
        : 
        <Notification />
      }
    </>
  )
}

export default App
