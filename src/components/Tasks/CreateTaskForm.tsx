'use client'
import { useCreateTask } from '@/api/tasks'
import { ITasks } from '@/types/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const CreateTaskForm = () => {
  const router = useRouter();
  const {mutate} = useCreateTask();
  const {register,handleSubmit} = useForm<ITasks>();
  const onSubmit = (data:ITasks) => {
      mutate(data,{
        onSuccess:(response) => {
            toast.success(response.message);
            router.push('/tasks');
        },
        onError: (error) => toast.error(error.message) 
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* Title & Description */}
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Title */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Title">Title</label>
                <input {...register('title')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Title'/>
            </div>
            {/* Description */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Description">Description</label>
                <input {...register('description')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Description'/>
            </div>
        </div>
        {/* Status & Priority */}
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Status */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Status">Status</label>
                <select {...register('status')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0'>
                    <option value="">Select Task Status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            {/* Priority */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Priority">Priority</label>
                <select {...register('priority')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0'>
                    <option value="">Select Task Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
        
        {/* Due Date */}
        <div className='md:w-1/2 flex flex-col gap-1'>
            <label htmlFor="Due Date">Due Date</label>
            <input {...register('dueDate')} type='date' className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Description'/>
        </div>
        <button className='bg-cyan-600 hover:bg-cyan-700 cursor-pointer p-2 rounded-lg text-white'>Create Task</button>
    </form>
  )
}

export default CreateTaskForm
