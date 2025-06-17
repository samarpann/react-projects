import React, { useEffect, useState } from 'react'

const Github = () => {
const [data,setdata]=useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/samarpan')
      .then(response=>response.json())
      .then(data=>{console.log(data);
        setdata(data)
     } )
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4text-3xl'>
        Github followers:{data.followers}
        <img src={data.avatar_url} alt="git picture"  width={300}/>
        </div>
      
  )
}

export default Github