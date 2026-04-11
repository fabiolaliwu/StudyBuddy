import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="resume-container">
      {/* HERO SECTION - SPLIT SCREEN */}
      <section className="hero-split">
        <div className="hero-left">
          <img src="/profile.jpeg" alt="Fabiola Li Wu" className="hero-full-img" />
        </div>
        
        <div className="hero-right">
          <div className="hero-content-wrapper">
            <h1 className="resume-name">Fabiola Li Wu</h1>
            <div className="hero-about">
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                Hunter College Computer Science student andd that's it. Once my life is updated, I will have more to share!</p>
            </div>

            <div className="hero-contact-container">
              <div className="os-tabs-segmented">
                <a href="mailto:fabiliwu@gmail.com" className="tab-segment active">Email</a>
                <a href="https://linkedin.com/in/fabiolaliwu" target="_blank" rel="noreferrer" className="tab-segment active">LinkedIn</a>
                <a href="https://github.com/fabiolaliwu" target="_blank" rel="noreferrer" className="tab-segment active">GitHub</a>
              </div>
            </div>
            
            <div className="scroll-indicator">Scroll to view Resume ↓</div>
          </div>
        </div>
      </section>

      {/* RESUME CONTENT - SCROLLABLE */}
      <main className="resume-content">
        {/* EDUCATION */}
        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="resume-item">
            <div className="item-row">
              <span className="institution">Hunter College, City University of New York</span>
              <span className="location-date">New York, NY — Expected May 2026</span>
            </div>
            <div className="item-row">
              <span className="degree">Bachelor of Arts in Computer Science</span>
              <span className="gpa"> GPA: 3.77/4.0 (Cumulative) | 3.84/4.0 (Major)</span>
            </div>
            <p className="item-details">Discrete Structures, Data Structures and Algorithms, Big Data, Operating Systems, Computer Vision, Artificial Intelligence, Database Management, Software Engineering, Computer Architecture.</p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="resume-section">
          <h2 className="section-title">Experience</h2>
          
          <div className="resume-item">
            <div className="item-row">
              <span className="institution">Hunter College, City University of New York</span>
              <span className="location-date">Aug 2025 – Present</span>
            </div>
            <div className="item-row">
              <span className="degree"> UTA- Operating Systems, Software Analysis & Design, Computer Architecture, Database Design</span>
            </div>
            <ul className="bullet-points">
              <li>Conduct technical code reviews for 300+ students in Operating Systems and Software Design, enforcing best practices in C++ memory management, multithreading, and file I/O.</li>
              <li>Debug complex systems-level projects, including CPU scheduling simulators and memory allocators, improving students' software reliability and design patterns.</li>
              <li>Streamline course operations by collaborating with faculty to develop and audit technical assessments, ensuring rigorous evaluation of core computer science concepts.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="item-row">
              <span className="institution">Google Software Engineer Program</span>
              <span className="location-date">February 2025 – September 2025</span>
            </div>
            <div className="item-row">
              <span className="degree"> SWE Fellow</span>
            </div>
            <ul className="bullet-points">
              <li>Mastered advanced Data Structures and Algorithms through intensive technical training, applying optimized problem-solving strategies to complex computational challenges.</li>
              <li>Architected scalable system designs under the mentorship of a Senior Google Software Engineer, focusing on load balancing, caching, and distributed systems.</li>
              <li>Refined technical communication and peer-programming skills by simulating high-pressure production environment scenarios and rigorous technical interviews.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="item-row">
              <span className="institution">CUNY Tech Prep</span>
              <span className="location-date">September 2024 – May 2025</span>
            </div>
            <div className="item-row">
              <span className="degree">Full-Stack Web Development Fellow and Data Science Fellow</span>
            </div>
            <ul className="bullet-points">
              <li>Designed and deployed React + Node apps with PostgreSQL, applying CI/CD pipelines and TDD.</li>
              <li>Prototyped AI-powered apps using LLMs to improve user interaction and accessibility.</li>
              <li>Collaborated in agile teams of 4–6, shipping projects to production environments.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="resume-item">
            <div className="item-row">
              <span className="institution"><Link to="/landing" style={{ textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #1a1a1a' }}>
                  StudyBuddy ↗
                </Link></span>
              <span className="location-date">Mar 2026 – Present</span>
            </div>
            <ul className="bullet-points">
              <li>Building a React educational hub to provide CS students with technical definitions and lecture notes.</li>
              <li>Engineering a responsive UI for seamless cross-device access to learning resources.</li>
              <li>Streamlining TA operations by hosting assessments and technical materials to improve instructional efficiency.</li>
            </ul>
          </div>


          <div className="resume-item">
            <div className="item-row">
                <span className="institution"><Link to="https://capstonefall2025-frontend.onrender.com" style={{ textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #1a1a1a' }}>
                  Loop (Socket.io, MongoDB, Bcrypt, Google Maps API) ↗
                </Link></span>
              <span className="location-date">Aug 2025 – Dec 2025</span>
            </div>
            <ul className="bullet-points">
              <li>Collaborated in an Agile team of 4 to build a full-stack web application using React and Node.js that utilizes the Google Maps API for real-time safety updates.</li>
              <li>Developed a real-time chat system with Socket.io for instant messaging in global and event-specific rooms.</li>
              <li>Implemented secure user authentication and media storage using JWT, MongoDB, and AWS S3.</li>
            </ul>
          </div>
          


          <div className="resume-item">
            <div className="item-row">
              <span className="institution"><Link to="https://blind-spot.app" style={{ textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #1a1a1a' }}>
                  World Description AI (React, Flask, Gemini VLM) ↗
                </Link></span>
              <span className="location-date">Feb 2025 – Dec 2025</span>
            </div>
            <ul className="bullet-points">
              <li>Reduced latency by 35% by implementing image compression and asynchronous request handling.</li>
              <li>Achieved more than 90% accuracy in real-time scene narration by integrating Gemini 1.5 Pro multimodal models.</li>
              <li>Optimized backend throughput to maintain a consistent 15–20 FPS for near-instant audio feedback.</li>
            </ul>
          </div>
          

          <div className="resume-item">
            <div className="item-row">
              <span className="institution"><Link to="https://signlanguagetranslator-s0bb.onrender.com" style={{ textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #1a1a1a' }}>
                  Sign Language Translator (TensorFlow, MediaPipe, React) ↗
                </Link></span>
              <span className="location-date">Apr 2025 – May 2025</span>
            </div>
            <ul className="bullet-points">
              <li>Trained a custom TensorFlow model to recognize 26 ASL alphabet signs with 85% accuracy.</li>
              <li>Achieved real-time performance with under 100ms latency for instant sign-to-text translation.</li>
              <li>Reduced processing lag by 60% using MediaPipe to extract hand coordinates instead of raw pixels.</li>
            </ul>
          </div>


          




        </section>

        {/* SKILLS */}
        <section className="resume-section">
          <h2 className="section-title">Skills & Languages</h2>
          <div className="skills-content">
            <p><strong>Languages:</strong> C++, Python, JavaScript, SQL, HTML/CSS</p>
            <p><strong>Frameworks:</strong> React, Node.js, Express, Flask, Tailwind, Socket.io</p>
            <p><strong>AI/Tools:</strong> TensorFlow, MediaPipe, OpenCV , Git, Linux, AWS S3, Vercel</p>
            <p><strong>DataBases:</strong> PostgreSQL, MongoDB, Neo4j</p>
            <p><strong>Multilingual:</strong> Spanish, English, Cantonese, Mandarin, Portuguese</p>
            <p><strong>Certificates:</strong> IBM AI, Microsoft Azure Computer Vision</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;