import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [backendData, setBackendData] = useState(null)

  useEffect(() => { 
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data.message))
  }, [])

  return (
    <div className='w-full h justify-center items-center text-red-700'>
      <h1>App</h1>
      this is the backend data: {backendData}
    </div>
  )
}

export default App
