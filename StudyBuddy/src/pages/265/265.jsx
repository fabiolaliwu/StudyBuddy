import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './265.css';

function CT() {
  const [activeTab, setActiveTab] = useState('notes');


  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane notes-container">
            <p className="section-title">The notes will be based off Eric Schweitzers teahcings and the textbook:</p>
            </div>
        );

      case 'exercises':
        return (
            <div className="tab-pane notes-container">
                Practice Problems
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
            <h1 className="main-title">265</h1>
          </div>
          <div className="os-tabs-segmented">
            {['notes', 'practice'].map((tab) => (
              <div
                key={tab}
                className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
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

export default CT;