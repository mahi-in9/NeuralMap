// src/components/NodeDetail.jsx
// Shows details about a selected graph node
// Uses container queries — adapts to RIGHT PANEL width, not viewport width

function NodeDetail({ node, onClose }) {
  // If no node is selected, show the empty state
  if (!node) {
    return (
      <div className="node-detail-empty">
        <div className="node-detail-empty__icon">🔍</div>
        <p>Click any node in the graph to explore it</p>
      </div>
    )
  }

  return (
    // IMPORTANT: This wrapper div is what gets container-type: inline-size
    // The @container rules inside NodeDetail.css watch THIS element's width
    <div className="node-detail-wrapper">

      {/* ── HEADER ── */}
      <div className="node-detail-header">
        <div>
          <div className="badge badge--primary">{node.type || 'Concept'}</div>
          <h3 className="node-detail-title">{node.label}</h3>
        </div>
        <button className="btn-icon" onClick={onClose} title="Close">✕</button>
      </div>

      {/* ── DESCRIPTION ── */}
      <p className="node-detail-desc">{node.description}</p>

      {/* ── META GRID ──
          This is where container queries shine.
          When panel > 280px → 2 columns
          When panel < 280px → 1 column (stacked)
      ── */}
      <div className="node-meta">
        <div className="node-meta__item">
          <span className="node-meta__label">Connections</span>
          <span className="node-meta__value">{node.connections || 0}</span>
        </div>
        <div className="node-meta__item">
          <span className="node-meta__label">Type</span>
          <span className="node-meta__value">{node.type || '—'}</span>
        </div>
        <div className="node-meta__item">
          <span className="node-meta__label">Relevance</span>
          <span className="node-meta__value">{node.relevance || '—'}</span>
        </div>
        <div className="node-meta__item">
          <span className="node-meta__label">Source</span>
          <span className="node-meta__value">{node.source || 'AI Generated'}</span>
        </div>
      </div>

      {/* ── RELATED NODES ── */}
      {node.related && node.related.length > 0 && (
        <div className="node-related">
          <p className="node-related__label">Related</p>
          <div className="node-related__chips">
            {node.related.map((r) => (
              <button key={r} className="url-hint-chip">{r}</button>
            ))}
          </div>
        </div>
      )}

      {/* ── ASK AI BUTTON ── */}
      <button className="btn-primary node-detail-ask">
        💬 Ask AI about this
      </button>

    </div>
  )
}

export default NodeDetail