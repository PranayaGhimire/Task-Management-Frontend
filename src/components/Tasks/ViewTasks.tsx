'use client'
import { useDeleteTask, useGetTasks } from '@/api/tasks'
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';

const ViewTasks = () => {
  const queryClient = useQueryClient();
  const {data:tasks} = useGetTasks();
  console.log(tasks);
  const {mutate} = useDeleteTask();
  const handleDeleteTask = (id:string) => {
    mutate(id,{
        onSuccess: (response) => {
            toast.success(response.message);
            queryClient.invalidateQueries({queryKey:['tasks']});
        } 
    })
  }
  return (
     <div className=' bg-zinc-300 border-2 border-zinc-500 mt-5  rounded-lg overflow-x-auto'>
        <table className='w-full'>
            <thead>
                <tr className='h-16 border-b-2 border-zinc-500'>
                    <th>S.N.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks?.data?.map(
                    (task:{_id:string,title:string,description:string,status:string,priority:string,dueDate:Date},index:number) => 
                    <tr key={task._id} className='h-16'>
                        <td className='text-center'>{index+1}</td>
                        <td className='text-center'>{task.title}</td>
                        <td className='text-center'>{task.description}</td>
                        <td className='text-center'>{task.status}</td>
                        <td className='text-center'>{task.priority}</td>
                        <td>{new Date(task.dueDate).toDateString()}</td>
                        <td>
                            <div className='flex gap-5 text-white'>
                                <Link href={`/tasks/edit/${task._id}`}  
                                className=' bg-cyan-600 hover:bg-cyan-700 cursor-pointer p-2 rounded-lg'>Edit</Link>
                                <button onClick={() => handleDeleteTask(task._id)} className='bg-red-600 hover:bg-red-700 cursor-pointer p-2 rounded-lg'>Delete</button>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ViewTasks
