import { useState } from 'react'

import './AppShell.css'

function AppShell() {

    const [isLoading, setIsLoading] = useState(false)

    function handleGenerate() {
        setIsLoading(true)

        setTimeout(()=> {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="app-shell" >
            {/* left sidebar */}
            <aside className="sidebar glass-panel">
                <div className='logo'>🧠 Neural Map</div>
                <nav className='nav-menu'>
                    <button className='nav-btn active'>My Graphs</button>
                    <button className='nav-btn'>Templates</button>
                    <button className='nav-btn'>Settings</button>
                </nav>
            </aside>

            {/* Top bar */}
            <header className="topbar">
                <input type="text" className='search-input' placeholder='Paste URL or ask AI to generate...' />

                {isLoading? (
                    <div className='spinner' title='AI is processing...' />
                ): 
                <button className='generate-btn' onClick={handleGenerate}>
                    Generate ✨
                </button>
                }
                
                
                <div className='user-profile'></div>
            </header>

            <main className="canvas-area">
                <div className="placeholder-text">Graph Canvas Goes Here</div>

                {
                    isLoading && (
                        <div className='skelton-graph'>
                            <div className='skelton-nodes-row'>
                                <div>
                                    <div className='skelton skelton-node'></div>
                                    <div className='skelton skelton-label'></div>
                                </div>
                                <div className='skelton skelton-edge'></div>
                                <div>
                                    <div className='skelton skelton-node'></div>
                                    <div className='skelton skelton-label'></div>
                                </div>
                                <div className='skelton skelton-edge'></div>
                                <div>
                                    <div className='skelton skelton-node'></div>
                                    <div className='skelton skelton-label'></div>
                                </div>
                            </div>

                            <div className='skelton-nodes-row'>
                                <div>
                                    <div className='skelton skelton-node'></div>
                                    <div className='skelton skelton-label'></div>
                                </div>
                                <div className='skelton skelton-edge'></div>
                                <div>
                                    <div className='skelton skelton-node'></div>
                                    <div className='skelton skelton-label'></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {
                        !isLoading && (
                            <div className="placeholder-text">
                                <p>Paste a URL above and hit <strong>Generate ✨</strong></p>
                                <p style={{opacity: 0.4, fontSize: '0.85rem', marginTop: '8px'}}>
                                    Your knowledge graph will apear here
                                </p>
                            </div>
                        )
                    }
                
            </main>

            <aside className="right-panel glass-panel">
                <h3>AI Assistant</h3>
                <p className="chat-placeholder">Click a node to chat about it...</p>
            </aside>
        </div>
    )
}

export default AppShell
