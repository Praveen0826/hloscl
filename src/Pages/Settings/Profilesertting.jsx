import React from 'react'
import avatar from "../Settings/avatar.jpg"
import DragAndDropPhotoWithLink from "./DragandDrop"

function Profilesertting() {
  return (
    <div className='bg-[#f9f9fb] dark:bg-[#1f1f1f]'>
      <div className='flex justify-between border-t border-b-0 border-l-0 border items-center border-slate-200 py-4'>
        <div className=''> <h1 className='ml-5 font-bold text-lg'>Profile settings</h1>
          <p className='ml-5 text-sm text-slate-600 mb-1 dark:text-slate-300'>About some information about the security setting</p></div>
        <div className=' flex  mr-7 justify-center items-center gap-3'>
          <div><button className='px-3 py-2 bg-slate-200 text-[#515b73] text-sm rounded-lg font-bold'>Cancel</button></div>
          <div><button className='px-3 py-2 bg-[#506ee4] text-white rounded-lg text-sm font-bold'>Save</button></div>
        </div>
      </div>

      <div className='w-full flex bg-[#f9f9fb]  dark:bg-[#1f1f1f]'>
        <div className='w-[70%] '>
          <div className=''>
        <div className=' flex py-3 mx-5 border  border-r border-b-0  border-slate- mt-5 shadow-md bg-[#ffffff] dark:bg-[#1f1f1f]'>

          <h1 className='pl-4 font-bold text-lg  bg-[#fbfbfd] dark:bg-[#1f1f1f] '>Personal Information</h1>

        </div>

        <div className='border border-t-0 mx-5 grid-cols-3 grid pt-5 px-5 gap-4 shadow-md bg-[#ffffff] dark:bg-[#1f1f1f] '>
          <div className='pb-5'>
            <h1 className='text-sm font-bold'>First Name</h1>
            <input autoComplete='name' className='mt-1 w-full  px-3 py-2 text-sm dark:bg-gray-900 rounded focus:outline-none border hover:border-slate-200 dark:text-white border-slate-200 bg-white' type="text" />
          </div>
          <div className='pb-5'>
            <h1 className='text-sm font-bold'>Last Name</h1>
            <input autoComplete='name' className='mt-1 w-full px-3 py-2 text-sm dark:bg-gray-900 rounded focus:outline-none border dark:text-white border-slate-200 bg-white' type="text" />
          </div>
          <div className='pb-5'>
            <label htmlFor="gender" className='text-sm font-bold'>Gender</label>
            <div className="relative">
              <select autoComplete='gender' className="text-sm w-full   focus:outline-none border border-slate-200  bg-white dark:bg-gray-900 px-3 py-2 pr-8  rounded-lg shadow-sm appearance-none">
                <option value="" className="text-gray-500 ">Select</option>
                <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Male</option>
                <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Female</option>
              </select>
              {/* <svg className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
            </div>
          </div>
          <div className='pb-5'>
            <h1 className='text-sm font-bold'>Primary Contact Number</h1>
            <input autoComplete='tel' className='mt-1 w-full px-3 py-2 text-sm dark:bg-gray-900 rounded focus:outline-none border dark:text-white border-slate-200 bg-white' type="text" />
          </div>
          <div className='pb-5'>
            <h1 className='text-sm font-bold '>Email Address</h1>
            <input autoComplete='email' className=' mt-1 w-full  px-3 py-2 text-sm  dark:bg-gray-900 rounded focus:outline-none border dark:text-white border-slate-200 bg-white' type="text" />
          </div>
          <div className='pb-5'>
            <h1 className='text-sm font-bold'>Martial Status</h1>
            <div className="relative">
              <select  autoComplete='Martial' className="text-sm w-full mt-1 focus:outline-none border border-slate-200  bg-white dark:bg-gray-900 px-3 py-2 pr-8  rounded-lg shadow-sm appearance-none">
                <option value="" className="text-gray-500 ">Select</option>
                <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Single</option>
                <option className="px-3 py-2 rounded transition-colors duration-300 hover:bg-slate-400">Married</option>
              </select>
              {/* <svg className="absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
            </div>
          </div>
          <div className='pb-5' >
            <h1 className='text-sm font-bold'>Date of Birth</h1>
            <input autoComplete='bday'  type="date" className="  w-full text-sm  focus:outline-none border border-slate-200 bg-white dark:bg-gray-900 rounded px-3 py-2 mt-1 dark:text-white"></input>

        </div>
        </div>

      </div>
      </div>
        <div className='w-[30%]'>
        <div className=' flex py-3 mr-4  border border-r border-t border-l border-slate-200 shadow-md bg-[#ffffff] dark:bg-[#1f1f1f] mt-5'>

<h1 className='pl-4 font-bold text-lg'>Personal Information</h1>

</div>
<div className='border mr-4 shadow-md border-slate-200 pb-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
<div className='flex   '>
  <div className='mt-5 ml-5'>
    <img src={avatar} alt=""  className='h-16 w-16 rounded-full' />
    </div>
  <div className='mt-8 ml-5'>
    <h1 className='font-bold'>Edit your Photo</h1>
    <div>
      <button className='text-sm'>Delete</button>
      <button className='text-blue-600 ml-3 text-sm'>Update</button>
    </div>
  
  </div>
  
</div>

<DragAndDropPhotoWithLink/>
</div>


        </div>
      </div>

      


    </div>
  )
}

export default Profilesertting