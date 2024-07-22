import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logOutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block rounded-full bg-orange-500 px-5 py-3 text-sm font-medium
        text-white transition hover:bg-orange-600'>
        Logout
    </button>
  )
}

export default LogoutBtn