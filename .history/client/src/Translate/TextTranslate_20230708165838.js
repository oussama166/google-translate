import React from 'react'

const TextTranslate = ({ isDisable }) => {
    return (
        <div className='w-full h-56 shadow-lg bg-slate-100 rounded-sm p-5'>
            <textarea
                className={`w-full h-full resize-none bg-transparent text-slate-500 focus:outline-none ${(isDisable) ? 'cursor-not-allowed' : 'cursor-text'}`}
                placeholder='Enter your text here'></textarea>
        </div>
    )
}

export default TextTranslate
