import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './730.css';

function Flashcard({ q, a }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCardClick = (e) => {
    setIsFlipped(!isFlipped);
    e.stopPropagation();
  };

  return (
    <div
      className="flashcard-container"
      ref={cardRef}
      onClick={handleCardClick}
      style={{ cursor: isFlipped ? 'default' : 'pointer' }}
    >
      <div className={`flashcard-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flashcard-front">
          <span className="box-label">{q}</span>
        </div>
        <div className="flashcard-back">
          <p className="box-desc">{a}</p>
        </div>
      </div>
    </div>
  );
}

function CS730() {
  const [activeTab, setActiveTab] = useState('definitions');

  const defs = [
    { q: "What are Functional Units?", a: "Specialized hardware blocks that perform specific operations: Arithmetic Logic Units (ALU), Floating Point Units (FPU), Memory Management Units (MMU), and registers." },
    { q: "What is a System Bus?", a: "A communication pathway connecting major computer components. Consists of a data bus (carries data), address bus (specifies memory locations), and control bus (sends control signals)." },
    { q: "What is Direct Memory Access (DMA)?", a: "A hardware feature that allows I/O devices to transfer data directly to/from main memory without CPU involvement, freeing the CPU for other tasks." },
    { q: "What is an Interrupt?", a: "An asynchronous signal sent to the CPU indicating an event that needs immediate attention. The CPU pauses its current task, saves state, runs the Interrupt Service Routine (ISR), then resumes." },
    { q: "What is Polling?", a: "A synchronous method where the CPU continuously checks the status of an I/O device in a loop, wasting CPU cycles while waiting." },
    { q: "Interrupt vs Polling?", a: "Polling wastes CPU cycles checking repeatedly. Interrupts are more efficient: the CPU proceeds normally and only responds when notified by the device." },
    { q: "What are Interrupt Priority Levels?", a: "A hierarchy that determines which interrupt is handled first when multiple occur simultaneously. Higher-priority interrupts can preempt lower-priority ones." },
    { q: "What is a Memory System?", a: "The collection of hardware that stores and retrieves data: registers, cache (L1/L2/L3), RAM, and secondary storage, organized in a hierarchy by speed and cost." },
    { q: "What is Cache Memory?", a: "Small, fast SRAM close to the CPU that stores frequently accessed data to reduce expensive RAM accesses. Exploits temporal and spatial locality." },
    { q: "What is Cache Coherence?", a: "The challenge of keeping multiple caches consistent when shared memory is updated. Solved via snooping protocols (MESI) or directory-based coherence." },
    { q: "What is Virtual Memory?", a: "An OS/hardware abstraction giving each process a private, uniform address space. Hardware MMU translates virtual addresses to physical addresses via page tables." },
    { q: "What is a TLB (Translation Lookaside Buffer)?", a: "A hardware cache storing recent virtual-to-physical address translations to speed up memory access, avoiding slow page table lookups on every reference." },
    { q: "What is an I/O System?", a: "The subsystem managing communication between the CPU and peripheral devices (keyboards, disks, networks) through device controllers and I/O buses." },
    { q: "What is Memory-Mapped I/O?", a: "A technique where I/O device registers are mapped into the CPU's address space, allowing the CPU to communicate with devices using regular load/store instructions." },
    { q: "What is a RAID?", a: "Redundant Array of Independent Disks. A technique combining multiple disks for improved performance and/or fault tolerance (RAID 0=striping, RAID 1=mirroring, RAID 5=distributed parity)." },
    { q: "What is Parallel Processing?", a: "Executing multiple computations simultaneously using multiple processors or cores, divided by Flynn's Taxonomy into SISD, SIMD, MISD, and MIMD architectures." },
    { q: "What is SIMD?", a: "Single Instruction, Multiple Data. One instruction operates on multiple data elements simultaneously. Used in vector processors, GPU compute, and multimedia instructions (SSE, AVX)." },
    { q: "What is SMP (Symmetric Multiprocessing)?", a: "A multiprocessor architecture where multiple identical CPUs share the same main memory and I/O, all running the same OS. Each processor has equal access to memory." },
    { q: "What is NUMA (Non-Uniform Memory Access)?", a: "A multiprocessor design where memory access time depends on the memory location relative to the processor. Local memory is faster than remote memory." },
    { q: "What is a Spinlock?", a: "A synchronization primitive where a thread loops (spins) while checking if a lock is available. Efficient for short waits; wastes CPU for long waits." },
    { q: "What is Compare-and-Swap (CAS)?", a: "An atomic hardware instruction that reads a memory value, compares it to an expected value, and only writes a new value if the comparison succeeds. Foundation of lock-free data structures." },
    { q: "What is a Network Interface Card (NIC)?", a: "Hardware component that connects a computer to a network. Handles packet framing, error detection, and uses DMA ring buffers to transfer data between network and host memory." },
    { q: "What is a DMA Ring Buffer?", a: "A circular buffer in memory used by the NIC and OS kernel to pass packets between hardware and software without copying, improving network I/O throughput." },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'definitions':
        return (
          <div className="tab-pane">
            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">CSCI 73000 • Computer Systems Flashcards</span>
              <span className="divider-line"></span>
            </div>
            <div className="definitions-grid">
              {defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        );
      case 'notes':
        return (
          <div className="tab-pane">
            <div className="notes-container">
              <div className="systems-section">
                <h3>1. System Architecture & Functional Units</h3>
                <ul>
                  <li><strong>Functional Units:</strong> Arithmetic Logic Units (ALU), Floating Point Units (FPU), Memory Management Units (MMU), and registers.</li>
                  <li><strong>System Interconnects:</strong> Data buses, address buses, control buses, and arbitration protocols.</li>
                  <li><strong>Direct Memory Access (DMA):</strong> Channels, cycle stealing, burst mode, and offloading CPU from bulk I/O transfers.</li>
                  <li><strong>Interrupt Systems:</strong> Interrupt vector tables, interrupt request lines (IRQ), priority levels, masking, and ISR context switching.</li>
                </ul>
              </div>

              <div className="systems-section">
                <h3>2. Memory Systems & Hierarchies</h3>
                <ul>
                  <li><strong>Cache Design:</strong> Direct mapped, set-associative, and fully-associative caches. Cache replacement policies (LRU, FIFO, LFU) and write policies.</li>
                  <li><strong>Virtual Memory:</strong> Paging, multi-level page tables, inverted page tables, TLBs, and page replacement algorithms.</li>
                  <li><strong>Memory Consistency & Coherence:</strong> Snooping protocols (MESI), directory-based coherence, and memory barriers.</li>
                </ul>
              </div>

              <div className="systems-section">
                <h3>3. Parallel Processing & Concurrency</h3>
                <ul>
                  <li><strong>Flynn's Taxonomy:</strong> SISD, SIMD (vector processors, GPU compute), MISD, MIMD (multicores, clusters).</li>
                  <li><strong>Multiprocessor Architectures:</strong> Symmetric Multiprocessing (SMP), Non-Uniform Memory Access (NUMA).</li>
                  <li><strong>Synchronization Primitives:</strong> Atomic operations (CAS, Test-and-Set), mutexes, spinlocks, semaphores, and condition variables.</li>
                </ul>
              </div>

              <div className="systems-section">
                <h3>4. I/O Systems & Networking</h3>
                <ul>
                  <li><strong>I/O Hardware:</strong> Memory-mapped I/O vs. port-mapped I/O, device controllers, and buffering.</li>
                  <li><strong>Storage Subsystems:</strong> RAID configurations (0, 1, 5, 6, 10), disk scheduling algorithms, NVMe protocols.</li>
                  <li><strong>Network Architecture:</strong> Packet processing, NICs, DMA ring buffers, and interrupt coalescing.</li>
                </ul>
              </div>
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
          {['definitions', 'notes', 'resources'].map((tab) => (
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
