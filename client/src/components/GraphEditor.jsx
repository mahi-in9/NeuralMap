// src/components/GraphEditor.jsx
// This is the "page 2" — where the graph lives after AI generates it

function GraphEditor({ topic, onBack }) {
  return (
    <div className="graph-editor-shell">

      {/* ── SIDEBAR ── same as AppShell */}
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
        {/* This title has a view-transition-name — it morphs from the card */}
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
        {/* Week 3 will put the real Canvas here */}
        {/* For now, fake some nodes to show the layout */}
        <div className="fake-graph">
          <div className="fake-node fake-node--center">
            <span className="gradient-text">{topic}</span>
          </div>
          <div className="fake-node" style={{ top: '25%', left: '30%' }}>Concept A</div>
          <div className="fake-node" style={{ top: '25%', right: '30%' }}>Concept B</div>
          <div className="fake-node" style={{ bottom: '25%', left: '30%' }}>Concept C</div>
          <div className="fake-node" style={{ bottom: '25%', right: '30%' }}>Concept D</div>
          <p style={{ position: 'absolute', bottom: '16px', color: 'var(--clr-text-muted)', fontSize: 'var(--text-xs)' }}>
            Canvas graph engine coming in Week 3 →
          </p>
        </div>
      </main>

      {/* ── RIGHT PANEL ── */}
      <aside className="right-panel">
        <h3>AI Assistant</h3>
        <p className="chat-placeholder">
          Click any node to ask questions about <strong>{topic}</strong>.
        </p>
      </aside>

    </div>
  )
}

export default GraphEditor

