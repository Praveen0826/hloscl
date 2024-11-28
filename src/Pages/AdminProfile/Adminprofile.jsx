import React from 'react'
import Profile from './img/profile.avif'
import { IoCloudDoneOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";

function Adminprofile() {
    return (
        <div className='w-full h-full py-4 px-7'>

            <h1 className='text-3xl font-semibold md:pl-[5%]'> Profile </h1>

            <div className='w-full flex flex-col items-center'>

                {/* Profile card  */}
                <div className='flex flex-col w-full md:w-[90%] items-center mt-4 rounded-lg bg-white dark:bg-[#1f1f1f] overflow-hidden shadow'>
                    <div className='relative w-full h-32 bg-gradient-to-r from-[#CE9FFC] to-[#7367F0]' >
                    <div className='absolute right-0 md:right-2 scale-75 md:scale-100  md:translate-y-11 translate-y-10 bottom-0 flex items-center gap-3'>
                        <a href="#"> 
                        <CiSettings className='size-7' />
                        </a>

                        <a href="#">
                        <div className='bg-[#7669f0] text-white flex items-center gap-1 py-1 px-3 rounded-md'>
                         Edit
                        </div>
                        </a>
                       
                    </div>
                    </div>
                    <div className='relative flex flex-col h-40 items-center -translate-y-16'>
                        <img src={Profile} alt="profile" className='w-32 rounded-full' />
                        <div className='text-2xl font-bold'> School Name </div>
                        <div className='text-sm -translate-y-1'> louremuser@gmail.com </div>
                        <div className='text-sm -translate-y-1 flex gap-2'>

                            <div>
                                India |
                            </div>
                            <div>
                                9876543210 |
                            </div>
                            <div>
                                Plan
                            </div>
                        </div>

                    </div>


                </div>


                <div className='w-[90%] flex mt-4'>

                    <div className='w-1/2'>

                    </div>


                    {/* Storage card  */}
                    <div className='md:w-1/2 w-full flex justify-end'>

                        <div className="flex flex-col shadow items-center justify-center bg-white dark:bg-[#1f1f1f] p-6 rounded-lg w-80">
                            {/* Icon */}
                            <div className="bg-blue-700 rounded-full p-4 mb-4">
                                <IoCloudDoneOutline className='text-white size-10' />
                            </div>
                            {/* Title */}
                            <h2 className="text-xl font-bold mb-2">Your storage</h2>
                            {/* Subtitle */}
                            <p className="text-center text-sm mb-6">
                                Supervise your drive space in the easiest way
                            </p>
                            {/* Progress Bar */}
                            <div className="w-full">
                                <div className="relative w-full bg-gray-100 dark:bg-[#121212] rounded-full h-4">
                                    <div
                                        className="absolute top-0 left-0 bg-blue-500 rounded-full h-4"
                                        style={{ width: "51.2%" }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-sm mt-2">
                                    <span>10.6 GB</span>
                                    <span>50 GB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Adminprofile
