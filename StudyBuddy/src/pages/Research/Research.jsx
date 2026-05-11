import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

function Research() {
  const [activeTab, setActiveTab] = useState('notes');


  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <p className="ai-placeholder-text">Manual cleaning: We can use software like Blender to clean data manually by deleting unnecessary keyframes, but this is very time consuming.</p>
                <p className="ai-placeholder-text">Neural network/AI approach: not urgent but good to have</p>
                <p className="ai-placeholder-text">Inverse Kinematics approach: focused on the relationship between joints</p>

                <br></br>
                <br></br>
                <h4>Set up</h4>
                <p className="ai-placeholder-text">- Download Unity Hub</p>
                <p className="ai-placeholder-text">- Download Blender</p>
                <p className="ai-placeholder-text">- Download Github Desktop</p>

                <br></br>
                <br></br>
                <h4>Resources</h4>
                <p className="ai-placeholder-text">
                    <a href="https://www.youtube.com/watch?v=xD7qUfSOGOE" target="_blank" rel="noopener noreferrer">Japanese Tea Ceremony</a>
                </p>
                <p className="ai-placeholder-text">
                    <a href="https://www.youtube.com/watch?v=4wQVxj_0Mdo" target="_blank" rel="noopener noreferrer">Hands motions and Tea Master's posture</a>
                </p>

                
                

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
          <h1 className="main-title">Research</h1>
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

export default Research;