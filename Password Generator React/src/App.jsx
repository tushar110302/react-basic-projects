import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("OiDbUVBo");

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if( numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%&()"

    for (let index = 1; index <= length; index++) {
      const randIdx = Math.floor(Math.random()*str.length);
      pass+=str[randIdx];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  const clickHandler = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=> {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <>
      <div className='bg-indigo-900 h-screen w-full flex justify-center items-center'>
          <div className='bg-indigo-800 w-[40%] h-2/4 flex flex-col justify-evenly items-center rounded-md text-white'>
            <h1 className='text-4xl text-center'>Password Generator</h1>
          
            <div>
                <input type='text' value={password} ref={passwordRef} className='outline-none w-80 py-2 px-3 rounded-xl text-violet-950' readOnly/>
                <button onClick={clickHandler} className='outline-none bg-black mx-3 px-3 py-2 rounded-2xl shrink-0'>Copy</button>
            </div>
            
            <div className='gap-x-3'>
              <label >
                Length: {length}
                <input type='range' min={5} max={25} value={length} className='cursor-pointer mx-2' onChange={(e) => setLength(e.target.value)}/>
              </label>
              
              <label className='cursor-pointer mx-3'>
                Number: 
                <input type='checkbox' defaultChecked={numberAllowed} className='mx-1' onChange={() => setNumberAllowed((prev) => !prev)}/>
              </label>
              
              <label className='cursor-pointer mx-3'>
                Special Character: 
                <input type='checkbox' defaultChecked={charAllowed} className='mx-1' onChange={() => setCharAllowed((prev) => !prev)}/>
              </label>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
