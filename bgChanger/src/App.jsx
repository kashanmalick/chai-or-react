import React from 'react'
import { useState } from 'react'


function App() {
  const [color,setColor] = useState("Yellow")
  return (
    <div className='w-full h-screen duration-200 flex justify-center items-center' style={{backgroundColor:color}}>
        <h1 className='text-3xl text-white hover:text-5xl'>Change the Background Color When Clicking the Button</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl'>
        <button onClick={() => setColor("Red")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Red"}}>Red</button>
        <button onClick={() => setColor("Pink")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Pink"}}>Pink</button>
        <button onClick={() => setColor("Yellow")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={() => setColor("Blue")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={() => setColor("Grey")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Grey"}}>Grey</button>
        <button onClick={() => setColor("Purple")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Purple"}}>Purple</button>
        <button onClick={() => setColor("Black")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Black"}}>Black</button>
        <button onClick={() => setColor("Orange")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Orange"}}>Orange</button>
        <button onClick={() => setColor("Green")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={() => setColor("Crimson")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Crimson"}}>Crimson</button>
        <button onClick={() => setColor("Chartreuse")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Chartreuse"}}>Chartreuse</button>
        <button onClick={() => setColor("Violet")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Violet"}}>Violet</button>
        <button onClick={() => setColor("Coral")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Coral"}}>Coral</button>
        <button onClick={() => setColor("Teal")} className='outline-none px-4  py-1 rounded-lg text-white shadow-lg' style={{backgroundColor:"Teal"}}>Teal</button>
        </div>
      </div>

    </div>
  )
}

export default App