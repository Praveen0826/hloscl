import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Layout/Dashboard';
import Aboutus from './Pages/AboutUS/Aboutus';


function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={ <Dashboard />}>

            <Route path="/about" element={<Aboutus />} />

          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
