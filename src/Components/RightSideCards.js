import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import visa from '../assets/visa.png'
import dp from '../assets/dp.png'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { ResponsiveContainer,BarChart,Bar } from 'recharts'

function RightSideCards() {
    const chartData = [
        {  revenue: 4000 },
        {  revenue: 3000 },
        {  revenue: 2000 },
        {  revenue: 2780 },
        {  revenue: 1890 },
       
      ];
    return (
        <div className='w-full rounded-3xl flex flex-col gap-14 h-full'>
            <div className='bg-white h-1/4 rounded-lg p-3'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <h1 className='font-bold'>Your Cards</h1>
                        <h1 className=' bg-color1 rounded-3xl text-center text-sm'>Premium</h1>

                    </div>
                    <div>
                        <MdAddCircleOutline size={30} />

                    </div>




                </div>
                <div className='flex justify-between'>
                <div className='mt-5 w-2/3'>
                    <div className='bg-black p-2 rounded-md'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white'>$2,645</h1>
                            <div className=''><img src={visa} alt="Logo" className='w-10 h-5' /></div>
                        </div>
                        <div className='mt-14 flex justify-between'>
                            <h1 className='text-white'>****2754</h1>
                            <h1 className='text-white'>20/26</h1>
                        </div>
                        
                    </div>
                    

                </div>
                <div className='mt-4 bg-gray-100 p-3 rounded-xl '>
                    <div className=''>
                        <h1 className='text-xl font-bold'>$520</h1>
                        <h1 className='mt-14'>****8828</h1>

                    </div>
                </div>
                </div>
                
            </div>
            <div className='bg-white h-1/4 rounded-lg p-5'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold'>Quick Transfer</h1>
                    <h1 className='text-purple-500'>View All</h1>
                </div>
                <div className='flex justify-between mt-5 gap-1'>
                    <div className='bg-green-300 p-3 rounded-full'>
                        <div className='bg-blue-200 rounded-full'><img src={dp} alt="Logo" className='w-12 h-7'/></div>
                        <h1 className='text-xs'>Sam</h1>
                    </div>
                    <div className='bg-green-300 p-3 rounded-full'>
                        <div className='bg-blue-200 rounded-full'><img src={dp} alt="Logo" className='w-12 h-7'/></div>
                        <h1 className='text-xs'>Sam</h1>
                    </div>
                    <div className='bg-green-300 p-3 rounded-full'>
                        <div className='bg-blue-200 rounded-full'><img src={dp} alt="Logo" className='w-12 h-7'/></div>
                        <h1 className='text-xs'>Sam</h1>
                    </div>
                    <div className='bg-green-300 p-3 rounded-full'>
                        <div className='bg-blue-200 rounded-full'><img src={dp} alt="Logo" className='w-12 h-7'/></div>
                        <h1 className='text-xs'>Sam</h1>
                    </div>
                    <div className='bg-white border border-black p-3 rounded-full'>
                        <div><IoIosAddCircleOutline size={20}/></div>
                        
                    </div>
                </div>
                <div className='flex justify-between mt-5 bg-gray-100 w-full rounded-full items-center p-5'>
                    <div className='  flex'>
                        <div className=' rounded-full'><img src={dp} alt="Logo" className='w-7 h-7'/></div>
                        <h1 className='text-2xl font-medium ml-1'>$2658</h1>
                    </div>
                    <div>
                        <div ><FaLocationArrow /></div>
                    </div>
                </div>
            </div>
            <div className='bg-white h-1/4 rounded-lg p-5'>
                <div className='flex justify-between'>
                    <h1>Expenses</h1>
                    <h1 className='p-1 bg-lightgreen rounded-lg text-sm'>Month</h1>
                </div>
                <div>
                <ResponsiveContainer width='100%' height={170}>
                    <BarChart data={chartData}>
                        
                        
                            <Bar dataKey='revenue' fill="#8884d8"/>                        
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>

        </div>
    )
}

export default RightSideCards