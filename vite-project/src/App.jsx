import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [color,setColor]=useState('olive')
  return (
    <div className='w-full h-screen  duration-200'  style={{backgroundColor:color}}>
     <div className='flex    absolute bottom-0 w-full  flex-wrap items-center justify-center    px-3 py-3'>
           <div className='flex item-  justify-center px-3 py-2 gap-3 shadow-xl  bg-white rounded-lg'>
                 <button 
                 onClick={()=>{setColor('red')}}
                 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>
                  red
                 </button>

                 <button
                   onClick={()=>{setColor('yellow')}}
                 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'yellow'}}>
                  yellow
                 </button>

                 <button
                   onClick={()=>{setColor('orange')}}
                 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>
                  orange
                 </button>

               
           </div>
     </div>
    </div>
  );
}



export default App
