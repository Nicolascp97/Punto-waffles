import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import CookingGame from './CookingGame'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cocinar" element={<CookingGame />} />
      </Routes>
    </Router>
  )
}

export default App
