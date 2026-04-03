import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './160.css';

function OS() {
  const [activeTab, setActiveTab] = useState('notes');


  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane notes-container">
            <p className="section-title">These are the notes for Computer Architecture I taken in Spring 2024 with Professor Maryash</p>
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
          <h1 className="main-title">Computer Architecture I</h1>
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

export default OS;