'use client'
import { useAuth } from '@/context/AuthProvider'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  const {token} = useAuth();
  return (
    <div className=' p-5   text-center h-screen flex flex-col gap-3 justify-center items-center'>
        <h1 className='text-xl md:text-2xl text-cyan-800 font-bold'>Welcome To Task Management App</h1>
        
        {token ? <Link href={`/tasks`} className='bg-cyan-500 text-white p-2 rounded-lg  cursor-pointer hover:bg-cyan-600'>
            View Tasks
        </Link> : 
        <Link href={`/login`} className='w-18 bg-cyan-500 text-white p-2 rounded-lg  cursor-pointer hover:bg-cyan-600'>
            Login
        </Link>}
    </div>
  )
}

export default HomePage
