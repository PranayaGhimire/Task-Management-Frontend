import ViewTasks from '@/components/Tasks/ViewTasks';
import Link from 'next/link';
import React from 'react'

const TasksPage = () => {  
  return (
    <div className='p-10 space-y-5 min-h-screen'>
        <h1 className='text-2xl font-bold text-cyan-800'>All Tasks</h1>
        <div className='p-8 bg-white rounded-lg shadow-lg'>
            <Link href={`/tasks/create`} className='bg-cyan-600 hover:bg-cyan-700 p-2 cursor-pointer rounded-lg text-white'>Create Task</Link>
            <ViewTasks/>
        </div>
    </div>
  )
}

export default TasksPage
