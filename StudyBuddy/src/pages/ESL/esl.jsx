import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './esl.css';

function esl() {
  const [activeTab, setActiveTab] = useState('notes');


  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
               <h3>PRESENT TENSES</h3>
                <h4>Simple Present</h4>
                Used for habits, routines, general facts, or schedules. <br></br>
                Example: She walks to work every morning. <br></br><br></br>

                <h4>Present Continuous (Progressive)</h4>
                Used for actions happening right now or temporary actions around the current time. <br></br>
                Example: I am studying for an exam at the moment.<br></br><br></br>

                <h4>Present Perfect</h4>Used for actions that happened at an unspecified time in the past, or actions that began in the past and 
                continue into the present. It connects the past and the present.<br></br>
                Example: They have finished their homework.<br></br><br></br>

                <h4>Present Perfect Continuous</h4>
                Used for actions that started in the past and are still continuing right now, emphasizing the duration of the action.<br></br>
                Example: He has been waiting for the bus for 30 minutes.<br></br><br></br>
                
                <br></br><h3>PAST TENSES</h3>
                <h4>Simple Past</h4>Used for actions that were completed at a specific time in the past.<br></br>
                Example: We visited the museum yesterday.<br></br><br></br>
                
                <h4>Past Continuous (Progressive)</h4>
                Used for actions that were ongoing at a specific moment in the past, often interrupted by another action.<br></br>
                Example: I was watching a movie when the power went out. <br></br><br></br>

                <h4>Past Perfect</h4>Used to show that one action happened before another action in the past.<br></br>
                Example: By the time I arrived at the station, the train had already left.<br></br><br></br>

                <h4>Past Perfect Continuous</h4>Used to show how long an action had been ongoing up until another point in the past.<br></br>
                Example: They had been working for five hours before they finally took a break.<br></br><br></br>
                
                <br></br><h3>FUTURE TENSES</h3>
                <h4>Simple Future</h4>Used for promises, predictions, or decisions made at the moment of speaking.<br></br>
                Example: I will call you tomorrow morning.<br></br><br></br>

                <h4>Future Continuous (Progressive)</h4>Used for actions that will be ongoing at a specific time in the future.<br></br>
                Example: At 8:00 PM tonight, I will be eating dinner.<br></br><br></br>

                <h4>Future Perfect</h4>Used for actions that will be entirely completed before a specific time in the future.<br></br>
                Example: By next Friday, she will have submitted her report.<br></br><br></br>

                <h4>Future Perfect Continuous</h4>Used to emphasize how long an action will have been ongoing up to a specific point in the future.<br></br>
                Example: By next month, I will have been living in this city for three years.<br></br><br></br>

                <br></br><h3>CONDITIONAL</h3>
                <h4>The Zero Conditional (General Truths)</h4>
                Use: To talk about facts, scientific truths, or things that are generally always true. If the condition happens, the result is guaranteed.<br></br>
                Structure: If + Simple Present, Simple Present<br></br>
                Example: If you heat water to 100 degrees Celsius, it boils.<br></br><br></br>

                <h4>The First Conditional (Real / Likely Future)</h4>
                Use: To talk about a specific situation in the future that is highly possible or likely to happen.<br></br>
                Structure: If + Simple Present, Will + Base Verb<br></br>
                Example: If it rains tomorrow, I will stay at home.<br></br>
                (Note: You can also use other modal verbs in the result, like: If it rains, I might stay at home.)<br></br><br></br>

                <h4>The Second Conditional (Unreal / Hypothetical Present or Future)</h4>
                Use: To talk about imaginary, unlikely, or impossible situations in the present or future, and their hypothetical results.<br></br>
                Structure: If + Simple Past, Would + Base Verb<br></br>
                Example: If I had a million dollars, I would buy a huge laboratory.<br></br>
                (Fact: I do not have a million dollars right now, so this is just a dream.)<br></br>
                (Grammar Rule for exams: For the verb "to be" in the second conditional, it is grammatically correct to use "were" for all subjects. Example: If I were you, I would study harder.)<br></br><br></br>
                
                <h4>The Third Conditional (Unreal Past)</h4>
                Use: To talk about a condition in the past that did not happen, and the imagined past result. It is often used to express regrets or hindsight.<br></br>
                Structure: If + Past Perfect, Would have + Past Participle <br></br>
                Example: If I had studied harder, I would have passed the exam.<br></br>
                (Fact: I did not study hard in the past, and I did not pass the exam in the past.)<br></br><br></br>

                <h4>Mixed Conditionals (Past Condition with Present Result)</h4>
                Use: To show how an unreal condition in the past affects the present. It mixes the Third Conditional (past condition) with the Second Conditional (present result).<br></br>
                Structure: If + Past Perfect, Would + Base Verb<br></br>
                Example: If I had taken that job in Tokyo (past), I would live in Japan right now (present).<br></br>
                (Fact: I didn't take the job in the past, so I don't live there now.)<br></br><br></br>



            </div>
          </div>
        );
      case 'exercises':
        return (
            <div className="tab-pane notes-container">
                soon
            </div>
    
        );
      default: return null;
    }
  };

  return (
    <div className="plain-landing">
      <header className="os-header">
        <div className="landing-logo">
          <Link to="/" className="back-link">← Back to Courses</Link>
          <h1 className="main-title">ESL</h1>
        </div>

        <div className="os-tabs-segmented">
          {['notes', 'extra'].map((tab) => (
            <div 
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
            </div>
          ))}
        </div>
      </header>

        {renderContent()}
    
    </div>
  );
}

export default esl;