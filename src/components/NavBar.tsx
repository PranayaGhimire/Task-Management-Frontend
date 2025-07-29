'use client'
import Link from 'next/link'
import React from 'react'
import { useAuth } from '@/context/AuthProvider'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
const NavBar = () => {
    const {token,setToken}=useAuth();
     const router = useRouter();
    const handleLogout = () => {
        Cookies.remove("token");
        setToken(null);
        toast.success('User Logged Out Successfully');
        router.push('/login');
    }
  return (
    <div className='flex justify-between px-5 items-center h-20 bg-gradient-to-tr from-teal-600 to-teal-800 text-white'>
        <div>
            Task Manager App    
        </div>
        {!token ? <div className='space-x-5'>
            <Link href={`/register`} className='bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg cursor-pointer'>
                Register
            </Link>
            <Link href={`/login`} className='border-2 border-cyan-600 bg-white text-cyan-600 font-bold p-2 rounded-lg cursor-pointer'>
                Login
            </Link>
        </div> :
        <button onClick={handleLogout} className='bg-red-500 hover:bg-red-600 p-2 rounded-lg cursor-pointer'>
            Logout
        </button>}
    </div>
  )
}

export default NavBar
