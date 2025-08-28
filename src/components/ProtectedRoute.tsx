"use client"
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
    const {token} = useAuth();
    const router = useRouter();
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        if(!token)
            router.push("/login");
        else
            setLoading(false);
    },[]);
    if(loading) return <div className='min-h-screen flex justify-center items-center'><FadeLoader color='teal'/></div>
  return (
    <>
     {children} 
    </>
  )
}

export default ProtectedRoute
