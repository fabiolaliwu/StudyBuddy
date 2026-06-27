import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './esl.css';

// Reusable component for collapsible sections (Controlled)
const CollapsibleSection = ({ title, children, isOpen, onClick }) => {
  return (
    <div style={{ marginBottom: '15px', borderBottom: '1px solid #eee' }}>
      <h3 
        onClick={onClick} 
        style={{ cursor: 'pointer', userSelect: 'none', color: '#333' }}
      >
        {isOpen ? '▼ ' : '▶ '} {title}
      </h3>
      {isOpen && <div style={{ padding: '10px 0 10px 20px' }}>{children}</div>}
    </div>
  );
};

function Flashcard({ q, a }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flashcard-container" ref={cardRef} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flashcard-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flashcard-front subject-box active-stat">
          <span className="box-label">{q}</span>
        </div>
        <div className="flashcard-back subject-box active-stat">
          <p className="box-desc">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Esl() {
  const [activeTab, setActiveTab] = useState('Grammar');
  const [openSection, setOpenSection] = useState(null);

  const phrasalVerbsData = [
    { q: "Carry out", a: "To perform, conduct, or complete a task or research." },
    { q: "Look into", a: "To investigate or examine a topic thoroughly." },
    { q: "Find out", a: "To discover information or learn something new." },
    { q: "Point out", a: "To draw attention to a specific fact, error, or detail." },
    { q: "Set up", a: "To prepare, install, or arrange equipment or software." },
    { q: "Back up", a: "To create a copy of data or files." },
    { q: "Go over", a: "To review, check, or examine something in detail." },
    { q: "Come up with", a: "To produce or invent an idea or solution." },
    { q: "Run into", a: "To experience an unexpected problem." },
    { q: "Turn out", a: "To describe the final result or outcome of a situation." }
  ];

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const renderContent = () => {
    switch (activeTab) {
            case 'Grammar':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
              
              <CollapsibleSection 
                title="PRESENT TENSES" 
                isOpen={openSection === 'PRESENT TENSES'} 
                onClick={() => toggleSection('PRESENT TENSES')}
              >
                <h4>Simple Present</h4>
                Used for habits, routines, general facts, or schedules. <br />
                Example: She walks to work every morning. <br /><br />
                <h4>Present Continuous (Progressive)</h4>
                Used for actions happening right now or temporary actions around the current time. <br />
                Example: I am studying for an exam at the moment.<br /><br />
                <h4>Present Perfect</h4>
                Used for actions that happened at an unspecified time in the past, or actions that began in the past and continue into the present.<br />
                Example: They have finished their homework.<br /><br />
                <h4>Present Perfect Continuous</h4>
                Used for actions that started in the past and are still continuing right now.<br />
                Example: He has been waiting for the bus for 30 minutes.<br /><br />
              </CollapsibleSection>

              <CollapsibleSection 
                title="PAST TENSES" 
                isOpen={openSection === 'PAST TENSES'} 
                onClick={() => toggleSection('PAST TENSES')}
              >
                <h4>Simple Past</h4>
                Used for actions that were completed at a specific time in the past.<br />
                Example: We visited the museum yesterday.<br /><br />
                <h4>Past Continuous (Progressive)</h4>
                Used for actions that were ongoing at a specific moment in the past.<br />
                Example: I was watching a movie when the power went out. <br /><br />
                <h4>Past Perfect</h4>
                Used to show that one action happened before another action in the past.<br />
                Example: By the time I arrived at the station, the train had already left.<br /><br />
                <h4>Past Perfect Continuous</h4>
                Used to show how long an action had been ongoing up until another point in the past.<br />
                Example: They had been working for five hours before they finally took a break.<br /><br />
              </CollapsibleSection>

              <CollapsibleSection 
                title="FUTURE TENSES" 
                isOpen={openSection === 'FUTURE TENSES'} 
                onClick={() => toggleSection('FUTURE TENSES')}
              >
                <h4>Simple Future</h4>
                Used for promises, predictions, or decisions made at the moment of speaking.<br />
                Example: I will call you tomorrow morning.<br /><br />
                <h4>Future Continuous (Progressive)</h4>
                Used for actions that will be ongoing at a specific time in the future.<br />
                Example: At 8:00 PM tonight, I will be eating dinner.<br /><br />
                <h4>Future Perfect</h4>
                Used for actions that will be entirely completed before a specific time in the future.<br />
                Example: By next Friday, she will have submitted her report.<br /><br />
                <h4>Future Perfect Continuous</h4>
                Used to emphasize how long an action will have been ongoing up to a specific point in the future.<br />
                Example: By next month, I will have been living in this city for three years.<br /><br />
              </CollapsibleSection>

              <CollapsibleSection 
                title="CONDITIONALS" 
                isOpen={openSection === 'CONDITIONAL'} 
                onClick={() => toggleSection('CONDITIONAL')}
              >
                <h4>The Zero Conditional (General Truths)</h4>
                Use: To talk about facts or scientific truths.<br />
                Example: If you heat water to 100 degrees Celsius, it boils.<br /><br />
                <h4>The First Conditional (Real / Likely Future)</h4>
                Use: To talk about a specific situation in the future that is highly possible.<br />
                Example: If it rains tomorrow, I will stay at home.<br /><br />
                <h4>The Second Conditional (Unreal / Hypothetical)</h4>
                Use: To talk about imaginary or unlikely situations.<br />
                Example: If I had a million dollars, I would buy a huge laboratory.<br /><br />
                <h4>The Third Conditional (Unreal Past)</h4>
                Use: To talk about a condition in the past that did not happen.<br />
                Example: If I had studied harder, I would have passed the exam.<br /><br />
                <h4>Mixed Conditionals</h4>
                Use: To show how an unreal condition in the past affects the present.<br />
                Example: If I had taken that job in Tokyo, I would live in Japan right now.<br /><br />
              </CollapsibleSection>

            </div>
          </div>
        );
      case 'Phrasal Verbs':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder definitions-grid">
              {phrasalVerbsData.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        );
      case 'Exercises':
        return <div className="tab-pane notes-container">soon</div>;
      default: return null;
    }
  };

  return (
    <div className="plain-landing">
      <header className="os-header">
        <div className="landing-logo">
          <Link to="/landing" className="back-link">← Back to Courses</Link>
          <h1 className="main-title">ESL</h1>
        </div>
        <div className="os-tabs-segmented">
          {['Grammar', 'Phrasal Verbs', 'Exercises'].map((tab) => (
            <div
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: 'pointer' }}
            >
              {tab}
            </div>
          ))}
        </div>
      </header>
      {renderContent()}
    </div>
  );
}

export default Esl;