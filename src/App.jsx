import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Layout/Dashboard';


function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={ <Dashboard />}>

            {/* <Route path="/" element={<FeedsUser />} /> */}

          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
