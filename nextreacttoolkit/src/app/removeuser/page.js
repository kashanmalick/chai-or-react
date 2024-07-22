"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/app/redux/slice'
import Link from 'next/link'

function page() {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();
  return (
    <div>
        <h3>User Remove List</h3>
        {
        userData.map((item) => {
          return (
            <div className="user-item">
              <span>{item.name}</span>
              <button className="delete-btn" onClick={() => dispatch(removeUser(item.id))}>Remove</button>
              
            </div>
          )
        })
      }
      <Link href="/">Back To Main</Link>
    </div>
  )
}

export default page