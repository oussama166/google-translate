import React from 'react'
import { HiSwitchHorizontal } from "react-icons/hi"

const Translate = () => {
    return (
        <div className='w-full h-screen bg-slate-50 flex flex-col z-[1]'>
            <div className='w-full max-h-64 h-1/2 flex flex-col justify-start items-center bg-blue-500 py-10'>
                {/* THIS BAR OF LANG */}
                <div className='w-1/2 h-14 bg-[#316aba] flex flex-row justify-between items-center rounded-md px-5 font-google '>
                    <span >AUTO DETECT</span>
                    <HiSwitchHorizontal size={24} className='hover:animate-spin'/>
                    <span>ENGLISH</span>
                </div>
            </div>
        </div>
    )
}

export default Translate
