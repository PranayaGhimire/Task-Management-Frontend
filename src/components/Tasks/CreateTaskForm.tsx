'use client'
import { useCreateTask } from '@/api/tasks'
import { ITasks } from '@/types/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const CreateTaskForm = () => {
  const router = useRouter();
  const {mutate,isPending} = useCreateTask();
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
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 p-5 bg-white rounded-lg'>
        {/* Title & Description */}
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Title */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Title" className='font-bold'>Title <span className='text-red-600 text-xl'>*</span></label> 
                <input {...register('title',{required:true})} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Title'/>
            </div>
            {/* Description */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Description" className='font-bold'>Description</label>
                <input {...register('description')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Description'/>
            </div>
        </div>
        {/* Status & Priority */}
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Status */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Status" className='font-bold'>Status <span className='text-red-600 text-xl'>*</span></label>
                <select {...register('status',{required:true})} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0'>
                    <option value="">Select Task Status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            {/* Priority */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Priority" className='font-bold'>Priority <span className='text-red-600 text-xl'>*</span></label> 
                <select {...register('priority',{required:true})} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0'>
                    <option value="">Select Task Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
        
        {/* Due Date */}
        <div className='md:w-1/2 flex flex-col gap-1'>
            <label htmlFor="Due Date" className='font-bold'>Due Date</label>
            <input {...register('dueDate')} type='date' className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Description'/>
        </div>
        <p className='font-semibold'>All marked with <span className='text-red-600 text-xl'>*</span> are required fields</p>
        <button disabled={isPending} 
        className='bg-cyan-600 hover:bg-cyan-700 cursor-pointer p-2 rounded-lg text-white'>{isPending ? 'Creating...' : 'Create Task'}</button>
    </form>
  )
}

export default CreateTaskForm
