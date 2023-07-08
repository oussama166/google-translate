import React, { useEffect, useState } from 'react'
import { HiSwitchHorizontal } from "react-icons/hi"
import Langlist from './Langlist'
import TextTranslate from './TextTranslate'





const Translate = () => {

    // To save the data fetching from backend Data

    const [backendData, setBackendData] = useState([])
    const [getTranslate, setGetTranslate] = useState({ "text": "oussama coding", "from": "en", "to": "es" })
    const [isDone, setIsDone] = useState(false)

    // Fetch into server.js to get the translate of word

    const submtingData = () => {
        fetch(`/api?text=${getTranslate["text"]}&from=${getTranslate["from"]}&to=${getTranslate["to"]}`)
            .then(res => res.json())
            .then(data => setBackendData(prevdata =>
                [
                    data["message"],
                    data["original"]
                ]
            )
            )
    }





    const [langChoise, setLangChoise] = useState('French')
    const [langChoise2, setLangChoise2] = useState('English')
    var isPermute = false;

    const changeLang = () => {
        let temp = langChoise;
        setLangChoise(langChoise2);
        setLangChoise2(temp);
        isPermute = true;

    }

    return (
        <div className='w-full h-screen bg-slate-50 flex flex-col z-[1] '>
            <div
                className='w-full max-h-72 h-1/2 flex flex-col justify-start items-center gap-6 bg-blue-500 py-10'>

                {/* THIS BAR OF LANG */}
                <div className='w-1/2 max-h-14 min-h-14 h-14 bg-[#316aba] flex flex-row justify-between items-center rounded-md px-5 font-google flex-shrink-0'>
                    <span className='cursor-pointer max-w-[120px]'>{langChoise}</span>
                    <HiSwitchHorizontal
                        size={24}
                        className=' cursor-pointer hover:animate-spin'
                        onClick={changeLang}
                    />
                    <span className='cursor-pointer max-w-[120px]'>{langChoise2}</span>
                </div>

                {/* Langlist companent */}
                <Langlist
                    choise1={setLangChoise}
                    choise2={setLangChoise2}
                    takeLang={setGetTranslate}
                    Permute={isPermute}
                    isHide={true}
                />

                {/* Form for translate form */}
                <form
                    className='w-5/6 h-56'
                    onSubmitCapture={(e) => {
                        e.preventDefault()
                        console.log(getTranslate)
                        submtingData()
                        console.log(backendData[0])
                    }}
                >
                    <div
                        className='w-full flex flex-row items-center gap-4'
                    >
                        <TextTranslate isDisable={false} isDone={setIsDone} takeText={setGetTranslate} />
                        <TextTranslate isDisable={true} output={backendData[0]} />
                    </div>
                </form>
            </div>

        </div >
    )
}

export default Translate
