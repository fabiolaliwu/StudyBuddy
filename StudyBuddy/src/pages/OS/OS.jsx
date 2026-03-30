import React from 'react';
import './OS.css';

function OS() {
  return (
    <div className="os-container">
      {/* Sidebar Navigation */}
      <aside className="os-sidebar">
        <div className="os-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">StudyBuddy</span>
        </div>
        <nav className="os-nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">My Courses</button>
          <button className="nav-item">AI Tutor</button>
          <button className="nav-item">Study Groups</button>
          <button className="nav-item">Settings</button>
        </nav>
        <div className="os-user">
          <div className="user-avatar">FL</div>
          <span>Fabiola</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="os-main">
        <header className="os-top-bar">
          <h2>Welcome back, Scholar!</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search notes, files..." />
          </div>
        </header>

        <section className="os-dashboard-grid">
          <div className="status-card">
            <h3>Current Streak</h3>
            <p className="big-number">5 Days</p>
          </div>
          <div className="status-card">
            <h3>Tasks Today</h3>
            <p className="big-number">3/8</p>
          </div>
          <div className="status-card">
            <h3>Next Session</h3>
            <p className="big-number">14:00</p>
          </div>
        </section>

        <section className="os-content-placeholder">
          <div className="empty-state">
            <p>Select a tool from the sidebar to get started.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OS;