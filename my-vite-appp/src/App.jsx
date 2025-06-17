import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './Store'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store ={store} >

<div>
         <Counter/>
</div>
     </Provider>
    </>
  )
}

export default App
