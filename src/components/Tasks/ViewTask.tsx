'use client'
import { useGetTask } from '@/api/tasks'
import { useParams } from 'next/navigation';
import React from 'react'
import {FadeLoader} from "react-spinners"

const ViewTask = () => {
    const {id} = useParams<{id:string|undefined}>();
    const {data:task,isLoading} = useGetTask(id);
    if(isLoading) return <FadeLoader color='teal' />
  return (
    <div className='bg-white p-5 rounded-lg space-y-2 shadow-lg'>
        <p className='text-xl font-semibold'>{task?.data?.title}</p>
        <p className='text-gray-800'>{task?.data?.description}</p>
        <div className='md:flex md:justify-between md:items-center space-y-2 md:space-y-2'>
            <div className='flex gap-2'>
                <p className={`
                  ${task?.data?.status === "completed" ?"bg-green-600":
                  task?.data?.status === "pending"?"bg-red-600":"bg-yellow-500"} 
                     p-2 rounded-lg text-white  capitalize`}>{task?.data?.status}</p>
                <p className={`
                  ${task?.data?.priority === "high" ? "bg-green-600" :
                   task?.data?.priority === "medium" ? "bg-yellow-500" : "bg-red-600"} 
                    p-2 rounded-lg text-white capitalize`}>{task?.data?.priority}</p>
            </div>
            <p>{new Date(task?.data?.dueDate).toDateString()}</p>
        </div>
    </div>
  )
}

export default ViewTask
