import React, { useState, useRef, useEffect } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // Close sidebar on outside click
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                sidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarOpen]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-white relative">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} sidebarRef={sidebarRef} />

            {/* Main Content */}
            <div className="md:pl-64 flex flex-col">
                {/* Header */}
                <Header toggleSidebar={toggleSidebar} />
            </div>
        </div>
    );
}

export default Dashboard;
