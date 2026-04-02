import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './160.css';

function OS() {
  const [activeTab, setActiveTab] = useState('definitions');


  const renderContent = () => {
    switch (activeTab) {
      case 'definitions':
        return (
          <div className="tab-pane">
            soon
          </div>
        );
      case 'notes':
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
          <h1 className="main-title">Computer Architecture I</h1>
        </div>

        <div className="os-tabs-segmented">
          {['definitions', 'notes'].map((tab) => (
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

export default OS;