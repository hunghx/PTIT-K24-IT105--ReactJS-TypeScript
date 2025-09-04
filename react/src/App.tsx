import { useState } from 'react'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  console.log("render APP");
  

  return (
    <>
      <div>
        <h1>Hello React
        </h1>
      </div>
    
    </>
  )
}

export default App
