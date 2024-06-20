import { useState } from 'react'
import './App.css'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='text-white bg-zinc-800 text-3xl p-4'>
        <h1>Learn About Redux Toolkit</h1>
      </div>
      <Todo />
    </div>
  )
}

export default App
