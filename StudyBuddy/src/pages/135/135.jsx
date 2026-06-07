import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './135.css';

function OS() {
  const [activeTab, setActiveTab] = useState('definitions');


  const renderContent = () => {
    switch (activeTab) {
      case 'definitions':
        return (
          <div className="tab-pane">
            <h2 className="section-title">Key Definitions</h2>
          </div>
        );
      case 'notes':
        return (
            <div className="tab-pane notes-container">
                funny
            </div>
    
        );
      case 'ai':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <p className="ai-placeholder-text">AI Helper never coming!</p>
            </div>
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
          <h1 className="main-title">Operating Systems</h1>
        </div>

        <div className="os-tabs-segmented">
          {['definitions', 'notes', 'ai'].map((tab) => (
            <div 
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'ai' ? 'AI Helper' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>
      </header>

        {renderContent()}
    
    </div>
  );
}

export default OS;