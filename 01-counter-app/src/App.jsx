import { useState } from 'react'
import './App.css'

function App() {
 

  const [count,setCount]=useState(0)

  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1)
  }
  function reset(){
    setCount(0)
  }

  return (
    <div>
      <h1><b>Counter App</b></h1>
      <br />
      <p>Count : {count}</p>
      <br />
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  )

  
}

export default App
