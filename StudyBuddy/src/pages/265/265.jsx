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
            <p className="section-title">Computer Theory based off the teachings of Eric "The Wizard" Schweitzer</p>
            <img 
                src="/decimal.png" 
                alt="conversion" 
                className="notes-image" 
            />
             <img 
                src="/hexadecimal.png" 
                alt="conversion" 
                className="notes-image" 
            />
            <img 
                src="/binary_add&sub.png" 
                alt="conversion" 
                className="notes-image" 
            />
            <img 
                src="/hex_add&sub.png" 
                alt="conversion" 
                className="notes-image" 
            />
            <img 
                src="/binary_mult.png" 
                alt="conversion" 
                className="notes-image" 
            />

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
          <h1 className="main-title">Computer Theory</h1>
        </div>

        <div className="os-tabs-segmented">
          {['notes', 'exercises'].map((tab) => (
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

export default CT;