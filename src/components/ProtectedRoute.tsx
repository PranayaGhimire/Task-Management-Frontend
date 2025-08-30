"use client"
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
    const {token, loading} = useAuth();
    const router = useRouter();
    useEffect(() => {
        if(!loading && !token)
            router.push("/login");
    },[token,loading,router]);
    if(loading) return <div className='min-h-screen flex justify-center items-center'><FadeLoader color='teal'/></div>
  return (
    <>
     {children} 
    </>
  )
}

export default ProtectedRoute
