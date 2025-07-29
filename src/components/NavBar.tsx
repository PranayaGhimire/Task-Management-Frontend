'use client'
import Link from 'next/link'
import React from 'react'
import { useAuth } from '@/context/AuthProvider'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog'
import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
const NavBar = () => {
    const {token,setToken}=useAuth();
     const router = useRouter();
    const handleLogout = () => {
        Cookies.remove("token");
        setToken(null);
        toast.success('User Logged Out Successfully');
        router.push('/login');
    }
  return (
    <div className='flex justify-between px-5 items-center h-20 bg-gradient-to-tr from-teal-600 to-teal-800 text-white'>
        <div className='text-xl font-bold'>
            Task Manager App    
        </div>
        {!token ? <div className='space-x-5'>
            <Link href={`/register`} className='bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg cursor-pointer'>
                Register
            </Link>
            <Link href={`/login`} className='border-2 border-cyan-600 bg-white text-cyan-600 font-bold p-2 rounded-lg cursor-pointer'>
                Login
            </Link>
        </div> :
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button  className='bg-red-600 hover:bg-red-700 p-2 rounded-lg cursor-pointer'>
                    Logout
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle> Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. You will be logged out from your account.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout} 
                    className='bg-red-600 hover:bg-red-700 cursor-pointer'>Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      }
    </div>
  )
}

export default NavBar
