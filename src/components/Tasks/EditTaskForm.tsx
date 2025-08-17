'use client'
import { useGetTask, useUpdateTask } from '@/api/tasks'
import { ITasks } from '@/types/type'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '../ui/button'

const EditTaskForm = () => {
  const {id} = useParams<{id:string | undefined}>();
  const {data:task} = useGetTask(id);
  console.log(task);
  
  const router = useRouter();
  const {mutate,isPending} = useUpdateTask();
  const {register,handleSubmit,reset} = useForm<ITasks>();
  const onSubmit = (data:ITasks) => {
      mutate({
        id,
        data
      },{
        onSuccess:(response) => {
            toast.success(response.message);
            router.push('/tasks');
        },
        onError: (error) => toast.error(error.message) 
      });
  }
  useEffect(() => {
    reset({
        title:task?.data?.title,
        description:task?.data?.description,
        status:task?.data?.status,
        priority:task?.data?.priority,
        dueDate:task?.data?.dueDate.slice(0,10)
    })
  },[reset,task]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 bg-white p-5 rounded-lg shadow-lg'>
        {/* Title & Description */}
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Title */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Title" className='font-bold'>Title</label>
                <input {...register('title')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Title'/>
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
                <label htmlFor="Status" className='font-bold'>Status</label>
                <select {...register('status')} className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0'>
                    <option value="">Select Task Status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            {/* Priority */}
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="Priority" className='font-bold'>Priority</label>
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
            <label htmlFor="Due Date" className='font-bold'>Due Date</label>
            <input {...register('dueDate')} type='date' className='bg-zinc-300 border-2 border-zinc-500 p-3 rounded-lg outline-0' placeholder='Enter Task Description'/>
        </div>
        <Button disabled={isPending} 
        className='bg-cyan-600 hover:bg-cyan-700 cursor-pointer'>{isPending ? 'Editing...' : 'Edit Task'}</Button>
    </form>
  )
}

export default EditTaskForm
