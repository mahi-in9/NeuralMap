// src/components/GraphEditor.jsx
import { useState } from 'react'
import NodeDetail from './NodeDetail'
import './NodeDetail.css'

// Fake node data — in Week 4, this comes from LangChain AI
const FAKE_NODES = [
  {
    id: 'n1', label: 'React Hooks',
    type: 'Concept', description: 'Functions that let you use state and other React features in functional components.',
    connections: 4, relevance: 'High', source: 'Wikipedia',
    related: ['useState', 'useEffect', 'Custom Hooks'],
    style: { top: '25%', left: '30%' }
  },
  {
    id: 'n2', label: 'useState',
    type: 'API', description: 'Returns a stateful value and a function to update it.',
    connections: 3, relevance: 'High', source: 'React Docs',
    related: ['React Hooks', 'useReducer'],
    style: { top: '25%', right: '25%' }
  },
  {
    id: 'n3', label: 'useEffect',
    type: 'API', description: 'Accepts a function that contains imperative, possibly effectful code.',
    connections: 3, relevance: 'High', source: 'React Docs',
    related: ['React Hooks', 'Lifecycle'],
    style: { bottom: '25%', left: '25%' }
  },
  {
    id: 'n4', label: 'Custom Hooks',
    type: 'Pattern', description: 'A JavaScript function whose name starts with "use" that calls other Hooks.',
    connections: 2, relevance: 'Medium', source: 'React Docs',
    related: ['React Hooks', 'Reusability'],
    style: { bottom: '25%', right: '25%' }
  },
]

function GraphEditor({ topic, onBack }) {
  // Which node is currently selected — null means none
  const [selectedNode, setSelectedNode] = useState(null)

  return (
    <div className="graph-editor-shell">

      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="logo">
          🧠 <span className="gradient-text">NeuralMap</span>
        </div>
        <nav className="nav-menu">
          <button className="nav-btn" onClick={onBack}>← Back</button>
          <button className="nav-btn active">📊 Graph View</button>
          <button className="nav-btn">🗂 Outline</button>
          <button className="nav-btn">💬 Chat History</button>
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <div className="badge badge--primary">Beta v0.1</div>
        </div>
      </aside>

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <h2 className="graph-title" style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>
          {topic}
        </h2>
        <div style={{ flex: 1 }} />
        <button className="btn-ghost">Export</button>
        <button className="generate-btn">+ Add Node</button>
        <div className="user-profile" />
      </header>

      {/* ── CANVAS AREA ── */}
      <main className="canvas-area">
        <div className="fake-graph">
          {/* Central topic node */}
          <div className="fake-node fake-node--center">
            <span className="gradient-text">{topic}</span>
          </div>

          {/* Clickable concept nodes */}
          {FAKE_NODES.map((node) => (
            <div
              key={node.id}
              className={`fake-node ${selectedNode?.id === node.id ? 'fake-node--selected' : ''}`}
              style={node.style}
              onClick={() => setSelectedNode(node)}
            >
              {node.label}
            </div>
          ))}

          <p style={{ position: 'absolute', bottom: '16px', color: 'var(--clr-text-muted)', fontSize: 'var(--text-xs)' }}>
            Canvas graph engine coming in Week 3 → Click a node to see details
          </p>
        </div>
      </main>

      {/* ── RIGHT PANEL ── uses NodeDetail with container queries ── */}
      <aside className="right-panel">
        <NodeDetail
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      </aside>

    </div>
  )
}

export default GraphEditor