// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Layout/Dashboard';
import Aboutus from './Pages/AboutUS/Aboutus';
import Adminprofile from './Pages/AdminProfile/Adminprofile';
import Settings from './Pages/Settings/Settings';
import Profilesertting from './Pages/Settings/Profilesertting';
import Securitysettings from './Pages/Settings/Securitysettings';
import Accountsetting from './Pages/Settings/Accountsetting';
import Appearence from './Pages/Settings/Appearence';

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/dash" element={<Dashboard />}>

            <Route path="/about" element={<Aboutus />} />
            <Route path="/adminprofile" element={<Adminprofile />} />
            <Route path="/" element={<Settings />} > 
            <Route path="/Setting/Profilesertting" element={<Profilesertting />} />
            <Route path="/Setting/Securitysettings" element={<Securitysettings />} />
            <Route path="/Setting/Accountsetting" element={<Accountsetting />} />
            <Route path="/Setting/Appearence" element={<Appearence />} />
        
             </Route>

          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
