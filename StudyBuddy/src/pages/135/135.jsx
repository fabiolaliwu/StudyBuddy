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
                <img 
                src="/memory.png" 
                alt="memory" 
                className="notes-image" 
            />
            <img 
                src="/process_states.png" 
                alt="Process States" 
                className="notes-image" 
            />
            <img 
                src="/fork.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/fork2.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/fork3.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/addresses.png" 
                alt="Addresses" 
                className="notes-image" 
            />
            <img 
                src="/page_table.png" 
                alt="Page Table" 
                className="notes-image" 
            />
            <img 
                src="/page_question.png" 
                alt="Page Question" 
                className="notes-image" 
            />
            </div>
    
        );
      case 'ai':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <p className="ai-placeholder-text">AI Helper coming soon!</p>
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