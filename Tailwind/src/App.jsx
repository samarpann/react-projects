import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
 
  return (
    <>
    <UserContextProvider>
      <h1>
        hello i am samarpan
         </h1>
    </UserContextProvider>
    </>
  )
}



export default App
