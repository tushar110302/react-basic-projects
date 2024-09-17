import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //         fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])
        
  const data = useLoaderData()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Github followers : {data.followers}</div>
  )
}

export default Github

export const githubData = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}