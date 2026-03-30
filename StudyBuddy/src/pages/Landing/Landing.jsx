import React from 'react';
import './Landing.css'; 

function Landing() {
  return (
    <div className="landing-container">
      {/* Header with Logo */}
      <header className="hero-header">
        <h1 className="logo-title">
          <span className="logo-icon">🎓</span> 
          Study<span className="buddy-text">Buddy</span>
        </h1>
        <p className="subtitle">Your AI-Powered Academic Companion</p>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <section className="cta-section">
          <h2>Ready to Level Up Your Studies?</h2>
          <p>
            Connect with peers, access smart tools, and master your subjects with ease.
            StudyBuddy is the future of collaborative learning.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Create Account</button>
            <button className="secondary-btn">Learn More →</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="simple-footer">
        <p>&copy; {new Date().getFullYear()} StudyBuddy Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;