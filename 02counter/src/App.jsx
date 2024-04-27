import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {

let [counter,SetCounter] = useState(15)

const addValue = () => {
  if(counter < 20 ){
    SetCounter(counter + 1)
  }else{
    alert("Yo can not go above the Twenty")
  }
  
}
const minusValue = () =>{
  if(counter > 0){
    SetCounter(counter -1)
  }else{
    alert("You can not go below the Zero")
  }
}
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /> <br />
      <button onClick={minusValue}>Minus Value {counter}</button>
      <br /> <br />
      <footer>This is Footer {counter}</footer>
    </>
  )
}

export default App