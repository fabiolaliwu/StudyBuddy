import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './260.css';

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

function Arc2() {
  const [activeTab, setActiveTab] = useState('definitions');

  const defs = [
    { q: "What is a program?", a: "List of directions for the computer to execute, and it is used to manipulate data." },
    { q: "What is data?", a: "The values and raw information stored, manipulated, and processed by computer instructions." },
    { q: "What does it mean to run the program?", a: "Taking the compiled machine code instructions and executing them sequentially on the CPU until completion." },
    { q: "What computer component executes programs?", a: "CPU (Central Processing Unit): the hardware chip responsible for fetching, decoding, and executing instructions." },
    { q: "Where is the running program stored?", a: "In memory, specifically in RAM (Random Access Memory), which holds instructions and runtime data." },
    { q: "What do we know about RAM memory?", a: "RAM is fast, byte-addressable, and volatile (loses data on power loss). CPU reads and writes to RAM via the system bus." },
    { q: "What is a memory stall?", a: "A scenario where the CPU pauses execution cycles waiting for requested data to arrive from slower main memory." },
    { q: "What long-term storage do we have?", a: "Hard Disks (HDD): magnetic, high capacity, cheap, slow.\nSSDs (Solid-State Drives): flash-based, non-volatile, significantly faster than HDD." },
    { q: "What is an executable file?", a: "A binary file containing encoded machine code instructions and metadata ready for the OS loader to place into memory." },
    { q: "How does speed compare between CPU, RAM, and Disk?", a: "CPU Registers / Cache >>> RAM >>> SSD >>> HDD." },
    { q: "What is cache memory? What is its purpose?", a: "Small, fast SRAM located close to/on the CPU. Stores recently accessed instructions and data to minimize high-latency accesses to RAM (exploiting temporal and spatial locality)." },
    { q: "What is ROM memory? What does it store?", a: "Read-Only Memory: non-volatile memory storing firmware and bootstrap initialization programs (like BIOS/UEFI) required to boot the system." },
    { q: "What is a machine cycle?", a: "The cyclic sequence of steps executed by the CPU for every instruction." },
    { q: "What are the basic steps of a machine cycle?", a: "1. Fetch: load instruction from memory (PC).\n2. Decode: interpret the opcode and operands.\n3. Execute: perform operation (ALU/branch).\n4. Memory / Write-back: store result back to register or RAM." },
    { q: "What does Frequency measure? What is its unit?", a: "Clock speed measured in Hertz (Hz = cycles per second). Measures how many synchronization pulses the CPU clock generates per second (e.g., 3.5 GHz)." },
    { q: "What is a CPU core?", a: "An independent processing unit within the CPU containing its own ALU, registers, and pipeline. Multi-core processors execute multiple threads concurrently." },
    { q: "How is memory structured?", a: "A contiguous, linear sequence of addressable bytes, where each byte has a distinct numerical memory address." },
    { q: "What is a bit vs a byte?", a: "A bit (binary digit) is 0 or 1. A byte is 8 bits, the standard addressable unit of memory." },
    { q: "What is a memory address?", a: "A unique binary or hexadecimal number identifying a specific byte location in physical or virtual memory." },
    { q: "What does \"32-bit address\" mean?", a: "Address pointers are 32 bits wide, allowing addressing of up to 2^32 bytes (4 GB) of address space." },
    { q: "What does \"64-bit address\" mean?", a: "Address pointers are 64 bits wide, allowing addressing up to 2^64 bytes (16 Exabytes) of address space (practical x86-64 uses 48-bit virtual addresses, 256 TB)." },
    { q: "What is the relationship between C++ variables, RAM, and memory addresses?", a: "A variable name is a compile-time abstraction for a memory location. The compiler/OS allocates space in RAM and associates an address with that variable." },
    { q: "What is a pointer in C/C++?", a: "A variable that holds the memory address of another value rather than the value itself." },
    { q: "Data types sizes in standard systems?", a: "char: 1 byte\nshort: 2 bytes\nint / float: 4 bytes\nlong / pointer / double: 8 bytes (on 64-bit systems)." },
    { q: "What is a machine 'Word'?", a: "The natural data size handled by the CPU architecture in a single operation (e.g., 32 bits / 4 bytes on 32-bit CPU, 64 bits / 8 bytes on 64-bit CPU)." },
    { q: "What is the Program Counter (PC)?", a: "A special processor register that holds the memory address of the next instruction to be fetched and executed." },
    { q: "What is the classic program memory layout?", a: "• Stack (grows down): function frames, local variables, return addresses.\n• Heap (grows up): dynamically allocated memory (malloc/new).\n• Data segment: initialized globals and static variables.\n• BSS segment: uninitialized globals/statics.\n• Text segment: read-only machine code instructions." },
    { q: "Stack vs Heap characteristics?", a: "Stack is fast, automatically managed (LIFO allocation), contiguous, and size-limited. Heap is dynamic, manual (or GC managed), fragmented, and slower to allocate." },
    { q: "What is a stack overflow?", a: "Occurs when the call stack exceeds its allocated memory limit, usually caused by unbounded recursion or excessively large stack-allocated arrays." },
    { q: "What is Pipelining in CPU architectures?", a: "An implementation technique where multiple instructions are overlapped in execution, analogous to an assembly line (Fetch, Decode, Execute, Memory, Writeback)." },
    { q: "What are Pipeline Hazards?", a: "Situations that prevent the next instruction from executing in its designated clock cycle: Structural (resource conflict), Data (data dependencies), and Control (branching)." },
    { q: "What is Virtual Memory?", a: "An OS abstraction that provides each process with a private, uniform address space and uses page tables with hardware MMU to translate virtual addresses to physical RAM addresses." },
    { q: "What is a Page Table and TLB?", a: "A Page Table stores the mapping between virtual pages and physical frames. A TLB (Translation Lookaside Buffer) is an on-chip hardware cache for fast virtual-to-physical address translations." },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'definitions':
        return (
          <div className="tab-pane">
            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">CSCI 260 • Computer Architecture 2 Flashcards</span>
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
              <div className="arch-section">
                <h3>1. Machine-Level Representation of Programs</h3>
                <ul>
                  <li><strong>Processor Registers:</strong> General-purpose registers, condition codes (%rip, %rsp, %rbp, %rax, etc.).</li>
                  <li><strong>Instruction Sets (ISA):</strong> Operands, arithmetic operations, control flow (jumps, conditional moves), procedure call linkage (calling conventions).</li>
                  <li><strong>Data Alignment:</strong> Memory access efficiency and compiler padding rules.</li>
                </ul>
              </div>

              <div className="arch-section">
                <h3>2. Processor Architecture & Pipelining</h3>
                <ul>
                  <li><strong>Instruction Execution:</strong> Sequential execution logic vs. 5-stage pipelining (Fetch, Decode, Execute, Memory, Write-back).</li>
                  <li><strong>Hazards:</strong> Data hazards (RAW, WAR, WAW) and forwarding; control hazards and branch prediction.</li>
                  <li><strong>Performance:</strong> CPI (Cycles Per Instruction), throughput vs. latency trade-offs.</li>
                </ul>
              </div>

              <div className="arch-section">
                <h3>3. Memory Hierarchy & Caching</h3>
                <ul>
                  <li><strong>Locality:</strong> Temporal locality (recently referenced items) and Spatial locality (nearby memory items).</li>
                  <li><strong>Cache Organization:</strong> Direct mapped, set associative, fully associative caches; cache lines, sets, and tag checking.</li>
                  <li><strong>Cache Writes:</strong> Write-through vs. write-back; write-allocate vs. no-write-allocate.</li>
                </ul>
              </div>

              <div className="arch-section">
                <h3>4. Virtual Memory & Linking</h3>
                <ul>
                  <li><strong>Paging & Address Translation:</strong> Multi-level page tables, page faults, demand paging, and swap space.</li>
                  <li><strong>Translation Lookaside Buffer (TLB):</strong> Hardware caching of page table entries.</li>
                  <li><strong>Linking:</strong> Relocatable object files, symbol resolution, relocation, static vs. dynamic libraries (.so / .dylib).</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="tab-pane">
            <div className="notes-container">
              <div className="arch-section">
                <h3>Recommended Textbooks & References</h3>
                <div className="arch-resources">
                  <div className="resource-card">
                    <a href="https://csapp.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">
                      Computer Systems: A Programmer's Perspective (CS:APP3e) ↗
                    </a>
                    <p>By Randal E. Bryant and David R. O'Hallaron (Carnegie Mellon University). The gold standard textbook for systems and architecture.</p>
                  </div>

                  <div className="resource-card">
                    <a href="https://www.elsevier.com/books/computer-organization-and-design-mips-edition/patterson/978-0-12-820109-1" target="_blank" rel="noopener noreferrer">
                      Computer Organization and Design: The Hardware/Software Interface ↗
                    </a>
                    <p>By David A. Patterson and John L. Hennessy. Foundational text covering RISC/MIPS architecture, processors, and pipelines.</p>
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
          <h1 className="main-title">Computer Architecture 2</h1>
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

export default Arc2;

