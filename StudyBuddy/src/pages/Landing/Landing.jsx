import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const subjects = [
  {
    id: 'os',
    label: 'Operating Systems',
    code: 'CSCI 340',
    desc: 'Explores the design of modern operating systems, including process management, scheduling, memory management, and file systems.',
    link: '/os',
    active: true,
  },
  {
    id: '135',
    label: 'Software Design and Analysis I',
    code: 'CSCI 135',
    desc: 'An intensive introduction to program development and problem solving. Focuses on designing, implementing, and evaluating programs using C++.',
    link: null, // Update to '/135' if you create this page
    active: false,
  },
  {
    id: '160',
    label: 'Computer Architecture I',
    code: 'CSCI 160',
    desc: 'Covers binary number representations, Boolean algebras, logic gates, combinational logic, flip-flops, and sequential circuits.',
    link: null, // Update to '/160' if you create this page
    active: false,
  },
  {
    id: 'db',
    label: 'Database Management',
    code: 'CSCI 435',
    desc: 'Study of hierarchical, network, and relational databases, including normalization theory and various query languages.',
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