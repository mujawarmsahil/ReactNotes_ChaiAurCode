import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let addValue = () => {
    if(count < 20)
    {
      setCount(count+1);
    }
  }

  let removeValue = () => {
    if(count > 0)
    {
      setCount(count-1);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <div className="container">
        <button type="button" onClick={addValue}>Increment Counter{count}</button>
        <button type="button" onClick={removeValue}>Decrease Counter{count}</button>
      </div>
    </>
  )
}

export default App
