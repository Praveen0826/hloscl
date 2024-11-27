import React from 'react'
import Hlosclsvg from './img/1.png'
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Aboutus() {
    return (
        <div className='w-full h-full p-4'>

            <h1 className='text-3xl'>About Us</h1>

            <div className='bg-white rounded-lg py-5 dark:bg-[#1f1f1f] h-[75vh] mt-4 flex flex-col items-center'>

                <img src={Hlosclsvg} alt="HloScl_Logo" className='w-36 rounded-full dark:border border-gray-700 bg-gray-100 dark:bg-transparent' />
                {/* <div className='text-3xl mt-2'>HLOSCL</div> */}

                <div className='mt-4 md:w-[50%] w-[90%] text-center'>
                    Welcome to Hloskl by Nexcap! We strive to make education management simple and efficient for schools, teachers, students, and parents. Our app is designed to streamline day-to-day school operations, improve communication, and ensure a seamless experience for everyone involved. With Hloskl, managing everything from attendance to exams, homework to fees, is just a few clicks away. Join us in transforming education through technology and innovation.
                </div>

                <div className='mt-10 text-2xl'>
                    By
                </div>
                <div className='text-3xl text-[#eab308]'>
                    NEXCAP
                </div>
                <div className='flex mt-2 gap-2'>
                  <a href="https://www.facebook.com/people/nexcap_official/100090766908092/?mibextid=ZbWKwL">  <CiFacebook  className='text-xl' /> </a>
                  <a href="https://www.youtube.com/@nexcapofficial">  <FaYoutube className='text-xl' /> </a>
                  <a href="https://x.com/nexcap_official?t=Rki-EdWeKDUN3vnbsPyb7g&s=09"> <FaXTwitter className='text-xl' /> </a>
                  <a href="https://www.instagram.com/nexcap_official?igsh=M3A3eWhmNHN3ZWlw">  <FaInstagram className='text-xl' /> </a>
                  <a href="https://www.linkedin.com/company/nexcapdev/">  <FaLinkedinIn className='text-xl' /> </a>
                </div>

                {/* <div className='md:block hidden w-full h-14'>

                </div> */}
            </div>

        </div>
    )
}

export default Aboutus
