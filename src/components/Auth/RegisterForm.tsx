'use client'
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRegisterUser } from '@/api/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { IRegister } from '@/types/type';
import { Button } from '../ui/button';

const RegisterForm = () => {
  const router = useRouter();
  const {mutate,isPending} = useRegisterUser();
  const {register,handleSubmit} = useForm<IRegister>();
  const onSubmit = (data:IRegister) => {
    mutate(data, {
        onSuccess: (response) =>{ 
            toast.success(response.message);
            router.push('/login'); 
        },
        onError: (error) => toast.error(error.message)
    });
  }  
  return (
   <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
        <h1 className='font-bold'>Please Enter Details Below To Register</h1>
        {/* Username */}
        <div className='flex flex-col gap-1 '>
            <label>Username</label>
            <input {...register('username')} placeholder='Enter username' 
                className='bg-zinc-300 border-2 border-zinc-500 p-2 rounded-lg outline-0'/>
        </div>
        {/* Email */}
        <div className='flex flex-col gap-1 '>
            <label>Email</label>
            <input {...register('email')} type='email' placeholder='Enter email' 
                className='bg-zinc-300 border-2 border-zinc-500 p-2 rounded-lg outline-0'/>
        </div>
        {/* Password */}
        <div className='flex flex-col gap-1 '>
            <label>Password</label>
            <input {...register('password')} type='password' placeholder='Enter password' 
                className='bg-zinc-300 border-2 border-zinc-500 p-2 rounded-lg outline-0'/>
        </div>
        <Button disabled={isPending} className=' bg-cyan-600 hover:bg-cyan-700 cursor-pointer'>{isPending ?'Submitting...':'Submit'}</Button>
        <p>Already Registered ? <Link href={`/login`} className='text-zinc-500 font-semibold'>Login Here</Link></p>
    </form>
  )
}

export default RegisterForm
