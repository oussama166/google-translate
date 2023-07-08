import React from 'react'
import { BiSolidVolumeFull } from "react-icons/bi"
import { MdOutlineMic } from "react-icons/md"


const TextTranslate = ({ isDisable }) => {
    return (
        <div
            className='w-full h-56 flex flex-col shadow-lg bg-slate-100 rounded-lg p-5 font-google relative text-slate-500'>
            <textarea
                className={`w-full h-48 resize-none bg-transparent text-slate-500 focus:outline-none ${(isDisable) ? 'cursor-not-allowed' : 'cursor-text'}`}
                placeholder='Enter your text here'
                disabled={isDisable}
            ></textarea>

            {/* Bottom bar */}
            <div className='inline-flex items-center gap-5 bg-transparent absolute bottom-0 left-0 w-full h-14 px-6 box-shadow-top'>

                <BiSolidVolumeFull
                    size={24}
                    className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                />
                <MdOutlineMic
                    size={24}
                    className='
                    cursor-pointer text-slate-500 bg-slate-500   
                    hover:text-slate-700 bg-opacity-10 ease-linear transition-all
                    '
                />



            </div>

        </div>
    )
}

export default TextTranslate
