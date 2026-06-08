import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './335.css';

const topics = [
  {
    title: "Algorithm Analysis",
    content: [
      "Big-O, Little-o, Big-Θ, and Big-Ω notation",
      "Best, average, and worst case analysis",
      "Amortized vs. average-case complexity",
      "Space complexity",
    ],
  },
  {
    title: "Advanced Trees",
    content: [
      "AVL Trees and rotations",
      "B-Trees",
      "Splay Trees ans rotations",
      "Tries (Prefix Trees)",
    ],
  },
  {
    title: "Special Priority Queues",
    content: [
      "Binary Heaps (Min/Max)",
      "Fibonacci Heaps",
      "Binomial Heaps",
      "Leftist Trees/Heaps",
      "Skew Heaps",
      "D-ary Heaps",
    ],
  },
  {
    title: "Sorting Algorithms",
    content: [
      "Comparison-based sorts: InsertionSort, ShellSort, QuickSort, MergeSort, HeapSort",
      "Time complexities of all in Big-O",
      "Stability and in-place properties",
    ],
  },
  {
    title: "Disjoint Sets",
    content: [
      "Union-Find data structure",
      "Union by height / union by rank / union by size",
      "Path compression",
      "Applications: Kruskal's MST, connected components",
    ],
  },
  {
    title: "Graph Algorithms",
    content: [
      "BFS and DFS traversals",
      "Shortest paths: Dijkstra",
      "Minimum Spanning Trees: Kruskal and Prim",
      "Topological Sort and DAGs",
      "Maximum Flow: Ford-Fulkerson, Edmonds-Karp",
    ],
  },
  {
    title: "Dynamic Programming",
    content: [
      "Basic 1D and 2D DP",
      "Matrix chain multiplication",
      "DP on trees and graphs",
    ],
  },
  {
    title: "Randomized Algorithms",
    content: [
      
    ],
  },
  {
    title: "Amortized Analysis",
    content: [
      
    ],
  },
];

function AccordionItem({ topic, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onToggle}>
        {topic.title}
        <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="accordion-body">
          {topic.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SND3() {
  const [activeTab, setActiveTab] = useState('notes');
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane notes-container">
            <p className="section-title">Bla bla bla banana</p>
            <div className="accordion">
              {topics.map((topic, index) => (
                <AccordionItem
                  key={topic.title}
                  topic={topic}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
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
          <h1 className="main-title">335</h1>
        </div>
        <div className="os-tabs-segmented">
          {['notes', 'practice'].map((tab) => (
            <div
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </header>
      {renderContent()}
    </div>
  );
}

export default SND3;