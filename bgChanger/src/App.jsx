import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className=' w-screen h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
            <button className='outline-none  bg-red-600 px-4 py-1 rounded-full text-white shadow-lg' 
            onClick={() => setColor("red")}>Red</button>
            <button className='outline-none  bg-green-600 px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("green")}>Green</button>
            <button className='outline-none  bg-white px-4 py-1 rounded-full text-black shadow-lg' 
            onClick={() => setColor("white")}>White</button>
            <button className='outline-none  bg-black px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("black")} >Black</button>
            <button className='outline-none  bg-yellow-400 px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("yellow")}>Yellow</button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
