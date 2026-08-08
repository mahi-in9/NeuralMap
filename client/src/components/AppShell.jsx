// src/components/AppShell.jsx
import { useState } from 'react'
import './AppShell.css'

function AppShell() {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  function handleGenerate() {
    if (!inputValue.trim()) return // Don't run on empty input
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  // When user clicks a hint chip, fill the input with that example
  function handleHintClick(hint) {
    setInputValue(hint)
  }

  return (
    <div className="app-shell">

      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="logo">
          🧠 <span className="gradient-text">NeuralMap</span>
        </div>

        <nav className="nav-menu">
          <button className="nav-btn active">📊 My Graphs</button>
          <button className="nav-btn">📋 Templates</button>
          <button className="nav-btn">⚙️ Settings</button>
        </nav>

        {/* Footer of sidebar */}
        <div style={{ marginTop: 'auto' }}>
          <div className="badge badge--primary">Beta v0.1</div>
        </div>
      </aside>

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <input
          type="text"
          className="input"
          placeholder="Search your graphs..."
          style={{ maxWidth: '360px' }}
        />

        {/* Spacer pushes the next items to the right */}
        <div style={{ flex: 1 }} />

        {isLoading ? (
          <div className="spinner" title="AI is processing..." />
        ) : (
          <button className="generate-btn" onClick={handleGenerate}>
            Generate ✨
          </button>
        )}

        <div className="user-profile" title="Your profile" />
      </header>

      {/* ── CANVAS AREA ── */}
      <main className="canvas-area">

        {/* SKELETON: when AI is processing */}
        {isLoading && (
          <div className="skelton-graph">
            <div className="skelton-nodes-row">
              <div>
                <div className="skelton skelton-node" />
                <div className="skelton skelton-label" />
              </div>
              <div className="skelton skelton-edge" />
              <div>
                <div className="skelton skelton-node" />
                <div className="skelton skelton-label" />
              </div>
              <div className="skelton skelton-edge" />
              <div>
                <div className="skelton skelton-node" />
                <div className="skelton skelton-label" />
              </div>
            </div>
            <div className="skelton-nodes-row">
              <div>
                <div className="skelton skelton-node" />
                <div className="skelton skelton-label" />
              </div>
              <div className="skelton skelton-edge" />
              <div>
                <div className="skelton skelton-node" />
                <div className="skelton skelton-label" />
              </div>
            </div>
          </div>
        )}

        {/* LANDING STATE: glass URL input card */}
        {!isLoading && (
          <div className="url-input-card">

            <h1 className="url-input-card__title">
              Turn any idea into a{' '}
              <span className="gradient-text">knowledge graph</span>
            </h1>
            <p className="url-input-card__subtitle">
              Paste a URL, drop a topic, or describe what you want to explore.
            </p>

            {/* Input + Button side by side */}
            <div className="url-input-row">
              <input
                type="text"
                className="input"
                placeholder="https://en.wikipedia.org/wiki/React..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button className="btn-primary" onClick={handleGenerate}>
                Generate ✨
              </button>
            </div>

            {/* Quick hint chips */}
            <div className="url-input-hints">
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--clr-text-muted)', alignSelf: 'center' }}>
                Try:
              </span>
              {[
                'React hooks',
                'Machine Learning',
                'System Design',
                'JavaScript closures',
              ].map((hint) => (
                <button
                  key={hint}
                  className="url-hint-chip"
                  onClick={() => handleHintClick(hint)}
                >
                  {hint}
                </button>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* ── RIGHT PANEL ── */}
      <aside className="right-panel">
        <h3>AI Assistant</h3>
        <p className="chat-placeholder">
          Click any node in your graph to ask questions about it. I'll use the
          source document to answer.
        </p>
      </aside>

    </div>
  )
}

export default AppShell