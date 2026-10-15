import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './730.css';

function CS730() {
  const [activeTab, setActiveTab] = useState('notes');

  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <h2>Memory Technology</h2>

                <h5>Random Access Memory (RAM)</h5>
                Uniformity becaise every location cost the same to reach.<br></br>
                There are two types of RAM:<br></br>
                1. DRAM: the content is periodically refreshed.
                <br></br>
                Dense, inexpensive, power efficient and slow.
                <br></br> 50 ns – 70 ns, $20 – $75 per GB
                <br></br>
                2. SRAM: the data stored persists forever or until the power drops.
                <br></br>Sparse, costly, power-hungry and quick.
                <br></br> 0.5 ns – 2.5 ns, $2000 – $5000 per GB
                <br></br><br></br>
                
                <h5>Not-so-random access technology: it depends on where it lands and when it is issued.</h5>
                Examples: disk, CDROM
                <br></br><br></br>
                
                <h5>Sequential access technology: latency grows linearly with position.</h5>
                Exmaple: tape

                <br></br><br></br>
                <h5>Magenetic disk</h5>
                5 ms – 20 ms, $0.20 – $2 per GB
                <br></br><br></br>

                <h4>Main Memory Background</h4>
                <h5>Main memory is built from DRAM</h5>
                - refresh is required every ~8ms
                <br></br>- they arreive in two halves because its a teo-dimensional matrix
                - RAS, the Row Access Strobe 
                - CAS, the Column Access Strobe 
                

                



              
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="tab-pane">
            <div className="notes-container">
              <div className="systems-section">
                <h3>Recommended Textbooks & References</h3>
                <div className="systems-resources">
                  <div className="resource-card">
                    <a href="https://csapp.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">
                      Computer Systems: A Programmer's Perspective (CS:APP3e) ↗
                    </a>
                    <p>By Randal E. Bryant and David R. O'Hallaron (Carnegie Mellon University). Comprehensive text on hardware-software interaction and system-level execution.</p>
                  </div>

                  <div className="resource-card">
                    <a href="https://www.elsevier.com/books/computer-architecture/hennessy/978-0-12-811905-1" target="_blank" rel="noopener noreferrer">
                      Computer Architecture: A Quantitative Approach ↗
                    </a>
                    <p>By John L. Hennessy and David A. Patterson. The classic graduate-level text on modern processor design, memory systems, and parallel architectures.</p>
                  </div>

                  <div className="resource-card">
                    <a href="https://hunter-cs.org/" target="_blank" rel="noopener noreferrer">
                      Hunter College Department of Computer Science ↗
                    </a>
                    <p>Graduate course catalog and bulletin for CSCI 73000 (Computer Systems).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="plain-landing">
          <header className="os-header">
            <div className="landing-logo">
              <Link to="/landing" className="back-link">← Back to Courses</Link>
          <h1 className="main-title">Computer Systems</h1>
        </div>

        <div className="os-tabs-segmented">
          {['notes', 'resources'].map((tab) => (
            <div
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>
      </header>

      {renderContent()}
    </div>
  );
}

export default CS730;
