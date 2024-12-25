import React from 'react';
import Logo from '../img/1.png'
import ThemeSwitcher from './ThemeSweitcher';
import Profile from '../img/profile.avif'
import { Link } from 'react-router-dom';
import Settings from '../../Pages/Settings/Settings';

function Sidebar({ sidebarOpen, isDarkMode, setIsDarkMode, closeSidebar }) {
    return (
        <aside className={`bg-white dark:bg-[#1f1f1f] w-64 p-6 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:fixed md:block shadow-lg z-20`}>


            <div className="space-y-8">

                <Link>
                    <div className='flex justify-center items-center'>
                       <img src={Logo} alt="Logo" className='w-36' />
                    </div>
                </Link>

                <div className="flex justify-between flex-col h-[80vh]">
                    <div className='flex flex-col gap-1 font-semibold'>

                        <div className='text-sm text-gray-500'>Menu</div>


                        {/* Home  */}
                        <Link to="#" onClick={closeSidebar} className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>

                            <div className='h-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                            </div>

                            <div className='h-5'>Home</div>
                        </Link>

                        {/* Profile  */}
                        <Link>
                            <div className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>

                                <div className='h-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <div className='h-5'>Profile </div>
                            </div>
                        </Link>

                        {/* Subscription  */}
                        <Link>
                            <div className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>

                                <div className='h-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    </svg>
                                </div>

                                <div className='h-5'>
                                    Subscription
                                </div>
                            </div>
                        </Link>

                        {/* Notification  */}
                        <Link>
                            <div className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>
                                <div className='h-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                    </svg>
                                </div>

                                <div className='h-5' >
                                    Notification
                                </div>
                            </div>
                        </Link>

                        {/* Settings  */}
                        <Link to={'/Setting'}>
                            <div className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>

                                <div className='h-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                    </svg>
                                </div>

                                <div className='h-5'>
                                    Settings
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="">
                        <div className='w-full flex flex-col font-semibold gap-1'>

                            <Link>
                                <div className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>

                                    <div className='h-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                    </div>
                                    <div className='h-5'>
                                        Support
                                    </div>
                                </div>
                            </Link>


                            <Link>
                                <div className='hover:bg-gray-100 dark:hover:bg-[#121212] px-2 py-4 rounded-lg flex items-center gap-2'>

                                    <div className='h-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>
                                    </div>

                                    <div className='h-5'>
                                        Report
                                    </div>
                                </div>
                            </Link>

                            <div>
                                <ThemeSwitcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                            </div>
                        </div>

                        <hr className='mt-2 dark:text-gray-500' />

                        <Link >
                            <div className="flex mt-2 p-2 rounded-lg gap-2 justify-between items-center">
                                <div className='flex items-center gap-2'>
                                    <img src={Profile} alt="Profile" className="size-7 rounded-full" />
                                    <div>
                                        <h1 className="font-semibold text-gray-700 dark:text-white">Abi Nandhan</h1>
                                        <p className="-translate-y-1 text-sm w-28 overflow-hidden">abi@nexcap.com</p>
                                    </div>
                                </div>

                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                </Link>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>



        </aside>
    );
}

export default Sidebar;
