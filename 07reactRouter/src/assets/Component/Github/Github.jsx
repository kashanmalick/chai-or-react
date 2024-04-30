import {React,useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kashanmalick')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })    
    //   }, [])
    
  return (
    <div className='flex flex-col items-center h-[30rem] m-4 justify-evenly  bg-gray-600 text-white
    p-4 text-3xl'>Github Followers : {data.followers} 
    <img className=' rounded-full' src = {data.avatar_url} alt='User Image' width={250}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
 const response = await fetch('https://api.github.com/users/kashanmalick')
 return response.json()
}