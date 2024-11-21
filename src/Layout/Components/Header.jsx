import React, { useState, useRef, useEffect } from 'react';
import Profile from '../img/profile.avif';
import Switchtheme from './Switchtheme';

function Header({ toggleSidebar }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Control sidebar visibility
    const sidebarRef = useRef(null);

    // Handle sidebar toggle
    const handleSidebarToggle = () => {
        setIsSidebarOpen((prevState) => !prevState); // Open/close sidebar
        toggleSidebar(); // Call external sidebar toggle if needed
    };

    // Close the sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false); // Close the sidebar
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white dark:bg-[#1f1f1f] p-4 h-16 flex justify-between items-center z-10">
            <div className="relative px-2 w-[100%] flex justify-between items-center">
                <div>
                    <div className="font-semibold">Dashboard</div>
                    <div className="text-sm flex items-center gap-1">
                        Home
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        sample page
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Switchtheme />

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>

                    <div className="hidden md:flex hover:bg-gray-100 dark:hover:bg-[#121212] px-2 rounded-lg gap-2 items-center">
                        <img src={Profile} alt="Profile" className="size-7 rounded-full" />
                        <div>
                            <h1 className="font-semibold text-gray-700 dark:text-white">Abi Nandhan</h1>
                            <p className="-translate-y-1 text-sm">Basic plan</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 ml-9">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Sidebar (existing) */}
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                {/* Render your existing sidebar here */}
                {/* The `open` or `closed` classes can control visibility */}
            </div>

            {/* Sidebar toggle button */}
            <div className="flex items-center space-x-6">
                <button onClick={handleSidebarToggle} className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
