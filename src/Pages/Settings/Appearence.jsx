// import React, { useState } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { MdDarkMode } from "react-icons/md"; 
// import { MdWbSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Appearence() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

//   const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// })
  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkTheme((prevTheme) => !prevTheme);

  //   // Update the HTML body class for applying theme globally
  //   if (!isDarkTheme) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

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

    <div className="flex flex-col items-center justify-center transition duration-300">
      
   <div>
        <input
          type="checkbox"
          id="checkbox"
          className="hidden"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label
          htmlFor="checkbox"
          className="relative flex items-center w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
        >
          <FaMoon className="text-gray-500 dark:text-white absolute left-1 top-1/2 transform -translate-y-1/2 text-base" />
          <FaSun className="text-yellow-400 dark:text-gray-500 absolute right-1 top-1/2 transform -translate-y-1/2 text-base" />
          <span
            className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              isDarkMode ? "translate-x-6" : "translate-x-0"
            }`}
          ></span>
        </label>
      </div>
    </div>
 
    </div>

 </div>
       
    </div>


   
    
    
</div>
  )
}

export default Appearence