import React from 'react'

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
            <div className='inline-flex items-center bg-transparent absolute bottom-0 left-0 w-full h-20 px-4'>
                hey
            </div>

        </div>
    )
}

export default TextTranslate
