"use client"
import { addUser } from '@/app/redux/slice'
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Adduser() {
  const [name,setname] = useState("");
  const dispatch = useDispatch();
  const userDispatch=()=>{
    dispatch(addUser(name))
    setname("")
  }
  return (
    <div className='add-user'>
        <h3>Add User</h3>
        <input 
        type="text" 
        value={name}
        onChange={(e)=>setname(e.target.value)} 
        className='add-user-input' 
        placeholder="Add New User" />
        <button onClick={userDispatch} className='add-user-btn'>Add User</button>
        <Link href="/removeuser" className='remove-user-btn'>user Remove list</Link>
    </div>
  )
}

export default Adduser