import {useState} from 'react'

import { Link, Outlet } from "react-router-dom"

function Sidenavsetting() {
  const [activeItem, setActiveItem] = useState("");

  const handleActive = (item) => {
    setActiveItem(item);
  };
  return (
    <div>
      <div className='flex flex-wrap w-full bg-[#fafafd] dark:bg-[#1f1f1f]'>

        <div className=" md:w-[18%] w-full  md:h-[90vh] border border-b-0 border-l-0 border-gray-200 ">
          {/* <ul className='pt-6'>
             
              <Link to="Profilesertting">
              <li className='py-2 pl-3 text-base font-normal bg-[#f9f9fb] dark:bg-[#1f1f1f] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700   rounded-lg text-black hover:text-blue-600 mx-3'>Profile Setting</li>
              </Link>
              <Link to="Securitysettings">
              <li className='py-2 pl-3 text-base font-normal bg-[#f9f9fb] dark:bg-[#1f1f1f] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700  rounded-lg text-black hover:text-blue-600 mx-3'>Security Setting</li>
              </Link >
              <Link to="Accountsetting">
              <li className='py-2 pl-3 text-base font-normal bg-[#f9f9fb] dark:bg-[#1f1f1f] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700  rounded-lg text-black hover:text-blue-600 mx-3'>Account Setting</li>
              </Link>
              <Link to="Appearence">
              <li className='py-2 pl-3 text-base font-normal bg-[#f9f9fb] dark:bg-[#1f1f1f] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700  rounded-lg text-black hover:text-blue-600 mx-3'>Appearance
              </li>
              </Link>
                </ul> */}
          <ul className="pt-6 ">
          <Link to="Profilesertting">
            <li
              onClick={() => handleActive("Profile Setting")}
              className={`py-2 pl-3 text-base font-normal rounded-lg mx-3 ${
                activeItem === "Profile Setting"
                  ? "bg-[#eceffc] text-blue-700"
                  : "bg-[#f9f9fb] dark:bg-[#1f1f1f] text-black dark:text-white"
              }  dark:hover:bg-slate-700 hover:bg-[#eceffc] hover:text-blue-700`}
            >
              Profile Setting
            </li>
          </Link>
          <Link to="Securitysettings">
            <li
              onClick={() => handleActive("Security Setting")}
              className={`py-2 pl-3 text-base font-normal rounded-lg mx-3 ${
                activeItem === "Security Setting"
                  ? "bg-[#eceffc] text-blue-700"
                  : "bg-[#f9f9fb] dark:bg-[#1f1f1f] text-black dark:text-white"
              }  dark:hover:bg-slate-700 hover:bg-[#eceffc] hover:text-blue-700`}
            >
              Security Setting
            </li>
          </Link>
          <Link to="Accountsetting">
            <li
              onClick={() => handleActive("Account Setting")}
              className={`py-2 pl-3 text-base font-normal rounded-lg mx-3 ${
                activeItem === "Account Setting"
                  ? "bg-[#eceffc] text-blue-700"
                  : "bg-[#f9f9fb] dark:bg-[#1f1f1f] text-black dark:text-white"
              } dark:hover:bg-slate-700 hover:bg-[#eceffc] hover:text-blue-700`}
            >
              Account Setting
            </li>
          </Link>
          <Link to="Appearence">
            <li
              onClick={() => handleActive("Appearance")}
              className={`py-2 pl-3 text-base font-normal rounded-lg mx-3 ${
                activeItem === "Appearance"
                  ? "bg-[#eceffc] text-blue-700"
                  : "bg-[#f9f9fb] dark:bg-[#1f1f1f] text-black dark:text-white"
              }  dark:hover:bg-slate-700 hover:bg-[#eceffc] hover:text-blue-700`}
            >
              Appearance
            </li>
          </Link>
        </ul>

        </div>
        <div className="md:w-[82%] w-full">
          <Outlet />
        </div>


      </div>
    </div>
  )
}

export default Sidenavsetting