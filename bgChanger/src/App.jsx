
import  { useState } from 'react'
function App() {
  const [bgColor, setBgColor] = useState('olive')
  

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:bgColor}}>
      <div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
      <button
      onClick={()=>setBgColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"red"}}>red</button>
      <button
       onClick={()=>setBgColor("blue")}
      className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
      <button
       onClick={()=>setBgColor("yellow")}
      className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>
      <button
       onClick={()=>setBgColor("brown")}
      className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"brown"}}>brown</button>
      <button
       onClick={()=>setBgColor("green")}
      className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}}>green</button>
      <button
       onClick={()=>setBgColor("black")}
      className='outline-none px-4 py-1 rounded-full shadow-lg font-bold' style={{backgroundColor:"black"}}>black</button>
      <button
       onClick={()=>setBgColor("blue")}
      className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
      <button
       onClick={()=>setBgColor("white")}
      className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"white"}}>white</button>
      </div>
      </div>

    </div>
  )
}

export default App
