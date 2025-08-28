'use client'
import { useDeleteTask, useGetTasks } from '@/api/tasks'
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { FadeLoader } from 'react-spinners';
const ViewTasks = () => {
  const queryClient = useQueryClient();
  const {data:tasks,isLoading} = useGetTasks();
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
  if(isLoading) return <FadeLoader color='teal' className='mt-5'/>
  return (
     <div className=' bg-gray-200  border-t-2 border-l-2 border-r-2 border-zinc-500 mt-5  rounded-lg overflow-x-auto'>
        <table className='w-full'>
            <thead>
                <tr className='h-16 border-b-2 border-zinc-500 bg-gray-300'>
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
                    <tr key={task._id} className='h-16 border-b-2 border-zinc-500'>
                        <td className='text-center'>{index+1}</td>
                        <td className='text-center'>{task.title}</td>
                        <td className='text-center'>{task.description}</td>
                        <td className='text-center'>{task.status}</td>
                        <td className='text-center'>{task.priority}</td>
                        <td className='text-center'>{new Date(task.dueDate).toDateString()}</td>
                        <td>
                            <div className='flex justify-center items-center'>
                                <div className='flex gap-2 text-white'>
                                    <Link href={`/tasks/view/${task._id}`}
                                    className='flex gap-1 items-center bg-gray-500 hover:bg-gray-600 cursor-pointer p-2 rounded-lg'>
                                        <FaEye />
                                        <p>View</p>
                                    </Link>
                                    <Link href={`/tasks/edit/${task._id}`}  
                                        className='flex gap-1 items-center bg-cyan-600 hover:bg-cyan-700 cursor-pointer p-2 rounded-lg'>
                                            <FaRegEdit />
                                            <p>Edit</p>
                                    </Link>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <button  
                                                className='flex gap-1 items-center bg-red-600 hover:bg-red-700 cursor-pointer p-2 rounded-lg'>
                                                    <MdDelete />
                                                    <p>Delete</p>
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your
                                                        task and remove your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
                                                <AlertDialogAction 
                                                    className='bg-red-600 hover:bg-red-700 cursor-pointer' 
                                                    onClick={() => handleDeleteTask(task._id)}>
                                                        Confirm
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                        
                                </div>
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
