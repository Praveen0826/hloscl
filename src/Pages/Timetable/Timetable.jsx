
import { FaRegClock } from "react-icons/fa";
import teacherimg from "../Timetable/img/teacherimg.jpg"
function Timetable() {
    return (
        <div>
            <div className=' flex py-3 md:mx-5 mx-3 border  border-r border-b  border-slate-100 mt-5 shadow-md bg-[#ffffff] dark:bg-[#1f1f1f]'>

                <h1 className='pl-4 font-bold text-lg  bg-[#ffffff] dark:bg-[#1f1f1f] '>Time Table</h1>
            </div>

            <div className='border border-t-0 md:mx-5 mx-3 pt-5 px-5 gap-4 shadow-md bg-[#ffffff] dark:bg-[#1f1f1f] '>

                <div className="flex justify-around text-sm font-bold">
                    <h1>Monday</h1>
                    <h1>Tuesday</h1>
                    <h1>Wednesday</h1>
                    <h1>Thursday</h1>
                    <h1>Friday</h1>
                    <h1>Saturday</h1>
                </div>
                <div className="flex ">

                    <div>
                        <div className="bg-[#e6f9ff] w-44 h-32 mx-3 p-4 my-6 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#fef8ea] w-44 h-32 mx-3  my-6 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Tamil</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32  my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject:Chemistry</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Physics</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Stockholm</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: English</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Berlin</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Prefessor</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Helsi</h1>
                            </div>

                        </div>

                    </div>

                    <div>
                        <div className="bg-[#e6f9ff] w-44 h-32 mx-3 p-4 my-6 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 mx-3  my-6 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Chemistry</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">sirerace</h1>
                            </div>

                        </div>
                        <div className="bg-[#fef8ea] w-44 h-32  my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Physics</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Racheal</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#e6f9ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject:Science</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Anibel cortrez</h1>
                            </div>

                        </div>
                        <div className="bg-[#fef8ea] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Science</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Gandia</h1>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="bg-[#f2f5ff] w-44 h-32 mx-3 p-4 my-6 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Berlin</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 mx-3  my-6 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Tamil</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Nairobi</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32  my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Computer </h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Rio</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Computer</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Rio</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Science</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Racheal</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Physics</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Prefessor</h1>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="bg-[#fef8ea] w-44 h-32 mx-3 p-4 my-6 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Science</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Anibel Cortrez</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 mx-3  my-6 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Science</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Monica</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32  my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Chemistry</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Racheal</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: English</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">palarmo</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Physics</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Serjio</h1>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="bg-[#fde9ed] w-44 h-32 mx-3 p-4 my-6 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 mx-3  my-6 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32  my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Chemistry</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Helsi</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: English</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Berlin</h1>
                            </div>

                        </div>
                        <div className="bg-[#fef8ea] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: PT</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Monica</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="bg-[#fde9ed] w-44 h-32 mx-3 p-4 my-6 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Physics</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Prefessar</h1>
                            </div>

                        </div>
                        <div className="bg-[#f2f5ff] w-44 h-32 mx-3  my-6 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Jacquline</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32  my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: computer Science</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">RIO</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: PT</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Monica</h1>
                            </div>

                        </div>
                        <div className="bg-[#e8f9e8] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Chemistry</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Racheal</h1>
                            </div>

                        </div>
                        <div className="bg-[#fde9ed] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Tamik</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Nairobi</h1>
                            </div>

                        </div>
                        <div className="bg-[#e6f9ff] w-44 h-32 my-6 mx-3 p-4 rounded-md">
                            <div className="flex text-sm text-[#6a7287]  items-center gap-2">
                                <FaRegClock />
                                <h1>09:00-09-45 Am</h1>
                            </div>
                            <h1 className=" text-sm mt-1">Subject: Maths</h1>
                            <div className="bg-white rounded p-0.5 mt-5 flex gap-2 items-center">
                                <img src={teacherimg} alt="" height="15px" width="25px" className="rounded-md" />
                                <h1 className="text-[#6a7287]">Berlin</h1>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="flex pb-8">
                <div className='border md:mr-4 w-80 mx-3  h-24 rounded-md border-slate-200 pb-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
                    <div className=" flex items-center flex-col">
                    <div className="text-white bg-[#3d5ee1]  text-sm px-2 py-1 font-bold rounded-md mt-6">Morning Break</div>
                     <div className="flex text-sm text-[#6a7287] mt-2 pl-4  items-center gap-2">
                                <FaRegClock />
                                <h1>10:30-11-00 Am</h1>
                            </div>

                    </div>
               
                </div>
                <div className='border md:mr-4  mx-3 w-56 h-24 rounded-md border-slate-200 pb-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
                    <div className=" flex items-center flex-col">
                    <div className="text-white bg-[#eab300]  text-sm  px-2 py-1  rounded-md mt-6 font-bold">Lunch</div>
                     <div className="flex text-sm text-[#6a7287] mt-2   items-center gap-2">
                                <FaRegClock />
                                <h1>12:30-01-30 Am</h1>
                            </div>

                    </div>
               
                </div>
                <div className='border md:mr-4  mx-3  w-56 h-24 rounded-md border-slate-200 pb-4 bg-[#ffffff] dark:bg-[#1f1f1f]'>
                    <div className=" flex items-center flex-col">
                    <div className="text-white bg-[#3d5ee1]  text-sm  px-2 py-1 text-center font-bold rounded-md mt-6">Evening Break</div>
                     <div className="flex text-sm text-[#6a7287] mt-2 justify-center  items-center gap-2">
                                <FaRegClock />
                                <h1>03:00-03-45 Am</h1>
                            </div>

                    </div>
               
                </div>
                </div>
               
            </div>

           
        </div>


    )
}

export default Timetable