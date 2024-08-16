import React, { useEffect, useState } from 'react'
import { IoAddSharp } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Icons from '../assets/Icons.png'
import camera from '../assets/camera.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IoMdArrowDropdown } from "react-icons/io";
import engflag from '../assets/engflag.png'
import pngflag from '../assets/pngflag.png'
import { FaFilter } from "react-icons/fa";
import { HiOutlineSortDescending } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import 'react-circular-progressbar/dist/styles.css';
import { ResponsiveContainer, LineChart, XAxis, CartesianGrid, YAxis, Legend, Line, Tooltip } from 'recharts'
import axios from 'axios';

function TopCards() {
    const [students, setStudents] = useState([])
    const data = [
        { name: 'Jan', pv: 2400, uv: 2400 },
        { name: 'Feb', pv: 1398, uv: 2210 },
        { name: 'Mar', pv: 9800, uv: 2290 },
        { name: 'April', pv: 9000, uv: 2200 },
        { name: 'May', pv: 3700, uv: 2290 },
        { name: 'June', pv: 9800, uv: 3400 },
        { name: 'July', pv: 4600, uv: 6700 },

    ];

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('https://freetestapi.com/api/v1/students')
                console.log(response.data)
                setStudents(response.data)
            } catch {
                console.log('error')
            }
        }
        fetchStudents()
    }, [])
    const percentage = 66;
    const percentage2 = 45;
    return (
        <div className=''>
            <div className='flex justify-between w-full h-full gap-6'>
                <div className=' bg-cardgreen  h-1/3 w-full p-10 rounded-3xl'>
                    <h1 className='text-3xl font-bold'>Total Balance </h1>
                    <div className='flex justify-between'>
                        <div className='flex mt-5 font-semibold'>
                            <h1 className=' text-6xl '>$87,599</h1>
                            <h1 className='mt-2'>USD</h1>
                        </div>
                        <div>
                            <div className='rounded-full bg-white p-5'><IoAddSharp size={20} /></div>
                        </div>

                    </div>
                    <div className='flex justify-between mt-12'>
                        <div className='w-1/3 p-3 bg-white flex items-center justify-center rounded-full'>
                            <h1>Deposit</h1>
                            <FaArrowDownLong className='text-green-600 ml-1' />
                        </div>
                        <div className='w-1/3 p-3 bg-black text-white flex items-center justify-center rounded-full'>
                            <h1>Send</h1>
                            <MdArrowOutward className='ml-1' />
                        </div>
                    </div>


                </div>
                <div className='bg-white  w-full p-10 rounded-3xl '>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-bold'>Income </h1>
                        <h1 className='p-1 bg-lightgreen rounded-lg text-sm'>Month</h1>

                    </div>
                    <div className=''>
                        <ResponsiveContainer width='100%' height={175}>
                            <LineChart width={730} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>



                </div>

                <div>
                    <ResponsiveContainer width='100%' height={150}>
                        <LineChart width={730} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
            <div className='flex justify-between mt-5 gap-6'>
                <div className='bg-white w-full py-5 px-10 rounded-3xl flex justify-between items-center'>
                    <div>
                        <div className=' rounded-full p-3'><img src={Icons} alt="Logo" className='w-10 h-10' /></div>
                        <div>
                            <h1 className='font-bold text-xl'>Income</h1>
                        </div>
                        <div className='mt-10'>
                            <h1 className='font-semibold text-3xl'>$7,363</h1>
                        </div>

                    </div>
                    <div>


                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.95,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',

                            // Text size
                            textSize: '20px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 3.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: '#71fb6b',
                            textColor: '#000000',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })} className='w-28 h-28 ' />;
                    </div>
                </div>
                <div className='bg-white w-full py-5 px-10 rounded-3xl flex justify-between items-center'>
                    <div>
                        <div className=' rounded-full p-3'><img src={camera} alt="Logo" className='w-10 h-10' /></div>
                        <div>
                            <h1 className='font-bold text-xl'>Income</h1>
                        </div>
                        <div className='mt-10'>
                            <h1 className='font-semibold text-3xl'>$4,534</h1>
                        </div>
                    </div>
                    <div>


                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.50,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',

                            // Text size
                            textSize: '20px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 3.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: '#ff0000',
                            textColor: '#000000',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })} className='w-28 h-28 ' />;
                    </div>
                </div>
                <div className='bg-white w-full p-5 rounded-3xl'>
                    <h1 className='font-semibold'>Currencies Market</h1>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2 flex'>
                                <div className=' rounded-full p-3'><img src={engflag} alt="Logo" className='w-10 h-10' /></div>
                                <div className='items-center mt-2 '>
                                    <div className=' '>
                                        <h1>USD</h1>
                                    </div>
                                    <div className='font-light'>
                                        <h1>0.73</h1>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1>142.4</h1>
                                <h1 className='flex items-center'><IoMdArrowDropdown className='text-green-500' />+14</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='w-1/2 flex'>
                                <div className=' rounded-full p-3'><img src={pngflag} alt="Logo" className='w-10 h-10' /></div>
                                <div className='items-center mt-2 '>
                                    <div className=' '>
                                        <h1>USD</h1>
                                    </div>
                                    <div className='font-light'>
                                        <h1>0.73</h1>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1>142.4</h1>
                                <h1 className='flex items-center'><IoMdArrowDropdown className='text-green-500' />+14</h1>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className='mt-4 bg-white w-full rounded-3xl p-5 '>
                <div className='flex justify-between font-semibold'>
                    <div>
                        <h1>Currencies Market</h1>
                    </div>
                    <div className='flex gap-2'>
                        <div><FaFilter /></div>
                        <div><HiOutlineSortDescending /></div>
                    </div>

                </div>
                <table className="min-w-full ">
                    <thead className='text-gray-500'>
                        <tr>
                            
                            <th className='py-2 px-2 text-left'>Name</th>
                            <th className='py-2 px-2 text-center'>Age</th>
                            <th className='py-2 px-2  text-center'>Gender</th>
                            <th className='py-2 px-2  text-center'>Phone</th>
                            <th className='py-2 px-2  text-center'>GPA</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {students.slice(0, 4).map(item => (
                            <tr key={item.id} className=' text-left font-semibold'>
                                
                                <td className='py-2 px-2 text-left'>{item.name}</td>
                                <td className='py-2 px-2 text-center'>{item.age}</td>
                                <td className='py-2 px-2 text-center'>{item.gender}</td>
                                <td className='py-2 px-2 text-center'>{item.phone}</td>
                                <td className='py-2 px-2 text-center'>{item.gpa}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TopCards