import React, { useEffect, useState } from 'react'


function App() {
  const [backendData, setBackendData] = useState(null)

  useEffect(() => { 
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  return (
    <div>
      <h1>App</h1>
      this is the backend data: {backendData}
    </div>
  )
}

export default App
