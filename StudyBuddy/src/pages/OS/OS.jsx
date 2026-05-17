import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './OS.css';

function Flashcard({ q, a }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if the user clicked outside the flashcard
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false); // Flip back to the front
      }
    };

    // Bind the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCardClick = (e) => {
    setIsFlipped(true); // Flip to the back
    e.stopPropagation(); // Stop the click from instantly triggering the document listener
  };

  return (
    <div 
      className="flashcard-container" 
      ref={cardRef}
      onClick={handleCardClick}
      style={{ cursor: isFlipped ? 'default' : 'pointer' }}
    >
      <div className={`flashcard-inner ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* Front of Card (Question) */}
        <div className="flashcard-front subject-box active-stat">
          <div className="box-top">
            <span className="box-label">{q}</span>
          </div>
        </div>

        {/* Back of Card (Answer) */}
        <div className="flashcard-back subject-box active-stat">
          <p className="box-desc">{a}</p>
        </div>

      </div>
    </div>
  );
}

function OS() {
  const [activeTab, setActiveTab] = useState('definitions');

  const defs260 = [
    { q: "What is a program?", a: "List of directions for the computer to execute, and it is used to manipulate data." },
    { q: "What is data? (I won't ask definition of data, but you got to understand the idea)", a: "He says whatever it is in the computer but the numbers. 🙂" },
    { q: "What does it mean to run the program? (executing program code instruction after instruction)", a: "Take the code of our program and execute it until the end of the program." },
    { q: "What computer component executes programs?", a: "CPU: hardware responsible to execute the program." },
    { q: "Where is the running program stored? What else (other than the program code) is stored there?", a: "In memory, specifically in RAM: memory device guaranteed used data, it stores data and manipulates it." },
    { q: "What do we know about RAM memory? (random-access, slow and volatile)", a: "RAM: meant to store data. CPU takes data from it. it takes roughly the same amount of time to access data, no matter if one data is further than the other one. volatile" },
    { q: "What is a memory stall?", a: "Unlucky scenario when the CPU pauses to wait for the RAM to deliver necessary data(remember that RAM is slow)." },
    { q: "What long-term storage do we have?", a: "Hard Disks: HDD, cheap and very slow. \nSSD: faster than HDD." },
    { q: "What is an executable file?", a: "Contains machine code instructions for the CPU to execute." },
    { q: "How speed of CPU, RAM and hard disk compare to each other?", a: "CPU > RAM > hard disks" },
    { q: "What is cache memory? What is its purpose?", a: "Memory device that makes interaction between the CPU and the RAM memory faster. This is because CPU checks cache memory first to look for what it needs, if it does not contain what CPU needs then it goes to RAM. Cache memory stores the most recent data instructions used." },
    { q: "What is ROM memory? What does it store?", a: "It is read-only memory and it is a separate device/chip that stores programs necessary to start the computer. When the computer starts/ it is on, the CPU starts fetching information from the ROM" },
    { q: "What is a machine cycle?", a: "It is a sequence of steps that the CPU goes through in order to execute a single instruction." },
    { q: "What are the basic steps of a machine cycle? (we mentioned 3 basic steps)", a: "Fetching: take the instruction / copying memory from the CPU. \nDecode: prepare the CPU to execute. \nExecute: do what the instruction says. \nWrite-back: the execution is placed somewhere." },
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
    { q: "What is the classic picture of program layout in memory?", a: "Stack (grows down): local variables, saved registers, return addresses, function parameters, basically used for function purposes. \nHeap (grows up): dynamic allocation \nData Section (global/static) \nText Section (program code)." },
    { q: "Is there a single section for all programs or does each have its own?", a: "Each one has its own sections. Stacks are never shared." },
    { q: "What do we mean by “stack is fast, heap is slow”?", a: "Memory allocation is faster in stack because it is continuous; heaps are fragmented. Reading/writing time is similar." },
    { q: "What is a static array vs dynamic array?", a: "Static: size fixed at compilation. \nDynamic: size determined at run time." },
    { q: "What unit fits best for stack size limit (kB, MB, GB)?", a: "Usually measured in MB (e.g., 8 MB to 32 MB)." },
    { q: "What is stack overflow? How does it happen?", a: "Program crashes when stack exceeds size imposed by the OS. Common ways: large static arrays and deep recursion." },
    { q: "What is the mechanism of stack overflow by the deep recursion?", a: "Recursion functions because if the recursive function goes very deep then it causes stack overflow because it keeps stacking the same function until it stops/ no place to keep stacking."}
  ];

  const OS_defs = [
    {q: "OS", a: "Program that manages hardware and provides other programs with an environment to run it/execute it."},
    {q: "Examples of different operating systems.", a:"Linux, Windows, macOS, iOS, Android, Unix, Windows Server."},
    {q: "What different types of computers exist? How different are OS for different computer types.", a: "- PC: General purpose computing, multitasking, requires hardware resources. \n- Mobile: Touch screen optimized, power efficient. \n- Server: provides services to other computers, high-performance and network management, supports multiple users and remote access. \n- Embedded: Used in specialized hardware."},
    {
    q: "What is operating system kernel (central part of OS).",
    a: "The central component of the Operating system that performs the most important OS tasks. OS Kernel does not compete with the CPU, it just sits there when someone needs its attention."
  },
  {
    q: "List of operating systems functions. For each item on this list, be ready to give a short description.",
    a: "Executing programs: controls programs.\nCPU management: controls CPU time. \nRAM management: Keeps track of memory usage, allocates and deallocates memory to processes, and prevents leaks.\nI/O management: handles I/O operations.\nStorage management: manages storage devices. \nNetwork management: send and receive data from a network. \nSecurity: Controls access rights from users. \nUser Interface: provides all the tools for you to interact with the computer. \nProcess communication: like sending files through the OS."
  },
  {
    q: "What is multitasking? How is it arranged?",
    a: "Technique that allows the operating system/computer to do FAKE simultaneous execution of multiple processes on one execution unit. Switching between multiple processes very fast. Multitasking does not mean running multiple things in one or doing multiple stuff in parallel, but it means to be switching from one program to another one in one execution :) This is arranged by the CPU scheduler in the OS."
  },
  {
    q: "What are user and kernel modes? What are user and kernel level programs/processes.",
    a: "The CPU runs in two distinct states:\n- User Mode (Safe & Restricted): The default, faster execution state. In this mode, the CPU is restricted to safe instructions (like basic arithmetic and local branching) and will flat-out refuse to execute high-privilege instructions. \n- Kernel Mode (Unsafe & Unrestricted): Also called supervisor mode. In this state, the CPU is allowed to execute any instruction. It is reserved for the Operating System and trusted programmers because misusing these instructions can crash the whole system. It is slightly slower because it involves OS oversight."
},
  {
    q: "What is virtual memory?",
    a: "a technique to use hard disk space as a fake extension of RAM and it is managed by the operating system. As long as your computer has memory then it only uses RAM, but if there is no memory then it uses this technique."
  },
  {
    q: "What are interrupts? What are interrupt handlers? What issues interrupts? What is the sequence of things that happen when the interrupt arrives?",
    a: "Signal about an important event that requires immediate attention. Keyboards can issue interupts when you press a key. \nWhat happens when it appears? interrupts travels to the CPU, and the CPU responds. The CPU pauses all currently running programs because it has a more important thing to do. Every interrupt has a function on it, this function does what it does to respond to it. \nYour CPU switches to run this interrupt handler(ISR = interrupt service routine??)\nResume to the current process: when the interrupt is managed. \nInterrupt handler: response to signals event when it needs immediate attention. After that, the CPU goes back to its regular activity."
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

  const process_defs = [
  {
    q: "What is process?",
    a: "Process is a program in execution. Something that links in our computer, requires resources, asks the OS for services/help, can also ask for exclusive control of the I/O device, reads files, can also be called tasks."
  },
  {
    q: "What is the difference between process and program?",
    a: "A program is a list of directions for the computer to execute, and it is used to manipulate data and process is when this list of directions is in execution."
  },
  {
    q: "List five process states (use the naming from our textbook and class please)",
    a: "New: process created, not ready to use the CPU. \nReady: in the ready-queue, ready to use the CPU. \nRunning: CPU executing the process. \nWaiting: waiting for possibly an IO device, not ready to continue executing.\nTerminated State: process has finished."
  },
  {
    q: "What is ready queue? How many ready queues do you expect in the system?",
    a: "a collection of processes that are loaded into memory waiting and ready to use CPU. Typically, there is one ready queue per CPU in a system. "
  },
  {
    q: "What is I/O queue? How many I/O queues do you expect in the system?",
    a: "An I/O queue is a collection of processes that are waiting to use an I/O device. You can expect one I/O queue for every I/O device."
  },
  {
    q: "What happens to a process when it requests I/O operation (like file reading) in the classic “blocking” scenario?",
    a: "Means the process immediately yields CPU to someone else. In a classic \"blocking\" scenario, the process requesting the I/O operation is paused and moved to a waiting state until the operation is completed, allowing the CPU to handle other tasks in the meantime."
  },
  {
    q: "Where does the process go once the I/O request is complete?",
    a: "The process returns to the ready queue again until it is completely executed."
  },
  {
    q: "Understand what happens to processes in reality when process states change (don’t be fooled by process “movements” in typical visualizations).",
    a: "When process states change, the operating system updates internal data structures to reflect the new state, like marking a process as \"Running\" or \"Waiting.\" These changes involve managing scheduling and resource allocation rather than any physical movement of the process. Visualizations simplify this for clarity but don’t represent what happens in reality. "
  },
  {
    q: "Process Control Block (PCB). What typical components can you see there?",
    a: "PCB: The OS record for a process. Contains:\n- PID: Unique process ID.\n- Program Counter (PC): Address of the next instruction to execute.\n- Registers: Saved state of CPU registers.\n- Scheduling Info: Priority and CPU time used.\n- Memory Info: RAM allocated and stack pointer.\n- Open Files: List of files currently in use.\n- Parent ID: PID of the process that created it."
  },
  {
    q: "Context switch. Why context switching has a small performance overhead associated with it? How does that performance overhead affect system calls?",
    a: "1. Why the overhead? Saving and loading process states to/from RAM is inherently slow. \n2. Effect on system calls: Every system call forces TWO context switches (User Process -> OS -> User Process), doubling this performance penalty."
  },
  {
    q: "What is POSIX?",
    a: "Portable Operating System Interface, is a set of standards that define how Unix-like operating systems should behave to maintain compatibility between operating systems."
  },
  {
    q: "fork()",
    a: "1. do a copy with a different PID. \n2. the parent continues execution after being forked. \n3. The child process will also run and it will start executing after the fork() function/operation.\n4. fork() return: parent process receives positive values and child processes receive zeros."
  },
  {
    q: "exec(fileName)",
    a: "erase the original process content and fill the process with the new instructions and data from fileName"
  },
  {
    q: "exit()",
    a: "put the process in a terminated state.. "
  },
  {
    q: "wait()",
    a: "used by the parent process and it pauses the calling process until the child terminates."
  },
  {
    q: "Why the existence of orphan processes is undesirable (what is the harm of orphan processes)?",
    a: "Basically an Orphan process is when a parent calls exit() without using wait() first. When this happens, our child process has no parent to return its exit status to. This can cause resource leakage, which can be harmful. "
  },
  {
    q: "Zombie process",
    a: "Process in the terminated state. Process that calls exit() whose parent has not called wait() yet or has not collected the waiting status yet. The existence of zombie processes is fine but orphan processes are not fine. But the process control log is still there and it takes up RAM memory, it’s fine but not too long. Active processes take resources."
  },
  {
    q: "What are the properties of heap (it is fragmented, full of holes)? How does it affect the typical dynamic memory allocation like using the operator new?",
    a: "takes longer time to allocate."
  },
  {
    q: "What are the properties of stack?",
    a: "contiguous, quick to allocate and it has a limit to how much memory it can allocate, called a stack overflow."
  }
];


const ipc_defs = [
  {
    q: "What is IPC?",
    a: "inter-process communications, a mechanism that will allow cooperating processes to exchange data."
  },
  {
    q: "What are two general classes of IPC (shared memory and message passing)?",
    a: "Shared memory category and Message passing category"
  },
  {
    q: "What is the idea of shared memory? What are advantages and disadvantages of shared memory?",
    a: "Region created by the OS where multiple processes can write and read. The idea is that processes can ask the OS to give them a chunk of memory so that they can read and write things in that memory.\n- Disadvantages: error-prone, using shared requires a lot of thinking and planning and requires process synchronization. Needs extra checks to avoid errors.\ncannot use shared memory when two computers are connected through a network because they do not have direct access to each other.\n- Advantage: faster because it only needs OS help once and it is when creating the region in memory."
  },
  {
    q: "What is the idea of message passing? What are the advantages and disadvantages of message passing?",
    a: "Process A passes data to OS to process B, all data exchanges happen through OS. Without the OS, there is no way for processes to communicate with each other.\nDisadvantages\nslower compared to shared memory interaction because every message passing has to be done through the OS. Using OS help takes extra time. context switching\nAdvantages\nless error-prone, message passing is easier so it has fewer errors\nsending data through web server to communicate with other computers"
  },
  {
    q: "Can shared memory kind of IPC communication be used for two processes running on two different computers? Why do you think so?",
    a: "cannot use shared memory when two computers are connected through a network because they do not have direct access to each other."
  },
  {
    q: "What is network (a bunch of computers connected together to exchange data)?",
    a: "A bunch of computers connected together to exchange data."
  },
  {
    q: "What is IP address? How does classic IP address (IPv4) look like?",
    a: "numerical label assigned to each device connected to a network. A classic IPv4 address is 4 numbers separated by periods and each number is between 0 and 255. (e.g., 192.168.1.1)"
  },
  {
    q: "Why IP address along isn’t enough for networking communications?",
    a: "An IP address alone isn’t enough for networking communication because it only identifies the host (device) on a network, not which port on the device. Multiple programs can run on one device, so a port number is also needed to identify the program the data is meant for."
  },
  {
    q: "What is networking port?",
    a: "a unique numeric identifier assigned to every process in the system that wants to use the network"
  },
  {
    q: "What are well-known ports? (the answer “first 1024 ports” is worth 0 points)",
    a: "ports with predefined purposes. Starts with 0-1023 (his definition)"
  },
  {
    q: "What is (networking) socket?",
    a: "an endpoint for communication\nnetworking socket = combination of IP Address + networking port\n55.220.0.51:81"
  },
  {
    q: "What is server (like in “web server” or “email server”)?",
    a: "a computer on the network that receives requests and provides services to other computers on the network."
  },
  {
    q: "What is client?",
    a: "computer that can obtain information from a server."
  },
  {
    q: "What is communication protocol?",
    a: "set of rules and standards that defines how data is formatted, transmitted, and received between devices on a network."
  },
  {
    q: "What is URL?",
    a: "is the address to access resources on the internet, such as web pages, images, videos, or files. It is human understandable text used to access online web services."
  },
  {
    q: "What is DNS?",
    a: "separate computer that takes input URL and provides IP Address of the destination computer for the "
  },
  {
    q: "What is RPC?",
    a: "Remote Procedure Call (RPC): interprocess communication tool that allows you to easily start execution of a function of a faraway computer/server computer/computer on the internet from your computer."
  }
];


const sync_defs = [
  {
    q: "What is thread of execution (a.k.a. just thread)?",
    a: "independent execution of the same program code using a separate program counter."
  },
  {
    q: "What is TLS (thread local storage)?",
    a: "Tool that allows threads to have their own private copies of variables that appear global. Each thread might need its own copy of certain data. \nFor example, in a transaction-processing system, we might service each transaction in a separate thread. Furthermore, each transaction might be assigned a unique identifier. To associate each thread with its unique transaction identifier, we could use thread-local storage."
  },
  {
    q: "What is a thread pool?",
    a: "The general idea behind a thread pool is to create a number of threads at start-up and place them into a pool, where they sit and wait for work. When a server receives a request, rather than creating a thread, it instead submits the request to the thread pool and resumes waiting for additional requests."
  },
  {
    q: "How to create a thread with std::thread?",
    a: "#include <iostream>\nusing  namespace std;\n#include <thread>\n\nvoid Greet(const string &name){\ncout << name << endl;\n}\nint main(){\nstd::thread t1{Greet, “Thread 1”};\ncout << “main” << endl;\nreturn 0;\n}"
  },
  {
    q: "What does std::thread::join() do? Why do we need it?",
    a: "join() pauses/blocks the thread that called it until the target thread completely finishes its execution. W indeed it because it prevents the program from crashing(std::terminate), premature shutdowns(main exists before the child threads, and safe synchronization."
  },
  {
    q: "Why we might want to create new threads of execution instead of new processes?",
    a: "memory efficient.\nfaster to create and delete\ncontext switching is faster\nbetter process utilization\nshared memory"
  },
  {
    q: "Why we might want to create new processes instead of new threads?",
    a: "when we want to call exec(fileName): call this API function, completely replaces the program code with the fileName. You cannot call exec(fileName) from a thread. You can but threads use the same code as other threads, so if you call exec(fileName), the whole program will be deleted, affecting other threads.\nfault independent: if you have a multithreaded program, and one thread messes up something, will affect the whole process."
  },
  {
    q: "What do threads belonging to the same process share? What they don’t share?",
    a: "Threads share: \nprogram code, text section. \ndata section, which contains global variables and static variables. \nheap, where dynamically allocation happens, is also shared between threads.\nThreads do not share: \nEach thread has its own stack. Programs are responsible to not overflow the stack."
  },
  {
    q: "What are synchronization problems?",
    a: "Programing problems that arise when you create multithreaded code or a program that exchanges data with other program."
  },
  {
    q: "What synchronization hazards do you know?",
    a: "Race condition and deadlock"
  },
  {
    q: "What is shared resource?",
    a: "a section shared by multiple processes."
  },
  {
    q: "What is race condition (a.k.a. data race)?",
    a: "error when we corrupt a shared resource because multiple threads/processes use it simultaneously and at least one of them tries to modify the shared source. (and the outcome of the executions depends on the ordered at which they were executed)"
  },
  {
    q: "Explain how race condition can happen?",
    a: "Race condition happens when two processes or threads are accessing data and at least one of them is modifying it.\nConsider {x = x + 1}. Translates into:\n1. Load x into a register.\n2. Increment the register\n3. Store result back to x.\nIf 2 threads do this simultaneously, both read the same, old value of x, both increment x independently and both write back the same incremented value. 1 increment is lost."
  },
  {
    q: "Can race condition happen if only one party modifies the data and others are just reading? Can race condition happen if everybody is just reading?",
    a: "Yes, race conditions still happen. But if everyone is just reading, then it doesn’t happen."
  },
  {
    q: "What is critical section problem?",
    a: "the problem of writing our code in such a way that the execution of different threads/processes does not overlap.\nCritical section: fragment of code that should not overlap with other processes’ critical section"
  },
  {
    q: "What are the three properties of a good solution of a critical section problem.",
    a: "mutual exclusion: only one critical section is active/can run at the time; one thread to the critical section, and the other threads cannot enter until the one that is in the critical section. \nprogress: shared resource is not idle if someone wants it. There should not be a situation where someone waits for the critical section when no one is in it.\nbounded waiting: make sure no one waits forever."
  },
  {
    q: "Explain the idea of locking shared resources.",
    a: "You would lock shared resources when a thread is in a critical section by acquiring a lock before entering a critical section and releasing it after leaving. Other threads must wait."
  },
  {
    q: "What does it mean atomic function?",
    a: "It’s a function that has two properties: \n1. interruptible: once it starts, it finishes. I cannot see this function half-completed. \n2. Only one copy of the atomic function can be executed at a time: Let’s say two threads super simultaneously arrive at the function and they both want to run it at the same time. Only one will be run, the other one waits for it to finish."
  },
  {
    q: "What does it mean if the function is hardware implemented?",
    a: "there is no program code for it, no general CPU instructions written in memory. The function is implemented with hardware circuitry and called with a single special CPU instruction."
  },
  {
    q: "What is test_and_set instruction and what does it do?",
    a: "function implemented in hardware that tests the value of a lock and sets the lock to be true no matter the original one, and returns the original value.\nbool test_and_set(bool &lock){\nbool old = lock;\nlock = true;\nreturn old;\n}"
  },
  {
    q: "Simple solution of the critical section problem using test_and_set instruction. What is suboptimal in this solution?",
    a: "while(test_and_set(globLock)== true){};\n//CRITICAL SECTION\nglobLock = false;\n(Suboptimal because it doesn’t have the “bounded waiting” property, in other words, it is not starvation-free)."
  },
  {
    q: "Solution of the critical section problem using test_and_set instruction with the \"bounded waiting\" property.",
    a: "#define N 16\nbool wait[N]; // N = number of threads/processes\nbool lock = false; \n\nwait[i] = true;\nwhile(test_and_set(lock) && wait[i]){};\nwait[i] = false;\n\n// CRITICAL SECTION\nint j = (i+1)%N;\nwhile(wait[j] != true && j!= i)\n j = (j+1)%N;\n\nif(i!=j)\n wait[j] = false;\nelse\n lock = false;"
  },
  {
    q: "What does busy waiting mean? What is spinlock? Why is it inefficient? When is it still good?",
    a: "busy waiting: waiting in an empty loop using the CPU constantly to check for something like a lock. It's not good because we wait and do nothing and use the CPU. \nSpinlock: lock that continuously uses the CPU waiting to access the lock. \nIt is still good when expected wait times are short and it is “cheaper” to wait while using the CPU than to perform context switch to another process."
  },
  {
    q: "What is mutex? What does process do if it needs a mutex that is busy?",
    a: "Lock that you can acquire and release. If it needs a mutex that is busy, it pauses somehow and waits for mutex to be free again before proceeding further."
  },
  {
    q: "Be ready to use C++ std::mutex to protect critical sections of code.",
    a: "#include <mutex>\nint glob=0;\nstd::mutex glob_mutex; \n\nglob_mutex.lock(); \nglob++; // Critical Section\nglob_mutex.unlock();"
  },
  {
    q: "Producer-Consumer problem (a.k.a. Bounded Buffer problem) and its solution.",
    a: "synchronization problem where the producer is one process and the consumer another one. The producer produces items and puts them in the buffer(shared resource) and the consumer consumes the items that are in the buffer. The race condition happens when the producer has not finished producing the item and the consumer wants to already take it. We try to avoid the race condition and arrange efficient use of resources, so we make the producer sleep once the buffer is full and wake up when it is empty. Consumers pause when the buffer is empty and wake as soon as the item appears. We do it by using two semaphores."
  },
  {
    q: "Readers-Writers problem and its solution.",
    a: "The Reader-Writers problem is where we have readers reading shared data while there is a writer modifying that shared data. This causes errors and corrupted results. It’s a synchronization problem that spurs race conditions. The solution involves making the writers wait while the readers are reading. Then, the writers can access the data when no reader is accessing it."
  },
  {
    q: "Describe Dining Philosophers problem. What do philosophers represent? What do chopsticks represent?",
    a: "synchronization problem at which Processes want to use a shared resource but cannot use it because of deadlock that's why it waits indefinitely for a shared resource. Philosophers represent processes and chopsticks represent shared resources."
  },
  {
    q: "What is deadlock?",
    a: "a bad situation when a group of processes or threads wait for each other and no one goes forward."
  },
  {
    q: "Name 3 approaches to solving dining philosophers problem.",
    a: "-add extra chopstick: not an option, this solution is kind of ok on paper, but it’s not in practice.\n-pick chopsticks together/simultaneously: deadlock is not possible, because you either succeed with both or fail.\n-asymmetric solution: some philosophers grab left and some right."
  }
];


const memory_defs = [
    {
    q: "What is RAM memory purpose?",
    a: "The purpose of RAM memory is to store data and program instructions that the CPU needs during execution. It's fast, temporary, and allows quick read/write access."
  },
  {
    q: "What is memory address? How much memory you can address with addresses of a given size (for example, 64-bit addresses)",
    a: "unique identifier used by a computer's CPU to access a specific location in the system's memory (RAM)"
  },
  {
    q: "What is physical address?",
    a: "coordinates of a specific byte in real physical RAM. Shows bytes in the physical memory."
  },
  {
    q: "Why physical addresses are inconvenient for modern programs?",
    a: "Because you cannot expect your program to be located in the same location in RAM. Inconvenient for processes to deal with real memory. It causes overlap/conflicts between processes, and it’s hard to manage memory protection and isolation"
  },
  {
    q: "What is logical address?",
    a: "Memory coordinates, the way that processes see them and it is generated by the CPU."
  },
  {
    q: "What is physical address space? How many physical address spaces are there in the system?",
    a: "collection of all physical addresses available in a system. 1 physical address because its only one RAM"
  },
  {
    q: "What is logical (a.k.a. virtual) address space? How many logical address spaces are there in the system?",
    a: "Collection of all logical addresses available to a process. Each process lives in its own space illusion."
  },
  {
    q: "What kind of address does the CPU fetch with instructions?",
    a: "logical address"
  },
  {
    q: "What kind of address does the CPU send to RAM with a load/store request?",
    a: "logical"
  },
  {
    q: "What kind of address arrives to RAM with the load/store request?",
    a: "physical address"
  },
  {
    q: "What is MMU? What is its purpose?",
    a: "Memory management unit: hardware responsible to convert logical addresses to physical address"
  },
  {
    q: "What is contiguous memory management?",
    a: "technique that allocates each/every process in one chunk of memory."
  },
  {
    q: "What is fragmentation? What is external fragmentation? // What is internal fragmentation?",
    a: "fragmentation: phenomenal of wasting RAM memory because of inefficient usage.\nExternal Fragmentation: type of fragmentation happens because of very small holes not allocated to any process and too small to hold any realistic large process.\ninternal fragmentation: type of fragmentation where RAM is wasted because we give a process more RAM than what it needs. Internal fragmentation doesn't do as much damage as external fragmentation."
  },
  {
    q: "What kind of fragmentation contiguous memory management suffers from?",
    a: "external fragmentation"
  },
  {
    q: "What is paging?",
    a: "Paging is a technique that divides memory into fixed-size blocks (pages/frames). Avoids contiguous allocation issues. It gives a lot of flexibility because you can place any page in a vacant frame. If it's not being used it doesn't have to be put in memory.\nkB < page size < MB → 4kB in most cases"
  },
  {
    q: "What is page? What is frame?",
    a: "page: portions of logical address space. frame: portions of physical address space."
  },
  {
    q: "What kind of fragmentation paging suffers from?",
    a: "internal"
  },
  {
    q: "How do sizes of pages and frames relate?",
    a: "pages and frames are always of the same size."
  },
  {
    q: "What is page offset?",
    a: "refers to how far a specific memory address is from the start of a page in a paged memory system."
  },
  {
    q: "What is page table?",
    a: "data structure that stores page(virtual address) to frame(physical address) mapping."
  },
  {
    q: "How many page tables are there in a system?",
    a: "1 for each process"
  },
  {
    q: "What is TLB? What is its purpose?",
    a: "TLB: device inside MMU that stores most currently useful entries from page table."
  },
  {
    q: "What is TLB hit? What is TLB miss?",
    a: "TLB hit: situation when TLB has the required page table entry that MMU needs\nTLB miss: situation when TLB doesn't have page table entry that MMU needs right now. In this case, TLB checks RAM. Expensive because it goes to RAM and get the entry back"
  },
  {
    q: "Is it necessary to have the whole program in memory to run it?",
    a: "no, because we can load specific chunk of processes in ram"
  },
  {
    q: "What is page fault?",
    a: "Situation when we need a page that is not in RAM right now. In this case, program pauses and OS load it from disk"
  },
  {
    q: "What are the options for MMU to deal with the page table (we discussed three of them)? What are the disadvantages of those options we don't use?",
    a: "1. Keep page table inside MMU(disadvantage: slow context switch). \n2.Keep inside RAM(disadvantage: RAM slow). \n3. Store the most important pages in MMU/having a TBL(disadvantage: context switch and slow because it has to check RAM)."
  },
  {
    q: "What is on-demand paging (a.k.a demand paging)?",
    a: "Strategy used in virtual memory systems which consist of loading pages only as they are needed/demanded during program execution"
  }
];

const cpu_defs = [
  {
    q: "What is the CPU scheduling about?",
    a: "is about OS choosing which process is the next one to use the CPU and for how long. OS has a component called short term scheduler, which is a component responsible to choose the next process to use the CPU."
  },
  {
    q: "What does the choice of a specific CPU scheduling algorithm depend on?",
    a: "there are different CPU scheduling algorithms such as our home project, or having a ready queue which is FIFO. Different OS, use different CPU scheduling algorithm depending on the purpose."
  },
  {
    q: "What is CPU burst? What is I/O burst?",
    a: "CPU burst: period of time when a process wants to use CPU only. think about your program running, and it needs to do I/O operation.\nI/O burst: period of time when a process wants to use an I/O device. what happens after it? goes back to the ready queue."
  },
  {
    q: "Why can it be beneficial to schedule short CPU burst processes to the CPU before long CPU burst processes?",
    a: "short CPU burst processes before the long ones because you keep the ready queue short and minimize the waiting time."
  },
  {
    q: "What does it mean a CPU scheduling algorithm is preemptive or non-preemptive?",
    a: "Preemptive: when a process is in the middle of the CPU burst and is sent back to the ready queue because the CPU is needed for something more important.\nnon-preemptive: means that if a process gets to use the CPU, it runs until the end/ as long as it needs."
  },
  {
    q: "What does it mean a CPU scheduling algorithm is starvation free?",
    a: "no process in the ready queue will wait forever, the OS uses such a method that every process in the ready queue will use the CPU, no one can wait for the CPU forever. We don't care about waiting, but about not waiting for too long. It is nice to have it, but if we don't have this property it is also ok."
  },
  {
    q: "First-Come-First-Served algorithm. Its idea, its advantages and disadvantages.",
    a: "The idea is to treat the ready queue as a real line and it is non preemptive.\nAdvantages: \nfast: to choose the next one to use the CPU\nstarvation- free\nDisadvantages: \nlong waiting times: can keep ready queue long"
  },
  {
    q: "Round-Robin algorithm. Its idea, its advantages, and disadvantages.",
    a: "The idea is to treat the ready queue as a real line but this one is preemptive.\nThere is a time slice- max amount of time that a process can use the CPU in one take. After it runs the time slice amount, it goes to the ready queue and waits and finishes the remaining. \nExample: time slice = 100ms, CPU burst = 150ms. It runs 100ms, then go to the back of the ready queue, and wait. It finished the remaining 50ms.\nAdvantages: \nfast: to choose the next one to use the CPU\nstarvation- free\nit is fair\nDisadvantages: \nlong waiting times: can keep the ready queue long. "
  },
  {
    q: "Priority scheduling. Its idea, its advantages, and disadvantages.",
    a: "Every process has a priority, and it specifies how important a process is\nadvantages: . \nGive priority to the process with the highest priority. \nIt allows us to give priority to processes that we consider important.\ndisadvantages: \nnot starvation- free"
  },
  {
    q: "Aging.",
    a: "method to fight the starvation problem. priority increases by one if it sits there for a certain amount of seconds/time."
  },
  {
    q: "Priority inversion and priority donation.",
    a: "Priority Inversion: is a bad situation when a higher priority process waits for a lower priority process without a good reason. There is no reason for high to wait for medium. \nPriority donation: method to counter/fix priority inversions. As long as high waits for low, low process becomes as important as high."
  },
  {
    q: "Real-time scheduling.",
    a: "real-time scheduling is an approach where the OS ensures that the real-time process meets the execution deadline. Real time process is a process that has cpu scheduling deadline. OS should know about real time programs"
  },
  {
    q: "Soft and hard real-time systems.",
    a: "soft real-time: means OS knows about the existence of real time processes, and that they require special attention. I will try to meet the CPU scheduling deadline of a process, if I don't meet it, then i will just leave it there. But it gives no guaranties.\n\nhard real-time: the whole system has to meet the CPU scheduling deadline of processes and not meeting them is consider not acceptable."
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
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>


            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">OS</span>
              <span className="divider-line"></span>
            </div>
            
            <div className="definitions-grid">
              {OS_defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>



            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Process</span>
              <span className="divider-line"></span>
            </div>
            
            <div className="definitions-grid">
              {process_defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>

            
            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">IPC</span>
              <span className="divider-line"></span>
            </div>
    
            <div className="definitions-grid">
              {ipc_defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>



            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Synchronization </span>
              <span className="divider-line"></span>
            </div>
    
            <div className="definitions-grid">
              {sync_defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>

            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Memory </span>
              <span className="divider-line"></span>
            </div>
    
            <div className="definitions-grid">
              {memory_defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>


            <div className="course-divider">
              <span className="divider-line"></span>
              <span className="divider-text">CPU Scheduling </span>
              <span className="divider-line"></span>
            </div>
    
            <div className="definitions-grid">
              {cpu_defs.map((item, index) => (
                <Flashcard key={index} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        );
      case 'notes':
        return (
            <div className="tab-pane notes-container">
                <img 
                src="/memory.png" 
                alt="memory" 
                className="notes-image" 
            />
            <img 
                src="/process_states.png" 
                alt="Process States" 
                className="notes-image" 
            />
            <img 
                src="/fork.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/fork2.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/fork3.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/thread.png" 
                alt="Fork Problem" 
                className="notes-image" 
            />
            <img 
                src="/addresses.png" 
                alt="Addresses" 
                className="notes-image" 
            />
            <img 
                src="/page_table.png" 
                alt="Page Table" 
                className="notes-image" 
            />
            <img 
                src="/page_question.png" 
                alt="Page Question" 
                className="notes-image" 
            />
            <img 
                src="/raceCondition.png" 
                alt="Page Question" 
                className="notes-image" 
            />
            </div>
    
        );
      case 'project':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <h4>General Specifications</h4>
                <br></br>
                <p className="ai-placeholder-text">- Make sure to ONLY have SimOS.cpp and SimOS.h filles, no main.cpp, no test.cpp.</p>
                <p className="ai-placeholder-text">- Have your libraries in the .h and not the .cpp. It might not compile if you have it in the .cpp.</p>
                <p className="ai-placeholder-text"></p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>SimOS(int numberOfDisks, unsigned long long amountOfRAM, unsigned int pageSize)</h4>
                <br></br>
                <p className="ai-placeholder-text">- numberOfDisks is the total of disks that the OS has.</p>
                <p className="ai-placeholder-text">- amountOfRAM is the total amount of memory to store the processes.</p>
                <p className="ai-placeholder-text"></p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void NewProcess()</h4>
                <br></br>
                <p className="ai-placeholder-text">- The first process' PID is 1, then it just keeps incrementing. DO NOT reuse PIDs even though the process is not in the system.</p>
                <p className="ai-placeholder-text">- If nobody is using the CPU, the new process should use the CPU. Otherwise, push it to the ready queue.</p>
                <p className="ai-placeholder-text">- Ready queue should be FIFO.</p>
                <p className="ai-placeholder-text">- CPU can be idle, which means that CPU can be 'free'/no process using it.</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void SimFork()</h4>
                <br></br>
                <p className="ai-placeholder-text">- Fork the current process that's using the CPU and push it to the end of the ready queue.</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void SimExit()</h4>
                <br></br>
                <p className="ai-placeholder-text">- Current process terminates.</p>
                <p className="ai-placeholder-text">- Release the memory used.</p>
                <p className="ai-placeholder-text">- Terminate it's children, which also means children's children and so on. Alsc called cascading termination. TIP: have a helper function.</p>
                <p className="ai-placeholder-text">- Check if its parent is called SimWait(), push the parent back to the ready queue if so.</p>
                <p className="ai-placeholder-text">- If the parent has not called SimWait(), then make the child(current process) zombie, but still release the memory from the system.</p>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void SimWait()</h4>
                <br></br>
                <p className="ai-placeholder-text">- The current process is moved away from the CPU and the ready queue because it's waiting for at least one of the children to call SimWait. What if it doesn't have children? IDK ask Shostak</p>
                <p className="ai-placeholder-text">- If one of the children is already a zombie, then just delete the zombie. (Not all of them, just delete one of them. Could be any) The parent(currently using the CPU) keeps using the CPU.</p>


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void TimerInterrupt()</h4>
                <br></br>
                <p className="ai-placeholder-text">- Push current process to the back of the ready queue, and run the next process in the ready queue.</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void DiskReadRequest(int diskNumber, std::string fileName)</h4>
                <br></br>
                <p className="ai-placeholder-text">- diskNumber is the number of the disk that we are trying to use to do reading of the file callled fileName.</p>
                <p className="ai-placeholder-text">- Remember that the enumeration of the disks starts from zero.</p>
                <p className="ai-placeholder-text">- Every single I/O device has one ready queue, so means that every single disk has one ready queue.</p>
                <p className="ai-placeholder-text">- The process that's currnetly using the CPU, should yield the CPU to the next process in the queue. If the ready queue is empty, then the CPU is free</p>
                <p className="ai-placeholder-text">- TIP: you can have a data structure storing the processes that are doing I/O requests.</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void DiskJobCompleted(int diskNumber)</h4>
                <br></br>
                <p className="ai-placeholder-text">- The process that's currnetly doing the job, ends its dutty and resturns back to the ready queue to use the CPU. </p>
                <p className="ai-placeholder-text">- The next one in the waiting queue for that specifc disk goes next to use the disk.</p>


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>void AccessMemoryAddress(unsigned long long address)</h4>
                <br></br>
                <p className="ai-placeholder-text"></p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>int GetCPU()</h4>
                <br></br>
                <p className="ai-placeholder-text">- Returns the PID of the process currently using the CPU. </p>
                <p className="ai-placeholder-text">- If CPU is idle it returns NO_PROCESS/zero.</p>


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>{"std::deque<int> GetReadyQueue()"}</h4>
                <br></br>
                <p className="ai-placeholder-text">- Return a deque with the processes in the ready queue.</p>
                <p className="ai-placeholder-text">- DO NOT retrun the process thats currently using the CPU.</p>


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>MemoryUsage GetMemory()</h4>
                <br></br>
                <p className="ai-placeholder-text">- Returns the vector of memory used.</p>
                <p className="ai-placeholder-text">- Frames, not pages.</p>
                <p className="ai-placeholder-text">- GetMemory returns MemoryUsage vector describing locations of all processes in memory.</p>
                <p className="ai-placeholder-text">- Terminated “zombie” processes don’t use memory, so they don’t contribute to memory usage.</p>
                <p className="ai-placeholder-text">- Processes appear in the MemoryUsage vector in the same order they appear in memory (from low addresses to high).</p>



                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>FileReadRequest GetDisk(int diskNumber)</h4>
                <br></br>
                <p className="ai-placeholder-text">- Returns the FileReadRequest object that contains the PID and the fileName that's currently using the disk diskNumber. </p>
                <p className="ai-placeholder-text">- If the disk is idle, then i just returns the default object.</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>{"std::deque<FileReadRequest> GetDiskQueue(int diskNumber)"}</h4>
                <br></br>
                <p className="ai-placeholder-text">- Returns a deque of FileReadRequest objects that are waiting to use the disk diskNumber.</p>
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
          <Link to="/landing" className="back-link">← Back to Courses</Link>
          <h1 className="main-title">Operating Systems</h1>
        </div>

        <div className="os-tabs-segmented">
          {['definitions', 'notes', 'project'].map((tab) => (
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