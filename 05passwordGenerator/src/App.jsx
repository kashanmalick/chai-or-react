import { useState,useCallback,useEffect,useRef } from 'react'

function App() {

  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("");
  
  // Use Ref Hook
  const passwordRef  = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*+-=-_"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      console.log("Index value : " + i+" After Floor Value " +char);
      pass += str.charAt(char)
      console.log(pass);
    }
    setPassword(pass)
  },
  [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,26);
    // passwordRef.current?.setSelectionRange(0,2)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
        <h1 className='text-white text-center text-2xl'> Password Generator</h1>
          <div className=' flex shadow rounded-lg overflow-hidden mb-4 mt-2'>
              <input 
              type='Text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
              />
              <button 
                onClick={copyPasswordToClip}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                Copy
              </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input 
              type="range"
              min={6}
              max={25}
              value={length}
              className='cursor-pointer'
              onChange={(x)=>{setLength(x.target.value)}}
            />
            <label>Length: {length}</label>
            <div className='flex items-center gap-x-1'>
                <input 
                  type='checkbox'
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor='numberInput'> Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input 
                  type='checkbox'
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor='charInput'> Character</label>
            </div>
          </div>
      </div>

    </>
  )
}

export default App
 