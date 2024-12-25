import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; 

function Appearence() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);

    // Update the HTML body class for applying theme globally
    if (!isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
    <div className=' border border-l-0 border-t border-slate-200'>
       <h1 className='ml-5 mt-5 font-bold text-lg'>Appearance</h1>
        <p className='ml-5 text-sm text-slate-600 mb-4 dark:text-slate-300'>About some information about the security setting</p>
    </div>

    {/* <div className='flex justify-center items-center  border-gray-400 '>
<div className=' mx-4  md:p-6  border-zinc-800  border rounded-xl   '>
hello
</div>
</div> */}

<div className='border border-slate-200 mt-5 mx-4 rounded-md py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
<div className='flex justify-between mx-5 items-center'>
    <div><h1 className='  font-bold'>Theme</h1>
    <p className=' text-sm text-slate-600 dark:text-slate-300'>Set a theme to change the theme</p>
    </div>
    <div>

    <div className={` ${isDarkTheme ? "bg-gray-900 text-white" : " text-black"}`}>
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-9 h-9 rounded-full shadow-md transition-all duration-300 ${
          isDarkTheme ? "bg-gray-600" : "bg-gray-500"
        }`}
      >
        {isDarkTheme ? (
          <FaSun className=" text-xl" />
        ) : (
          <FaMoon className="text-white text-xl" />
        )}
      </button>
    </div>
    </div>

 </div>
       
    </div>


   
    
    
</div>
  )
}

export default Appearence