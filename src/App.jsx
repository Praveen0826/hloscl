import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Layout/Dashboard';
import Aboutus from './Pages/AboutUS/Aboutus';
import Adminprofile from './Pages/AdminProfile/Adminprofile';


function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={ <Dashboard />}>

            <Route path="/about" element={<Aboutus />} />
            <Route path="/adminprofile" element={ <Adminprofile /> } />
            
          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
