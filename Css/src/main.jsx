import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx/Home'
import About from './Components/About.jsx/About.jsx'
import Contact from './Components/Contact.jsx/Contact.jsx'
import User from './Components/Users/User.jsx'
import Github from './Components/Github/Github.jsx'



// const router = createBrowserRouter( [
//   {
//     path:"/",
//     element:<Layout/>,
//     children :[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:"/About",
//         element:<About/>
//       },

//       {
//         path:"/Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/user/:Userid' element={<User/>}/>   //your dataa would be same only the layout wouuld be diffrent
<Route path='Github' element={<Github/>}/>   //your dataa would be same only the layout wouuld be diffrent
<Route path='Github' element={<Github/>}/>   //your dataa would be same only the layout wouuld be diffrent
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
