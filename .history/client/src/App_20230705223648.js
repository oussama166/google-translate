import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'


function App() {

  // To save the data fetching from backend Data

  const [backendData, setBackendData] = useState([])

  // Fetch into server.js to get the translate of word

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(prevdata =>
        [
          ...prevdata,
          data["message"],
          data["original"]
        ]
      )
      )
  }, [])

  return (
    <div
      className='w-full h-[100vh] flex flex-col justify-center items-center text-white font-bold bg-white'
    >
    <Navbar/>



      {/* <h1 className='text-4xl mb-4'>Hello from React</h1>
      <h2 className='text-2xl'>{backendData[0]}</h2>
      <h2 className='text-2xl'>{backendData[1]}</h2> */}
    </div>
  )
}

export default App
