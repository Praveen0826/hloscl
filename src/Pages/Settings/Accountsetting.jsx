import React from 'react'

function Accountsetting() {
  return (
    <div>
    <div className=' border border-l-0 border-t border-slate-200'>
       <h1 className='ml-5 mt-5 font-bold text-lg'>Account settings</h1>
        <p className='ml-5 text-sm text-slate-600 mb-4 dark:text-slate-300'>About some information about the security setting</p>
    </div>

    {/* <div className='flex justify-center items-center  border-gray-400 '>
<div className=' mx-4  md:p-6  border-zinc-800  border rounded-xl   '>
hello
</div>
</div> */}

<div className='border border-slate-200 mt-5 mx-4 rounded-md py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
<div className='flex justify-between mx-5 items-center'>
    <div><h1 className='  font-bold'>Transfer Ownership</h1>
    <p className=' text-sm text-slate-600 dark:text-slate-300'>Set a Transfer Ownership to change the Ownership</p>
    </div>
    <div>
        <button className='border border-blue-800 font-bold px-3 py-2 rounded-md text-blue-800 text-sm shadow-none hover:text-white hover:bg-blue-700 hover:shadow-blue-700 transition duration-1000'>Transfer Ownership</button>
    </div>

 </div>
       
    </div>


    <div className='border border-slate-200 mt-5 mx-4 rounded-md py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
<div className='flex justify-between mx-5 items-center'>
    <div><h1 className='  font-bold'>Deactivate Account</h1>
    <p className=' text-sm text-slate-600 dark:text-slate-300'>This will shutdown your account. Your account will be reactive when you sign in again</p></div>
    <div>
        <button className=' text-sm border border-blue-800 font-bold px-3 py-2 rounded-md text-blue-800 shadow-none hover:text-white hover:bg-blue-700 hover:shadow-blue-700 transition duration-1000'>Deactivate</button>
    </div>

 </div>
       
    </div>

    <div className='border border-slate-200 mt-5 mx-4 rounded-sm py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
<div className='flex justify-between mx-5 items-center'>
    <div><h1 className='  font-bold'>Delete Account
    </h1>
    <p className=' text-sm text-slate-600 dark:text-slate-300'>Your account will be permanently deleted</p></div>
    <div className=''>
        <button className=' text-sm border border-red-600 font-semibold px-3 py-2 rounded-md text-red-600 shadow-none hover:text-white hover:bg-red-600 transition duration-1000 '>Delete</button>
    </div>

 </div>
       
    </div>
    
</div>
  )
}

export default Accountsetting