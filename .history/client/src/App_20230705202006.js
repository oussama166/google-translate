import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [backendData, setBackendData] = useState([null])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div
      className='w-full h-[100vh] flex flex-col justify-center items-center text-white font-bold bg-zinc-900'
    >
      <h1 className='text-4xl mb-4'>Hello from React</h1>
      <h2 className='text-2xl'>{backendData[0]}</h2>
      {/* <h2 className='text-2xl'>{backendData[1]}</h2> */}
    </div>
  )
}

export default App
