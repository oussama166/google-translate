import React from 'react'
import { HiSwitchHorizontal } from "react-icons/hi"
import Dropdown
 
const Translate = () => {
    return (
        <div className='w-full h-screen bg-slate-50 flex flex-col z-[1]'>
            <div className='w-full max-h-64 h-1/2 flex flex-col justify-start items-center bg-blue-500 py-10'>
                {/* THIS BAR OF LANG */}
                <div className='w-1/2 h-14 bg-[#316aba] flex flex-row justify-between items-center rounded-md px-5 font-google '>
                    <span className='cursor-pointer'>AUTO DETECT</span>
                    <Dropdown/>
                    <HiSwitchHorizontal size={24} className=' cursor-pointer hover:animate-spin '/>
                    <span className='cursor-pointer'>ENGLISH</span>
                </div>
            </div>
        </div>
    )
}

export default Translate
