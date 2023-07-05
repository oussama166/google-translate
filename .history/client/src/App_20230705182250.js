import React from 'react'


function App() {
  useEffect(() => {
    axios.get('/api/hello')
      .then(response => console.log(response.data))
      
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
