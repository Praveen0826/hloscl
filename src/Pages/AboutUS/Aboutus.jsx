import React from 'react'
import Hlosclsvg from './img/3.png'
import Facebooklogo from "./img/Facebook.png";
import Youtubelogo from "./img/youtube.png";
import Instalogo from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
import xlogo from './img/x.png';
import Logotxt from './img/2.png';


function Aboutus() {
    return (
        <div className='w-full h-full py-4 px-7'>

            <h1 className='text-3xl font-semibold'>About Us</h1>

            <div className='rounded-lg bg-white py-5 dark:bg-[#1f1f1f] md:h-[75vh] h-full mt-4 flex flex-col items-center'>

                <img src={Hlosclsvg} alt="HloScl_Logo" className='w-36 rounded-full bg-gray-100' />
                <img src={Logotxt} alt="Logo_text" className='w-32 mt-1' />

                <div className='mt-4 md:w-[50%] w-[90%] text-center'>
                    Welcome to Hloskl by Nexcap! We strive to make education management simple and efficient for schools, teachers, students, and parents. Our app is designed to streamline day-to-day school operations, improve communication, and ensure a seamless experience for everyone involved. With Hloskl, managing everything from attendance to exams, homework to fees, is just a few clicks away. Join us in transforming education through technology and innovation.
                </div>

                <div className='mt-10 text-xl'>
                    By
                </div>
                <div className='text-[#eab308] font-bold text-xl'>
                    NEXCAP
                </div>
                <div className='flex items-center mt-2 gap-2'>

                    <a href="https://www.facebook.com/people/nexcap_official/100090766908092/?mibextid=ZbWKwL">
                        <img src={Facebooklogo} alt="fblogo" className='w-8' />
                    </a>
                   
                    <a href="https://x.com/nexcap_official?t=Rki-EdWeKDUN3vnbsPyb7g&s=09">
                        <img src={xlogo} alt="xlogo" className='w-8' />
                    </a>
                    <a href="https://www.instagram.com/nexcap_official?igsh=M3A3eWhmNHN3ZWlw">
                        <img src={Instalogo} alt="instalogo" className='w-8' />
                    </a>
                    <a href="https://www.linkedin.com/company/nexcapdev/">
                        <img src={Linkedin} alt="Linkedinlogo" className='w-8' />
                    </a>

                    <a href="https://www.youtube.com/@nexcapofficial">
                        <img src={Youtubelogo} alt="Youtube" className='w-8' />
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Aboutus
