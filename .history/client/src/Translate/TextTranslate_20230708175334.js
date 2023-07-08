import React from 'react'
import { BiSolidVolumeFull } from "react-icons/bi"
import { MdOutlineMic } from "react-icons/md"


const TextTranslate = ({ isDisable }) => {
    return (
        <div
            className='w-full h-64 flex flex-col shadow-lg bg-slate-100 rounded-lg p-5 font-google relative text-slate-500'>
            <textarea
                className={`w-full h-48 resize-none bg-transparent text-slate-500 focus:outline-none ${(isDisable) ? 'cursor-not-allowed' : 'cursor-text'}`}
                placeholder='Enter your text here'
                disabled={isDisable}
            ></textarea>

            {/* Bottom bar */}
            <div className='w-full inline-flex items-center justify-between gap-5 bg-transparent absolute bottom-0 left-0 w-full h-14 px-6 box-shadow-top'>

                <div className="inline-flex gap-5 items-center bg-transparent absolute bottom-0 left-0 w-full h-14 px-6">
                    <BiSolidVolumeFull
                        size={24}
                        className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                    />
                    <MdOutlineMic
                        size={24}
                        className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                    />
                </div>
                <span className='text-slate-500 text-sm'>0/5000</span>
            </div>

        </div>
    )
}

export default TextTranslate
