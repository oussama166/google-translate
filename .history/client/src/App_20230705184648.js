import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [backendData, setBackendData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data.text))
  }, [])

  return (
    <div
      className='w-full h-[100vh] flex flex-col justify-center items-center text-white font-bold bg-zinc-900'
    >
    
    </div>
  )
}

export default App
