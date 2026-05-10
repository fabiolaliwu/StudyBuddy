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
                <h4>Set up</h4>
                <br></br>
                <p className="ai-placeholder-text">- Download Unity Hub</p>
                <p className="ai-placeholder-text">- Download Blender</p>
                <p className="ai-placeholder-text">- Download Github Desktop</p>

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