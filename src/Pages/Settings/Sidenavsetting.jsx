// import React from 'react'

import { Link,Outlet } from "react-router-dom"

function Sidenavsetting() {
  return (
    <div>
        <div className='flex'>
           
              <div className="w-[15%] h-[90vh] border-0 border-gray-200 ">
              <ul className='pt-6'>
             
              <Link to="Profilesertting">
              <li className='py-2 pl-3 text-base font-semiboldbold bg-white hover:bg-slate-200 rounded-lg text-black hover:text-blue-600 mx-3'>Profile Setting</li>
              </Link>
              <Link to="Securitysettings">
              <li className='py-2 pl-3 text-base font-semiboldbold bg-white hover:bg-slate-200 rounded-lg text-black hover:text-blue-600 mx-3'>Security Setting</li>
              </Link >
              <Link to="Accountsetting">
              <li className='py-2 pl-3 text-base font-semiboldbold bg-white hover:bg-slate-200 rounded-lg text-black hover:text-blue-600 mx-3'>Account Setting</li>
              </Link>
              <Link to="Appearence">
              <li className='py-2 pl-3 text-base font-semibold bg-white hover:bg-slate-200 rounded-lg text-black hover:text-blue-600 mx-3'>Appearance
              </li>
              </Link>
                </ul>
                </div>
                <div className="w-[85%]">
                <Outlet/>
                </div>

         
        </div>
    </div>
  )
}

export default Sidenavsetting