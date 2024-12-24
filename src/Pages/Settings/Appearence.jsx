import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

function Appearence() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <div>
    <div className=' border-t-2 border-slate-200'>
       <h1 className='ml-5 mt-5 font-bold text-lg'>Appearance</h1>
        <p className='ml-5 text-sm text-slate-600'>About some information about the security setting</p>
    </div>

    {/* <div className='flex justify-center items-center  border-gray-400 '>
<div className=' mx-4  md:p-6  border-zinc-800  border rounded-xl   '>
hello
</div>
</div> */}

<div className='border border-slate-200 mt-5 mx-4 rounded-md py-4'>
<div className='flex justify-between mx-5 items-center'>
    <div><h1 className='  font-bold'>Theme</h1>
    {/* <p className=' text-sm text-slate-600'>Set a unique password to protect the account</p> */}
    </div>
    <div>

      
    <button
        onClick={toggle}
        className="flex items-center justify-center focus:outline-none "
      >
        {isOn ? (
          <FaToggleOn className="text-blue-600 text-4xl" /> // ON state with green icon
        ) : (
          <FaToggleOff className="text-gray-500 text-4xl" /> // OFF state with gray icon
        )}
      </button>
    </div>

 </div>
       
    </div>


   
    
    
</div>
  )
}

export default Appearence