// 3

import React ,{useState,useContext}from 'react'
import UserContext from '../contex1t/UserContext'



const Login = () => {

    const [userName,setUserName]=useState()
    const [password, setpassword] = useState('')


    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
      e.preventDefault()
        setUser(userName,password)
    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" placeholder='username'  value={userName} onChange={(e)=>setUserName(e.target.value)}/>    
        <input type="text" placeholder='passowrd'  value={password}  onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login


// agar koi bhi event hota hai to serusername ko call kro or usme event pass kr r fo 