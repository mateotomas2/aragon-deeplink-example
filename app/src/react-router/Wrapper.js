import React from 'react'
// NOTE: HashRouter is used here instead of history to maximize compatibility
import { HashRouter as Router } from 'react-router-dom'
import App from './App'

function Wrapper() {
  return (
    <Router>
      <div>
        <App />
      </div>
    </Router>
  )
}

export default Wrapper
