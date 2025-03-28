import React from 'react'

function Securitysettings() {
  return (
    <div>
        <div className=' border border-l-0 border-t border-slate-200'>
           <h1 className='ml-5 mt-5 text-lg  font-bold'>Security settings</h1>
            <p className='ml-5 text-sm text-slate-600 mb-4 dark:text-slate-300'>About some information about the security setting</p>
        </div>

    

<div className='border border-slate-200 mt-5 mx-4 rounded-md py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
    <div className='flex justify-between  mx-5 md:items-center md:flex-row flex-col'>
        <div><h1 className='  font-bold'>Password</h1>
        <p className=' text-sm text-slate-600 dark:text-slate-300'>Set a unique password to protect the account</p></div>
        <div className='flrx justify-start'>
            <button className='border border-blue-800  px-3 md:py-2  py-1 mt-3 rounded-md text-blue-800 text-sm hover:text-white hover:bg-blue-700 font-bold transition duration-200'>Change Password</button>
        </div>

     </div>
           
        </div>

        <div className='border border-slate-200 mt-5 mx-4 rounded-md py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
    <div className='flex md:flex-row flex-col justify-between mx-5 md:items-center'>
        <div>
            <h1 className='  font-bold'>Pin</h1>
        <p className=' text-sm text-slate-600 dark:text-slate-300'>Set a unique Pin to protect the account</p></div>
        <div className='gap-3 flex mt-3'>
            <div>
            <button className=' text-sm border border-blue-800 font-bold px-3 md:py-2 py-1 rounded-md text-blue-800 w-full hover:text-white hover:bg-blue-700 transition duration-200'>Create </button>
            </div>
           <div>
           <button className=' text-sm border border-blue-800 font-bold px-3 md:py-2 py-1 rounded-md text-blue-800 w-full hover:text-white hover:bg-blue-700 transition duration-200'>Change </button>
           </div>
            
        </div>

     </div>
           
        </div>

        <div className='border border-slate-200 mt-5 mx-4 rounded-md py-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
    <div className='flex md:flex-row flex-col justify-between mx-5 md:items-center'>
        <div><h1 className='  font-bold'>Deactivate Account</h1>
        <p className=' text-sm text-slate-600 dark:text-slate-300'>This will shutdown your account. Your account will be reactive when you sign in again</p></div>
        <div>
            <button className=' text-sm border border-blue-800 font-bold px-3 md:py-2 py-1 mt-3 rounded-md text-blue-800 hover:text-white hover:bg-blue-700 transition duration-200'>Deactivate</button>
        </div>

     </div>
           
        </div>

        <div className='border border-slate-200 mt-5 mx-4 rounded-sm py-4 bg-[#ffffff]  dark:bg-[#1f1f1f] md:mb-1 mb-5'>
    <div className='flex md:flex-row flex-col justify-between mx-5 md:items-center '>
        <div><h1 className='  font-bold'>Delete Account
        </h1>
        <p className=' text-sm text-slate-600 dark:text-slate-300'>Your account will be permanently deleted</p></div>
        <div className=''>
            <button className=' text-sm border border-red-600 font-bold px-3 md:py-2 py-1 mt-3 rounded-md text-red-600 hover:text-white hover:bg-red-600 transition duration-200'>Delete</button>
        </div>

     </div>
           
        </div>
        
</div>
       
        
        
  )
}

export default Securitysettings