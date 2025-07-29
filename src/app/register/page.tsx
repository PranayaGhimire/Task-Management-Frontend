import React from 'react'

import RegisterForm from '@/components/Auth/RegisterForm';
const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className=' m-10 p-10  rounded-lg shadow-2xl'>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default RegisterPage
