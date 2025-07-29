import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className=' p-5 text-2xl text-center h-screen flex flex-col gap-3 justify-center items-center'>
        <h1>Welcome To Task Management App</h1>
        <Link href={`/tasks`} className='bg-cyan-500 text-white p-2 rounded-lg  cursor-pointer hover:bg-cyan-600'>View Tasks</Link>
    </div>
  )
}

export default HomePage
