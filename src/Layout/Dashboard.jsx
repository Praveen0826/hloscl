import React, { useState, useRef, useEffect } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check the user's preferred theme on initial load
        return localStorage.getItem("theme") === "dark";
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Close sidebar on outside click
    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         if (
    //             isSidebarOpen &&
    //             sidebarRef.current &&
    //             !sidebarRef.current.contains(event.target)
    //         ) {
    //             closeSidebar();
    //         }
    //     };

    //     document.addEventListener('mousedown', handleOutsideClick);
    //     return () => {
    //         document.removeEventListener('mousedown', handleOutsideClick);
    //     };
    // }, [isSidebarOpen]);


    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white relative">
            {/* Sidebar */}
            <Sidebar closeSidebar={closeSidebar} sidebarOpen={isSidebarOpen} sidebarRef={sidebarRef} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Main Content */}
            <div className="md:pl-64 flex flex-col">
                {/* Header */}
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
            <div className='md:pl-64'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
