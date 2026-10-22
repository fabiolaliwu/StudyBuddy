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
              
              <p className="section-title">The following notes are based on the Hunter College CSCI 73000 course by Professor Sourya Saha.</p>
              {/* TOPIC I */}
              <h2>Topic I: Memory Architecture</h2>
             

              {/* 1. MEMORY TECHNOLOGY */}
              <h3>1. Memory Technology</h3>
              <h4>Random Access Memory (RAM)</h4>
              <p>The virtue of "random" is <strong>uniformity</strong> — every memory location costs the exact same amount of time to reach.</p>
              <ul>
                <li>
                  <strong>DRAM (Dynamic RAM):</strong>
                  <ul>
                    <li>Dense, inexpensive, power-thrifty, and slow.</li>
                    <li><em>Dynamic:</em> Contents must be refreshed periodically (~every 8 ms) because charges on the capacitor leak away.</li>
                    <li>Speed / Cost: ~50 ns – 70 ns access time, $20 – $75 per GB.</li>
                  </ul>
                </li>
                <li>
                  <strong>SRAM (Static RAM):</strong>
                  <ul>
                    <li>Sparse, costly, power-hungry, and very fast.</li>
                    <li><em>Static:</em> Whatever is stored persists indefinitely as long as power is maintained (no refresh needed). Uses 6 transistors per bit (vs. 1 transistor + 1 capacitor for DRAM).</li>
                    <li>Speed / Cost: ~0.5 ns – 2.5 ns access time, $2000 – $5000 per GB.</li>
                  </ul>
                </li>
              </ul>

              <h4>Other Access Technologies</h4>
              <ul>
                <li><strong>"Not-so-random" Access:</strong> Access latency depends heavily on where the request lands and when it is issued (e.g., Magnetic Disks, CD-ROMs).
                  <ul>
                    <li><strong>Magnetic Disk:</strong> 5 ms – 20 ms latency, $0.20 – $2 per GB.</li>
                  </ul>
                </li>
                <li><strong>Sequential Access:</strong> Latency grows linearly with data position (e.g., Magnetic Tape).</li>
              </ul>

              <h4>The Memory We Wish Existed</h4>
              <p>An ideal memory responds as fast as <strong>SRAM</strong>, but provides the capacity and cheap cost-per-GB of a <strong>magnetic disk</strong>. This motivates the memory hierarchy.</p>

              <h4>Main Memory Background</h4>
              <ul>
                <li>Main memory is built from <strong>DRAM</strong>.</li>
                <li>Addresses arrive in two halves because memory chips are organized as a two-dimensional matrix of rows and columns:
                  <ul>
                    <li><strong>RAS (Row Access Strobe):</strong> Latches the row address.</li>
                    <li><strong>CAS (Column Access Strobe):</strong> Latches the column address.</li>
                  </ul>
                </li>
                <li>Caches are built from <strong>SRAM</strong> (no refresh required, ~6 transistors/bit).</li>
              </ul>

              <h4>Why Do We Care? The Memory Wall</h4>
              <ul>
                <li>Speed is not what DRAM was designed for: its response time is dictated by capacitive circuits, worsening as density climbs. DRAM also sits off-chip, so pins, wiring, and busses add severe latency.</li>
                <li><strong>Historical shift:</strong>
                  <ul>
                    <li><em>1960–1985:</em> System speed was a function of CPU operation throughput: <code>speed = f(no. of operations)</code>.</li>
                    <li><em>1990s:</em> Pipelined execution, high clock rates, superscalar issue, and out-of-order execution made the CPU vastly faster.</li>
                    <li><em>1998 onwards:</em> System speed is bounded by memory: <code>speed = f(non-cached memory accesses)</code>.</li>
                  </ul>
                </li>
                <li>The fundamental architectural goal is to <strong>hide DRAM latency</strong> through caches and hierarchy.</li>
              </ul>

              <br />
              {/* 2. LOCALITY AND THE MEMORY HIERARCHY */}
              <h3>2. Locality and the Memory Hierarchy</h3>
              <p>Programs touch only a tiny fraction of their overall address space at any given instant.</p>
              <ul>
                <li>
                  <strong>Temporal Locality (locality in time):</strong>
                  <ul>
                    <li>Items referenced recently are very likely to be referenced again soon.</li>
                    <li><em>Analogy:</em> Library books you recently borrowed are the ones you will keep reaching for.</li>
                    <li><em>Examples:</em> Loop instructions, induction variables (loop counters).</li>
                  </ul>
                </li>
                <li>
                  <strong>Spatial Locality (locality in space):</strong>
                  <ul>
                    <li>Items with addresses close to recently referenced items are likely to be accessed soon.</li>
                    <li><em>Analogy:</em> Books shelved right next to the one you just read are likely related to your research.</li>
                    <li><em>Examples:</em> Sequential/straight-line instruction fetching, iterating over arrays.</li>
                  </ul>
                </li>
              </ul>

              <h4>The Hierarchy in Action</h4>
              <ul>
                <li><strong>Hierarchy Levels:</strong> CPU Registers → L1 Cache (SRAM, fastest, smallest, highest $/bit) → L2/L3 Cache → Main Memory (DRAM) → Secondary Storage (Disk/SSD, slowest, biggest, lowest $/bit).</li>
                <li>Data moves in units called <strong>Blocks</strong> (or <strong>Lines</strong>), which often span several words.</li>
                <li>
                  <strong>Cache Terminology:</strong>
                  <ul>
                    <li><strong>Hit:</strong> Requested data resides in the upper level.</li>
                    <li><strong>Hit Ratio:</strong> <code>Hits / Total Accesses</code></li>
                    <li><strong>Miss:</strong> Requested data is missing; block is retrieved from lower level.</li>
                    <li><strong>Miss Penalty:</strong> The extra clock cycles incurred to fetch the block.</li>
                    <li><strong>Miss Ratio:</strong> <code>Misses / Total Accesses = 1 - Hit Ratio</code></li>
                  </ul>
                </li>
              </ul>



              <br />
              {/* 3. CACHE BASICS & DIRECT MAPPING */}
              <h3>3. Cache Basics & Direct Mapping</h3>
              <h4>Cache Design Questions</h4>
              <ul>
                <li><strong>Placement:</strong> Where does a block land? (Direct mapped, associative, set-associative)</li>
                <li><strong>Identification:</strong> How do we know if it is there? (Tags and valid bits)</li>
                <li><strong>Replacement:</strong> Which block do we evict on a miss? (LRU, Random, FIFO)</li>
                <li><strong>Write Policy:</strong> How are writes handled? (Write-through vs. Write-back)</li>
              </ul>

              <h4>Direct Mapped Cache</h4>
              <p>Every block maps to exactly <strong>one</strong> slot in the cache, calculated using modulo:</p>
              <div className="formula-box">
                Cache Block Address = (Block Address) mod (Total Blocks in Cache)
              </div>
              <p>When the total block count is a power of 2 (<code>2^n</code>), the cache slot index simply corresponds to the low-order <code>n</code> bits of the block address.</p>

              <h4>Tags & Valid Bits</h4>
              <ul>
                <li><strong>Tag:</strong> High-order address bits saved alongside cache data to uniquely identify which memory block is currently occupying that slot.</li>
                <li><strong>Valid Bit (V):</strong> Indicates whether the entry holds valid data (<code>1 = valid/occupied</code>, <code>0 = empty/garbage</code>). All slots initialize to <code>0</code> upon boot.</li>
              </ul>

              <h4>Bits in Cache Calculation</h4>
              <p>For a direct-mapped cache on a 32-bit architecture:</p>
              <ul>
                <li>Cache size: <code>2^n</code> blocks &rarr; <strong>Index</strong> = <code>n</code> bits</li>
                <li>Block size: <code>2^m</code> words = <code>2^(m+2)</code> bytes &rarr; <strong>Word offset</strong> = <code>m</code> bits, <strong>Byte offset</strong> = <code>2</code> bits</li>
                <li><strong>Tag field:</strong> <code>32 - (n + m + 2)</code> bits</li>
                <li>
                  <strong>Total bits in cache:</strong>
                  <div className="formula-box">
                    Total Bits = 2^n &times; (Tag Width + 1 [valid bit] + Block Size in Bits)<br />
                    Total Bits = 2^n &times; ((32 - n - m - 2) + 1 + 2^m &times; 32)
                  </div>
                </li>
              </ul>

              <h4>Worked Example: Total Cache Size</h4>
              <p><em>Problem:</em> A direct-mapped cache stores 16 KB of data in 4-word blocks, using 32-bit addresses. What is its total size in bits?</p>
              <ul>
                <li>Data size = 16 KB = <code>2^14</code> bytes = <code>2^12</code> words</li>
                <li>Block size = 4 words = <code>2^2</code> words (16 bytes &rarr; <code>m = 2</code>, byte offset = 2 bits)</li>
                <li>Number of blocks = <code>2^12 / 2^2 = 2^10</code> blocks (1024 lines &rarr; <code>n = 10</code> index bits)</li>
                <li>Tag bits = <code>32 - (10 + 2 + 2) = 18</code> bits</li>
                <li>Each block entry holds: 18 (tag) + 1 (valid) + (4 &times; 32) (data) = <strong>147 bits</strong></li>
                <li>Total size = <code>2^10 &times; 147 = 147 Kbits &asymp; 18.4 KB</code> (~1.15&times; the raw data size).</li>
              </ul>

              <h4>Block Size vs. Miss Rate Trade-Off</h4>
              <ul>
                <li><em>Increasing block size:</em> Exploits spatial locality &rarr; decreases compulsory miss rate.</li>
                <li><em>Too large block size:</em> Fewer blocks fit in the cache &rarr; more competition/conflicts &rarr; miss rate climbs back up and miss penalty increases.</li>
              </ul>

              <h4>Handling Cache Misses</h4>
              <ul>
                <li><strong>On a Hit:</strong> CPU proceeds normally with low latency.</li>
                <li><strong>On a Miss:</strong>
                  <ol>
                    <li>CPU pipeline stalls, saving current PC.</li>
                    <li>Block is fetched from the next lower memory level (DRAM).</li>
                    <li>Cache slot is filled with the new block, tag is updated, and valid bit is set to <code>1</code>.</li>
                    <li>Instruction refetches from the cache and execution resumes.</li>
                  </ol>
                </li>
              </ul>

              <br />
              {/* 4. ASSOCIATIVITY & REPLACEMENT POLICIES */}
              <h3>4. Associativity and Replacement Policies</h3>
              <h4>Types of Associativity</h4>
              <ul>
                <li><strong>Direct Mapped (1-way):</strong> Each memory block maps to only one possible cache block. 1 tag comparator needed.</li>
                <li><strong>N-Way Set Associative:</strong> Cache is divided into sets, each containing <code>N</code> blocks (ways). A memory block maps to a set via <code>(Block Number) mod (Number of Sets)</code>. All <code>N</code> tags in the set are checked in parallel (uses <code>N</code> comparators).</li>
                <li><strong>Fully Associative:</strong> A block can reside in <em>any</em> cache slot. Tag must be compared against every single entry simultaneously (requires 1 comparator per cache line; expensive for large caches).</li>
              </ul>

              <h4>Associativity Benefits vs. Diminishing Returns</h4>
              <p>Simulated on a 64 KB data cache (16-word blocks):</p>
              <ul>
                <li>1-way (direct mapped): 10.3% miss rate</li>
                <li>2-way set associative: 8.6% miss rate</li>
                <li>4-way set associative: 8.3% miss rate</li>
                <li>8-way set associative: 8.1% miss rate</li>
                <li><em>Conclusion:</em> Moving from 1-way to 2-way or 4-way yields the largest miss rate drops; gains taper off rapidly past 4-way.</li>
              </ul>

              <h4>Replacement Policies</h4>
              <ul>
                <li><strong>Direct Mapped:</strong> No decision needed; new block always replaces the single existing occupant.</li>
                <li><strong>Least Recently Used (LRU):</strong> Evicts the block that hasn't been accessed for the longest time. Exploits temporal locality.
                  <ul>
                    <li>Straightforward for 2-way; manageable at 4-way; becomes hardware-prohibitive for high associativity due to tracking overhead.</li>
                  </ul>
                </li>
                <li><strong>Pseudo-LRU (pLRU):</strong> Uses a tree of binary flags to approximate LRU behavior with vastly lower hardware costs (requires <code>n - 1</code> bits for an <code>n</code>-block set).</li>
                <li><strong>Random:</strong> Selects candidate randomly for eviction; performs comparably to LRU in high-associativity caches.</li>
              </ul>

              <h4>Write Policies</h4>
              <ul>
                <li>
                  <strong>Write-Through:</strong>
                  <ul>
                    <li>Updates both the cache block and lower-level main memory simultaneously.</li>
                    <li><em>Pros:</em> Memory and cache remain consistent; simple eviction.</li>
                    <li><em>Cons:</em> High write latency slows execution.</li>
                    <li><em>Solution:</em> <strong>Write Buffer</strong> — stores pending writes so the CPU can resume immediately without stalling unless the buffer fills up.</li>
                  </ul>
                </li>
                <li>
                  <strong>Write-Back:</strong>
                  <ul>
                    <li>Writes only modify the cache block. A <strong>Dirty Bit</strong> is set to <code>1</code>.</li>
                    <li>Data is written out to main memory <em>only when that block is evicted</em>.</li>
                    <li><em>Pros:</em> Vastly reduces bus write traffic.</li>
                    <li><em>Cons:</em> Cache and memory can be transiently inconsistent; more state tracking required.</li>
                  </ul>
                </li>
              </ul>

              <br />
              {/* 5. CACHE PERFORMANCE */}
              <h3>5. Cache Performance & Metrics</h3>
              <h4>CPU Time Decomposition</h4>
              <div className="formula-box">
                CPU Time = (CPU Execution Cycles + Memory Stall Cycles) &times; Clock Cycle Time<br /><br />
                Memory Stall Cycles = Memory Accesses &times; Miss Rate &times; Miss Penalty<br />
                = Instructions &times; (Misses / Instruction) &times; Miss Penalty
              </div>

              <h4>Average Memory Access Time (AMAT)</h4>
              <div className="formula-box">
                AMAT = Hit Time + (Miss Rate &times; Miss Penalty)
              </div>
              <p><em>Example:</em> CPU cycle = 1 ns, Hit time = 1 cycle (1 ns), Miss penalty = 20 cycles, Miss rate = 5%:</p>
              <ul>
                <li><code>AMAT = 1 + (0.05 &times; 20) = 2 cycles = 2 ns</code>.</li>
              </ul>

              <h4>Impact of CPU Advancements on Memory Overhead</h4>
              <ul>
                <li><strong>Lowering Base CPI:</strong> As pipeline execution efficiency improves, memory stalls account for an increasingly dominant share of total runtime.</li>
                <li><strong>Higher Clock Rates:</strong> Main memory access latency (in absolute ns) stays relatively flat, so faster clocks mean the CPU wastes more cycles per miss.</li>
              </ul>

              <h4>Multilevel Caches</h4>
              <ul>
                <li><strong>L1 Cache:</strong> On-chip, compact, optimized for the <strong>fastest hit time</strong> (typically smaller blocks).</li>
                <li><strong>L2 / L3 Cache:</strong> Larger, slightly slower, optimized for a <strong>low miss rate</strong> to protect against costly DRAM accesses (wider blocks).</li>
                <li>
                  <em>Multilevel AMAT / Performance Equation:</em>
                  <div className="formula-box">
                    Effective CPI = Base CPI + (L1 Miss Rate &times; L2 Penalty) + (Global Miss Rate &times; Main Memory Penalty)
                  </div>
                </li>
              </ul>

              <br />
              {/* 6. VIRTUAL MACHINES */}
              <h3>6. Virtual Machines (VMs)</h3>
              <ul>
                <li>A host machine emulates guest operating systems alongside virtualized hardware resources (CPU, Memory, I/O).</li>
                <li><strong>Benefits:</strong> Superior isolation/security boundaries, easier hardware consolidation, multi-tenant cloud infrastructure (AWS, VMware).</li>
                <li><strong>Hypervisor / Virtual Machine Monitor (VMM):</strong>
                  <ul>
                    <li>Projects virtual hardware resources onto underlying physical ones.</li>
                    <li>Guest OS executes non-privileged code directly in user mode; privileged operations trap into the VMM.</li>
                  </ul>
                </li>
                <li><strong>VM Models:</strong> (a) Physical Machine, (b) Native / Bare-Metal VM, (c) Hosted VM, (d) Dual-mode VM.</li>
              </ul>

              <br />
              {/* 7. VIRTUAL MEMORY & TLB */}
              <h3>7. Virtual Memory and the TLB</h3>
              <p>Virtual memory treats main memory (DRAM) as a cache over secondary storage (Disk / SSD).</p>
              <ul>
                <li>Each process receives a private, isolated <strong>Virtual Address Space</strong>.</li>
                <li><strong>Virtual Addresses:</strong> Divided into <em>Virtual Page Number (VPN)</em> and <em>Page Offset</em>.</li>
                <li><strong>Page Fault:</strong> A virtual memory miss where requested page resides on disk; incurs millions of clock cycles (handled by OS kernel disk I/O routines).</li>
                <li>Because misses are extremely costly, virtual memory uses <strong>fully associative placement</strong> and <strong>write-back</strong>.</li>
              </ul>

              <h4>Page Tables</h4>
              <ul>
                <li>An in-memory lookup table indexed by VPN.</li>
                <li>Each <strong>Page Table Entry (PTE)</strong> contains:
                  <ul>
                    <li>Valid Bit (<code>1 = in RAM</code>, <code>0 = page fault / on disk</code>)</li>
                    <li>Physical Page Number (PPN) or disk swap address</li>
                    <li>Status flags: Dirty bit, Reference/Use bit, Access protection permissions</li>
                  </ul>
                </li>
              </ul>

              <h4>Translation Lookaside Buffer (TLB)</h4>
              <p>Because page table lookups add an extra memory reference before every access, the CPU uses a dedicated hardware cache called the <strong>TLB</strong>.</p>
              <ul>
                <li>Holds 16 – 512 cached PTEs.</li>
                <li>Hit time: 0.5 – 1 cycle; Miss rate: 0.01% – 1%.</li>
                <li>
                  <strong>TLB Miss vs. Page Fault:</strong>
                  <ul>
                    <li><em>TLB Miss:</em> Page is in RAM, but its PTE is not cached in the TLB. Fast hardware/software handler loads PTE into the TLB.</li>
                    <li><em>Page Fault:</em> Page is not in RAM at all. Triggers an OS exception to load the page from disk into a physical frame.</li>
                  </ul>
                </li>
              </ul>

              <br />
              {/* 8. MEMORY HIERARCHY FRAMEWORK */}
              <h3>8. The Memory Hierarchy Framework</h3>
              <p>Every level of memory architecture answers four recurring questions:</p>
              <ol>
                <li><strong>Where can a block be placed?</strong> Direct mapped (1 place), Set associative (N places in a set), or Fully associative (anywhere).</li>
                <li><strong>How is a block found?</strong> Indexing, tag search within a set, or full page table lookup.</li>
                <li><strong>Which block is replaced on a miss?</strong> LRU, pseudo-LRU, FIFO, or Random.</li>
                <li><strong>What is the write strategy?</strong> Write-through (with write buffer) or Write-back (with dirty bit).</li>
              </ol>

              <h4>The 3 C's of Cache Misses</h4>
              <ul>
                <li><strong>Compulsory Misses (Cold Start):</strong> First access to a block that was never in the cache.</li>
                <li><strong>Capacity Misses:</strong> The cache cannot contain all blocks needed during execution; evicted blocks must be re-fetched.</li>
                <li><strong>Conflict Misses (Collision):</strong> Multiple blocks compete for the same slot or set in direct-mapped or set-associative caches. (Eliminated in fully associative caches).</li>
              </ul>

              <br />
              {/* 9. CACHE COHERENCE */}
              <h3>9. Cache Coherence & Consistency</h3>
              <h4>The Multiprocessor Coherence Problem</h4>
              <p>When multiple CPU cores have private caches sharing one global physical memory, writes to one cache can leave other caches with stale/invalid data.</p>

              <h4>Coherence Defined</h4>
              <ul>
                <li>A read to memory location <code>X</code> must return the most recent value written to <code>X</code>.</li>
                <li>Writes to the same location must be seen in the same order by all processors (serialization).</li>
              </ul>

              <h4>Coherence Protocols</h4>
              <ul>
                <li>
                  <strong>Snooping Protocols:</strong>
                  <ul>
                    <li>Every cache monitors (snoops) memory bus transactions.</li>
                    <li><strong>Write-Invalidate:</strong> Before writing to a block, a core issues an <em>Invalidate</em> signal across the bus. Other caches listening mark their copy invalid.</li>
                  </ul>
                </li>
                <li>
                  <strong>Directory-Based Protocols:</strong>
                  <ul>
                    <li>A centralized or distributed directory tracks the sharing state of each block across all nodes (used for larger, scale-out multiprocessor architectures).</li>
                  </ul>
                </li>
              </ul>

              <h4>Memory Consistency</h4>
              <p>Dictates <em>when</em> a written value is observed by other cores. Ensuring that writes appear in predictable program order requires hardware memory barriers/fences.</p>

              <br />
              {/* 10. COMMON PITFALLS */}
              <h3>10. Common Pitfalls</h3>
              <ul>
                <li><strong>Confusing Byte vs. Word Addressing:</strong> In a 32-byte direct-mapped cache with 4-byte blocks: Byte 36 is in block <code>⌊36/4⌋ mod 8 = 1</code>, whereas Word 36 is in block <code>36 mod 8 = 4</code>.</li>
                <li><strong>Memory-Unaware Algorithms:</strong> Traversing a 2D matrix column-by-column in row-major languages (like C/C++) destroys spatial locality and drastically spikes cache misses compared to row-by-row traversal.</li>
                <li><strong>Shared Cache Contention:</strong> If associativity in shared L2/L3 caches is lower than the core count, inter-core cache thrashing and conflict misses increase sharply.</li>
              </ul>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="tab-pane">
            
          </div>
        );
      case 'examples':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
              <h2>Examples & Worked Problems</h2>

              <h4>Cache Performance example</h4>
              I-cache miss rate = 2%<br></br>
              D-cache miss rate = 4% <br></br>
              miss penalty = 100 cycles <br></br>
              base CPI with am ideal cache = 2 <br></br>
              loads and stores accoint for 36% of instructions <br></br> <br></br>

              cycles lost to misses <br></br>
              I-cache: 0.02x100xI = 2I<br></br>
              D-cache: 0.36x100x0.04xI = 1.44I<br></br>

              Memory stall = 2I+1.44I = 3.44I<br></br>
              CPU cycles including misses = 2I+3.44I = 5.44I<br></br><br></br>

              The ideal machines'advantage, which means a "perfect cache" with 0% of miss <br></br>
              5.44I/2I = 2.72 times<br></br><br></br><br></br>


              <h4>Average memory access time (AMAT)</h4>
              AMAT = hit time + miss rate x miss penalty<br></br>
              Exmaple: <br></br>
              A CPU clocked at 1ns, hit time of 1 cycle, miss penalty of 20 cycles, I-cache miss rate of 5%<br></br>
              AMAT = 1 + 0.05x20 <br></br>= 2 clock cycles, i.e. 2ns<br></br>
              <br></br>
              Performance Summary <br></br>
              - CPU performance rises, miss penalty weights more: when the CPU is fast, it will finish executing the instruction before the next data is loaded from the main memory. Therefore, it creates a memory stall and it will cause cache miss because of memory stall.<br></br>
              - Lowering the base CPI leaves memory stall consume more CPU cycles: the CPU is gonna be faster and so memory stall is gonna be larger than the CPU execution time. <br></br>
              - Raising the clock rate makes memory stalls consume more CPU cycles: because it will take less time to finish executing an instruction, so it will be wasting cycles because of memory stall. <br></br>

              So suppose the base CPI falls from 2 to 1: 
              Memory stall = 1I+1.44I = 2.44I<br></br>
              CPU cycles including misses = 1I+3.44I = 4.44I<br></br><br></br>

              The ideal machines'advantage, which means a "perfect cache" with 0% of miss <br></br>
              4.44I/1I = 4.44 times<br></br>
              Comparing the time of the memory stalls<br></br>
              = 3.44/5.44 = 63%<br></br>
              = 3.44/4.44 = 77%
              <br></br><br></br><br></br>


              <h4>Performance When the Clock Rate Is Raised</h4>
              Case 1: 1GHz CPU <br></br>
              1GHz = 1ns per cycle<br></br>
              With a memory access time of 100ns, how many cycles must the processor wait? <br></br>
              100ns/1ns/cycle = 100 cycles.<br></br><br></br>

              Case 2: 4GHZ CPU<br></br>
              4GHz = 0.25ns per cycle<br></br>
              With a memory access time of 100ns, how many cycles must the processor wait?<br></br>
              100ns/0.25ns/cycle = 400 cycles
              <br></br><br></br><br></br>



    







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
          {['notes', 'examples', 'resources'].map((tab) => (
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
