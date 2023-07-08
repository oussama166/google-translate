import React from 'react'

const TextTranslate = () => {
    return (
        <div className='w-full h-48 shadow-lg bg-slate-100 rounded-sm p-5'>
            <textarea
                className='w-full h-full resize-none bg-transparent text-slate-500 focus:outline-none'
                placeholder='Enter your text here'></textarea>
        </div>
    )
}

export default TextTranslate
