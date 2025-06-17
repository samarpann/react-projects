// 1

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
 const [themeMode, setThemeMode] = useState("light");  //why i used this because i want to change the theme of the app  u have the method but its doesnot change the theme of the app becuase the theme is not changing
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  // actual change in theme 
   useEffect(() => {
     document.querySelector('html').classList.remove('dark','light')
     document.querySelector('html').classList.add(themeMode)
    //  document.querySelector('html').classList.remove('light')
   }, [themeMode])
   
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>  
    <div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton/>
                      </div>

                      <div className="w-full max-w-sm mx-auto">
                     <Card/>
                      </div>
                  </div>
              </div>
              </ThemeProvider>
    );

};

export default App;
