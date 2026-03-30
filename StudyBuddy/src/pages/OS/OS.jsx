import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OS.css';

function OS() {
  const [activeTab, setActiveTab] = useState('definitions');

  const defs260 = [
    { q: "What is a program?", a: "List of directions for the computer to execute, and it is used to manipulate data." },
    { q: "What is data? (I won't ask definition of data, but you got to understand the idea)", a: "He says whatever it is in the computer but the numbers. 🙂" },
    { q: "What does it mean to run the program? (executing program code instruction after instruction)", a: "Take the code of our program and execute it until the end of the program." },
    { q: "What computer component executes programs?", a: "CPU: hardware responsible to execute the program." },
    { q: "Where is the running program stored? What else (other than the program code) is stored there?", a: "In memory, specifically in RAM: memory device guaranteed used data, it stores data and manipulates it." },
    { q: "What do we know about RAM memory? (random-access, slow and volatile)", a: "RAM: meant to store data. CPU takes data from it. it takes roughly the same amount of time to access data, no matter if one data is further than the other one. volatile" },
    { q: "What is a memory stall?", a: "Unlucky scenario when the CPU pauses to wait for the RAM to deliver necessary data(remember that RAM is slow). One memory stall does not affect that much but more of them will because it slows the program down." },
    { q: "What long-term storage do we have?", a: "Hard Disks: HDD, cheap and very slow. SSD, faster than HDD." },
    { q: "What is an executable file?", a: "Contains machine code instructions for the CPU to execute." },
    { q: "How speed of CPU, RAM and hard disk compare to each other?", a: "CPU > RAM > hard disks" },
    { q: "What is cache memory? What is its purpose?", a: "Memory device that makes interaction between the CPU and the RAM memory faster. This is because CPU checks cache memory first to look for what it needs, if it does not contain what CPU needs then it goes to RAM. Cache memory stores the most recent data instructions used." },
    { q: "What is ROM memory? What does it store?", a: "It is read-only memory and it is a separate device/chip that stores programs necessary to start the computer. When the computer starts/ it is on, the CPU starts fetching information from the ROM" },
    { q: "What is a machine cycle?", a: "It is a sequence of steps that the CPU goes through in order to execute a single instruction." },
    { q: "What are the basic steps of a machine cycle? (we mentioned 3 basic steps)", a: "Fetching: take the instruction / copying memory from the CPU. Decode: prepare the CPU to execute. Execute: do what the instruction says. Write-back: the execution is placed somewhere." },
    { q: "What Frequency measures? What is the measurement unit of frequency? (Hz = times/second)", a: "Hertz: 1 time/second. Frequency measures how many signal CPU clocks per second." },
    { q: "What is a CPU clock? What is CPU frequency?", a: "Device in the CPU that generates synchronization pulses/signals. If the signal arrives, then it does the unit of work." },
    { q: "What is a CPU core? What does \"quad-core CPU\", \"octa-core CPU\" mean ?", a: "CPU cores are little CPUs inside of a CPU/ Small individual CPU/subCPU inside of a CPU. quad-core = CPU has 4 subCPUs inside it. octa-core = CPU has 8 subCPUs inside it." },
    { q: "How does memory look like? (linear array of bytes)", a: "A linear array of bytes." },
    { q: "What is byte? What is bit? How many bits are in a byte?", a: "A byte is 8 bits and a bit is the smallest unit of data that could be either 0 or 1." },
    { q: "What is a memory address?", a: "Unique identifier for a specific location in memory." },
    { q: "What is the memory address of a larger chunk of memory?", a: "The memory address of a larger chunk of memory is the address of the first byte of that chunk." },
    { q: "What is the length of the memory address? What does \"32-bit address\" mean?", a: "The length of the memory address depends on the system architecture. A 32-bit address means that the address is 32 bits long." },
    { q: "How much memory can we address/use with the given length of memory address?", a: "32 bits which is 4GB. 2^32 ≈ 4GB because 2^32 = 4,294,967,296" },
    { q: "How long should memory addresses be to address a given amount of memory?", a: "Example: 2000. 2^11 = 2048, so the memory should be 11 bits long." },
    { q: "Can memory contain nothing at all?", a: "No way for memory to contain nothing." },
    { q: "What is the relationship between C++ variable, RAM and memory address?", a: "When you declare a variable in c++, your compiler works with the OS and allocates space in RAM for that variable, and it assigns a memory address to that variable to find it in RAM." },
    { q: "What is C++ pointer?", a: "Pointer will store the address of the variable, they are normally 4 bytes but expect something like 8 bytes at least." },
    { q: "Data types size (char, short, int, long, long long, float, double)? Does signed/unsigned affect those sizes?", a: "char: 1, short: 2, int/float/long: 4, long long/double: 8. No, signed/unsigned does not affect size." },
    { q: "Hexadecimal numbers. Why do we use them? How to convert?", a: "Shorter than binary. Hex to Binary: convert each digit. Binary to Hex: group in fours from R to L." },
    { q: "What is \"word\"?", a: "Amount of data that your system/computer can handle in one action." },
    { q: "What is a PC?", a: "Program counter = register inside the CPU that stores the address of the next instruction to execute." },
    { q: "What is the language that the CPU understands?", a: "CPU only know machine language." },
    { q: "How can we execute programs written in higher-level languages?", a: "We use a compiler to translate high-level languages into machine language." },
    { q: "What is a compiler? What are compiler advantages?", a: "Program that translates programming languages to machine language. Advantage: fast." },
    { q: "What is an interpreter? What are interpreter advantages?", a: "Programs that run in the CPU or use the CPU and it takes the course code/ script and does what it says. Advantage: portable." },
    { q: "What is the classic picture of program layout in memory?", a: "Stack (grows down): local variables, saved registers, return addresses, function parameters, basically used for function purposes. Heap (grows up): dynamic allocation, Data Section (global/static), Text Section (program code)." },
    { q: "Is there a single section for all programs or does each have its own?", a: "Each one has its own sections. Stacks are never shared." },
    { q: "What do we mean by “stack is fast, heap is slow”?", a: "Memory allocation is faster in stack because it is continuous; heaps are fragmented. Reading/writing time is similar." },
    { q: "What is a static array vs dynamic array?", a: "Static: size fixed at compilation. Dynamic: size determined at run time." },
    { q: "What unit fits best for stack size limit (kB, MB, GB)?", a: "Usually measured in MB (e.g., 8 MB to 32 MB)." },
    { q: "What is stack overflow? How does it happen?", a: "Program crashes when stack exceeds size imposed by the OS. Common ways: large static arrays and deep recursion." },
    { q: "What is the mechanism of stack overflow by the deep recursion?", a: "Recursion functions because if the recursive function goes very deep then it causes stack overflow because it keeps stacking the same function until it stops/ no place to keep stacking."}
  ];

  const defs340 = [
    {q: "OS", a: "Program that manages hardware and provides other programs with an environment to run it/execute it."},
    {q: "Examples of different operating systems.", a:"Linux, Windows, macOS, iOS, Android, Unix, Windows Server."},
    {q: "What different types of computers exist? How different are OS for different computer types.", a: "- PC: General purpose computing, supports multiple users and multitasking, requires significant hardware resources. \n- Mobile: Touch screen optimized, power efficient/maximize battery life, closed ecosystems, so less user modification. \n- Server: Used to provide services to other computers, designed for high-performance and network management, supports multiple users and remote access. \n- Embedded: Used in specialized hardware, highly optimized for specific tasks and real-time processing."},
    {
    q: "What is operating system kernel (central part of OS).",
    a: "The central component of the Operating system that performs the most important OS tasks. OS Kernel does not compete with the CPU, it just sits there when someone needs its attention."
  },
  {
    q: "List of operating systems functions. For each item on this list, be ready to give a short description.",
    a: "Executing programs: OS has control loading the program from RAM, schedule them for execution until it is complted\nCPU management: The OS controls the time of the program. \nRAM management: Keeps track of memory usage, allocates and deallocates memory to processes, and prevents conflicts or memory leaks.\nI/O management: The OS handles I/O operations, buffering, and device drivers to ensure smooth data transfer.\nStorage management: OS deals with the management of the storage devices, programs do not do it. \nNetwork management: send and receive data from a network. \nSecurity: It is not only about making people not able to hack it. Controlling access rights from users. It makes sure that you do not alternate computer settings and controls the logins and passwords. When connecting a camera to a computer, it has to go through the OS to get permission. OS might have no problem with it but also might prompt and ask the user to give application permission. \nUser Interface: OS provides you with all kinds of tools, you interact with the computer to manage the computer. \nProcess communication: (IPC) is when we have multiple applications running on our computer, they “talk to each other” like sending files through the OS."
  },
  {
    q: "What is multitasking? How is it arranged?",
    a: "Technique that allows the operating system/computer to do FAKE simultaneous execution of multiple processes on one execution unit. Switching between multiple processes very fast. Multitasking does not mean running multiple things in one or doing multiple stuff in parallel, but it means to be switching from one program to another one in one execution :) This is arranged by the CPU scheduler in the OS."
  },
  {
    q: "What are user and kernel modes? What are user and kernel level programs/processes.",
    a: "User Mode(Safe instructions, User mode instructions): \nthink about arithmetic functions.\nAre available for all programs. \nBranching instructions: programs cannot mess up other programs if im using the incorrect branch.\nPrograms running in user mode are done only in user level. \nThis mode is way faster\n\nKernel Mode(Unsafe instructions): \nDoes not mean that it has security issues. \nIf CPU instructions are used incorrectly by a program, it might cause problems not only to itself but to other programs also. \nThey are there for all the most trusted programmers. \nArithmetic instructions. \nAlso called supervisor mode. \nUsing kernel mode instruction, your computer might not have kernel mode, but this means that you are using syscall, and operating system. \nThis mode involves the operating system which means that it is easier to program but it slightly takes more time to do so. \nTo use kernel mode, it has to ask the operating system in order to do so, so it takes more time. \n\nIt will not run kernel-mode instruction, but it will alert the operating system to stop the program if user mode is introduced. CPU will not execute the instruction. When the operating system uses the CPU, it says “KERNEL MODE” instead of “USER MODE”. This should happen only when a trusted user is using it. kernel mode still has access to user mode. CPU switches to kernel mode automatically when it is dealing with the operating system. For example, when doing syscall is automatically activates kernel mode. Once the OS is done with whatever it is doing, it will switch the CPU from kernel mode to user mode manually. When the CPU switches to kernel mode, you lose control over it, but when it switches back, you still have control over it. It is easy to switch form one mode to another mode."
  },
  {
    q: "What is virtual memory?",
    a: "a technique to use hard disk space as a fake extension of RAM and it is managed by the operating system. As long as your computer has memory then it only uses RAM, but if there is no memory then it uses this technique."
  },
  {
    q: "What are interrupts? What are interrupt handlers? What issues interrupts? What is the sequence of things that happen when the interrupt arrives?",
    a: "Interrupts: It is a signal about an important event that requires immediate attention. If you press a key on the keyboard, then it creates an interruption. What happens when it appears?\ngenerated by something, maybe by an input and output device.\ninterrupts travels to the CPU, and the CPU responds to the interrupt. The CPU pauses all currently running programs because the CPU has a more important thing to do. Every interrupt has a function on it, this function does what it does to respond to it. \nYour CPU switches to run this interrupt handler(ISR = interrupt service routine??)\nResume to the current process: when the interrupt is managed. \nInterrupt handler: response to signals event when it needs immediate attention. After that, the CPU goes back to its regular activity."
  },
  {
    q: "What are drivers?",
    a: "Small program that acts like an interpreter between OS and device, it helps OS to control the device. OS creators do not care about other creators out there. Hardware has small driver programs and these programs work with OS to tell them what to do because OS has different kinds of creators."
  },
  {
    q: "What is file? What is file system? What is logical disk?",
    a: "A file is a collection of data which is given a name. Hard disks only see a huge array of 0’s and 1’s.\nFiles system: a collection of data describing files on a hard disk including file physical locations. \nLogical disks: area of a physical hard disk that is described in a file system. It is not the physical disk itself, but a portion of it that the operating system treats as a separate, labeled unit (like Drive C: or D:)."
  },
  {
    q: "What are networking protocols?",
    a: "Set of rules on how to interpret data. The idea of network protocols is similar to the hard disk discussion, the networking adapter has no idea what it sends and receives because they are all strings of 0s and 1s."
  },
  {
    q: "What is operating systems API?",
    a: "Bunch of tools that OS provides to the programmer, tons of functions that you can use in your c and cpp program. The convenient cpp function that you use is the operating system API. Under the hood, this function uses syscall. Many API functions do not have syscall because they do not need it. Window API, cpp program will lock the program for Windows and different versions of Windows."
  },
  {
    q: "What is context switch?",
    a: "Is a sequence of steps that the CPU needs to execute to switch from one process to another process. It takes time, it is not free."
  }
  ];


  const renderContent = () => {
    switch (activeTab) {
      case 'definitions':
        return (
          <div className="tab-pane">
            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Definitions from CSCI 260</span>
              <span className="divider-line"></span>
            </div>
            
            <div className="definitions-grid">
              {defs260.map((item, index) => (
                <div className="subject-box active-stat" key={index}>
                  <div className="box-top">
                    <span className="box-label">{item.q}</span>
                  </div>
                  <p className="box-desc">{item.a}</p>
                </div>
              ))}
            </div>



            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">OS</span>
              <span className="divider-line"></span>
            </div>
            
            <div className="definitions-grid">
              {defs340.map((item, index) => (
                <div className="subject-box active-stat" key={index}>
                  <div className="box-top">
                    <span className="box-label">{item.q}</span>
                  </div>
                  <p className="box-desc">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'notes':
        return (
          <div className="tab-pane">
            <p className="ai-placeholder-text">Notes coming soon!</p>
          </div>
        );
      case 'ai':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <p className="ai-placeholder-text">AI Helper coming soon!</p>
            </div>
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
          <h1 className="main-title">Operating Systems</h1>
        </div>

        <div className="os-tabs-segmented">
          {['definitions', 'notes', 'ai'].map((tab) => (
            <div 
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'ai' ? 'AI Helper' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>
      </header>

        {renderContent()}
    
    </div>
  );
}

export default OS;