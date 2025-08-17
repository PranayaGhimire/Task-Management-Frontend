'use client'
import { useLoginUser } from '@/api/auth'
import { ILogin } from '@/types/type';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthProvider';
import { Button } from '../ui/button';
const LoginForm = () => {
  const {setToken} = useAuth();
  const router = useRouter();
  const {mutate,isPending} = useLoginUser();
  const {register,handleSubmit} = useForm<ILogin>();
  const onSubmit = (data:ILogin) => {
    mutate(data,{
        onSuccess: (response) => {
            setToken(response.token);
            localStorage.setItem('email',response?.data?.email);
            console.log(response);
            toast.success(response.message);
            router.push('/');
        },
        onError: (error) => toast.error(error.message)
    })
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
        <h1 className='font-bold'>Please Enter Details Below To Login</h1>
        {/* Email */}
        <div className='flex flex-col gap-1 '>
            <label>Email</label>
            <input {...register('email')} type='email' placeholder='Enter email' 
                className='bg-zinc-300 border-2 border-zinc-500 p-2 rounded-lg outline-0' required/>
        </div>
        {/* Password */}
        <div className='flex flex-col gap-1 '>
            <label>Password</label>
                <input {...register('password')} type='password' placeholder='Enter password' 
                    className='bg-zinc-300 border-2 border-zinc-500 p-2 rounded-lg outline-0' required/>
        </div>
        <Button disabled={isPending}
         className=' bg-cyan-600 hover:bg-cyan-700  cursor-pointer'>{isPending ? 'Submitting' : 'Submit'}</Button>
         <p>Don't Have An Account ? <Link href={`/register`} className='text-zinc-500 font-semibold'>Register Here</Link></p>
    </form>
  )
}

export default LoginForm
