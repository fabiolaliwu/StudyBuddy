import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const subjects = [
  {
    id: 'os',
    label: 'Operating Systems',
    code: 'CS 340',
    desc: 'Processes, memory management, file systems, and concurrency. The internals of how your computer actually works.',
    link: '/os',
    active: true,
  },
  {
    id: '135',
    label: 'CS 135',
    code: 'CS 135',
    desc: 'Foundations of computer science. Problem solving, algorithms, and the building blocks of programming.',
    link: null,
    active: false,
  },
  {
    id: 'db',
    label: 'Database Design',
    code: 'CS 480',
    desc: 'Relational models, SQL, normalization, and the art of structuring data that actually scales.',
    link: null,
    active: false,
  },
];

function Landing() {
  return (
    <div className="plain-landing">

      {/* Logo — top left */}
      <div className="landing-logo">
        <h1 className="main-title">StudyBuddy</h1>
        <p className="landing-sub">By Bob2</p>
      </div>

      {/* Center content */}
      <div className="landing-boxes">
        {subjects.map((s) =>
          s.active ? (
            <Link to={s.link} className="subject-box" key={s.id}>
              <div className="box-top">
                <div>
                  <span className="box-code">{s.code}</span>
                  <span className="box-label">{s.label}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="box-desc">{s.desc}</p>
            </Link>
          ) : (
            <div className="subject-box inactive" key={s.id}>
              <div className="box-top">
                <div>
                  <span className="box-code">{s.code}</span>
                  <span className="box-label">{s.label}</span>
                </div>
                <span className="box-soon">Soon</span>
              </div>
              <p className="box-desc">{s.desc}</p>
            </div>
          )
        )}
      </div>

    </div>
  );
}

export default Landing;